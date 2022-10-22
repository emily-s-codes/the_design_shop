let mobile_menu = document.getElementById("mobile_menu")

function showMenu() {
    console.log("show menu");
    mobile_menu.style.left = 0;
    mobile_menu.style.right = 0;
}

function closeMenu() {
    console.log("close menu")
    mobile_menu.style.left = "100%";
    mobile_menu.style.right = "-100%";
}