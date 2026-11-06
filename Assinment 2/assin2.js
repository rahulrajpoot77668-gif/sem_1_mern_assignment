
        const passwordInput = document.getElementById("password");
        const passwordToggle = document.getElementById("password-toggle");

        if (passwordInput && passwordToggle) {
            passwordToggle.addEventListener("click", () => {
                const isHidden = passwordInput.type === "password";
                passwordInput.type = isHidden ? "text" : "password";
                passwordToggle.textContent = isHidden ? "Hide" : "Show";
                passwordToggle.setAttribute("aria-pressed", String(isHidden));
            });
        }
