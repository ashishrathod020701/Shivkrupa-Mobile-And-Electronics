/*
   Shivkrupa Mobile & Electronics Website
   Client-side navigation and WhatsApp booking
*/

const CONFIG = {
    PHONE_NUMBER: '+91-9860310070',
    WHATSAPP_NUMBER: '919860310070',
    GOOGLE_MAPS_URL: 'https://maps.app.goo.gl/z13GHaNMzcweWKhSA'
};

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.classList.add('show');
    }
}

function resetFormErrors() {
    document.querySelectorAll('.error-message').forEach((element) => {
        element.textContent = '';
        element.classList.remove('show');
    });
}

function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('.nav-item').forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

function setupRepairForm() {
    const repairForm = document.getElementById('repairForm');
    if (!repairForm) return;

    repairForm.addEventListener('submit', (event) => {
        event.preventDefault();
        resetFormErrors();

        const values = {
            name: document.getElementById('customerName').value.trim(),
            phone: document.getElementById('phoneNumber').value.trim(),
            device: document.getElementById('deviceType').value.trim(),
            service: document.getElementById('service').value,
            problem: document.getElementById('problem').value.trim(),
            date: document.getElementById('preferredDate').value,
            time: document.getElementById('preferredTime').value,
            address: document.getElementById('address').value.trim()
        };
        let isValid = true;

        if (values.name.length < 2) { showError('nameError', 'Please enter your name'); isValid = false; }
        if (!/^[0-9+\-\s()]{10,18}$/.test(values.phone)) { showError('phoneError', 'Please enter a valid mobile number'); isValid = false; }
        if (!values.device) { showError('deviceError', 'Please enter your device type'); isValid = false; }
        if (!values.service) { showError('serviceError', 'Please select a service'); isValid = false; }
        if (!values.problem) { showError('problemError', 'Please describe the problem'); isValid = false; }
        if (!values.date) { showError('dateError', 'Please select a preferred date'); isValid = false; }
        if (!values.time) { showError('timeError', 'Please select a preferred time'); isValid = false; }
        if (!isValid) return;

        const message = [
            'Hello Shivkrupa Mobile & Electronics,',
            '',
            'I want to request a repair service.',
            '',
            `*Name:* ${values.name}`,
            `*Mobile:* ${values.phone}`,
            `*Device:* ${values.device}`,
            `*Service:* ${values.service}`,
            `*Problem:* ${values.problem}`,
            `*Preferred date:* ${values.date}`,
            `*Preferred time:* ${values.time}`,
            `*Address/Location:* ${values.address || 'Not provided'}`,
            '',
            'Please contact me.'
        ].join('\n');

        window.location.href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    });
}

function setupConfiguredLinks() {
    document.querySelectorAll('[data-phone]').forEach((element) => {
        element.textContent = CONFIG.PHONE_NUMBER;
        element.href = `tel:${CONFIG.PHONE_NUMBER}`;
    });
    document.querySelectorAll('[data-maps]').forEach((element) => {
        element.href = CONFIG.GOOGLE_MAPS_URL;
    });
}

function observeCards() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    document.querySelectorAll('.service-card, .service-card-full, .feature-card, .stat-card, .contact-card').forEach((card) => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupRepairForm();
    setupConfiguredLinks();
    observeCards();
});
