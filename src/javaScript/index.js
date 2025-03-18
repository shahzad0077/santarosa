function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("hidden");
}

function selectOption(option) {
    document.getElementById("dropdownButton").innerHTML = option + ' <i class="lnr lnr-chevron-down"></i>';
    document.getElementById("dropdown").classList.add("hidden");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdown");
    const button = document.getElementById("dropdownButton");

    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});


// form stem 2 
document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".quote-step");
    const accordionContainer = document.getElementById("accordionContainer");

    // Sample data for each accordion
    const accordionData = [
        { title: `<div class="text-xl font-bold">Quote 1</div>`, content: generateForm() },
        { title: `<div class="text-xl font-bold">Quote 2</div>`, content: generateForm() },
        { title: `<div class="text-xl font-bold">Quote 3</div>`, content: generateForm() },
    ];

    steps.forEach((step) => {
        step.addEventListener("click", function () {
            let count = parseInt(this.getAttribute("data-index"));

            // Reset styles for steps
            steps.forEach((s) => s.classList.remove("bg-primary", "text-white"));
            this.classList.add("bg-primary", "text-white");

            // Clear previous accordions
            accordionContainer.innerHTML = "";

            // Generate accordions based on selected step
            for (let i = 0; i < count; i++) {
                let accordion = document.createElement("div");
                accordion.className = "border rounded-lg p-4 bg-white/50 shadow-md cursor-pointer";
                accordion.innerHTML = `
                    <div class="accordion-header flex justify-between items-center p-3 font-semibold text-black border-b border-tertiary">
                        ${accordionData[i]?.title || `Quote ${i + 1}`}
                        <span class="toggle-icon">+</span>
                    </div>
                    <div class="accordion-content hidden p-3 text-black">
                        ${accordionData[i]?.content}
                    </div>
                `;

                // Add event listener to toggle content visibility
                accordion.querySelector(".accordion-header").addEventListener("click", function () {
                    let content = this.nextElementSibling;
                    let icon = this.querySelector(".toggle-icon");
                    content.classList.toggle("hidden");
                    icon.textContent = content.classList.contains("hidden") ? "+" : "-";
                });

                accordionContainer.appendChild(accordion);
            }
        });
    });

    function generateForm() {
        return `
                  <div class="space-y-2 sm:space-y-4">
            <!-- Name Input 1 -->
            <div>
                <label class="block bodytext text-field font-medium">What is the system size in KW?</label>
                <div class="relative w-full flex justify-between items-center border-b border-tertiary focus-within:border-b-2 focus-within:border-[#32B7E1]">
                    <span class="absolute left-0 text-black bodytext pointer-events-none">1000</span>
                    <input type="text" class="w-full py-1 sm:py-3 lg:py-4 text-black bodytext bg-transparent focus:outline-none text-center" />
                    <span class="absolute right-0 text-black bodytext pointer-events-none">KW</span>
                </div>
            </div>

            <!-- Wrapper div for responsiveness -->
            <div class="flex flex-col lg:flex-row">
                <!-- Address Input 2 -->
                <div class="w-full lg:w-1/2">
                    <label class="block bodytext text-field font-medium">How many solar panels?</label>
                    <input
                        type="text"
                        placeholder="01"
                        class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                    />
                </div>

                <!-- Panel Manufacturer -->
                <div class="w-full lg:w-1/2">
                    <label class="block bodytext text-field font-medium">What panel manufacturer?</label>
                    <input
                        type="text"
                        placeholder="Manufacturer name"
                        class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                    />
                </div>
            </div>

            <!--  4-->
            <div class="relative">
                <label class="block bodytext text-field font-medium text-black">Which battery system?</label>
                <div class="relative w-full">
                    <button
                        type="button"
                        class="w-full lg-rounded-lg text-black bodytext py-1 sm:py-3 lg:py-5 border-b focus:border-b-2 lg:text-[20px] font-[500] border-tertiary rounded-lg flex justify-between items-center focus:outline-none"
                        onclick="toggleStorageDropdown()"
                        id="storageDropdownButton"
                    >
                        Select energy storage
                        <i class="lnr lnr-chevron-down"></i>
                    </button>
                    <ul class="hidden absolute w-full px-6 py-8 bg-white shadow-lg rounded-lg bottom-full mb-2 z-10" id="storageDropdown">
                        <li class="py-2 px-4 cursor-pointer bodytext hover:bg-[#F4F4F4] text-black" onclick="selectStorageOption('Powerwall')">Powerwall</li>
                        <li class="py-2 px-4 cursor-pointer bodytext hover:bg-[#F4F4F4] text-black" onclick="selectStorageOption('Generac PWRcell')">Generac PWRcell</li>
                        <li class="py-2 px-4 cursor-pointer bodytext hover:bg-[#F4F4F4] text-black" onclick="selectStorageOption('Bluetti')">Bluetti</li>
                    </ul>
                </div>
            </div>

         

            <!--5-->

            <div>
                <label class="block bodytext text-field font-medium">How many batteries?</label>
                <input
                    type="text"
                    placeholder="6"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
            <!-- 6-->

            <div>
                <label class="block bodytext text-field font-medium">What is the total storage in KWh?</label>
                <input
                    type="text"
                    placeholder="6000"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
            <!-- 7 -->
            <div>
                <label class="block bodytext text-field font-medium">What is the energy offset ?</label>
                <div class="relative w-full flex justify-between items-center border-b border-tertiary focus-within:border-b-2 focus-within:border-[#32B7E1]">
                    <span class="absolute left-0 text-black bodytext pointer-events-none">50</span>
                    <input type="text" class="w-full py-1 sm:py-3 lg:py-4 text-black bodytext bg-transparent focus:outline-none text-center" />
                    <span class="absolute right-0 text-black bodytext pointer-events-none">%</span>
                </div>
            </div>

            <!--8 System Cost -->
            <div>
                <label class="block bodytext text-field font-medium">What is the Annual Escalator Percentage?</label>
                <div class="relative w-full flex justify-between items-center border-b border-tertiary focus-within:border-b-2 focus-within:border-[#32B7E1]">
                    <span class="absolute left-0 text-black bodytext pointer-events-none">20</span>
                    <input type="text" class="w-full py-1 sm:py-3 lg:py-4 text-black bodytext bg-transparent focus:outline-none text-center" />
                    <span class="absolute right-0 text-black bodytext pointer-events-none">%</span>
                </div>
            </div>

            <!-- 9-->
            <div>
                <label class="block bodytext text-field font-medium">What is the duration of the PPA/lease?</label>
                <input
                    type="text"
                    placeholder="10months"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>

            <!-- 10-->
            <div>
                <label class="block bodytext text-field font-medium">What is the monthly payment of year 1?</label>
                <input
                    type="text"
                    placeholder="$1000,00"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
            <!-- 11-->
            <div>
                <label class="block bodytext text-field font-medium">What is the price per KWh?</label>
                <input
                    type="text"
                    placeholder="$1000,00"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
        </div>
`;
    }
});
// form step 3
document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".quote-step");
    const accordionContainer = document.getElementById("cashQuoteAccordion");

    const accordionData = [
        { title: "<div class='text-xl font-bold'>Quote 1</div>", content: generateForm() },
        { title: "<div class='text-xl font-bold'>Quote 2</div>", content: generateForm() },
        { title: "<div class='text-xl font-bold'>Quote 3</div>", content: generateForm() },
    ];

    steps.forEach((step) => {
        step.addEventListener("click", function () {
            let count = parseInt(this.getAttribute("data-index"));
            steps.forEach((s) => s.classList.remove("bg-primary", "text-white"));
            this.classList.add("bg-primary", "text-white");
            accordionContainer.innerHTML = "";
            
            for (let i = 0; i < count; i++) {
                let accordion = document.createElement("div");
                accordion.className = "border rounded-lg p-4 bg-white/50 shadow-md cursor-pointer";
                accordion.innerHTML = `
                    <div class="accordion-header flex justify-between items-center p-3 font-semibold text-black border-b border-tertiary">
                        ${accordionData[i]?.title || `Quote ${i + 1}`}
                        <span class="toggle-icon">+</span>
                    </div>
                    <div class="accordion-content hidden p-3 text-black">
                        ${accordionData[i]?.content}
                    </div>
                `;
                accordion.querySelector(".accordion-header").addEventListener("click", function () {
                    let content = this.nextElementSibling;
                    let icon = this.querySelector(".toggle-icon");
                    content.classList.toggle("hidden");
                    icon.textContent = content.classList.contains("hidden") ? "+" : "-";
                });
                accordionContainer.appendChild(accordion);
            }
        });
    });

    function generateForm() {
        return ` <div class="space-y-2 sm:space-y-4">
            <!-- Name Input 1 -->
            <div>
                <label class="block bodytext text-field font-medium">What is the system size in KW?</label>
                <div class="relative w-full flex justify-between items-center border-b border-tertiary focus-within:border-b-2 focus-within:border-[#32B7E1]">
                    <span class="absolute left-0 text-black bodytext pointer-events-none">1000</span>
                    <input type="text" class="w-full py-1 sm:py-3 lg:py-4 text-black bodytext bg-transparent focus:outline-none text-center" />
                    <span class="absolute right-0 text-black bodytext pointer-events-none">KW</span>
                </div>
            </div>

            <!-- Wrapper div for responsiveness -->
            <div class="flex flex-col lg:flex-row">
                <!-- Address Input 2 -->
                <div class="w-full lg:w-1/2">
                    <label class="block bodytext text-field font-medium">How many solar panels?</label>
                    <input
                        type="text"
                        placeholder="01"
                        class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                    />
                </div>

                <!-- Panel Manufacturer -->
                <div class="w-full lg:w-1/2">
                    <label class="block bodytext text-field font-medium">What panel manufacturer?</label>
                    <input
                        type="text"
                        placeholder="Manufacturer name"
                        class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                    />
                </div>
            </div>

            <!--  4-->
            <div class="relative">
                <label class="block bodytext text-field font-medium text-black">Which battery system?</label>
                <div class="relative w-full">
                    <button
                        type="button"
                        class="w-full lg-rounded-lg text-black bodytext py-1 sm:py-3 lg:py-5 border-b focus:border-b-2 lg:text-[20px] font-[500] border-tertiary rounded-lg flex justify-between items-center focus:outline-none"
                        onclick="toggleStorageDropdown()"
                        id="storageDropdownButton"
                    >
                        Select energy storage
                        <i class="lnr lnr-chevron-down"></i>
                    </button>
                    <ul class="hidden absolute w-full px-6 py-8 bg-white shadow-lg rounded-lg bottom-full mb-2 z-10" id="storageDropdown">
                        <li class="py-2 px-4 cursor-pointer bodytext hover:bg-[#F4F4F4] text-black" onclick="selectStorageOption('Powerwall')">Powerwall</li>
                        <li class="py-2 px-4 cursor-pointer bodytext hover:bg-[#F4F4F4] text-black" onclick="selectStorageOption('Generac PWRcell')">Generac PWRcell</li>
                        <li class="py-2 px-4 cursor-pointer bodytext hover:bg-[#F4F4F4] text-black" onclick="selectStorageOption('Bluetti')">Bluetti</li>
                    </ul>
                </div>
            </div>

         

            <!--5-->

            <div>
                <label class="block bodytext text-field font-medium">How many batteries?</label>
                <input
                    type="text"
                    placeholder="6"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
            <!-- 6-->

            <div>
                <label class="block bodytext text-field font-medium">What is the total storage in KWh?</label>
                <input
                    type="text"
                    placeholder="6000"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
            <!-- 7 -->
            <div>
                <label class="block bodytext text-field font-medium">What is the energy offset ?</label>
                <div class="relative w-full flex justify-between items-center border-b border-tertiary focus-within:border-b-2 focus-within:border-[#32B7E1]">
                    <span class="absolute left-0 text-black bodytext pointer-events-none">50</span>
                    <input type="text" class="w-full py-1 sm:py-3 lg:py-4 text-black bodytext bg-transparent focus:outline-none text-center" />
                    <span class="absolute right-0 text-black bodytext pointer-events-none">%</span>
                </div>
            </div>

            <!--8 System Cost -->
            <div>
                <label class="block bodytext text-field font-medium">What is the Annual Escalator Percentage?</label>
                <div class="relative w-full flex justify-between items-center border-b border-tertiary focus-within:border-b-2 focus-within:border-[#32B7E1]">
                    <span class="absolute left-0 text-black bodytext pointer-events-none">20</span>
                    <input type="text" class="w-full py-1 sm:py-3 lg:py-4 text-black bodytext bg-transparent focus:outline-none text-center" />
                    <span class="absolute right-0 text-black bodytext pointer-events-none">%</span>
                </div>
            </div>

            <!-- 9-->
            <div>
                <label class="block bodytext text-field font-medium">What is the duration of the PPA/lease?</label>
                <input
                    type="text"
                    placeholder="10months"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>

            <!-- 10-->
            <div>
                <label class="block bodytext text-field font-medium">What is the monthly payment of year 1?</label>
                <input
                    type="text"
                    placeholder="$1000,00"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
            <!-- 11-->
            <div>
                <label class="block bodytext text-field font-medium">What is the price per KWh?</label>
                <input
                    type="text"
                    placeholder="$1000,00"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
        </div>
`;
    }
});
// form step 4
document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".quote-step");
    const accordionContainer = document.getElementById("ppaQuoteAccordion");

    const accordionData = [
        { title: "<div class='text-xl font-bold'>Quote 1</div>", content: generateForm() },
        { title: "<div class='text-xl font-bold'>Quote 2</div>", content: generateForm() },
        { title: "<div class='text-xl font-bold'>Quote 3</div>", content: generateForm() },
    ];

    steps.forEach((step) => {
        step.addEventListener("click", function () {
            let count = parseInt(this.getAttribute("data-index"));
            steps.forEach((s) => s.classList.remove("bg-primary", "text-white"));
            this.classList.add("bg-primary", "text-white");
            accordionContainer.innerHTML = "";
            
            for (let i = 0; i < count; i++) {
                let accordion = document.createElement("div");
                accordion.className = "border rounded-lg p-4 bg-white/50 shadow-md cursor-pointer";
                accordion.innerHTML = `
                    <div class="accordion-header flex justify-between items-center p-3 font-semibold text-black border-b border-tertiary">
                        ${accordionData[i]?.title || `Quote ${i + 1}`}
                        <span class="toggle-icon">+</span>
                    </div>
                    <div class="accordion-content hidden p-3 text-black">
                        ${accordionData[i]?.content}
                    </div>
                `;
                accordion.querySelector(".accordion-header").addEventListener("click", function () {
                    let content = this.nextElementSibling;
                    let icon = this.querySelector(".toggle-icon");
                    content.classList.toggle("hidden");
                    icon.textContent = content.classList.contains("hidden") ? "+" : "-";
                });
                accordionContainer.appendChild(accordion);
            }
        });
    });

    function generateForm() {
        return `  <div class="space-y-2 sm:space-y-4">
            <!-- Name Input 1 -->
            <div>
                <label class="block bodytext text-field font-medium">What is the system size in KW?</label>
                <div class="relative w-full flex justify-between items-center border-b border-tertiary focus-within:border-b-2 focus-within:border-[#32B7E1]">
                    <span class="absolute left-0 text-black bodytext pointer-events-none">1000</span>
                    <input type="text" class="w-full py-1 sm:py-3 lg:py-4 text-black bodytext bg-transparent focus:outline-none text-center" />
                    <span class="absolute right-0 text-black bodytext pointer-events-none">KW</span>
                </div>
            </div>

            <!-- Wrapper div for responsiveness -->
            <div class="flex flex-col lg:flex-row">
                <!-- Address Input 2 -->
                <div class="w-full lg:w-1/2">
                    <label class="block bodytext text-field font-medium">How many solar panels?</label>
                    <input
                        type="text"
                        placeholder="01"
                        class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                    />
                </div>

                <!-- Panel Manufacturer -->
                <div class="w-full lg:w-1/2">
                    <label class="block bodytext text-field font-medium">What panel manufacturer?</label>
                    <input
                        type="text"
                        placeholder="Manufacturer name"
                        class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                    />
                </div>
            </div>

            <!--  4-->
            <div class="relative">
                <label class="block bodytext text-field font-medium text-black">Which battery system?</label>
                <div class="relative w-full">
                    <button
                        type="button"
                        class="w-full lg-rounded-lg text-black bodytext py-1 sm:py-3 lg:py-5 border-b focus:border-b-2 lg:text-[20px] font-[500] border-tertiary rounded-lg flex justify-between items-center focus:outline-none"
                        onclick="toggleStorageDropdown()"
                        id="storageDropdownButton"
                    >
                        Select energy storage
                        <i class="lnr lnr-chevron-down"></i>
                    </button>
                    <ul class="hidden absolute w-full px-6 py-8 bg-white shadow-lg rounded-lg bottom-full mb-2 z-10" id="storageDropdown">
                        <li class="py-2 px-4 cursor-pointer bodytext hover:bg-[#F4F4F4] text-black" onclick="selectStorageOption('Powerwall')">Powerwall</li>
                        <li class="py-2 px-4 cursor-pointer bodytext hover:bg-[#F4F4F4] text-black" onclick="selectStorageOption('Generac PWRcell')">Generac PWRcell</li>
                        <li class="py-2 px-4 cursor-pointer bodytext hover:bg-[#F4F4F4] text-black" onclick="selectStorageOption('Bluetti')">Bluetti</li>
                    </ul>
                </div>
            </div>

         

            <!--5-->

            <div>
                <label class="block bodytext text-field font-medium">How many batteries?</label>
                <input
                    type="text"
                    placeholder="6"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
            <!-- 6-->

            <div>
                <label class="block bodytext text-field font-medium">What is the total storage in KWh?</label>
                <input
                    type="text"
                    placeholder="6000"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
            <!-- 7 -->
            <div>
                <label class="block bodytext text-field font-medium">What is the energy offset ?</label>
                <div class="relative w-full flex justify-between items-center border-b border-tertiary focus-within:border-b-2 focus-within:border-[#32B7E1]">
                    <span class="absolute left-0 text-black bodytext pointer-events-none">50</span>
                    <input type="text" class="w-full py-1 sm:py-3 lg:py-4 text-black bodytext bg-transparent focus:outline-none text-center" />
                    <span class="absolute right-0 text-black bodytext pointer-events-none">%</span>
                </div>
            </div>

            <!--8 System Cost -->
            <div>
                <label class="block bodytext text-field font-medium">What is the Annual Escalator Percentage?</label>
                <div class="relative w-full flex justify-between items-center border-b border-tertiary focus-within:border-b-2 focus-within:border-[#32B7E1]">
                    <span class="absolute left-0 text-black bodytext pointer-events-none">20</span>
                    <input type="text" class="w-full py-1 sm:py-3 lg:py-4 text-black bodytext bg-transparent focus:outline-none text-center" />
                    <span class="absolute right-0 text-black bodytext pointer-events-none">%</span>
                </div>
            </div>

            <!-- 9-->
            <div>
                <label class="block bodytext text-field font-medium">What is the duration of the PPA/lease?</label>
                <input
                    type="text"
                    placeholder="10months"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>

            <!-- 10-->
            <div>
                <label class="block bodytext text-field font-medium">What is the monthly payment of year 1?</label>
                <input
                    type="text"
                    placeholder="$1000,00"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
            <!-- 11-->
            <div>
                <label class="block bodytext text-field font-medium">What is the price per KWh?</label>
                <input
                    type="text"
                    placeholder="$1000,00"
                    class="w-full py-1 bodytext sm:py-3 lg:py-4 placeholder:text-black text-black placeholder:bodytext border-b focus:border-b-2 border-tertiary focus:border-[#32B7E1] active:border-[#32B7E1] focus:outline-none"
                />
            </div>
        </div>
`;
    }
});
