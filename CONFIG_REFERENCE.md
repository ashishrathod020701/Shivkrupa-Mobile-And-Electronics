# Configuration Reference Guide

Quick reference for all customizable sections in your website.

---

## 📱 Configuration File: `static/js/script.js`

**This is THE most important file for customization!**

### Location in File
Open `static/js/script.js` and find the `CONFIG` object around line 8.

### Configuration Object

```javascript
const CONFIG = {
    PHONE_NUMBER: '+91-XXXXXXXXXX',
    WHATSAPP_NUMBER: '91XXXXXXXXXX',
    SHOP_ADDRESS: 'Your Shop Address, City, State, Pin Code',
    GOOGLE_MAPS_URL: 'https://maps.google.com/?q=Shivkrupa+Mobile+Electronics',
    OPENING_HOURS: {
        weekdays: '10:00 AM - 9:00 PM',
        sunday: '12:00 PM - 8:00 PM'
    }
};
```

### Each Field Explained

#### PHONE_NUMBER
- **What it is**: Your shop's phone number
- **Format**: `'+91-XXXXXXXXXX'` (with country code and hyphens)
- **Example**: `'+91-9876543210'`
- **Where it's used**:
  - Phone call button on all pages
  - Contact page "Call Us" section
  - Footer links

#### WHATSAPP_NUMBER
- **What it is**: Your WhatsApp number for messaging
- **Format**: `'91XXXXXXXXXX'` (NO + symbol, just digits)
- **Example**: `'919876543210'`
- **Where it's used**:
  - WhatsApp buttons across all pages
  - Repair form submission
  - Service inquiry links
  - Contact page messaging

#### SHOP_ADDRESS
- **What it is**: Your complete shop address
- **Format**: Street, City, State, PIN Code
- **Example**: `'123 Main Street, Pune, Maharashtra 411001'`
- **Where it's used**:
  - Contact page display
  - Footer
  - Google Maps integration
  - JSON-LD structured data

#### GOOGLE_MAPS_URL
- **What it is**: Embed URL from Google Maps
- **Format**: Full HTTPS URL
- **Example**: `'https://www.google.com/maps/embed?pb=...'`
- **Where it's used**:
  - Embedded map on contact page
  - Get Directions button links
- **How to update**:
  1. Go to Google Maps
  2. Search your shop location
  3. Click "Share"
  4. Select "Embed a map"
  5. Copy the entire iframe src URL
  6. Replace the GOOGLE_MAPS_URL value

#### OPENING_HOURS
- **What it is**: Your shop's operating hours
- **Format**: AM/PM format in quotes
- **Example**:
  ```javascript
  OPENING_HOURS: {
      weekdays: '9:00 AM - 10:00 PM',
      sunday: '10:00 AM - 8:00 PM'
  }
  ```
- **Where it's used**:
  - Contact page display
  - Footer information
  - Business schema data

---

## 🎨 Styling Configuration: `static/css/style.css`

### Color Customization

**Location**: Lines 10-16 in `style.css`

```css
:root {
    --primary-dark: #0f1419;
    --primary-darker: #0a0d12;
    --secondary-dark: #1a1f2e;
    --accent-red: #ff4444;
    --accent-orange: #ff6b35;
    --text-light: #ffffff;
    --text-gray: #b0b0b0;
}
```

### Common Color Changes

| Element | Variable | Current | Use |
|---------|----------|---------|-----|
| Main background | `--primary-dark` | `#0f1419` | Page background |
| Darker background | `--primary-darker` | `#0a0d12` | Navbar, footer |
| Card background | `--secondary-dark` | `#1a1f2e` | Card/box backgrounds |
| Primary accent | `--accent-red` | `#ff4444` | Buttons, titles, CTA |
| Secondary accent | `--accent-orange` | `#ff6b35` | Hover states, highlights |
| Main text | `--text-light` | `#ffffff` | Body text |
| Subtle text | `--text-gray` | `#b0b0b0` | Secondary text |

**Example**: To change accent color from red to blue:
```css
--accent-red: #0066ff;        /* Change to any color */
```

### Font Customization

**Location**: Line 89 in `style.css`

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

Replace with your preferred font family:
```css
font-family: 'Poppins', 'Ubuntu', 'Arial', sans-serif;
```

### Size Customization

- **Heading sizes**: Lines 131-157 (h1, h2, h3, h4)
- **Spacing sizes**: Lines 25-32 (var(--spacing-*))
- **Button sizes**: Lines 236-265

---

## 📄 Content Files: HTML Templates

### Home Page: `templates/index.html`

**Key sections to update:**

1. **Hero tagline** (Line ~11):
   ```html
   <p class="hero-tagline">TV & Mobile Repair | Remote Sales | Electronics Repair</p>
   ```
   Change services listed here.

2. **Hero description** (Line ~12):
   ```html
   <p class="hero-description">Reliable and affordable repair services...</p>
   ```

3. **Service cards** (Lines ~35-68):
   - Update service names
   - Update service icons (use emoji or symbols)

### Services Page: `templates/services.html`

**9 Service cards** - Each can be customized:

```html
<div class="service-card-full">
    <div class="service-card-icon">📺</div>
    <h3>Service Name</h3>
    <p>Service description...</p>
    <a href="..." class="btn btn-small">Inquire Now</a>
</div>
```

Update:
- Service icon (emoji or symbol)
- Service name
- Service description
- WhatsApp inquiry link (auto-generated)

### About Page: `templates/about.html`

**Key sections:**

1. **About text** (Lines ~15-20):
   ```html
   <p>Shivkrupa Mobile & Electronics is a trusted local repair service center...</p>
   ```

2. **Features list** (Lines ~22-27):
   ```html
   <li>✓ Experienced Technicians</li>
   <li>✓ Fast & Reliable Service</li>
   ```

3. **Statistics** (Lines ~38-55):
   ```html
   <div class="stat-number">10+</div>
   <div class="stat-label">Years of Experience</div>
   ```
   Update numbers and labels.

### Repair Form: `templates/repair.html`

**Form fields** (Lines ~22-68):

```html
<option value="TV Repair">TV Repair</option>
<option value="Mobile Repair">Mobile Repair</option>
<option value="Display Replacement">Display Replacement</option>
<!-- Add/remove options as needed -->
```

The form automatically generates WhatsApp message with all fields.

### Contact Page: `templates/contact.html`

**Key sections to update:**

1. **Phone info** (Lines ~18-20):
   ```html
   <p class="contact-info">+91-XXXXXXXXXX</p>
   ```

2. **WhatsApp** (Lines ~28-30):
   ```html
   <p class="contact-info">+91-XXXXXXXXXX</p>
   ```

3. **Address** (Lines ~38-40):
   ```html
   <p class="contact-info">Shop Address</p>
   <p class="contact-info">Your City, Your State</p>
   ```

4. **Opening Hours** (Lines ~48-50):
   ```html
   <p class="contact-info">Mon - Sat: 10:00 AM - 9:00 PM</p>
   <p class="contact-info">Sun: 12:00 PM - 8:00 PM</p>
   ```

5. **Google Maps** (Line ~57):
   ```html
   <iframe src="GOOGLE_MAPS_URL" ...></iframe>
   ```

---

## 🔗 Navigation & Footer: `templates/base.html`

### Logo Customization

**Location**: Lines ~45-50

```html
<div class="logo-text">
    <div class="logo-main">SHIVKRUPA</div>
    <div class="logo-sub">Mobile & Electronics</div>
</div>
```

Update business name as needed.

### Footer Content

**Quick Links** (Lines ~119-125):
- Update if you change page names/URLs

**Contact Info** (Lines ~139-142):
- Phone number
- WhatsApp link
- Address
- Opening hours

---

## 🔍 SEO & Meta Data: `templates/base.html`

**Meta tags** (Lines ~6-20):

```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
```

**Title tag** (Line ~29):
```html
<title>Shivkrupa Mobile & Electronics | TV & Mobile Repair</title>
```

**JSON-LD Schema** (Lines ~22-48):
- Update phone number
- Update address
- Update opening hours
- Update business description

---

## 📊 Quick Change Reference

### To Change...

| Change | File | Location |
|--------|------|----------|
| Phone number | `js/script.js` + `html` files | Line 8 & various |
| WhatsApp number | `js/script.js` | Line 9 |
| Address | `js/script.js` + `contact.html` | Line 10 & various |
| Opening hours | `js/script.js` + `contact.html` | Line 11 & various |
| Business name | `base.html` | Logo area |
| Accent colors | `css/style.css` | Lines 15-16 |
| Service list | `services.html` | Throughout |
| About text | `about.html` | Lines 15-20 |
| Statistics | `about.html` | Lines 38-55 |
| Contact info | `contact.html` | Lines 18-50 |
| Google Maps | `contact.html` | Line 57 |

---

## ⚙️ Advanced Configuration

### Add New Service

**File**: `templates/services.html`

Add before closing `</div>` of services grid:

```html
<div class="service-card-full">
    <div class="service-card-icon">🔧</div>
    <h3>Your Service Name</h3>
    <p>Service description here.</p>
    <a href="https://wa.me/91XXXXXXXXXX?text=Hello%20Shivkrupa%2C%20I%20need%20service%20name" class="btn btn-small">Inquire Now</a>
</div>
```

Also add to repair form dropdown in `templates/repair.html`:

```html
<option value="Your Service Name">Your Service Name</option>
```

### Add New Page

1. Create new file in `templates/`: `templates/newpage.html`
2. Extend base.html:
   ```html
   {% extends "base.html" %}
   {% block content %}
   <!-- Your content -->
   {% endblock %}
   ```
3. Add route in `app.py`:
   ```python
   @app.route('/newpage')
   def newpage():
       return render_template('newpage.html')
   ```
4. Add link in `templates/base.html` navigation

---

## 🎯 Most Important Changes (Do These First!)

1. ✅ **`PHONE_NUMBER`** in `static/js/script.js` line 8
2. ✅ **`WHATSAPP_NUMBER`** in `static/js/script.js` line 9  
3. ✅ **`SHOP_ADDRESS`** in `static/js/script.js` line 10
4. ✅ **Google Maps URL** in `templates/contact.html`
5. ✅ **Opening hours** in `static/js/script.js` and `templates/contact.html`
6. ✅ **About page statistics** in `templates/about.html`

Do these 6 things first, then test thoroughly!

---

## 💾 Backup Before Editing

Always keep a backup:
1. Zip your `shivkrupa-website` folder
2. Save copy to OneDrive/cloud
3. Then make changes

This way you can always restore if needed.

---

## ✅ Validation Checklist

After making changes:

- [ ] Python syntax is valid
- [ ] HTML is valid (no missing closing tags)
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Mobile version works
- [ ] No console errors in browser
- [ ] Performance acceptable

---

**That's it! You now know how to customize every part of your website.** 🎉

Any questions? Check the relevant HTML file - there are comments throughout!
