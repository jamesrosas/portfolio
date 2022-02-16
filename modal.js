const modalAction = (trigger, modal, close, visitLink) => {
    
    trigger.addEventListener('click', () => {
        modal.classList.add('show-modal');
        visitLink.classList.add('show-link')
    })

    close.addEventListener('click', () => {
        modal.classList.remove('show-modal');
        visitLink.classList.remove('show-link')
    })

}

const PREVIEW = document.querySelector('.preview-text');
const MODAL_DETAILS = document.querySelector('.preview-modal');
const CLOSE_ICON = document.querySelector('.close-icon');
const VISIT_BLACKSHEEP = document.querySelector('.visit-link_blacksheep')

modalAction(PREVIEW, MODAL_DETAILS, CLOSE_ICON, VISIT_BLACKSHEEP);

// second modal
const PREVIEW2 = document.querySelector('.preview-text2');
const MODAL_DETAILS2 = document.querySelector('.preview-modal2');
const CLOSE_ICON2 = document.querySelector('.close-icon2');
const VISIT_SOCIALNET = document.querySelector('.visit-link_socialnet')

modalAction(PREVIEW2, MODAL_DETAILS2, CLOSE_ICON2, VISIT_SOCIALNET);



