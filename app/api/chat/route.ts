import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `Sos el asistente virtual de Cisa Studio, un estudio de desarrollo web y diseño digital en Argentina. Tu objetivo es informar sobre los servicios y convertir al visitante en un cliente.

REGLAS ESTRICTAS:
- Máximo 3 oraciones por respuesta. Sin excepciones.
- Usá voseo argentino (tenés, podés, sabés, vos).
- NUNCA des precios ni rangos de precios. Si preguntan por precios o costos, decí que los precios se consultan por WhatsApp porque cada proyecto es personalizado y redirigí al WhatsApp: https://wa.me/5492215585466
- Nada de listas ni bullets. Solo texto directo y conversacional.
- Siempre terminá con una pregunta o propuesta que invite a la acción (consultar por WhatsApp o completar el formulario).
- Si el usuario muestra interés en un servicio, explicá brevemente qué incluye y luego redirigí a WhatsApp para hablar de precios.

SERVICIOS QUE OFRECEMOS:

1. Landing Page: Página de una sola sección diseñada para convertir visitantes en clientes. Ideal para presentar un producto, servicio o campaña. Incluye diseño moderno, adaptado a celular, formulario de contacto y optimización de velocidad.

2. Sitio Corporativo: Sitio web completo para empresas o profesionales. Varias secciones (quiénes somos, servicios, proyectos, contacto), diseño personalizado, integración con redes sociales y posicionamiento SEO básico.

3. E-commerce / Tienda Online: Tienda online con catálogo de productos, carrito de compras, métodos de pago y panel de administración. Ideal para vender productos o servicios de forma digital.

4. Chatbot e IA para negocios: Asistente virtual con inteligencia artificial integrado al sitio web o WhatsApp del negocio. Responde preguntas frecuentes, captura leads y atiende clientes las 24hs automáticamente.

DIFERENCIAL: Código 100% personalizado sin plantillas, diseño único para cada cliente, soporte post-lanzamiento incluido y entrega en los tiempos acordados.

CONTACTO: WhatsApp directo https://wa.me/5492215585466 o formulario en la página para consultar precios y disponibilidad.`;

function getFallbackResponse() {
  return "Estoy disponible para ayudarte con tu web o chatbot. Si querés, te dejo una propuesta breve y la seguimos por WhatsApp.";
}


export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      console.warn("GROQ_API_KEY no está configurada. Se devuelve respuesta fallback.");
      return NextResponse.json({ response: getFallbackResponse(), fallback: true });
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
      return NextResponse.json({ response: getFallbackResponse(), fallback: true });
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "No pude generar una respuesta";

    return NextResponse.json({ response: aiResponse });
  } catch (error: any) {
    console.error("Error en chat:", error);
    console.error("Detalles del error:", error.message);
    return NextResponse.json({ response: getFallbackResponse(), fallback: true });
  }
}
