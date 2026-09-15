# Shivkrupa Mobile & Electronics Website

A professional, modern, and fully responsive website for a local electronics repair shop. Built with Flask, HTML5, CSS3, and vanilla JavaScript. No database required.

## 🎯 Features

- ✅ **No Database** - Simple, fast, and secure
- ✅ **Mobile Responsive** - Works perfectly on all devices
- ✅ **Professional Design** - Dark theme with red/orange accents
- ✅ **Direct Communication** - Phone, WhatsApp, and Google Maps integration
- ✅ **Repair Request Form** - Direct WhatsApp integration
- ✅ **SEO Optimized** - Proper meta tags and structured data
- ✅ **No Bootstrap** - Pure CSS with great performance
- ✅ **Smooth Animations** - Professional transitions and effects
- ✅ **Easy Configuration** - Simple JSON config for business info

## 📁 Project Structure

```
shivkrupa-website/
├── app.py                    # Flask application
├── requirements.txt          # Python dependencies
├── README.md                 # This file
│
├── templates/
│   ├── base.html            # Base template with navigation & footer
│   ├── index.html           # Home page
│   ├── services.html        # Services page
│   ├── about.html           # About us page
│   ├── repair.html          # Repair request form
│   └── contact.html         # Contact page
│
└── static/
    ├── css/
    │   └── style.css        # Main stylesheet
    ├── js/
    │   └── script.js        # JavaScript functionality
    └── images/
        ├── logo.png         # Shop logo
        ├── hero-tv.png      # Hero section images
        ├── mobile-repair.png
        ├── shop.jpg         # Shop interior image
        └── (other images)
```

## 🚀 Quick Start

### 1. Prerequisites

- Python 3.7 or higher
- pip (Python package manager)
- A text editor or VS Code

### 2. Installation

1. **Clone or download this project** to your desired location

2. **Open terminal/PowerShell** in the project directory

3. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   ```

4. **Activate virtual environment**:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

5. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

### 3. Run Locally

1. **Start the Flask server**:
   ```bash
   python app.py
   ```

2. **Open browser** and go to:
   ```
   http://localhost:5000
   ```

3. **Navigate** through pages:
   - Home: `/`
   - Services: `/services`
   - About: `/about`
   - Repair Request: `/repair`
   - Contact: `/contact`

### 4. Stop the Server

Press `Ctrl + C` in the terminal

## 📝 Configuration & Customization

### Updating Business Information

All business information is centralized in **`static/js/script.js`** in the `CONFIG` object.

Open `static/js/script.js` and update:

```javascript
const CONFIG = {
    PHONE_NUMBER: '+91-XXXXXXXXXX',          // Replace with your phone
    WHATSAPP_NUMBER: '91XXXXXXXXXX',         // Without + symbol
    SHOP_ADDRESS: 'Your Shop Address, City, State, Pin Code',
    GOOGLE_MAPS_URL: 'https://maps.google.com/?q=...',
    OPENING_HOURS: {
        weekdays: '10:00 AM - 9:00 PM',
        sunday: '12:00 PM - 8:00 PM'
    }
};
```

### Phone Number

1. Open `static/js/script.js`
2. Find `PHONE_NUMBER: '+91-XXXXXXXXXX'`
3. Replace with your actual phone number
4. Also update in `templates/base.html` footer if needed

### WhatsApp Number

1. Open `static/js/script.js`
2. Find `WHATSAPP_NUMBER: '91XXXXXXXXXX'`
3. Replace with your WhatsApp number (country code without +)
   - Example: For +91-9876543210, use `919876543210`

### Shop Address

1. Update in `static/js/script.js` under `SHOP_ADDRESS`
2. Also update in `templates/contact.html` for display

### Google Maps Location

1. Go to Google Maps and find your shop
2. Click "Share" → Copy embed code
3. Replace the iframe URL in `templates/contact.html`:
   ```html
   <iframe src="NEW_GOOGLE_MAPS_EMBED_URL" ...></iframe>
   ```

### Shop Images

1. Add your images to `static/images/`
2. Create placeholder divs in templates if images don't load
3. Images currently use emoji icons (can be replaced with actual images)

### Shop Logo

1. Create a logo image and save as `static/images/logo.png`
2. Add to header in `templates/base.html` if desired

### Opening Hours

1. Update in `static/js/script.js` under `OPENING_HOURS`
2. Also update displayed hours in `templates/contact.html`

### About Us Statistics

These are easily editable in `templates/about.html`:

```html
<div class="stat-card">
    <div class="stat-number">10+</div>
    <div class="stat-label">Years of Experience</div>
</div>
```

Simply change the numbers as needed.

## 📱 Testing on Mobile

### Using VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `templates/index.html`
3. Select "Open with Live Server"
4. Scan QR code or visit URL on mobile

### Using Local Network

1. Find your computer's IP address:
   - Windows: Open cmd and type `ipconfig`
   - Look for "IPv4 Address" (usually 192.168.x.x)

2. On mobile, visit: `http://YOUR_IP_ADDRESS:5000`

3. Test:
   - Navigation on small screens
   - Hamburger menu functionality
   - Button clicks
   - Form submission
   - WhatsApp links
   - Phone dialer

## 🌐 Deployment

### Option 1: Heroku (Free)

1. **Create Heroku account** at heroku.com

2. **Install Heroku CLI** from heroku.com/cli

3. **Login to Heroku**:
   ```bash
   heroku login
   ```

4. **Create Heroku app**:
   ```bash
   heroku create your-app-name
   ```

5. **Deploy**:
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   git push heroku main
   ```

6. **Visit your site**:
   ```
   https://your-app-name.herokuapp.com
   ```

### Option 2: PythonAnywhere (Recommended for Beginners)

1. Go to pythonanywhere.com
2. Sign up for a free account
3. Upload files or clone from GitHub
4. Configure web app with Flask
5. Your site will be available at `yourusername.pythonanywhere.com`

### Option 3: AWS/Google Cloud/Azure

These require more technical setup. Refer to official documentation.

### Option 4: Self-Hosting

1. Rent a VPS (Virtual Private Server)
2. Install Python and dependencies
3. Run Flask with a production server like Gunicorn
4. Use Nginx as reverse proxy
5. Set up SSL certificate (Let's Encrypt)

## 🔒 Security Notes

- ✅ No customer data is stored
- ✅ No database vulnerabilities
- ✅ No authentication needed
- ✅ All communication through external services (WhatsApp, Google)
- ⚠️ Keep phone numbers private before deployment
- ⚠️ Use HTTPS when deployed (free with Let's Encrypt)

## 📊 Performance

- Fully responsive CSS (no Bootstrap overhead)
- Vanilla JavaScript (no jQuery required)
- Lazy loading ready for images
- Mobile-first design approach
- Optimized animations
- Fast page load times

## 🎨 Customization

### Colors

Edit CSS variables in `static/css/style.css`:

```css
:root {
    --accent-red: #ff4444;      /* Red accent */
    --accent-orange: #ff6b35;   /* Orange accent */
    --primary-dark: #0f1419;    /* Dark background */
    --text-light: #ffffff;      /* Light text */
}
```

### Fonts

Change in `static/css/style.css`:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Content

All content is in template files in `templates/` folder. Simply edit the HTML.

## ❓ FAQ

**Q: Do I need to know coding?**
A: Basic understanding helps, but templates are well-commented.

**Q: Can I add a database later?**
A: Yes, simply add SQLAlchemy and modify app.py as needed.

**Q: How do I handle customer bookings?**
A: Currently, the form sends to WhatsApp. Add a third-party booking service if needed.

**Q: Can I change the design?**
A: Absolutely! Edit `style.css` to modify the appearance.

**Q: Is it free?**
A: Yes! The code is free. Hosting may require payment.

**Q: Can I use this for other businesses?**
A: Yes, it's easily customizable for any service-based business.

## 📞 Support & Help

For common issues:

1. **Phone numbers not working**: Check format in `script.js`
2. **Maps not showing**: Verify Google Maps embed URL
3. **Mobile menu not closing**: Clear browser cache
4. **Form not opening WhatsApp**: Check WhatsApp number format

## 📄 License

Free to use and modify for personal/commercial use.

---

**Made with ❤️ for Shivkrupa Mobile & Electronics**

**Last Updated**: 2026

---

## 📋 Pre-Deployment Checklist

- [ ] Updated phone number in script.js
- [ ] Updated WhatsApp number in script.js
- [ ] Added shop address
- [ ] Updated Google Maps URL
- [ ] Updated opening hours
- [ ] Added shop images (optional)
- [ ] Tested on mobile
- [ ] Tested all forms and buttons
- [ ] Checked all links
- [ ] Verified responsiveness on small screens
- [ ] Updated About page statistics
- [ ] Added logo/branding

## 🚀 Ready to Deploy?

Once you've completed the checklist above:

1. Test locally one more time
2. Choose a hosting provider
3. Follow deployment instructions for your provider
4. Share your website!

---

**Questions?** Check common issues or refer to the code comments throughout the project.
