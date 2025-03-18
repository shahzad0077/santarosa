document.addEventListener("DOMContentLoaded", () => {
            const tabButtons = document.querySelectorAll(".tab-button");
            const cardImage = document.getElementById("cardImage");
            const cardText = document.getElementById("cardText");
            const cardHeading = document.getElementById("cardHeading");

            // Data object for different tab contents
            const tabData = {
                "Tesla": {
                    image: "./src/images/type-tesla/card-logo.png",
                    text: "Founded in 2006, Tesla is a global leader in energy storage and electric vehicles.",
                    heading: "Powerwall 3 - 13.5KWh of Storage"
                },
                "Enphase": {
                    image: "./src/images/type-enphase/card-logo.png",
                    text: "Founded in 2006 in Petaluma, California, Enphase invented the world's first micro inverter!",
                    heading: "Micro Inverter System"
                },
                "Franklin": {
                    image: "./src/images/type-franklin/card-logo.png",
                    text: "Franklin, founded in 2019 and headquartered in San Jose, California, has developed one of the most advanced battery backup systems, the aPower 2.",
                    heading: "aPower 2 - 15KWh of Storage"
                }
            };

            tabButtons.forEach(button => {
                button.addEventListener("click", (event) => {
                    const selectedType = event.target.textContent.trim();

                    // Update the card content dynamically
                    if (tabData[selectedType]) {
                        cardImage.src = tabData[selectedType].image;
                        cardText.textContent = tabData[selectedType].text;
                        cardHeading.textContent = tabData[selectedType].heading;
                    }

                    // Update active button styling
                    tabButtons.forEach(btn => btn.classList.remove("active"));
                    event.target.classList.add("active");
                });
            });
        });