const left_div = document.querySelector('.left-div')


// upper button
let upper_buttons = {
    left: left_div.querySelector('.upper-menu .upper-left-button'),
    right: left_div.querySelector('.upper-menu .upper-right-button'),
    notif: left_div.querySelector('.upper-menu .upper-left-button svg circle')
}

upper_buttons.left.addEventListener('click', ()=>{
    if( !upper_buttons.left.classList.contains('selected')){
        upper_buttons.left.classList.toggle('selected')
        upper_buttons.right.classList.toggle('selected')
    }
})
upper_buttons.right.addEventListener('click', ()=>{
    if( !upper_buttons.right.classList.contains('selected')){
        upper_buttons.right.classList.toggle('selected')
        upper_buttons.left.classList.toggle('selected')
    }
})

// card

let cards = left_div.querySelectorAll('.cards .card')

for( let i=0; i<cards.length; i++){
    let plus = cards[i].querySelector('svg')


    plus.addEventListener('click', ()=>{
        cards[i].classList.toggle('open')
    })
}