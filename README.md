## adelon.studio

This site is built with React + Vite and a custom CRT-adjacent aesthetic tuned for mobile-first browsing.

### Mobile layout system

All pages should treat mobile as the primary target and then scale up:

- **Page shell**
  - Wrap primary content in `main.page-shell` to constrain the width and add comfortable side padding on phones.
  - Example: `return (<main className="page-shell">…</main>);`

- **Vertical layout**
  - Use `section.stack` (or `stack-sm`) to create vertical flows with consistent gaps between blocks (terminals, cards, tool sections).

- **Header**
  - The `Header` component uses `.site-logo` and `.site-subtitle` with `clamp()` font sizes so `adelon.studio` always fits on small phones.
  - Navigation buttons automatically wrap and stretch to full-width on narrow screens.

- **Future tools / calculators**
  - Start each tool page with:
    - `main.page-shell` as the outer wrapper.
    - A `section.stack` containing:
      - One `TerminalWindow` for the narrative or instructions.
      - A block for inputs (form controls).
      - A block for results/output.
  - Reuse the spacing and typography via CSS variables (e.g. `--space-md`, `--font-size-base`) rather than hard-coded values so new tools match the rest of the site and remain responsive by default.
