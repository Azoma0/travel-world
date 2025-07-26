document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    if (form) {
        const nameInput = form.name;
        const emailInput = form.email;
        const citySelect = form.city;
        const messageTextarea = form.message;

        // 🔁 Восстановить данные при загрузке
        if (localStorage.getItem("formData")) {
            const saved = JSON.parse(localStorage.getItem("formData"));
            nameInput.value = saved.name || "";
            emailInput.value = saved.email || "";
            citySelect.value = saved.city || "";
            messageTextarea.value = saved.message || "";
        }

        // 🧠 Сохранять данные при вводе
        form.addEventListener("input", () => {
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                city: citySelect.value,
                message: messageTextarea.value
            };
            localStorage.setItem("formData", JSON.stringify(formData));
        });

        // ✅ При отправке формы — очистить localStorage и показать alert
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            if (nameInput.value && emailInput.value && citySelect.value && messageTextarea.value) {
                alert("✅ Сіздің сұраныс жіберілді! Біз жақында хабарласамыз.");
                localStorage.removeItem("formData");
                form.reset();
            } else {
                alert("⚠ Барлық жолдарды толтырыңыз.");
            }
        });
    }
});


// contact.html ішінде — URL арқылы қала таңдау
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCity = urlParams.get('city');
    const citySelect = document.getElementById('city');

    if (selectedCity && citySelect) {
        citySelect.value = selectedCity;
    }
});


// Scroll-пен fade-in көрсету
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // бірінші рет тексеру
});
