# Quick Setup Guide - Shivkrupa Mobile & Electronics Website

## ⚡ 5-Minute Quick Start

### Step 1: Open Terminal/PowerShell
- Windows: Right-click on folder → "Open with PowerShell" or "Open in Terminal"
- macOS: Terminal
- Linux: Any terminal

### Step 2: Install Python Dependencies
```powershell
pip install -r requirements.txt
```

### Step 3: Run the Website
```powershell
python app.py
```

### Step 4: Open in Browser
Visit: **http://localhost:5000**

---

## 🔧 Essential Changes (DO THIS FIRST!)

### 1. Update Your Phone Number
**File**: `static\js\script.js` (Line ~8)

Find this:
```javascript
PHONE_NUMBER: '+91-XXXXXXXXXX',
```

Change to your actual phone number:
```javascript
PHONE_NUMBER: '+91-9876543210',  // Your number here
```

### 2. Update WhatsApp Number
**File**: `static\js\script.js` (Line ~9)

Find this:
```javascript
WHATSAPP_NUMBER: '91XXXXXXXXXX',
```

Change to your WhatsApp number (remove +, keep country code):
```javascript
WHATSAPP_NUMBER: '919876543210',  // Your number
```

Example:
- If your number is: +91-9876543210
- Use in code: 919876543210

### 3. Update Shop Address
**File**: `static\js\script.js` (Line ~10)

Find this:
```javascript
SHOP_ADDRESS: 'Your Shop Address, City, State, Pin Code',
```

Change to your shop address:
```javascript
SHOP_ADDRESS: 'Plot No. 123, Main Street, Your City, State 12345',
```

### 4. Update Google Maps
**File**: `templates\contact.html` (Search for `<iframe`)

1. Open Google Maps
2. Search for your shop location
3. Click "Share" button
4. Click "Embed a map"
5. Copy the iframe code
6. Replace the existing iframe in contact.html

---

## 📱 Page-by-Page Checklist

### Home Page (`/`)
- [ ] Hero section displays correctly
- [ ] Call Now button works (opens phone dialer)
- [ ] WhatsApp button works (opens WhatsApp)
- [ ] Get Directions works
- [ ] View All Services button goes to services page

### Services Page (`/services`)
- [ ] All 9 services display
- [ ] Inquire Now buttons work (opens WhatsApp with service name)
- [ ] Responsive on mobile

### About Page (`/about`)
- [ ] Update statistics:
  - Years of Experience
  - Happy Customers
  - Other claims
- [ ] Feature list displays
- [ ] Call to action buttons work

### Repair Request Page (`/repair`)
- [ ] Form has all fields:
  - Name (required)
  - Phone (required)
  - Service dropdown (required)
  - Device/Model (optional)
  - Problem description (required)
- [ ] Submit button opens WhatsApp with formatted message
- [ ] Form validation works

### Contact Page (`/contact`)
- [ ] Phone number displays
- [ ] WhatsApp number displays
- [ ] Address displays
- [ ] Opening hours display
- [ ] Google Maps shows your location
- [ ] All buttons work

---

## 🎨 Optional Customizations

### Change Colors
**File**: `static\css\style.css` (Lines 10-16)

```css
--accent-red: #ff4444;      /* Change red accent */
--accent-orange: #ff6b35;   /* Change orange accent */
--primary-dark: #0f1419;    /* Change dark background */
```

### Change Opening Hours
**File**: `static\js\script.js` (Lines 11-14)

```javascript
OPENING_HOURS: {
    weekdays: '10:00 AM - 9:00 PM',  // Weekday hours
    sunday: '12:00 PM - 8:00 PM'      // Sunday hours
}
```

### Update About Page Stats
**File**: `templates\about.html` (Search for "stat-number")

Change these values:
```html
<div class="stat-number">10+</div>
<div class="stat-label">Years of Experience</div>
```

### Add Shop Logo
1. Create/download your logo
2. Save as `static\images\logo.png`
3. (Optional) Uncomment logo display in `templates\base.html`

---

## 🧪 Testing Checklist

### Desktop Testing
- [ ] Open on desktop browser
- [ ] All pages load correctly
- [ ] Navigation bar works
- [ ] Hover effects work
- [ ] Forms submit (goes to WhatsApp)
- [ ] Links open correctly

### Mobile Testing
- [ ] Open on phone/tablet
- [ ] Hamburger menu appears
- [ ] Menu opens/closes
- [ ] All buttons are clickable
- [ ] Forms work on mobile
- [ ] Text is readable (not too small)
- [ ] Images resize properly
- [ ] No horizontal scrolling

### Link Testing
- [ ] Home navigation works
- [ ] All page links work
- [ ] Phone dialer works (tel: links)
- [ ] WhatsApp links work
- [ ] External links open in new tab
- [ ] Footer links work

---

## ⚠️ Common Issues & Fixes

### Issue: Phone button doesn't work on desktop
**Fix**: Phone links only work on devices with phone capability. Test on actual phone or use WhatsApp for desktop testing.

### Issue: Form not opening WhatsApp
**Fix**: 
1. Check WhatsApp number format in `script.js`
2. Should be 10-12 digits: `919876543210`
3. Clear browser cache

### Issue: Menu stays open on mobile
**Fix**: Clear browser cache, try incognito mode

### Issue: Colors look different
**Fix**: Clear browser cache (Ctrl+Shift+Delete)

### Issue: Images not showing
**Fix**: 
1. Currently uses emoji icons (no images needed!)
2. To add custom images: save to `static\images\` folder
3. Update HTML to reference image paths

---

## 🚀 Before Going Live

1. [ ] All business information updated
2. [ ] Tested on computer
3. [ ] Tested on phone
4. [ ] All buttons/forms work
5. [ ] No placeholder text remaining
6. [ ] Images/branding added (if using)
7. [ ] Opening hours accurate
8. [ ] Address correct

---

## 📦 Files Included

```
shivkrupa-website/
├── app.py                      # Main Flask app
├── requirements.txt            # Dependencies
├── README.md                   # Full documentation
├── QUICKSTART.md              # This file
│
├── templates/
│   ├── base.html              # Navigation & Footer
│   ├── index.html             # Home page
│   ├── services.html          # Services listing
│   ├── about.html             # About us
│   ├── repair.html            # Repair form
│   └── contact.html           # Contact info
│
└── static/
    ├── css/style.css          # All styling
    ├── js/script.js           # All functionality
    └── images/                # Image folder (add your images here)
```

---

## ❓ Need Help?

Check these files:
- **For appearance**: `static\css\style.css`
- **For functionality**: `static\js\script.js`
- **For content**: `templates\*.html` files
- **For business info**: `static\js\script.js` CONFIG object

Each file has detailed comments explaining the code.

---

## 🎉 You're Done!

Your website is ready to use. Now:
1. Share it with customers
2. Test all buttons/forms
3. Collect feedback
4. Make improvements as needed

---

**Happy selling! 🚀**
