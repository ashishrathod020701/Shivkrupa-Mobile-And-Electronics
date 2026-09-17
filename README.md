# Shivkrupa Mobile & Electronics

Static, mobile-friendly website for Shivkrupa Mobile & Electronics in Pune. The deployed site uses HTML5, CSS3, and vanilla JavaScript only. It does not use Flask, Python, a database, or a server-side form handler.

## Pages

- `index.html` - Home page
- `services.html` - Repair and sales services
- `about.html` - About the shop
- `repair.html` - Client-side repair request form
- `contact.html` - Phone, WhatsApp, address, and Google Maps links

## Static structure

```text
.
├── index.html
├── about.html
├── contact.html
├── repair.html
├── services.html
├── static/
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
├── app.py
├── requirements.txt
└── templates/                 # Preserved Flask source and rollback copy
```

`app.py`, `requirements.txt`, and `templates/` are retained for rollback. They are not used by the static site and can be removed after the Render static deployment has been verified.

## Booking behavior

The repair form validates name, mobile number, device type, service, problem description, preferred date, and preferred time in the browser. It then formats the details and opens a `https://wa.me/919860310070` link. The optional address/location is included when provided. No booking data is sent to or stored on a server.

## Render Static Site settings

Create or update the Render service with:

- **Branch:** `main`
- **Root Directory:** leave blank
- **Build Command:** leave blank
- **Publish Directory:** `.`

Do not configure Gunicorn, Python, Flask, or MySQL.

## Local verification

Open `index.html` directly in a browser, or use any static file server. Test all navigation links, the call button, WhatsApp buttons, Google Maps button, responsive hamburger menu, and repair form validation.

## Git commands

```powershell
git add index.html services.html about.html contact.html repair.html static/js/script.js README.md
git commit -m "Convert website to static Render site"
git push origin main
```
