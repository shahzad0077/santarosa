
    let isYearly = false;

    function togglePlan() {
        const toggleBtn = document.getElementById("toggleBtn");
        const monthlyText = document.getElementById("monthlyText");
        const yearlyText = document.getElementById("yearlyText");

        isYearly = !isYearly;

        if (isYearly) {
            toggleBtn.classList.add("translate-x-[80px]", "lg:translate-x-[124px]");
            yearlyText.classList.add("text-white");
            yearlyText.classList.remove("text-black");
            monthlyText.classList.remove("text-white");
            monthlyText.classList.add("text-black");
        } else {
            toggleBtn.classList.remove("translate-x-[80px]", "lg:translate-x-[124px]");
            monthlyText.classList.add("text-white");
            monthlyText.classList.remove("text-black");
            yearlyText.classList.remove("text-white");
            yearlyText.classList.add("text-black");
        }
    }
