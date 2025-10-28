# LevPlan - Professional Website

A modern, bright-themed professional website built with Next.js, featuring smooth animations, responsive design, and a beautiful mobile-first user interface.

## Features

✨ **Key Features:**
- 🎨 **Bright Professional Theme** - Clean, modern design with blue gradient accents
- 📱 **Mobile-First Design** - Fully responsive and optimized for all devices
- 🍔 **Animated Hamburger Menu** - Smooth hamburger-to-X transformation with sliding nav panel on mobile
- ✨ **Smooth Animations** - Scroll animations, fade-ins, slide-ups, and transitions throughout
- ⚡ **Smooth Scroll** - Native smooth scrolling enabled for anchor links
- 🎯 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🚀 **High Performance** - Built with Next.js for fast load times
- ♿ **Accessible** - Semantic HTML and proper ARIA labels

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and animations
└── components/
    ├── MobileNav.tsx       # Navigation with hamburger menu
    ├── HeroSection.tsx     # Hero/landing section
    ├── ServicesSection.tsx # Services showcase
    ├── PortfolioSection.tsx # Portfolio/projects showcase
    ├── ContactSection.tsx  # Contact form and info
    └── Footer.tsx          # Footer with links
```

## Sections

### 1. **Navigation** (`MobileNav`)
- Hamburger menu that transforms to X when clicked
- Smooth slide-out navigation panel from the right (mobile)
- Desktop navigation bar with links
- Fixed position on desktop, overlay on mobile

### 2. **Hero Section** (`HeroSection`)
- Eye-catching hero with gradient text
- Call-to-action buttons
- Animated scroll indicator
- Smooth fade-in animations

### 3. **Services** (`ServicesSection`)
- Grid of 6 services with icons
- Scroll-triggered animations
- Hover effects with shadow transitions

### 4. **Portfolio** (`PortfolioSection`)
- 4-item portfolio grid
- Staggered animations on scroll
- Placeholder project cards
- Category labels and descriptions

### 5. **Contact** (`ContactSection`)
- Contact information cards
- Functional contact form
- Responsive form layout
- Smooth interactions

### 6. **Footer** (`Footer`)
- Links and information
- Social media links
- Quick navigation
- Copyright information

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management
- **Intersection Observer API** - Scroll animations
- **CSS Animations** - Smooth transitions and keyframe animations

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Run linting
npm run lint
```

## Customization Guide

### Colors
Edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: #3b82f6;
  --primary-light: #60a5fa;
  --secondary: #f0f4f8;
  --accent: #ec4899;
  /* ... */
}
```

### Navigation Links
Edit the `navLinks` array in `src/components/MobileNav.tsx`:
```typescript
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  // Add more links here
];
```

### Content
- **Hero**: Edit `src/components/HeroSection.tsx`
- **Services**: Update services array in `src/components/ServicesSection.tsx`
- **Portfolio**: Update items in `src/components/PortfolioSection.tsx`
- **Contact**: Modify form in `src/components/ContactSection.tsx`

### Animations
- Modify animation keyframes in `src/app/globals.css`
- Adjust timing and easing in component className strings
- Use Tailwind's `transition-*` utilities for smooth effects

## Mobile Features

### Hamburger Menu Animation
The hamburger menu features smooth transformations:
- **Top line**: Rotates 45° and translates down to form top of X
- **Middle line**: Fades out
- **Bottom line**: Rotates -45° and translates up to form bottom of X

### Navigation Panel
- Slides in from the right side smoothly
- Overlay backdrop with fade animation
- Body scroll is locked when menu is open
- Closes when a link is clicked

### Responsive Breakpoints
- **Mobile**: Full-width hamburger menu (< 768px)
- **Desktop**: Traditional navigation bar (768px+)
- All content scales appropriately for each screen size

## Performance Optimizations

- ✅ Smooth scroll enabled at HTML level
- ✅ CSS animations use GPU acceleration (transform, opacity)
- ✅ Intersection Observer for scroll-triggered animations
- ✅ Lazy loading support ready
- ✅ Optimized font loading with Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

Build the static files:
```bash
npm run build
```

Then deploy the `.next` and `public` folders to your hosting provider.

## Customization Tips

1. **Add sections**: Create new component files in `src/components/`
2. **Change colors**: Update Tailwind classes and CSS variables
3. **Add images**: Place images in `public/` and reference with Next.js Image component
4. **Modify animations**: Adjust keyframes in `globals.css` or component transitions
5. **Update metadata**: Edit `src/app/layout.tsx` for SEO

## Troubleshooting

### Menu not sliding correctly
- Check that `overflow-x: hidden` is set on body in `globals.css`
- Verify `z-index` values are correct

### Animations not smooth
- Ensure hardware acceleration: use `transform` and `opacity` properties
- Check browser DevTools for performance issues

### Scroll behavior issues
- Verify `scroll-behavior: smooth` is set on `html` element

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, feel free to create an issue in the repository.

---

**Built with ❤️ using Next.js and Tailwind CSS**
