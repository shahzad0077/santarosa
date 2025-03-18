document.addEventListener("DOMContentLoaded", function () {
    // Ordered list of pages
    const pages = [
        "index.html", 
        "your-energy-usage.html", 
        "why.html", 
        "who-are-we.html", 
        "our-installer.html", 
        "who-we-are-backed-by.html", 
        "micro-inverter-vs-string-inverter.html", 
        "solar-steps.html", 
        "how-battery-solar-systems-work.html", 
        "environmental-impact.html", 
        "your-system-speces.html", 
        "your-electric-company-vs-solar.html", 
        "power-purchase-agreement.html", 
        "welcome.html"
    ];

    // Get the current page filename from the URL
    const currentPage = window.location.pathname.split("/").pop();
    let currentIndex = pages.indexOf(currentPage);

    // Function to navigate pages
    function goToPage(index) {
        if (index >= 0 && index < pages.length) {
            window.location.href = pages[index];
        }
    }

    // Keyboard navigation
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            goToPage(currentIndex + 1);
        } else if (event.key === "ArrowLeft") {
            goToPage(currentIndex - 1);
        } else if (event.key === "Escape") {
            window.location.href = "index.html"; // Restart navigation
        }
    });

    // Button navigation
    document.getElementById("prevPage")?.addEventListener("click", () => goToPage(currentIndex - 1));
    document.getElementById("nextPage")?.addEventListener("click", () => goToPage(currentIndex + 1));
});
