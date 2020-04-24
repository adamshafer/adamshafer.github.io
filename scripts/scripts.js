for (const menuItem of document.querySelectorAll("body > nav a")) { 
    menuItem.addEventListener("click", function() {
        for (const page of document.querySelectorAll("main > section")) {
            page.style.display = "none";
        }   
        document.getElementById(this.dataset.target).style.display = "block";
    });
}

document.querySelector(".nav-toggle").addEventListener("click", function() {
    document.body.classList.toggle("nav-open");
});