const modalAction = (trigger, modal, close) => {
    
    trigger.addEventListener('click', () => {
    modal.classList.add('show-modal');
    })

    close.addEventListener('click', () => {
        modal.classList.remove('show-modal');
    })
}

const PREVIEW = document.querySelector('.preview-text');
const MODAL_DETAILS = document.querySelector('.preview-modal');
const CLOSE_ICON = document.querySelector('.close-icon');

modalAction(PREVIEW, MODAL_DETAILS, CLOSE_ICON);

// second modal
const PREVIEW2 = document.querySelector('.preview-text2');
const MODAL_DETAILS2 = document.querySelector('.preview-modal2');
const CLOSE_ICON2 = document.querySelector('.close-icon2');

modalAction(PREVIEW2, MODAL_DETAILS2, CLOSE_ICON2);



