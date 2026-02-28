import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `Sos el asistente virtual de un estudio de desarrollo web y diseño digital en Argentina. Tu único objetivo es convertir al visitante en un cliente.

REGLAS ESTRICTAS:
- Máximo 2 oraciones por respuesta. Sin excepciones.
- Siempre terminá con una propuesta concreta o una pregunta que lleve a la acción. Ejemplos: "¿Arrancamos con una consulta gratis?", "¿Te cuento cómo lo haríamos para tu negocio?", "¿Querés que te armemos una propuesta?"
- Usá voseo argentino (tenés, podés, sabés, vos).
- Nunca des precios. Si preguntan, decí que depende del proyecto y proponé una consulta.
- Nada de listas ni bullets. Solo texto directo y conversacional.
- Si el usuario muestra interés, empujá hacia el formulario de contacto o WhatsApp de inmediato.

SERVICIOS: Landing pages, sitios corporativos, e-commerce, chatbots e IA para negocios.
DIFERENCIAL: Código 100% personalizado, sin plantillas, con soporte incluido.
CONTACTO: Formulario en la página o WhatsApp directo.`;


export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY no está configurada");
      return NextResponse.json(
        { error: "API Key no configurada" },
        { status: 500 }
      );
    }

    // Construir los mensajes para Groq (formato OpenAI)
    const groqMessages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...messages.map((msg: any) => ({
        role: msg.isBot ? "assistant" : "user",
        content: msg.text,
      })),
    ];

    // Llamar a la API de Groq
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: groqMessages,
        temperature: 0.6,
        max_tokens: 120,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error de Groq:", errorData);
      return NextResponse.json(
        { error: `Error de la API: ${errorData.error?.message || 'Error desconocido'}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "No pude generar una respuesta";

    return NextResponse.json({ response: aiResponse });
  } catch (error: any) {
    console.error("Error en chat:", error);
    console.error("Detalles del error:", error.message);
    return NextResponse.json(
      { error: error.message || "Error al procesar el mensaje" },
      { status: 500 }
    );
  }
}
