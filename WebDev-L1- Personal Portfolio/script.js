// ===============================
// Mobile Navigation Toggle
// ===============================

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// Close Menu After Clicking a Link
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});