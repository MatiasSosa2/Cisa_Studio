import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICES: Record<string, { title: string; time: string }> = {
  landing: { title: "Landing Page", time: "5-7 días" },
  corp: { title: "Sitio Corporativo", time: "15-20 días" },
  ecom: { title: "E-commerce", time: "25-30 días" },
  ia: { title: "Business IA", time: "Según alcance" },
};

const BUDGETS: Record<string, { label: string; range: string }> = {
  basic: { label: "Proyecto Inicial", range: "Funcionalidades básicas" },
  pro: { label: "Proyecto Profesional", range: "Funcionalidades avanzadas" },
  premium: { label: "Proyecto Premium", range: "Solución completa y escalable" },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, budget, message } = body;

    // Validación básica
    if (!name || !email || !service || !budget) {
      return NextResponse.json(
        { error: "Faltan campos requeridos." },
        { status: 400 }
      );
    }

    // Validación de email básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El email no tiene un formato válido." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada.");
      return NextResponse.json(
        { error: "Servicio de email no configurado." },
        { status: 500 }
      );
    }

    const selectedService = SERVICES[service];
    const selectedBudget = BUDGETS[budget];

    const toEmail = process.env.CONTACT_EMAIL ?? "tu@email.com";

    const { error } = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>", // Cambiá esto por tu dominio una vez verificado
      to: [toEmail],
      replyTo: email,
      subject: `Nueva consulta de ${name} — ${selectedService?.title ?? service}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva consulta</title>
        </head>
        <body style="margin:0; padding:0; background-color:#0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#161616; border-radius:16px; border:1px solid #2a2a2a; overflow:hidden; max-width:600px; width:100%;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%); padding: 32px 40px;">
                      <p style="margin:0; color:rgba(255,255,255,0.7); font-size:11px; letter-spacing:0.3em; text-transform:uppercase; font-weight:500;">Nueva consulta recibida</p>
                      <h1 style="margin:8px 0 0; color:#ffffff; font-size:26px; font-weight:700; line-height:1.2;">
                        ${name}
                      </h1>
                      <p style="margin:6px 0 0; color:rgba(255,255,255,0.8); font-size:14px;">${email}</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding: 32px 40px;">
                      
                      <!-- Grid de datos -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom: 24px; padding-right: 12px; width:50%; vertical-align:top;">
                            <p style="margin:0 0 6px; color:#3b82f6; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; font-weight:600;">Servicio solicitado</p>
                            <p style="margin:0; color:#ffffff; font-size:16px; font-weight:700;">${selectedService?.title ?? service}</p>
                            <p style="margin:4px 0 0; color:#71717a; font-size:12px;">Tiempo estimado: ${selectedService?.time ?? "—"}</p>
                          </td>
                          <td style="padding-bottom: 24px; padding-left: 12px; width:50%; vertical-align:top;">
                            <p style="margin:0 0 6px; color:#3b82f6; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; font-weight:600;">Alcance del proyecto</p>
                            <p style="margin:0; color:#ffffff; font-size:16px; font-weight:700;">${selectedBudget?.label ?? budget}</p>
                            <p style="margin:4px 0 0; color:#71717a; font-size:12px;">${selectedBudget?.range ?? "—"}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Divider -->
                      <div style="border-top: 1px solid #2a2a2a; margin: 8px 0 24px;"></div>

                      <!-- Mensaje adicional -->
                      ${
                        message
                          ? `
                        <p style="margin:0 0 10px; color:#3b82f6; font-size:10px; letter-spacing:0.3em; text-transform:uppercase; font-weight:600;">Mensaje adicional</p>
                        <div style="background-color:#1f1f1f; border:1px solid #2a2a2a; border-left: 3px solid #3b82f6; border-radius:8px; padding:16px 20px;">
                          <p style="margin:0; color:#d4d4d4; font-size:14px; line-height:1.7; white-space:pre-wrap;">${message}</p>
                        </div>`
                          : `<p style="color:#71717a; font-size:13px; font-style:italic;">El cliente no agregó un mensaje adicional.</p>`
                      }

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 40px 28px; border-top: 1px solid #2a2a2a;">
                      <p style="margin:0; color:#3f3f46; font-size:11px; text-align:center;">
                        Este mail fue generado automáticamente desde el formulario de contacto de tu sitio web.
                        Podés responderle directamente a ${email}.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mail. Intentá de nuevo más tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error en /api/contact:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
