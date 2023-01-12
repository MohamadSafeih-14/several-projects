let links = document.querySelector(".links");
let ul = document.getElementById("ul");
let mode = "none";
function display() {
        if (mode === "none") {
            ul.style.display = "block";
            mode = "block";
        } else {
            ul.style.display = "none";
            mode = "none";
        }
}