
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


    // js for dial meter
    
        function updateSpeed(value) {
            const minVal = 100;
            const maxVal = 2000;
            const arc = document.getElementById("progressArc");
            const currentValDisplay = document.getElementById("currentValue");
            const usageVal = document.getElementById("usageValue");
    
            // Map value to the arc range (0-100 stroke-dasharray)
            let percent = (value - minVal) / (maxVal - minVal);
            let arcOffset = 100 - (percent * 100); // Reverse calculation
    
            // Update Arc and Display
            arc.style.strokeDashoffset = arcOffset;
            currentValDisplay.textContent = value;
            usageVal.textContent = value;
        }
    
        // Simulate Value Change
        let currentSpeed = 900;
        setInterval(() => {
            currentSpeed = currentSpeed === 900 ? 1500 : 900; // Toggle between values
            updateSpeed(currentSpeed);
        }, 3000);
   
    