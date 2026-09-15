/*
   Shivkrupa Mobile & Electronics Website
   JavaScript - Navigation, Forms, and Interactions
*/

// ===== CONFIGURATION =====
// Replace these values with your actual business information
const CONFIG = {
    PHONE_NUMBER: '+91-9860310070',
    WHATSAPP_NUMBER: '919860310070', // Without + or country code format
    SHOP_ADDRESS: 'Sr.No.281, Gajanan Dairy backside H3, Pre School, Dhanori-Lohegaon Rd, opposite Porwal Road, Kutwal Colony, Lohegaon, Pune, Maharashtra 411047',
    GOOGLE_MAPS_URL: 'https://maps.app.goo.gl/z13GHaNMzcweWKhSA',
    OPENING_HOURS: {
        weekdays: '10:00 AM - 9:00 PM',
        sunday: '12:00 PM - 8:00 PM'
    }
};

// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when nav item is clicked
        const navItems = navMenu.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = hamburger.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ===== REPAIR FORM HANDLER =====
const repairForm = document.getElementById('repairForm');
if (repairForm) {
    repairForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const customerName = document.getElementById('customerName').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const service = document.getElementById('service').value;
        const problem = document.getElementById('problem').value.trim();
        
        // Reset error messages
        resetFormErrors();
        
        // Validate required fields
        let isValid = true;
        
        if (!customerName) {
            showError('nameError', 'Name is required');
            isValid = false;
        }
        
        if (!phoneNumber) {
            showError('phoneError', 'Phone number is required');
            isValid = false;
        }
        
        if (!service) {
            showError('serviceError', 'Please select a service');
            isValid = false;
        }
        
        if (!problem) {
            showError('problemError', 'Please describe the problem');
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Generate WhatsApp message
        const message = `Hello Shivkrupa Mobile & Electronics,\n\nI want to request a repair service.\n\n*Name:* ${customerName}\n*Phone:* ${phoneNumber}\n*Service:* ${service}\n*Problem:* ${problem}\n\nPlease contact me.`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp link
        const whatsappLink = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.location.href = whatsappLink;
        
        // Optionally reset form after successful submission
        // repairForm.reset();
    });
}

// ===== HELPER FUNCTIONS =====

/**
 * Show error message for a form field
 */
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.classList.add('show');
    }
}

/**
 * Reset all form error messages
 */
function resetFormErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });
}

/**
 * Format phone number for display
 */
function formatPhoneNumber(number) {
    return number.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3');
}

/**
 * Smooth scroll to section
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Update all phone numbers on page (if needed)
 */
function updatePhoneNumbers() {
    const phoneElements = document.querySelectorAll('[data-phone]');
    phoneElements.forEach(el => {
        el.textContent = CONFIG.PHONE_NUMBER;
        el.href = `tel:${CONFIG.PHONE_NUMBER}`;
    });
}

/**
 * Update all WhatsApp links on page
 */
function updateWhatsAppLinks() {
    const whatsappElements = document.querySelectorAll('[data-whatsapp]');
    whatsappElements.forEach(el => {
        const message = el.getAttribute('data-message') || 'Hello Shivkrupa Mobile & Electronics';
        const encodedMessage = encodeURIComponent(message);
        el.href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    });
}

/**
 * Update Google Maps links
 */
function updateMapsLinks() {
    const mapsElements = document.querySelectorAll('[data-maps]');
    mapsElements.forEach(el => {
        el.href = CONFIG.GOOGLE_MAPS_URL;
    });
}

// ===== PAGE LOAD INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    updatePhoneNumbers();
    updateWhatsAppLinks();
    updateMapsLinks();
    
    // Add scroll animation for cards
    observeElements();
    
    // Log configuration for debugging (remove in production)
    console.log('Shivkrupa Mobile & Electronics Website Loaded');
    console.log('Configuration ready. Update CONFIG object to change business details.');
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function observeElements() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observe all cards
    const cards = document.querySelectorAll(
        '.service-card, .service-card-full, .feature-card, ' +
        '.stat-card, .contact-card, .step-card'
    );
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// ===== UTILITY: COPY TO CLIPBOARD =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Copied to clipboard: ' + text);
    }).catch(function(err) {
        console.error('Failed to copy:', err);
    });
}

// ===== UTILITY: PRINT PAGE =====
function printPage() {
    window.print();
}

// ===== MOBILE MENU CLOSE ON NAVIGATION =====
window.addEventListener('beforeunload', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== PERFORMANCE: Lazy Load Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== THEME TOGGLE (Optional) =====
// Uncomment to add dark/light theme toggle
/*
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Load saved theme preference
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
});
*/

// ===== ANALYTICS TRACKING (Optional) =====
// Add your Google Analytics or other tracking code here
/*
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-primary')) {
        // Track button clicks
        console.log('Button clicked:', event.target.textContent);
    }
});
*/
