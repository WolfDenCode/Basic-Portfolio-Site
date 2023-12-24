const openTab = document.getElementById("pop-up")

function showTab() {
    if (openTab.classList.contains("active")) {
        openTab.classList.remove("active")
    } else {
        openTab.classList.add("active")
    }
}