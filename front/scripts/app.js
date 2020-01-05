const nav = document.querySelector('nav')
const main = document.querySelector('main')
const map = main.querySelector('section.map')
const left_menu = main.querySelector('section.left')

// nav
const popups = {
    setting: main.querySelector('.popup-setting'),
    team: main.querySelector('.popup-team')
}

const nav_buttons= {
    setting: nav.querySelector('.setting'),
    team: nav.querySelector('.team')
}

nav_buttons.setting.addEventListener('click', ()=>{
    if(!popups.setting.classList.contains('open')){
        if(popups.team.classList.contains('open')){
            popups.team.classList.toggle('open')
            nav_buttons.team.classList.toggle('selected')
        }
        popups.setting.classList.toggle('open')
        nav_buttons.setting.classList.toggle('selected')
    }else{
        popups.setting.classList.toggle('open')
        nav_buttons.setting.classList.toggle('selected')
    }
})

nav_buttons.team.addEventListener('click', ()=>{
    if(!popups.team.classList.contains('open')){
        if(popups.setting.classList.contains('open')){
            popups.setting.classList.toggle('open')
            nav_buttons.setting.classList.toggle('selected')
        }
        popups.team.classList.toggle('open')
        nav_buttons.team.classList.toggle('selected')
    }else{
        popups.team.classList.toggle('open')
        nav_buttons.team.classList.toggle('selected')
    }
})


// LEFT div upper button

const left_upper_menu = {
    alertes: left_menu.querySelector('.upper-menu .upper-button.upper-left-button'),
    historique: left_menu.querySelector('.upper-menu .upper-button.upper-right-button'),
    close: left_menu.querySelector('.upper-menu .close-button'),
    open: left_menu.querySelector('.open-menu')
}

left_upper_menu.alertes.addEventListener('click', ()=>{
    if(!left_upper_menu.alertes.classList.contains('selected')){
        left_upper_menu.historique.classList.toggle('selected')
        left_upper_menu.alertes.classList.toggle('selected')
    }
})

left_upper_menu.historique.addEventListener('click', ()=>{
    if(!left_upper_menu.historique.classList.contains('selected')){
        left_upper_menu.alertes.classList.toggle('selected')
        left_upper_menu.historique.classList.toggle('selected')
    }
})

left_upper_menu.close.addEventListener('click', ()=>{
    if(left_menu.classList.contains('open')){
        left_menu.classList.toggle('open')
    }
})

left_upper_menu.open.addEventListener('click', ()=>{
    if(!left_menu.classList.contains('open')){
        left_menu.classList.toggle('open')
    }
})