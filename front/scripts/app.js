const nav = document.querySelector('nav')
const main = document.querySelector('main')
const map = main.querySelector('section.map')
const left_menu = main.querySelector('section.left')

// nav
const popups = {
    setting: main.querySelector('.popup-setting'),
    team: main.querySelector('.popup-team'),
}

popups.setting_close = popups.setting.querySelector('svg.close-popup')
popups.team_close = popups.team.querySelector('svg.close-popup')

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


popups.setting_close.addEventListener('click', ()=>{
    popups.setting.classList.toggle('open')
})
popups.team_close.addEventListener('click', ()=>{
    popups.team.classList.toggle('open')
})


// LEFT div upper button

const left_upper_menu = {
    alertes: left_menu.querySelector('.upper-menu .upper-button.upper-left-button'),
    historique: left_menu.querySelector('.upper-menu .upper-button.upper-right-button'),
    close: left_menu.querySelector('.upper-menu .close-button'),
    open: left_menu.querySelector('.open-menu svg')
}

const left_menu_part = {
    alertes: left_menu.querySelector('.content .current') ,
    historique: left_menu.querySelector('.content .historique') 
}

left_upper_menu.alertes.addEventListener('click', ()=>{
    if(!left_upper_menu.alertes.classList.contains('selected')){
        left_upper_menu.historique.classList.toggle('selected')
        left_upper_menu.alertes.classList.toggle('selected')

        if(!left_menu_part.alertes.classList.contains('selected')){
            left_menu_part.alertes.classList.toggle('selected')
            left_menu_part.historique.classList.toggle('selected')
        }
    }

    
})

left_upper_menu.historique.addEventListener('click', ()=>{
    if(!left_upper_menu.historique.classList.contains('selected')){
        left_upper_menu.alertes.classList.toggle('selected')
        left_upper_menu.historique.classList.toggle('selected')

        if(!left_menu_part.historique.classList.contains('selected')){
            left_menu_part.alertes.classList.toggle('selected')
            left_menu_part.historique.classList.toggle('selected')
        }
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

// card part 

const cards = left_menu.querySelectorAll('.card')

for(let i=0; i<cards.length; i++){
    let card_cross = cards[i].querySelector('svg.cross')

    card_cross.addEventListener('click', ()=>{
        cards[i].classList.toggle('open')
    })
}

// card model 

/*

<div class="card alert-4 waiting open">
    <div class="alert"></div class>
    <div class="inner-card">
        <div class="info">
            <div class="content">
                <div class="salle">Salle 109</div>
                <div class="name">Mme Martin <span>( Infirmière )</span></div>
                <div class="status">Statut : <span></span>Pris en charge par Patricks</span></div>
            </div>

            <div class="more-info">
                <div class="line"></div>
                <div class="patient-name"> Patient : <span>Mme Dosto</span> </div>
                <h3 ><u>Antécédents</u> :</h3>
                <div class="antecedent-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quae sunt repellendus aliquam culpa ullam asperiores quod quo dolorum minima. Consectetur quod dolore, incidunt enim itaque eum? Enim, impedit distinctio.
                </div>
            </div>

            <div class="time">25 minutes</div>
            <svg class="cross" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="plus" d="M7 2.91669V11.0834" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.91675 7H11.0834" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
            
        </div>
    </div>
</div>

*/


// popup info

const popup_info= {
    button: left_menu.querySelector('h2.special span.info'),
    div: document.querySelector('.popup-info')
}