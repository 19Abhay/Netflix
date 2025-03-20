
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle between sign in and sign up forms
            const signinForm = document.getElementById('signin-form');
            const signupForm = document.getElementById('signup-form');
            const showSignup = document.getElementById('show-signup');
            const showSignin = document.getElementById('show-signin');

            showSignup.addEventListener('click', function() {
                signinForm.style.display = 'none';
                signupForm.style.display = 'block';
            });

            showSignin.addEventListener('click', function() {
                signupForm.style.display = 'none';
                signinForm.style.display = 'block';
            });

            // Form validation for sign in
            const loginForm = document.getElementById('login-form');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const emailError = document.getElementById('email-error');
            const passwordError = document.getElementById('password-error');

            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;

                // Email validation
                if (!validateEmail(emailInput.value)) {
                    emailInput.classList.add('error');
                    emailError.style.display = 'block';
                    isValid = false;
                } else {
                    emailInput.classList.remove('error');
                    emailError.style.display = 'none';
                }

                // Password validation
                if (passwordInput.value.length < 4 || passwordInput.value.length > 60) {
                    passwordInput.classList.add('error');
                    passwordError.style.display = 'block';
                    isValid = false;
                } else {
                    passwordInput.classList.remove('error');
                    passwordError.style.display = 'none';
                }

                if (isValid) {
                    // Simulate successful login
                    alert('Login successful! Redirecting to homepage...');
                    window.location.href = 'index.html';
                }
            });

            // Form validation for sign up
            const registerForm = document.getElementById('register-form');
            const nameInput = document.getElementById('name');
            const signupEmailInput = document.getElementById('signup-email');
            const signupPasswordInput = document.getElementById('signup-password');
            const confirmPasswordInput = document.getElementById('confirm-password');
            const nameError = document.getElementById('name-error');
            const signupEmailError = document.getElementById('signup-email-error');
            const signupPasswordError = document.getElementById('signup-password-error');
            const confirmPasswordError = document.getElementById('confirm-password-error');

            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;

                // Name validation
                if (nameInput.value.trim() === '') {
                    nameInput.classList.add('error');
                    nameError.style.display = 'block';
                    isValid = false;
                } else {
                    nameInput.classList.remove('error');
                    nameError.style.display = 'none';
                }

                // Email validation
                if (!validateEmail(signupEmailInput.value)) {
                    signupEmailInput.classList.add('error');
                    signupEmailError.style.display = 'block';
                    isValid = false;
                } else {
                    signupEmailInput.classList.remove('error');
                    signupEmailError.style.display = 'none';
                }

                // Password validation
                if (signupPasswordInput.value.length < 4 || signupPasswordInput.value.length > 60) {
                    signupPasswordInput.classList.add('error');
                    signupPasswordError.style.display = 'block';
                    isValid = false;
                } else {
                    signupPasswordInput.classList.remove('error');
                    signupPasswordError.style.display = 'none';
                }

                // Confirm password validation
                if (signupPasswordInput.value !== confirmPasswordInput.value) {
                    confirmPasswordInput.classList.add('error');
                    confirmPasswordError.style.display = 'block';
                    isValid = false;
                } else {
                    confirmPasswordInput.classList.remove('error');
                    confirmPasswordError.style.display = 'none';
                }

                if (isValid) {
                    // Simulate successful registration
                    alert('Registration successful! Redirecting to homepage...');
                    window.location.href = 'index.html';
                }
            });

            // Email validation function
            function validateEmail(email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
        });
