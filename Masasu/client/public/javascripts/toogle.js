let selector = e => document.querySelector(e)

let toogle = selector("#mobile-toogle")
let view = selector("#mobile-view")

toogle.addEventListener("click" , toogle_action )

function toogle_action() {

    if (view.classList.contains(`hide`)) {
        view.classList.toggle(`hide`)
        view.classList.add(`show`)
        toogle.classList.toggle('fa-bars')
        toogle.classList.add('fa-close')
    }else if (view.classList.contains(`show`)){
        view.classList.toggle(`show`)
        view.classList.add(`hide`)
        toogle.classList.toggle('fa-close')
        toogle.classList.add('fa-bars')
    }
}