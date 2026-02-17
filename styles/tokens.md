# Guía de Tokens — Linear Aesthetic (Dark Premium)

## Nomenclatura
- color.role.nivel.estado (ej.: color.bg.l1.default)
- gradient.type.nivel (beam/glow)
- elevation.level (l0–l6)
- blur.level (xs–xl) y backdrop.level
- spacing.scale (2–64)
- radius.scale (xs–2xl)
- type.size/weight/tracking
- z.layer (base/overlay/modal/beam)
- motion.duration/easing/stagger
- state (hover/focus/active/disabled/success/error)

## Valores/Rangos sugeridos
- Fondo near‑black: bg base #0B0F14; surface l1 #0F1419; l2 #1A1C20
- Texto: high #E6E8EA; low #A5ADB4; muted #99A1AC
- Acentos: primary #3AD1FF; secondary #E86BC5
- Border/Ring: border 1px #1A2026; focus ring 2–3px accent
- Beam: ancho 3–4px, alpha 0.25–0.40, velocidad lenta
- Glow: radial 200–480px, blur 12–32, alpha centro 0.30
- Blur/Backdrop: xs 4, sm 8, md 12, lg 16
- Elevación: l0 none; l1 sombra leve; l2–l3 media; l4 móvil evitar
- Spacing: 6/8/12/16/24/32
- Radius: md 14; xl 24
- Tipografía: título 20–24; cuerpo 14–16; tracking 0–1%
- Tilt: hover 3–6° (desktop); táctiles desactivado
- Motion: xs 120–160ms; sm 180–220ms; md 240–320ms; easing suave

## Mapeo a Componentes
- Hero: bg l1–l2 + glow XL; CTA con beam fino y focus ring alto contraste
- ServiceCard: surface l2, border 1px; hover elevación + glow sutil; tilt leve; CTA WhatsApp
- Projects: cards glass ligeras; hover eleva/tilt mínimo; imágenes lazy
- ContactForm: contenedor con beam perimetral; inputs con focus ring; animación pausada en reduced‑motion
- WhatsAppCTA: pill con accent; focus visible; hover eleva 2px

## Accesibilidad/Reduced‑Motion
- Contraste: texto ≥ 4.5:1; foco visible; no depender solo de color
- Teclado/touch: targets ≥ 44px; orden lógico; sin trampas de foco
- Reduced‑motion: desactivar tilt/beam/glow animados; usar estados estáticos
- Móvil perf: limitar blur/backdrop; pausar animaciones fuera de viewport

## Integración
- Tailwind: `darkMode: 'class'`; extender colores/sombras/blur/radius
- CSS vars: definir en styles/globals.css para runtime; shadcn/ui alineado
- Archivos: este doc (styles/tokens.md), globals.css, tailwind.config.js

## Testing/Mantenimiento
- Visual regression por estados (hover/focus/active)
- Perf budgets: sombras y blur máximos; medir INP/TTI
- Lint de diseño: límites de tilt/glows; contraste mínimo
- Gobernanza: cambios de tokens via PR con changelog y alias temporales
