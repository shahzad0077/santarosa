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