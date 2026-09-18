/*
   Shivkrupa Mobile & Electronics Website
   Shared navigation, service config, and WhatsApp booking flow
*/

const CONFIG = {
    PHONE_NUMBER: '+91-9860310070',
    WHATSAPP_NUMBER: '919860310070',
    GOOGLE_MAPS_URL: 'https://maps.app.goo.gl/z13GHaNMzcweWKhSA'
};

const TV_SERVICE_CONFIG = {
    checkup: {
        key: 'checkup',
        name: 'TV Check Up',
        shortDescription: 'Get your TV inspected by our technician at your home.',
        description: 'Get your TV inspected by our technician at your home.',
        icon: '📺',
        heading: 'TV CHECK UP – HOME SERVICE',
        includeList: [
            'Technician home visit',
            'TV inspection',
            'Basic fault diagnosis',
            'Identification of the possible issue',
            'Repair/solution information'
        ],
        homeVisitInfo: 'Our technician visits your home to inspect the TV, identify the likely issue, and explain the next repair steps clearly.',
        charges: [
            { label: 'TV Check Up / Inspection', price: '₹299' }
        ],
        timeSlots: [
            '09:00 AM – 10:00 AM',
            '10:00 AM – 11:00 AM',
            '11:00 AM – 12:00 PM',
            '12:00 PM – 01:00 PM',
            '02:00 PM – 03:00 PM',
            '03:00 PM – 04:00 PM',
            '04:00 PM – 05:00 PM',
            '05:00 PM – 06:00 PM',
            '06:00 PM – 07:00 PM'
        ],
        tvSizes: ['32 inch', '43 inch', '50 inch', '55 inch', '65 inch', '75 inch', 'Other']
    },
    installation: {
        key: 'installation',
        name: 'TV Installation',
        shortDescription: 'Professional and safe TV installation at your home.',
        description: 'Professional and safe TV installation at your home.',
        icon: '🛠️',
        heading: 'TV INSTALLATION – HOME SERVICE',
        includeList: [
            'Wall mounting or stand installation',
            'Wall bracket and TV placement check',
            'Cable connection and power setup',
            'Device and port safety check',
            'Basic setup guidance'
        ],
        homeVisitInfo: 'Our technician will visit your home, install the TV safely, and ensure the setup is secure and ready for use.',
        charges: [
            { label: '32–43 inch', price: '₹499' },
            { label: '50–55 inch', price: '₹699' },
            { label: '65 inch and above', price: '₹999' }
        ],
        timeSlots: [
            '09:00 AM – 10:00 AM',
            '10:00 AM – 11:00 AM',
            '11:00 AM – 12:00 PM',
            '12:00 PM – 01:00 PM',
            '02:00 PM – 03:00 PM',
            '03:00 PM – 04:00 PM',
            '04:00 PM – 05:00 PM',
            '05:00 PM – 06:00 PM',
            '06:00 PM – 07:00 PM'
        ],
        tvSizes: ['32 inch', '43 inch', '50 inch', '55 inch', '65 inch', '75 inch', 'Other']
    },
    uninstallation: {
        key: 'uninstallation',
        name: 'TV Uninstallation',
        shortDescription: 'Safe and hassle-free TV removal service.',
        description: 'Safe and hassle-free TV removal service.',
        icon: '🧰',
        heading: 'TV UNINSTALLATION – HOME SERVICE',
        includeList: [
            'Safe TV removal from wall or stand',
            'Careful disconnection of power and cable',
            'Protection of fittings and accessories',
            'Cleanup after removal',
            'Removal guidance and support'
        ],
        homeVisitInfo: 'Our technician handles the uninstallation safely and carefully, minimizing the chance of damage to your wall, fittings, or TV.',
        charges: [
            { label: 'TV Uninstallation', price: '₹399' }
        ],
        timeSlots: [
            '09:00 AM – 10:00 AM',
            '10:00 AM – 11:00 AM',
            '11:00 AM – 12:00 PM',
            '12:00 PM – 01:00 PM',
            '02:00 PM – 03:00 PM',
            '03:00 PM – 04:00 PM',
            '04:00 PM – 05:00 PM',
            '05:00 PM – 06:00 PM',
            '06:00 PM – 07:00 PM'
        ],
        tvSizes: ['32 inch', '43 inch', '50 inch', '55 inch', '65 inch', '75 inch', 'Other']
    }
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

function getServiceKeyFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || 'checkup';
}

function getSelectedService() {
    return TV_SERVICE_CONFIG[getServiceKeyFromQuery()] || TV_SERVICE_CONFIG.checkup;
}

function renderServiceCards() {
    const homeContainer = document.getElementById('homeServiceCards');
    const servicePageContainer = document.getElementById('serviceCardsList');

    const template = (service) => `
        <div class="service-card service-card-link">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.name}</h3>
            <p>${service.shortDescription}</p>
            <a href="tv-service.html?service=${service.key}" class="btn btn-primary btn-small">View Service</a>
        </div>
    `;

    if (homeContainer) {
        homeContainer.innerHTML = Object.values(TV_SERVICE_CONFIG).map(template).join('');
    }

    if (servicePageContainer) {
        servicePageContainer.innerHTML = Object.values(TV_SERVICE_CONFIG).map(template).join('');
    }
}

function renderServiceDetailPage() {
    const container = document.getElementById('serviceDetailContent');
    if (!container) return;

    const service = getSelectedService();
    const chargeRows = service.charges.map((item) => `
        <tr>
          <td>${item.label}</td>
          <td class="price-cell">${item.price}</td>
        </tr>
    `).join('');

    container.innerHTML = `
        <section class="service-detail-section">
            <div class="service-detail-shell">
                <div class="service-detail-card">
                    <div class="service-detail-header">
                        <div class="detail-actions">
                            <a href="services.html" class="btn btn-tertiary">← Back to Services</a>
                        </div>
                    </div>
                    <div class="service-detail-body">
                        <div class="service-visual">
                            <div class="service-visual-badge">${service.icon}</div>
                        </div>
                        <div class="service-content">
                            <div class="service-section-label">Home service</div>
                            <h2>${service.heading}</h2>
                            <p class="service-description">${service.description}</p>

                            <div class="service-section-label">What is included</div>
                            <ul class="service-feature-list">
                                ${service.includeList.map((item) => `<li>${item}</li>`).join('')}
                            </ul>

                            <div class="service-info-box">
                                <h3>Home visit information</h3>
                                <p>${service.homeVisitInfo}</p>
                            </div>

                            <div class="service-charge-card">
                                <h3>Service charges</h3>
                                <table class="service-charge-table">
                                    <thead>
                                        <tr>
                                            <th>Service</th>
                                            <th>Charge</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${chargeRows}
                                    </tbody>
                                </table>
                            </div>

                            <p class="service-note">Charges may vary depending on location and actual service requirements.</p>
                            <p class="service-note">Final charges will be confirmed before/after the service as applicable.</p>
                            <div class="detail-actions">
                                <a href="book-home-visit.html?service=${service.key}" class="btn btn-success">Book Home Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function setupBookingPage() {
    const bookingForm = document.getElementById('bookingForm');
    if (!bookingForm) return;

    const service = getSelectedService();
    const selectedServiceInput = document.getElementById('selectedService');
    const tvSizeSelect = document.getElementById('tvSize');
    const selectedTimeInput = document.getElementById('selectedTime');
    const timeSlotsContainer = document.getElementById('timeSlotsContainer');
    const bookingSummary = document.getElementById('bookingSummary');
    const bookingSummaryList = document.getElementById('bookingSummaryList');
    const bookingServiceBadge = document.getElementById('bookingServiceBadge');
    const preferredDateInput = document.getElementById('preferredDate');

    if (selectedServiceInput) selectedServiceInput.value = service.name;
    if (bookingServiceBadge) bookingServiceBadge.textContent = service.name;
    if (tvSizeSelect) {
        tvSizeSelect.innerHTML = ['<option value="">Select TV Size</option>', ...service.tvSizes.map((size) => `<option value="${size}">${size}</option>`)].join('');
    }

    if (preferredDateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        preferredDateInput.min = tomorrow.toISOString().split('T')[0];
    }

    if (timeSlotsContainer) {
        timeSlotsContainer.innerHTML = service.timeSlots.map((slot) => `
            <button type="button" class="time-slot-btn" data-time="${slot}">${slot}</button>
        `).join('');

        const timeButtons = timeSlotsContainer.querySelectorAll('.time-slot-btn');
        timeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                timeButtons.forEach((btn) => btn.classList.remove('selected'));
                button.classList.add('selected');
                if (selectedTimeInput) {
                    selectedTimeInput.value = button.dataset.time;
                }
                const timeError = document.getElementById('timeError');
                if (timeError) timeError.textContent = '';
            });
        });
    }

    function showBookingError(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
        }
    }

    function clearBookingErrors() {
        ['nameError', 'phoneError', 'addressError', 'dateError', 'timeError'].forEach((id) => {
            const element = document.getElementById(id);
            if (element) element.textContent = '';
        });
    }

    function buildWhatsAppMessage(formValues) {
        const formattedDate = new Intl.DateTimeFormat('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(new Date(`${formValues.date}T00:00:00`));

        return [
            'Hello Shivkrupa Electronics,',
            '',
            'I want to book a home visit.',
            '',
            `Service: ${formValues.service}`,
            `TV Size: ${formValues.tvSize || 'Not specified'}`,
            `Preferred Date: ${formattedDate}`,
            `Preferred Time: ${formValues.time}`,
            '',
            `Customer Name: ${formValues.name}`,
            `Mobile Number: ${formValues.phone}`,
            '',
            'Address:',
            `${formValues.address}`,
            '',
            'Problem / Message:',
            `${formValues.problem || 'No additional message provided.'}`,
            '',
            'Please confirm my home visit.',
            '',
            'Thank you.'
        ].join('\n');
    }

    function updateBookingSummary(formValues) {
        if (!bookingSummary || !bookingSummaryList) return;

        bookingSummaryList.innerHTML = `
            <li><strong>Service:</strong> ${formValues.service}</li>
            <li><strong>TV Size:</strong> ${formValues.tvSize || 'Not specified'}</li>
            <li><strong>Date:</strong> ${new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${formValues.date}T00:00:00`))}</li>
            <li><strong>Time:</strong> ${formValues.time}</li>
            <li><strong>Name:</strong> ${formValues.name}</li>
        `;
        bookingSummary.classList.add('visible');
        bookingSummary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        clearBookingErrors();

        const values = {
            service: selectedServiceInput ? selectedServiceInput.value : service.name,
            tvSize: tvSizeSelect ? tvSizeSelect.value : 'Not specified',
            name: document.getElementById('customerName').value.trim(),
            phone: document.getElementById('mobileNumber').value.trim(),
            address: document.getElementById('fullAddress').value.trim(),
            date: document.getElementById('preferredDate').value,
            time: selectedTimeInput ? selectedTimeInput.value : '',
            problem: document.getElementById('problemMessage').value.trim()
        };

        let isValid = true;

        if (values.name.length < 2) {
            showBookingError('nameError', 'Please enter your name.');
            isValid = false;
        }

        if (!/^[0-9+\-\s()]{10,18}$/.test(values.phone)) {
            showBookingError('phoneError', 'Please enter a valid mobile number.');
            isValid = false;
        }

        if (!values.address) {
            showBookingError('addressError', 'Please enter your full address.');
            isValid = false;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(`${values.date}T00:00:00`);
        if (!values.date || selectedDate < today) {
            showBookingError('dateError', 'Please select a future date.');
            isValid = false;
        }

        if (!values.time) {
            showBookingError('timeError', 'Please select a preferred time.');
            isValid = false;
        }

        if (!isValid) return;

        updateBookingSummary(values);
    });

    const confirmBookingButton = document.getElementById('confirmBookingButton');
    const editBookingButton = document.getElementById('editBookingButton');

    if (confirmBookingButton) {
        confirmBookingButton.addEventListener('click', () => {
            const values = {
                service: selectedServiceInput ? selectedServiceInput.value : service.name,
                tvSize: tvSizeSelect ? tvSizeSelect.value : 'Not specified',
                name: document.getElementById('customerName').value.trim(),
                phone: document.getElementById('mobileNumber').value.trim(),
                address: document.getElementById('fullAddress').value.trim(),
                date: document.getElementById('preferredDate').value,
                time: selectedTimeInput ? selectedTimeInput.value : '',
                problem: document.getElementById('problemMessage').value.trim()
            };

            const message = buildWhatsAppMessage(values);
            window.location.href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        });
    }

    if (editBookingButton) {
        editBookingButton.addEventListener('click', () => {
            if (bookingSummary) bookingSummary.classList.remove('visible');
            const firstInput = document.getElementById('customerName');
            if (firstInput) firstInput.focus();
        });
    }
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
    renderServiceCards();
    renderServiceDetailPage();
    setupBookingPage();
    setupRepairForm();
    setupConfiguredLinks();
    observeCards();
});
