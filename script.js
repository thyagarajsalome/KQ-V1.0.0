// Navbar toggle for mobile
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

// Dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".nav-link");
    const content = dropdown.querySelector(".dropdown-content");

    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      content.classList.toggle("show");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.querySelector(".dropdown-content").classList.remove("show");
      });
    }
  });
});
