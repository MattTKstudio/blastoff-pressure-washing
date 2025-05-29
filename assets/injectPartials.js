// injectPartials.js
// Purpose: Dynamically load shared header and footer HTML into any page.
// Usage: Add <div id="header"></div> and <div id="footer"></div> to your page.
// Then add: <script src="/assets/injectPartials.js"></script>

async function loadPartial(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(`Could not load ${file}:`, err);
  }
}

// Load header, then enable scroll shrink effect
loadPartial("header", "/assets/header.html").then(() => {
  const logo = document.getElementById("logoBanner");
  if (logo) {
    window.addEventListener("scroll", () => {
      logo.classList.toggle("shrink", window.scrollY > 50);
    });
  }
});

// Load footer
loadPartial("footer", "/assets/footer.html");
