# UI Specification & Design Tokens

## Global Styles
- Font Family: 'Nunito', sans-serif (Weights: 400, 600, 700, 800, 900)
- Root Font Size: 18px (para legibilidade em telas/tablets POS)
- Dark Theme Colors:
  - App Background: #111117
  - Card / Panel Background: #1C1C26
  - Header / Element Background: #242430
  - Border Color: #2E2E3E
  - Text Primary: #EDE9E3
  - Text Muted: #6B6880 / #9B97A8
  - Accent Gold/Amber: #F59E0B (bg-amber-500, text-amber-400)
  - Success Green: #10B981 (bg-emerald-500, text-emerald-400)

## Component Rules
1. TableCard:
   - Aspect Ratio / Structure: Card arredondado (`rounded-2xl`), borda `#2A2A38`.
   - Canto superior direito: Indicador de status (Dot Verde pulsante para mesa ativa).
   - Tipografia: Nome do cliente em destaque (`text-2xl`, peso alto), valor em destaque Gold (`text-amber-400`).
2. TableModal & Modals:
   - Overlay: `rgba(0,0,0,0.75)` com desfoque.
   - Container: Max-width XL, cantos `rounded-3xl`, borda `#2E2E3E`.
3. Typography Weight Fallbacks:
   - Substituir sintaxe Tailwind v4 (`font-700`, `font-800`, `font-900`) por sintaxe legível universal (`font-bold`, `font-extrabold`, `font-black`).