"use client";
import { useState } from "react";

/* ============================================================
   VERSIÓN "ANTES" — Como si lo hubiera hecho un desarrollador
   malo pero actual. Mismo contenido, menor calidad visual.
   ============================================================ */

export default function AntesDePage() {
  const [openService, setOpenService] = useState<number | null>(null);
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#111827", color: "#e5e7eb", margin: 0, padding: 0 }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        background: "#1f2937",
        padding: "14px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #374151",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 38, height: 38,
            background: "#3b82f6",
            borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: "bold", color: "white", fontSize: 14,
          }}>CS</div>
          <span style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>Cisa Studio</span>
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {["Inicio", "Servicios", "Proyectos", "Precios", "Contacto"].map((item) => (
            <a key={item} href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 14 }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #1e40af 50%, #312e81 100%)",
        padding: "100px 24px",
        textAlign: "center",
      }}>
        <p style={{ color: "#93c5fd", fontSize: 13, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
          Diseño &amp; Desarrollo Web
        </p>
        <h1 style={{ fontSize: 52, fontWeight: "bold", color: "white", marginBottom: 16, lineHeight: 1.2 }}>
          Cisa Studio.
        </h1>
        <p style={{ fontSize: 18, color: "#cbd5e1", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Diseño y desarrollo de soluciones digitales.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contacto" style={{
            background: "#3b82f6",
            color: "white",
            padding: "12px 28px",
            borderRadius: 6,
            fontWeight: "bold",
            fontSize: 15,
            textDecoration: "none",
            display: "inline-block",
          }}>
            Solicitar Cotización
          </a>
          <a href="#servicios" style={{
            background: "transparent",
            color: "white",
            padding: "12px 28px",
            borderRadius: 6,
            fontWeight: "bold",
            fontSize: 15,
            textDecoration: "none",
            display: "inline-block",
            border: "2px solid rgba(255,255,255,0.4)",
          }}>
            Ver Servicios
          </a>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" style={{ background: "#111827", padding: "60px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: "bold", color: "white", marginBottom: 8 }}>
            Nuestras Soluciones
          </h2>
          <p style={{ color: "#6b7280", marginBottom: 40, fontSize: 15 }}>
            Desarrollo web moderno con inteligencia artificial integrada
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              {
                n: "01", title: "Landing Pages",
                items: ["Diseño de alta conversión", "Optimización SEO", "Formularios de contacto", "Integración de Redes Sociales", "Adaptable a cualquier pantalla", "Entrega en menos de 1 semana"]
              },
              {
                n: "02", title: "Sitios Corporativos",
                items: ["Hasta 8 páginas personalizadas", "Blog integrado", "Optimización de velocidad y rendimiento", "SEO avanzado", "Integración redes sociales", "Soporte 3 meses incluido"]
              },
              {
                n: "03", title: "E-commerce",
                items: ["Tienda online completa", "Catálogo ilimitado de productos", "Pasarela de pagos", "Sistema de inventario", "Carrito de compras", "Panel administrador", "Soporte 6 meses"]
              },
              {
                n: "04", title: "Integración con IA",
                items: ["Chatbots conversacionales 24/7", "WhatsApp Business automatizado", "Conexión con Google Sheets/Excel", "Cierre de ventas automático", "Registro de datos en tiempo real", "Sin límite de mensajes"]
              },
            ].map((svc, i) => (
              <div key={i} style={{ background: "#1f2937", borderRadius: 4 }}>
                <button
                  onClick={() => setOpenService(openService === i ? null : i)}
                  style={{
                    width: "100%", padding: "18px 20px",
                    display: "flex", alignItems: "center", gap: 20,
                    background: "none", border: "none", cursor: "pointer",
                    color: "white", textAlign: "left",
                    borderBottom: openService === i ? "1px solid #374151" : "none",
                  }}
                >
                  <span style={{ color: "#3b82f6", fontWeight: "bold", fontSize: 22, minWidth: 36 }}>{svc.n}</span>
                  <span style={{ fontWeight: "bold", fontSize: 17 }}>{svc.title}</span>
                  <span style={{ marginLeft: "auto", color: "#6b7280", fontSize: 20 }}>
                    {openService === i ? "−" : "+"}
                  </span>
                </button>
                {openService === i && (
                  <div style={{ padding: "16px 20px 20px 76px" }}>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {svc.items.map((item, j) => (
                        <li key={j} style={{ color: "#9ca3af", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 6, height: 6, background: "#3b82f6", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" style={{ background: "#0f172a", padding: "60px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: "bold", color: "white", marginBottom: 8 }}>Proyectos</h2>
          <p style={{ color: "#6b7280", marginBottom: 36, fontSize: 15 }}>Algunos trabajos realizados</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}>
            {[
              "Comentarios.png", "Fantech.png", "Fantech2.png", "Fantech3.png",
              "Handoff.png", "Handoff2.png", "Handoff3.png", "Handoff4.png",
              "Handoff5.png", "Menswear.png"
            ].map((img, i) => (
              <div key={i} style={{
                background: "#1e293b",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid #334155",
              }}>
                <img
                  src={`/Imagenes/${img}`}
                  alt={`Proyecto ${i + 1}`}
                  style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "10px 14px" }}>
                  <p style={{ color: "#94a3b8", fontSize: 13, margin: 0 }}>Proyecto #{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIOS ── */}
      <section id="precios" style={{ background: "#111827", padding: "60px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: "bold", color: "white", marginBottom: 8 }}>
            Elige el plan adecuado para ti
          </h2>
          <p style={{ color: "#6b7280", marginBottom: 40, fontSize: 15 }}>
            Planes flexibles diseñados para individuos, equipos y negocios en crecimiento.
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", alignItems: "flex-start" }}>
            {[
              {
                name: "Landing Page", sub: "(One Page)", price: "Cotiza tu proyecto",
                features: ["Diseño de 1 página", "Diseño Responsive", "3 Secciones personalizadas", "Entrega en 5-7 días", "Formulario de contacto", "Optimización SEO básica", "Integración Google Analytics"],
                highlight: false,
              },
              {
                name: "Sitio Corporativo", sub: "", price: "Cotiza tu proyecto",
                features: ["Hasta 8 páginas", "Diseño UI/UX Personalizado", "Blog integrado", "Entrega en 15-20 días", "Panel de administración", "SEO Avanzado", "Integración Redes Sociales", "Soporte 3 meses"],
                highlight: true,
              },
              {
                name: "Sitio E-commerce", sub: "", price: "Cotiza tu proyecto",
                features: ["Tienda online completa", "Catálogo ilimitado de productos", "Pasarela de pagos integrada", "Entrega en 25-30 días", "Sistema de inventario", "Carrito de compras avanzado", "Panel administrador completo", "Soporte y mantenimiento 6 meses"],
                highlight: false,
              },
            ].map((plan, i) => (
              <div key={i} style={{
                background: plan.highlight ? "#1e3a5f" : "#1f2937",
                border: plan.highlight ? "2px solid #3b82f6" : "1px solid #374151",
                borderRadius: 10,
                padding: "28px 24px",
                width: 270,
                textAlign: "left",
                position: "relative",
              }}>
                {plan.highlight && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "#3b82f6", color: "white", fontSize: 11,
                    padding: "3px 14px", borderRadius: 20, fontWeight: "bold",
                  }}>
                    MÁS POPULAR
                  </div>
                )}
                <h3 style={{ fontWeight: "bold", fontSize: 18, color: "white", marginBottom: 2 }}>{plan.name}</h3>
                {plan.sub && <p style={{ color: "#9ca3af", fontSize: 13, marginBottom: 4 }}>{plan.sub}</p>}
                <p style={{ color: "#3b82f6", fontWeight: "bold", fontSize: 15, marginBottom: 20, marginTop: 10 }}>{plan.price}</p>
                <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ color: "#d1d5db", fontSize: 13, display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "#3b82f6", flexShrink: 0, marginTop: 2 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" style={{
                  display: "block", marginTop: 22, textAlign: "center",
                  background: plan.highlight ? "#3b82f6" : "#374151",
                  color: "white", padding: "10px 0",
                  borderRadius: 6, fontWeight: "bold", fontSize: 14,
                  textDecoration: "none",
                }}>
                  Contratar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IA SERVICES ── */}
      <section style={{ background: "#0f172a", padding: "60px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ color: "#60a5fa", fontSize: 12, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>
            Intelligence Layer
          </p>
          <h2 style={{ fontSize: 32, fontWeight: "bold", color: "white", marginBottom: 8, lineHeight: 1.3 }}>
            Lleva tu negocio al Piloto Automático
          </h2>
          <p style={{ color: "#6b7280", marginBottom: 40, fontSize: 15 }}>
            Con tecnología de inteligencia artificial integrada
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}>
            {[
              {
                title: "AI Web Concierge",
                desc: "Integramos un cerebro digital en tu landing page que entiende el contexto de cada visitante. Entrenado con tus datos, productos y servicios, responde dudas en tiempo real.",
                features: ["Entrenamiento con Llama 3.3", "Memoria de conversación", "Cierre de ventas 24/7", "Multilenguaje nativo"],
              },
              {
                title: "Business Agent",
                desc: "Automatizá las tareas repetitivas de tu empresa con un agente inteligente que trabaja las 24hs.",
                features: ["Automatización de procesos", "Integración WhatsApp Business", "Reportes automáticos", "Conexión con Google Sheets"],
              },
              {
                title: "WhatsApp Automatizado",
                desc: "Tu negocio nunca duerme. Sistema de WhatsApp que responde, agenda y cierra ventas.",
                features: ["Respuestas 24/7", "Agenda automática", "Cierre de ventas", "Sin límite de mensajes"],
              },
            ].map((svc, i) => (
              <div key={i} style={{
                background: "#1e293b",
                border: "1px solid #334155",
                borderRadius: 10,
                padding: "24px 20px",
              }}>
                <h3 style={{ fontWeight: "bold", fontSize: 17, color: "white", marginBottom: 10 }}>{svc.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{svc.desc}</p>
                <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {svc.features.map((f, j) => (
                    <li key={j} style={{ color: "#60a5fa", fontSize: 13 }}>• {f}</li>
                  ))}
                </ul>
                <a href="#contacto" style={{
                  display: "inline-block", marginTop: 18,
                  color: "#60a5fa", textDecoration: "underline", fontSize: 13,
                }}>
                  Consultar →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section style={{ background: "#111827", padding: "60px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#60a5fa", fontSize: 12, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>
            Proceso Simple
          </p>
          <h2 style={{ fontSize: 32, fontWeight: "bold", color: "white", marginBottom: 8 }}>
            De la idea al lanzamiento
          </h2>
          <p style={{ color: "#6b7280", marginBottom: 44, fontSize: 15 }}>
            Un proceso claro, simple y sin sorpresas
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
            {[
              { n: "01", t: "Consulta Gratuita", d: "Analizamos tu proyecto, objetivos y necesidades específicas sin ningún compromiso.", dur: "Sin compromiso" },
              { n: "02", t: "Propuesta Personalizada", d: "Recibes una cotización detallada con alcance, timeline y precio adaptado a tu presupuesto.", dur: "24-48 hrs" },
              { n: "03", t: "Desarrollo con Revisiones", d: "Trabajo iterativo con checkpoints regulares. Revisas el progreso y ajustamos sobre la marcha.", dur: "Según proyecto" },
              { n: "04", t: "Entrega y Soporte", d: "Lanzamiento del proyecto con capacitación incluida y soporte post-entrega garantizado.", dur: "Soporte incluido" },
            ].map((step, i) => (
              <div key={i} style={{
                background: "#1f2937",
                border: "1px solid #374151",
                borderRadius: 10,
                padding: "24px 20px",
                width: 210,
                textAlign: "center",
              }}>
                <div style={{
                  width: 40, height: 40,
                  background: "#1e3a5f",
                  border: "2px solid #3b82f6",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: "bold", color: "#60a5fa", fontSize: 14,
                  margin: "0 auto 14px",
                }}>
                  {step.n}
                </div>
                <h3 style={{ fontWeight: "bold", fontSize: 15, color: "white", marginBottom: 8, lineHeight: 1.3 }}>{step.t}</h3>
                <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.5, marginBottom: 12 }}>{step.d}</p>
                <span style={{
                  background: "#374151", color: "#9ca3af",
                  fontSize: 11, padding: "3px 10px", borderRadius: 20,
                  display: "inline-block",
                }}>
                  {step.dur}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" style={{ background: "#0f172a", padding: "60px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: "bold", color: "white", marginBottom: 8 }}>Contacto</h2>
          <p style={{ color: "#6b7280", marginBottom: 32, fontSize: 15 }}>
            Completá el formulario y te respondemos pronto.
          </p>
          <div style={{
            background: "#1f2937",
            border: "1px solid #374151",
            borderRadius: 10,
            padding: "32px 28px",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <p style={{ color: "#4ade80", fontWeight: "bold", fontSize: 18, marginBottom: 6 }}>✓ Mensaje enviado</p>
                <p style={{ color: "#9ca3af", fontSize: 14 }}>Te contactaremos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <div>
                  <label style={{ display: "block", color: "#d1d5db", fontSize: 14, marginBottom: 6 }}>
                    Nombre
                  </label>
                  <input
                    type="text" required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    style={{
                      width: "100%", background: "#111827",
                      border: "1px solid #374151", color: "white",
                      padding: "10px 14px", borderRadius: 6, fontSize: 14,
                      boxSizing: "border-box", outline: "none",
                    }}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: "#d1d5db", fontSize: 14, marginBottom: 6 }}>
                    Email
                  </label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: "100%", background: "#111827",
                      border: "1px solid #374151", color: "white",
                      padding: "10px 14px", borderRadius: 6, fontSize: 14,
                      boxSizing: "border-box", outline: "none",
                    }}
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: "#d1d5db", fontSize: 14, marginBottom: 6 }}>
                    Mensaje
                  </label>
                  <textarea
                    required
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    rows={5}
                    style={{
                      width: "100%", background: "#111827",
                      border: "1px solid #374151", color: "white",
                      padding: "10px 14px", borderRadius: 6, fontSize: 14,
                      boxSizing: "border-box", outline: "none", resize: "vertical",
                    }}
                    placeholder="Contanos sobre tu proyecto..."
                  />
                </div>
                <button type="submit" style={{
                  background: "#3b82f6",
                  color: "white",
                  padding: "12px",
                  borderRadius: 6,
                  fontWeight: "bold",
                  fontSize: 15,
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                }}>
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#1f2937",
        borderTop: "1px solid #374151",
        padding: "40px 24px",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 20,
            justifyContent: "center", marginBottom: 32,
            paddingBottom: 28, borderBottom: "1px solid #374151",
          }}>
            {[
              { label: "Código Limpio", sub: "Escalable y mantenible" },
              { label: "Soporte Incluido", sub: "Post-lanzamiento" },
              { label: "Consulta Gratuita", sub: "Sin compromiso" },
              { label: "Precio Justo", sub: "Según tu proyecto" },
            ].map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", minWidth: 180 }}>
                <span style={{ color: "#3b82f6", flexShrink: 0, marginTop: 2 }}>✓</span>
                <div>
                  <p style={{ color: "white", fontWeight: "bold", fontSize: 13, marginBottom: 2 }}>{b.label}</p>
                  <p style={{ color: "#6b7280", fontSize: 12 }}>{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between", marginBottom: 28 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 36, height: 36, background: "#3b82f6", borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: "bold", color: "white", fontSize: 13,
                }}>CS</div>
                <span style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>Cisa Studio</span>
              </div>
              <p style={{ color: "#9ca3af", fontSize: 13, maxWidth: 220, lineHeight: 1.6 }}>
                Estudio de diseño y desarrollo web creando experiencias digitales significativas.
              </p>
            </div>
            <div>
              <h3 style={{ color: "#e5e7eb", fontWeight: "bold", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                Contactanos
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="mailto:cisaestudio@gmail.com" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 13 }}>cisaestudio@gmail.com</a>
                <a href="https://wa.me/5492215585466" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 13 }}>WhatsApp: +54 9 221 558 5466</a>
                <a href="https://www.instagram.com/cisa_studio/" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 13 }}>Instagram: @cisa_studio</a>
                <a href="https://www.tiktok.com/@cisastudio_" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 13 }}>TikTok: @cisastudio_</a>
              </div>
            </div>
            <div>
              <h3 style={{ color: "#e5e7eb", fontWeight: "bold", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                Sígueme
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="https://www.instagram.com/cisa_studio/" style={{
                  display: "inline-block", background: "#374151",
                  color: "white", padding: "8px 18px", borderRadius: 6,
                  fontWeight: "bold", fontSize: 13, textDecoration: "none",
                }}>Instagram</a>
                <a href="https://www.tiktok.com/@cisastudio_" style={{
                  display: "inline-block", background: "#374151",
                  color: "white", padding: "8px 18px", borderRadius: 6,
                  fontWeight: "bold", fontSize: 13, textDecoration: "none",
                }}>TikTok</a>
              </div>
            </div>
          </div>
          <p style={{ color: "#6b7280", fontSize: 12, textAlign: "center", borderTop: "1px solid #374151", paddingTop: 20 }}>
            © 2024 Cisa Studio — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
