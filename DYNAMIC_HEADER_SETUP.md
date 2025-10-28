# Dynamic Header Setup Guide

## ✅ What's Been Updated

Your mobile header now features:

### 🎨 Dynamic Behavior
- **Transparent at top**: Header is fully transparent when at the top of the page (shows logo_dark.jpg)
- **Glass effect on scroll**: When scrolled down (> 50px), header gets a dark-tone glass effect with blur
- **Logo transition**: Smoothly transitions from logo_dark.jpg to logo_white.jpg
- **Hamburger color change**: Button turns white when scrolled

## 📁 Logo Directory

The logo directory has been created at:
```
public/images/
```

### Current Status
Placeholder SVG logos are already in place:
- `logo_dark.svg` - Placeholder dark logo
- `logo_white.svg` - Placeholder white logo

## 🖼️ Adding Your Custom Logos

Replace the placeholder files with your own:

1. **logo_dark.jpg** (or .png, .svg) - Used when header is transparent (top of page)
2. **logo_white.jpg** (or .png, .svg) - Used when header is scrolled (glass effect)

### Specifications:
- **Format**: JPG, PNG, or SVG
- **Dimensions**: Recommended 128x32px (or aspect ratio ~4:1)
- **Background**: 
  - `logo_dark`: Should have dark colors (navy, black, etc.)
  - `logo_white`: Should be white or light colored for contrast on dark glass
- **Size**: Keep under 100KB for fast loading

### How to Replace Placeholders
To use your custom logos instead of the placeholders:

1. Prepare your logo files (JPG, PNG, or SVG)
2. Replace the files in `public/images/`:
   - Replace `logo_dark.svg` with `logo_dark.jpg` (or your format)
   - Replace `logo_white.svg` with `logo_white.jpg` (or your format)
3. Update the paths in `src/components/MobileNav.tsx` if needed:
   ```tsx
   src="/images/logo_dark.jpg"  // Change extension if needed
   src="/images/logo_white.jpg"
   ```

## 🔧 How It Works

### Scroll Detection
- When scrolled less than 50px: **Transparent header** with dark logo
- When scrolled more than 50px: **Glass header** with white logo

### CSS Classes (in globals.css)
```css
.header-transparent {
  background: transparent;
  transition: all 0.4s ease-out;
}

.header-scrolled {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-out;
}
```

### Logo Transition
```css
.logo-dark { opacity: 1; }
.logo-white { opacity: 0; }

.header-scrolled .logo-dark { opacity: 0; }
.header-scrolled .logo-white { opacity: 1; }
```

### Hamburger Button Color
- **Default (transparent)**: Dark buttons (`#1a1a1a`)
- **Scrolled (glass)**: White buttons (`#ffffff`)

## 📍 File Structure

```
public/
└── images/
    ├── logo_dark.svg       ← Currently a placeholder (replace with your logo)
    └── logo_white.svg      ← Currently a placeholder (replace with your logo)
```

## 🎯 Quick Setup Steps

1. **Create your logos**:
   - Design a dark version of your logo
   - Design a white version of your logo
   - Export both as JPG or PNG

2. **Add logos to public/images/**:
   - Save `logo_dark.jpg` in `public/images/`
   - Save `logo_white.jpg` in `public/images/`

3. **Test**:
   - Reload the browser
   - Scroll down to see the transitions
   - Header should change smoothly

## ⚙️ Customization

### Change Scroll Threshold
Edit `src/components/MobileNav.tsx` line ~27:
```typescript
if (window.scrollY > 50) {  // Change 50 to your desired pixel value
  setIsScrolled(true);
}
```

### Change Glass Effect Darkness
Edit `src/app/globals.css` line ~96:
```css
background: rgba(0, 0, 0, 0.7);  /* Change 0.7 to desired opacity (0-1) */
```

### Change Blur Amount
Edit `src/app/globals.css` line ~97:
```css
backdrop-filter: blur(10px);  /* Change 10px to desired blur amount */
```

### Change Transition Speed
Edit `src/app/globals.css` lines ~89, ~98:
```css
transition: all 0.4s ease-out;  /* Change 0.4s to desired duration */
```

## 🎨 Logo Design Tips

### Dark Logo (logo_dark.jpg)
- Use colors that stand out on light/transparent backgrounds
- Navy blue, dark gray, black work well
- Ensure good contrast for readability

### White Logo (logo_white.jpg)
- Use white, light gray, or light colors
- Should be visible on dark glass background
- Keep the same design as dark version, just inverted colors

### Consistency
- Both logos should be the same size/proportions
- Use same font and styling
- Create a mirror effect with inverted colors

## 🔄 Transition Timeline

All transitions use **0.4s ease-out** timing:
- Header background: Fades to glass effect
- Logo opacity: Smoothly transitions
- Hamburger color: Turns white
- Box shadow: Appears on header

## ✨ Features Summary

✅ Fully transparent header at top
✅ Dark-tone glass effect on scroll
✅ Smooth logo transition (dark → white)
✅ Hamburger button color changes (dark → white)
✅ Smooth 0.4s animations
✅ Blur backdrop filter for glass effect
✅ Mobile-only (hidden on desktop)
✅ Works with Next.js Image optimization

## 📱 Desktop Note

The desktop header remains unchanged:
- Fixed white background
- Blue gradient text logo
- Traditional navigation bar

Dynamic header effects only apply to **mobile version** (< 768px)

---

Ready to add your logos? Place them in `public/images/` and refresh your browser! 🚀
