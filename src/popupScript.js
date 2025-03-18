document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const popup = document.getElementById("popup");
    const menuIcon = document.getElementById("menuIcon");
    const crossIcon = document.getElementById("crossIcon");

    menuBtn.addEventListener("click", () => {
        popup.classList.toggle("hidden");
        menuIcon.classList.toggle("hidden");
        crossIcon.classList.toggle("hidden");

        // Bring the button to the front when popup is open
        menuBtn.classList.toggle("fixed");
        menuBtn.classList.toggle("top-5");
        menuBtn.classList.toggle("right-5");
        menuBtn.classList.toggle("z-[10000]");
        menuBtn.classList.toggle("bg-white"); // Keep white background
        menuBtn.classList.toggle("p-2");
        menuBtn.classList.toggle("rounded-full");
    });

    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.add("hidden");
            menuIcon.classList.remove("hidden");
            crossIcon.classList.add("hidden");

            // Reset button position when closing popup
            menuBtn.classList.remove("fixed", "top-5", "right-5", "z-[10000]", "bg-white", "p-2", "rounded-full");
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const popup = document.getElementById("popup");

        function showPopup() {
            popup.classList.remove("hidden");
            document.body.classList.add("overflow-hidden"); // Prevent scrolling
        }

        function hidePopup() {
            popup.classList.add("hidden");
            document.body.classList.remove("overflow-hidden"); // Allow scrolling

            // Reset button position when closing popup
            menuBtn.classList.remove("fixed", "top-5", "right-5", "z-[9999]", "bg-white", "p-2", "rounded-full");
        }

        // Example: Show popup when clicking a button
        document.getElementById("openPopup").addEventListener("click", showPopup);

        // Example: Hide popup when clicking outside
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                hidePopup();
            }
        });
    });
});
