# Design Specification: Interactive Horizontal Accordion Navigation

## 1. Overview

An interactive, full-screen navigation component that splits the viewport into dynamic, vertical columns. Hovering over a column expands its width to reveal rich visual content (background images/video) while gracefully contracting the sibling columns.

---

## 2. Layout & Structure (HTML / Webflow DOM)

The component relies on a Flexbox layout structure to handle the dynamic width calculations smoothly.

* `section.nav-accordion-wrap` (Height: `100vh`, Width: `100%`, Display: `Flex`, Direction: `Horizontal`, Overflow: `Hidden`)
* `div.accordion-column` (Flex: `1 1 0%`, Relative Positioning, Overflow: `Hidden`)
* `div.column-bg-image` (Absolute Positioning: `Full`, Opacity: `0%`, Scale: `1.1`, Transform-Origin: `Center`)
* `div.column-content-wrap` (Absolute Positioning: `Full`, Z-Index: `2`, Flex Direction: `Vertical`, Justify: `Space-Between`)
* `h2.column-title` (Typography: Large, Bold, White)







---

## 3. Visual & Motion States

### Default State (Idle)

* **Column Width:** All columns are perfectly equal in width (`flex: 1` or `25%` each for 4 columns).
* **Background Images:** Hidden (`opacity: 0%`) or heavily masked/darkened.
* **Typography:** Column titles are perfectly centered or aligned to the bottom grid, highly legible against the solid background.

### Hover State (Interaction)

When a user hovers (`Mouse Hover / Hover In`) over a specific `div.accordion-column`:

| Element | Property | Initial Value | Target Value | Transition / Easing |
| --- | --- | --- | --- | --- |
| **Hovered Column** | Flex Grow | `1` | `2.5` (or `3`) | `500ms cubic-bezier(0.25, 1, 0.5, 1)` |
| **Hovered BG Image** | Opacity | `0%` | `100%` | `400ms ease-out` |
| **Hovered BG Image** | Scale | `1.1` | `1.0` | `600ms cubic-bezier(0.16, 1, 0.3, 1)` |
| **Sibling Columns** | Flex Grow | `1` | Shrinks automatically | Inherits container easing |

### Out State (Reset)

When the mouse leaves the column (`Hover Out`):

* The hovered column resets back to `flex: 1`.
* The background image fades back to `opacity: 0%` and resets to `scale: 1.1`.
* The layout returns to its symmetrical 4-column equilibrium.

---

## 4. Implementation Implementations

### Option A: Pure CSS (Recommended for Performance)

Add this custom code component to your global stylesheets for the smoothest hardware-accelerated transitions.

```css
/* Container */
.nav-accordion-wrap {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* Base Column State */
.accordion-column {
  flex: 1;
  position: relative;
  transition: flex 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;
}

/* Background Image Base State */
.column-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.1);
  transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

/* Hover States */
.accordion-column:hover {
  flex: 2.5; /* Expands the hovered item */
}

.accordion-column:hover .column-bg-image {
  opacity: 1;
  transform: scale(1);
}

```

### Option B: Webflow Interactions (IX2)

1. Select `.accordion-column` and create an element trigger: **Mouse Hover**.
2. **On Hover In:** * Target **Selected Element**: Size -> Flex Grow to `2.5` (Duration: `0.5s`, Ease: `Out Quart`).
* Target **Child Element** `.column-bg-image`: Opacity to `100%`, Scale to `1` (Duration: `0.5s`, Ease: `Out Quad`).


3. **On Hover Out:** * Target **Selected Element**: Size -> Flex Grow back to `1`.
* Target **Child Element** `.column-bg-image`: Opacity to `0%`, Scale back to `1.1`.



---

## 5. Responsive Adaptations (Mobile & Tablet)

Because vertical strips become unusable on narrow portrait screens, a breakpoint design override is required:

* **Breakpoint (< 768px):** Change `.nav-accordion-wrap` layout direction from `Horizontal` to `Vertical`.
* **Behavior Switch:** Passively change the columns to expand **vertically** (`height` or vertical `flex-grow` transitions) instead of horizontally, or convert the layout into a standard vertical stack menu list.