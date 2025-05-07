// Configuración del Intersection Observer para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos los elementos con la clase animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});

// Smooth scrolling with improved effect between sections
function navigateTo(section) {
    document.getElementById(section).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Optional: Add a highlight effect to the target section
    const target = document.getElementById(section);
    target.style.transition = 'box-shadow 0.5s ease-in-out';
    target.style.boxShadow = '0 0 30px #607d99';

    setTimeout(() => {
        target.style.boxShadow = 'none';
    }, 1000);
}

// Form submission (optional example functionality)
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}! We will contact you shortly at ${email}.`);
});

// Detect scroll
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
        
    if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
    } else {
            navbar.classList.remove('scrolled');
    }
});

// Function to validate passwords
function validatePasswords(password1, password2) {
    if (password1 !== password2) {
        alert('Passwords do not match. Please try again.');
        return false;
    }
    return true;
}

// Registration form validation
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            const password1 = document.getElementById('password')?.value;
            const password2 = document.getElementById('confirmPassword')?.value;
            
            if (password1 && password2) {
                if (!validatePasswords(password1, password2)) {
                    event.preventDefault();
                    return false;
                }
            }
            return true;
        });
    }
});

// Función para validar el formulario de login
function validateLoginForm() {
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    const errorMessage = document.getElementById('error-message');

    if (!email || !password) {
        errorMessage.classList.remove('d-none');
        return false;
    }

    errorMessage.classList.add('d-none');
    return true;
}

// Función para validar el formulario de registro
function validateRegisterForm() {
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    const name = document.getElementById('name')?.value;
    const lastName = document.getElementById('lastName')?.value;
    const errorMessage = document.getElementById('error-message');

    if (!email || !password || !confirmPassword || !name || !lastName) {
        errorMessage.classList.remove('d-none');
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match. Please try again.';
        errorMessage.classList.remove('d-none');
        return false;
    }

    errorMessage.classList.add('d-none');
    return true;
}

// Función para validar el formulario de contacto
function validateContactForm() {
    const name = document.getElementById('name')?.value;
    const lastName = document.getElementById('lastName')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;
    const errorMessage = document.getElementById('error-message');

    if (!name || !lastName || !email || !message) {
        errorMessage.classList.remove('d-none');
        return false;
    }

    errorMessage.classList.add('d-none');
    return true;
}

// Función para mostrar/ocultar contraseña
function togglePasswordVisibility(inputId, buttonId) {
    const passwordInput = document.getElementById(inputId);
    const toggleButton = document.getElementById(buttonId);
    const icon = toggleButton.querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
        icon.style.color = '#91C733';
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
        icon.style.color = '';
    }
}

// Event Listeners para los formularios
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('registerForm');
    const contactForm = document.getElementById('contactForm');
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

    if (togglePassword) {
        togglePassword.addEventListener('click', () => togglePasswordVisibility('password', 'togglePassword'));
    }

    if (toggleConfirmPassword) {
        toggleConfirmPassword.addEventListener('click', () => togglePasswordVisibility('confirmPassword', 'toggleConfirmPassword'));
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateLoginForm()) {
                // Aquí puedes agregar la lógica para enviar el formulario
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateRegisterForm()) {
                // Aquí puedes agregar la lógica para enviar el formulario
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateContactForm()) {
                // Aquí puedes agregar la lógica para enviar el formulario
            }
        });
    }
});





