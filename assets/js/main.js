const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.modal-container')

function showBuyTickets(){
    modal.classList.add('open')
}

function closeBuyTickets(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', closeBuyTickets)
modal.addEventListener('click', closeBuyTickets)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})

