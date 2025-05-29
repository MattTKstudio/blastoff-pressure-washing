// injectPartials.js – Injects header and footer, activates nav highlighting and hamburger

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Inject header
  fetch("/assets/header.html")
    .then(res => {
      if (!res.ok) throw new Error("Failed to load header");
      return res.text();
    })
    .then(html => {
      const headerEl = document.getElementById("header");
      if (!headerEl) throw new Error("#header container missing");
      headerEl.innerHTML = html;

      // Highlight active link
      const links = headerEl.querySelectorAll(".nav-link");
      links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage || (currentPage === "index.html" && href === "/index.html")) {
          link.classList.add("active");
        }
      });

      // Hamburger logic
      const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("nav-menu");
      if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
          navMenu.classList.toggle("active");
        });
      }
    })
    .catch(err => console.error("Header injection error:", err));

  // Inject footer
  fetch("/assets/footer.html")
    .then(res => {
      if (!res.ok) throw new Error("Failed to load footer");
      return res.text();
    })
    .then(html => {
      const footerEl = document.getElementById("footer");
      if (!footerEl) throw new Error("#footer container missing");
      footerEl.innerHTML = html;
    })
    .catch(err => console.error("Footer injection error:", err));
});
