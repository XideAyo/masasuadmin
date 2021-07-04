let sticky = selector("#sticky-header")
let sticky_2 = selector("#sticky-header-2")

window.addEventListener('scroll' , function() {
    if(this.window.pageYOffset > 1){
        sticky.classList.add("sticky-header")
        sticky_2.classList.add("sticky-header-2")
    }else {
        sticky.classList.remove("sticky-header")
        sticky_2.classList.remove("sticky-header-2")
    }
})