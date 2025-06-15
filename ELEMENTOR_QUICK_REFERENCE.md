# Laguna Digital - Elementor Quick Reference

## 🎯 **Implementation Strategy**

**✅ Elementor Sections:** Header, Hero, Features, Pricing, Contact, Footer  
**🔧 Static Exports:** Services Carousel, Testimonials Carousel

---

## 🎨 **Brand Colors & Fonts**

### **Colors**
```css
/* Primary Brand Colors */
--laguna-blue: #2384C7
--laguna-blue-dark: #1D65B7
--laguna-blue-light: #3B82F6

/* CSS Classes for Elementor */
.laguna-blue { color: #2384C7; }
.laguna-blue-bg { background-color: #2384C7; }
```

### **Typography**
```css
/* Google Fonts to Import */
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

/* Font Classes */
.laguna-heading { font-family: "Jost", sans-serif; }
.laguna-body { font-family: "Titillium Web", sans-serif; }
.laguna-nav { font-family: "Inter", sans-serif; }
```

---

## 🧩 **Component Classes**

### **Buttons**
```css
.laguna-btn-primary {
  background: #2384C7;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  min-height: 44px;
}

.laguna-btn-secondary {
  border: 2px solid #2384C7;
  color: #2384C7;
  background: transparent;
}

.laguna-btn-white {
  background: white;
  color: #2384C7;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### **Cards**
```css
.laguna-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
}

.laguna-card-feature {
  /* Card with hover effects - add 'group' class to HTML element */
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
}

.laguna-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### **Layout Classes**
```css
.laguna-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

.laguna-section {
  padding: 48px 0 64px; /* Mobile */
  /* 64px 0 80px on tablet */
  /* 80px 0 96px on desktop */
}

.laguna-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.laguna-grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

---

## 📱 **Mobile Optimization**

### **Touch Targets**
```css
.laguna-mobile-touch {
  min-height: 44px;
  min-width: 44px;
}
```

### **Responsive Text**
```css
.laguna-responsive-text {
  font-size: clamp(14px, 2vw, 16px);
}

.laguna-section-title {
  font-size: clamp(24px, 5vw, 48px);
}

.laguna-section-subtitle {
  font-size: clamp(16px, 3vw, 20px);
}
```

---

## 🏗️ **Section-by-Section Implementation**

### **1. Header**
**Elementor Widgets:** Header Builder, Nav Menu, Button
```html
<!-- Logo + Navigation + CTA -->
<div class="laguna-container">
  <div class="laguna-nav">Navigation Text</div>
  <button class="laguna-btn-primary">Get Quote</button>
</div>
```

### **2. Hero Section**
**Elementor Widgets:** Section, Heading, Text, Button
```html
<section class="laguna-hero">
  <div class="laguna-hero-overlay"></div>
  <div class="laguna-hero-content">
    <h1 class="laguna-hero-title">Professional Photo Printing</h1>
    <p class="laguna-hero-description">Description text</p>
    <div class="laguna-hero-buttons">
      <button class="laguna-btn-white">Upload & Order</button>
    </div>
    <div class="laguna-hero-stats">Stats Grid</div>
  </div>
</section>
```

### **3. Feature Cards**
**Elementor Widgets:** Icon Box, Grid Container
```html
<div class="laguna-grid-2">
  <div class="laguna-card-feature group">
    <div class="laguna-card-icon bg-gradient-to-br from-emerald-400 to-emerald-600">
      <!-- Icon -->
    </div>
    <h3 class="laguna-heading">Feature Title</h3>
    <p class="laguna-responsive-text">Feature description</p>
  </div>
</div>
```

**Note:** Add `group` class to HTML elements for hover effects to work properly.

### **4. Pricing Table**
**Elementor Widgets:** Price Table, Custom HTML
```html
<!-- Desktop Table -->
<div class="laguna-pricing-container hidden md:block">
  <div class="laguna-pricing-header">
    <h3>Photo Print Pricing</h3>
  </div>
  <table class="laguna-pricing-table">
    <!-- Table content -->
  </table>
</div>

<!-- Mobile Cards -->
<div class="md:hidden">
  <div class="laguna-pricing-card">
    <!-- Card content -->
  </div>
</div>
```

### **5. Contact Cards**
**Elementor Widgets:** Icon Box, Button, Map
```html
<div class="laguna-grid-2">
  <div class="laguna-contact-card">
    <div class="laguna-contact-header">
      <div class="laguna-contact-icon"><!-- Icon --></div>
      <h3>Location Name</h3>
    </div>
    <div class="laguna-contact-content">
      <!-- Address, phone, buttons -->
    </div>
  </div>
</div>
```

---

## 🔧 **Static Export Integration**

### **Services Carousel**
```html
<!-- Use Custom HTML Widget in Elementor -->
<iframe src="static-exports/services-carousel.html" 
        width="100%" 
        height="600" 
        frameborder="0">
</iframe>
```

### **Testimonials Carousel**
```html
<!-- Use Custom HTML Widget in Elementor -->
<iframe src="static-exports/testimonials-carousel.html" 
        width="100%" 
        height="500" 
        frameborder="0">
</iframe>
```

---

## ✅ **Implementation Checklist**

### **Setup Phase**
- [ ] Install Elementor Pro
- [ ] Import Google Fonts in Elementor Settings
- [ ] Add brand colors to Global Colors
- [ ] Create custom CSS file with Laguna classes

### **Elementor Sections**
- [ ] Header with logo, navigation, and CTAs
- [ ] Hero banner with gradient background
- [ ] Feature cards with icons and hover effects
- [ ] Pricing table (responsive desktop/mobile)
- [ ] Contact section with location cards
- [ ] Footer with company information

### **Static Components**
- [ ] Upload services-carousel.html to server
- [ ] Upload testimonials-carousel.html to server
- [ ] Embed using Custom HTML widgets
- [ ] Test carousel functionality

### **Mobile Testing**
- [ ] Test all touch targets (44px minimum)
- [ ] Verify responsive typography scaling
- [ ] Check mobile navigation functionality
- [ ] Test carousel swipe gestures

### **Final Optimization**
- [ ] Optimize images for web
- [ ] Test page loading speed
- [ ] Verify cross-browser compatibility
- [ ] Add analytics tracking codes

---

## 💡 **Pro Tips**

1. **Global Widgets:** Create global widgets for repeated elements like buttons and cards
2. **Custom CSS:** Add all Laguna classes to Elementor's Custom CSS section
3. **Responsive Preview:** Always test using Elementor's responsive preview modes
4. **Version Control:** Use Elementor's revision system for backups
5. **Performance:** Use WebP images and lazy loading for optimal performance

---

This quick reference provides everything needed to implement the Laguna Digital design in Elementor while maintaining full functionality and mobile responsiveness. 