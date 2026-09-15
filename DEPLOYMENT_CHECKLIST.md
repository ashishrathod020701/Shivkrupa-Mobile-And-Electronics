# Deployment & Configuration Checklist

Complete this checklist before going live with your website.

## 🔧 STEP 1: Business Information Setup

### Phone Configuration
- [ ] Phone number updated in `static/js/script.js` (Line 8, `PHONE_NUMBER`)
- [ ] Phone number format: `'+91-9876543210'`
- [ ] Also update in `templates/base.html` footer links
- [ ] Tested phone button on actual device

### WhatsApp Configuration
- [ ] WhatsApp number updated in `static/js/script.js` (Line 9, `WHATSAPP_NUMBER`)
- [ ] Format without + symbol: `'919876543210'`
- [ ] Tested WhatsApp links on both desktop and mobile
- [ ] Verified WhatsApp Business account (optional but recommended)

### Shop Address
- [ ] Address updated in `static/js/script.js` (Line 10, `SHOP_ADDRESS`)
- [ ] Address also visible in `templates/contact.html`
- [ ] Verified address formatting

### Google Maps Integration
- [ ] Google Maps location found and embedded
- [ ] Embed URL updated in `templates/contact.html`
- [ ] Map displays correctly on all pages
- [ ] Get Directions button points to correct location

### Opening Hours
- [ ] Weekday hours updated in `static/js/script.js`
- [ ] Sunday hours updated (if different)
- [ ] Hours displayed in `templates/contact.html`
- [ ] Hours match actual business schedule

---

## 📄 STEP 2: Content Customization

### Home Page (`templates/index.html`)
- [ ] Tagline: "TV & Mobile Repair | Remote Sales | Electronics Repair" updated if needed
- [ ] Description matches your services
- [ ] Service cards display correct services
- [ ] All icons/emojis visible and appropriate

### Services Page (`templates/services.html`)
- [ ] All 9 services listed
- [ ] Service descriptions accurate to your business
- [ ] Service icons appropriate
- [ ] Inquire buttons have correct WhatsApp integration

### About Us Page (`templates/about.html`)
- [ ] Company description updated
- [ ] Feature list (checkmarks) accurate
- [ ] Years of experience updated (stat-number)
- [ ] Customer count realistic
- [ ] Mission statement reflects your values

### Repair Request Form (`templates/repair.html`)
- [ ] Form fields appropriate for your services
- [ ] Service dropdown includes all offered services
- [ ] WhatsApp message format clear
- [ ] Form validation works (required fields)

### Contact Page (`templates/contact.html`)
- [ ] Contact info section displays all methods
- [ ] Google Maps embedded correctly
- [ ] Opening hours accurate
- [ ] All buttons functional

---

## 🎨 STEP 3: Design & Branding

### Colors
- [ ] Red accent color suitable for your brand (#ff4444 default)
- [ ] Orange accent color suitable (#ff6b35 default)
- [ ] Dark theme appropriate for your shop
- [ ] Text contrast meets accessibility standards

### Images & Media
- [ ] Logo created/added (optional: `static/images/logo.png`)
- [ ] Shop interior image (optional: `static/images/shop.jpg`)
- [ ] All images properly sized
- [ ] All image paths correct
- [ ] Fallback emojis display if images missing

### Typography
- [ ] Fonts readable on all devices
- [ ] Headings clear and prominent
- [ ] Body text appropriate size
- [ ] Mobile text size suitable (16px or larger)

---

## 🧪 STEP 4: Testing

### Desktop Testing
- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Navigation works on all pages
- [ ] Hover effects display correctly
- [ ] Forms submit and open WhatsApp
- [ ] All links working
- [ ] Page loads quickly
- [ ] No console errors

### Mobile Testing (Critical!)
- [ ] Test on iPhone and Android
- [ ] Hamburger menu appears and functions
- [ ] Menu closes when selecting items
- [ ] All buttons clickable (no hover issues)
- [ ] Forms work correctly
- [ ] Phone button opens phone dialer
- [ ] WhatsApp button opens WhatsApp app
- [ ] Google Maps opens in map app
- [ ] No horizontal scrolling
- [ ] Images responsive

### Tablet Testing
- [ ] Responsive layout works on tablets
- [ ] Navigation appropriate for screen size
- [ ] Content readable and well-spaced

### Accessibility Testing
- [ ] Tab navigation works
- [ ] Focus visible on all interactive elements
- [ ] Color contrast sufficient (WCAG AA standard)
- [ ] Images have alt text (emoji descriptions)
- [ ] Heading hierarchy correct (H1 > H2 > H3)

---

## ⚡ STEP 5: Performance

### Load Time
- [ ] Page loads in under 3 seconds
- [ ] CSS properly linked and loads
- [ ] JavaScript loads without errors
- [ ] No render-blocking resources

### Mobile Optimization
- [ ] No excessive animations
- [ ] Touch targets minimum 44x44px
- [ ] Form inputs with appropriate keyboards
- [ ] Proper viewport meta tag set

### Browser Compatibility
- [ ] Works in Chrome 90+
- [ ] Works in Firefox 88+
- [ ] Works in Safari 14+
- [ ] Works in Edge 90+
- [ ] Works in mobile browsers

---

## 🔒 STEP 6: Security

- [ ] No sensitive data stored locally
- [ ] No database vulnerabilities (no database!)
- [ ] No exposed API keys
- [ ] Phone numbers not visible in page source comments
- [ ] HTTPS will be used in production

---

## 🚀 STEP 7: Deployment Preparation

### Code Quality
- [ ] No console errors
- [ ] No broken links
- [ ] No unused code
- [ ] Comments added where complex
- [ ] Code is readable and maintainable

### File Organization
- [ ] All files in correct directories
- [ ] No extra/test files left over
- [ ] `.gitignore` created (if using Git)
- [ ] `requirements.txt` updated and correct

### Documentation
- [ ] README.md is complete
- [ ] QUICKSTART.md is helpful
- [ ] Comments in code explain key sections
- [ ] Configuration clearly marked

---

## 📋 STEP 8: Hosting Selection

### Choose Hosting Provider
- [ ] **Option 1: Heroku** - Best for beginners (free tier with limitations)
- [ ] **Option 2: PythonAnywhere** - Easiest setup, good free tier
- [ ] **Option 3: Render** - Good performance, free tier available
- [ ] **Option 4: Self-hosted VPS** - Full control, more technical

### Pre-Deployment Setup
- [ ] Domain name purchased (optional)
- [ ] Hosting account created
- [ ] Database not needed (advantage!)
- [ ] SSL certificate plan (usually free)

---

## 🌐 STEP 9: Deployment Steps

### For Heroku:
- [ ] `pip freeze > requirements.txt` (if updating)
- [ ] Create `Procfile` with: `web: python app.py`
- [ ] `git init` and commit files
- [ ] `heroku create` your app
- [ ] `git push heroku main` to deploy
- [ ] Test live URL

### For PythonAnywhere:
- [ ] Create account
- [ ] Upload files or clone repository
- [ ] Create web app with Flask
- [ ] Configure WSGI file
- [ ] Test live URL

### For Other Hosts:
- [ ] Follow host-specific documentation
- [ ] Install Python dependencies
- [ ] Configure production server (Gunicorn)
- [ ] Set up reverse proxy (Nginx)
- [ ] Enable SSL certificate

---

## ✅ STEP 10: Post-Deployment

### Initial Verification
- [ ] Website is live and accessible
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms work and open WhatsApp
- [ ] Phone button works on mobile
- [ ] Maps integration working
- [ ] No console errors
- [ ] Performance acceptable

### Monitoring
- [ ] Set up basic monitoring (optional)
- [ ] Monitor error logs
- [ ] Check form submissions
- [ ] Verify uptime

### Marketing
- [ ] Share link with customers
- [ ] Add to business cards
- [ ] Share on social media
- [ ] Add to WhatsApp bio
- [ ] Tell friends and family

---

## 📊 STEP 11: Maintenance

### Regular Tasks
- [ ] Monthly: Check for broken links
- [ ] Monthly: Test forms
- [ ] Quarterly: Update content if needed
- [ ] Quarterly: Check analytics (if added)
- [ ] Yearly: Review and update business info

### Updates
- [ ] Keep Python/Flask updated
- [ ] Keep dependencies current
- [ ] Update content regularly
- [ ] Add new services as they're offered

---

## 🎯 Launch Checklist Summary

**Before Launch:**
- [ ] All business info configured
- [ ] All pages tested
- [ ] Mobile fully tested
- [ ] Content proofread
- [ ] No broken links
- [ ] Performance acceptable

**At Launch:**
- [ ] Hosting provider ready
- [ ] Domain configured (if using)
- [ ] SSL certificate active
- [ ] Website live
- [ ] Test everything once more

**After Launch:**
- [ ] Monitor for errors
- [ ] Collect customer feedback
- [ ] Update content regularly
- [ ] Track form submissions
- [ ] Celebrate success! 🎉

---

## ⚠️ Important Reminders

1. **Test Before Going Live** - Test all functionality multiple times
2. **Mobile Testing Critical** - Most customers will visit on phone
3. **Keep Backups** - Always keep a backup of your files
4. **Update Regularly** - Keep content fresh and accurate
5. **Monitor Performance** - Check that site loads quickly
6. **Security First** - Don't store sensitive data

---

## 📞 Quick Links

- **Local Testing**: `http://localhost:5000`
- **Production**: Will be provided after deployment
- **Admin**: No admin panel needed (no database!)
- **Support**: Refer to README.md and QUICKSTART.md

---

## ✨ Congratulations!

You now have a professional, mobile-responsive website for Shivkrupa Mobile & Electronics. 

**Next Steps:**
1. Run through this checklist
2. Deploy to chosen platform
3. Share with your customers
4. Enjoy the leads coming in! 🚀

---

**Questions?** Check the documentation files included with the project.

**Last Updated**: 2026
