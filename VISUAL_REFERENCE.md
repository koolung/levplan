# 📱 Dynamic Mobile Header - Visual Reference Guide

## 🎯 Header States

### STATE 1: At Page Top (scrollY < 50px)
```
┌────────────────────────────────┐
│  [DARK_LOGO]         [≡≡≡]   │  ← Hamburger dark
│                               │
│ Background: TRANSPARENT       │
│ Logo: DARK (visible)          │
│ Buttons: DARK (#1a1a1a)       │
└────────────────────────────────┘
        (Hero Section)
```

### STATE 2: Scrolled Down (scrollY > 50px)
```
┌────────────────────────────────┐
│  [WHITE_LOGO]        [≡≡≡]   │  ← Hamburger white
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│  ░░░ GLASS BACKGROUND ░░░░░░░│  (dark with blur)
└────────────────────────────────┘
   (Glass with backdrop blur)
```

## 🔄 Transition Animation (0.4s ease-out)

```
START (Top)           →         END (Scrolled)
Background: transparent   →    Glass effect
Logo: dark (100% opacity) →    Logo: white (100% opacity)
                               Logo: dark (0% opacity)
Buttons: dark (#1a1a1a)   →    Buttons: white (#ffffff)
```

## 📊 Animation Timeline

```
Time:  0.0s      0.1s      0.2s      0.3s      0.4s
       │         │         │         │         │
       ├─────────┼─────────┼─────────┼─────────┤
Scroll │ START   │ 25%     │ 50%     │ 75%     │ DONE
Event  │ Trans.  │ Trans.  │ Trans.  │ Trans.  │
       └─────────┴─────────┴─────────┴─────────┘
```

## 🖼️ Logo Switch Mechanism

```
DARK LOGO LAYER
┌─────────────────────┐
│  [DARK LOGO]        │  Opacity: 1.0 at top
│  Positioned: Top    │
└─────────────────────┘
         ▼ (fades out on scroll)
       (0% opacity)


WHITE LOGO LAYER
┌─────────────────────┐
│  [WHITE LOGO]       │  Opacity: 0 at top
│  Positioned: Top    │
└─────────────────────┘
         ▼ (fades in on scroll)
       (100% opacity)
```

## 🍔 Hamburger Button States

### At Top
```
 ─────────   (Dark: #1a1a1a)
 ─────────
 ─────────
```

### Scrolled
```
 ─────────   (White: #ffffff)
 ─────────
 ─────────
```

### When Clicked (Both States)
```
   ╱      (Top line: +45°, +translate)
      ╱    (Middle: hidden)
   ╱       (Bottom line: -45°, -translate)
```

## 🎨 Color Scheme

| Element | At Top | On Scroll |
|---------|--------|-----------|
| Background | Transparent | rgba(0,0,0,0.7) |
| Logo | Dark | White |
| Hamburger | #1a1a1a | #ffffff |
| Shadow | None | Subtle |

## 📐 Dimensions

```
Header Height: 64px (py-4 = 16px × 2, plus content)
Logo Width: 128px (w-32)
Logo Height: 32px (h-8)
Hamburger Width: 24px (w-6)
Hamburger Height: 18px (gap-1.5 × 3 lines)
```

## ⚡ Performance

| Metric | Value |
|--------|-------|
| Animation Speed | 0.4s |
| Easing | ease-out |
| Scroll Threshold | 50px |
| Blur Amount | 10px |
| Glass Opacity | 70% |

## 🔧 CSS Classes Applied

### Header Container
```
.header-transparent  (at top)
.header-scrolled     (on scroll)
```

### Logo Images
```
.logo-image          (both logos)
.logo-dark           (dark logo specific)
.logo-white          (white logo specific)
```

### Hamburger Lines
```
.hamburger-line      (all three lines)
```

## 📍 Z-Index Layers

```
Layer 5: Hamburger button (z-50)
Layer 4: Header background (z-50)
Layer 3: Nav panel (z-40)
Layer 2: Overlay backdrop (z-40)
Layer 1: Page content
```

## 🎬 CSS Transitions Applied

| Property | Duration | Easing |
|----------|----------|--------|
| background | 0.4s | ease-out |
| opacity | 0.4s | ease-out |
| color | 0.4s | ease-out |
| All other | 0.3s | default |

## 📱 Responsive Behavior

```
Mobile (< 768px)
├─ Dynamic header with scroll effects ✓
├─ Logo transitions ✓
├─ Hamburger menu ✓
└─ All features enabled ✓

Desktop (≥ 768px)
├─ Static header (no scroll effects)
├─ Blue gradient logo text
├─ Traditional nav bar
└─ All features hidden (md:hidden)
```

## 🔍 Scroll Detection Code

```typescript
if (window.scrollY > 50) {
  setIsScrolled(true);    // Apply glass effect
} else {
  setIsScrolled(false);   // Remove glass effect
}
```

## 🎯 User Experience Flow

```
1. User visits site
   ↓
2. Header is transparent
   - Can see dark logo
   - Dark hamburger buttons
   ↓
3. User scrolls down
   ↓
4. Header reaches 50px scroll
   - Background becomes glass
   - Logo transitions to white
   - Hamburger turns white
   ↓
5. User scrolls back up
   ↓
6. Header returns to transparent
   - Logo back to dark
   - Hamburger back to dark
```

## 💾 File Locations

| File | Purpose |
|------|---------|
| `src/components/MobileNav.tsx` | Scroll detection, state |
| `src/app/globals.css` | Header styles, animations |
| `public/images/logo_dark.svg` | Dark logo placeholder |
| `public/images/logo_white.svg` | White logo placeholder |

## 🚀 Features Visualization

```
┌─────────────────────────────────────────┐
│        DYNAMIC MOBILE HEADER            │
├─────────────────────────────────────────┤
│                                         │
│  ✓ Scroll Detection (50px threshold)   │
│  ✓ Logo Opacity Transition (0.4s)      │
│  ✓ Background Glass Effect              │
│  ✓ Hamburger Color Change               │
│  ✓ Blur Backdrop Filter                 │
│  ✓ Smooth Easing (ease-out)            │
│  ✓ Mobile-Only (< 768px)               │
│  ✓ No Layout Shift                      │
│                                         │
└─────────────────────────────────────────┘
```

## 📊 Browser Rendering

```
Chrome   → ✓ Full support
Safari   → ✓ Full support  
Firefox  → ✓ Full support
Edge     → ✓ Full support
iOS      → ✓ Full support
Android  → ✓ Full support
```

## 🎨 CSS Keyframes (if needed)

The implementation uses CSS transitions, not keyframes, for smooth performance.

## ⚙️ Tweakable Values

```
// In MobileNav.tsx
window.scrollY > 50          // Change scroll threshold

// In globals.css
transition: all 0.4s         // Change speed
backdrop-filter: blur(10px)  // Change blur
rgba(0, 0, 0, 0.7)          // Change glass darkness
```

---

## 🎯 Summary

Your mobile header automatically:
1. Starts transparent at page top
2. Detects user scroll at 50px
3. Transitions smoothly (0.4s)
4. Shows white logo + glass background
5. Returns to transparent on scroll up

All without any page jank or layout shift! ✨

---

**Ready to add your logos?** → Check `HEADER_SUMMARY.md`
