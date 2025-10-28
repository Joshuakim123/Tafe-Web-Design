function onPageLoad () {
    // find the nav button and refer to it as a "button"
    const button = document.querySelector('#menu-button')
    // find the navigation and reger to it as "menu"
    const menu = document.querySelector('#main')
    // added a sound for click on the button and execute function when clicked
    button.addEventListener("click", function() {
        // console.log("clicked!")
        if( menu.classList.contains("open")){
            menu.classList.remove("open")
        }
        else {
            menu.classList.add("open")
        }
    })
}
window.addEventListener("load", onPageLoad)