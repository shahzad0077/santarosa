let isActive = false;

function togglePlan() {
    const toggleBtn = document.getElementById("toggleBtn");
    const fossileCards = document.getElementById("fossileCards");
    const solarCards = document.getElementById("solarCards");
    const bgVideo = document.getElementById("bgVideo");

    isActive = !isActive;

    if (isActive) {
        // Move slider to the right
        toggleBtn.classList.add("translate-x-[80px]", "lg:translate-x-[124px]");
        
        // Switch cards
        fossileCards.classList.add("hidden");
        solarCards.classList.remove("hidden");

        // Change background video
        bgVideo.src = "./src/images/enviroment/solar-background.mp4";
    } else {
        // Move slider to the left
        toggleBtn.classList.remove("translate-x-[80px]", "lg:translate-x-[124px]");
        
        // Switch back to fossil cards
        solarCards.classList.add("hidden");
        fossileCards.classList.remove("hidden");

        // Change background video
        bgVideo.src = "./src/images/enviroment/fossil-background.mp4";
    }
}