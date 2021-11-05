
const PREVIEW = document.querySelector('#preview-text');
const MODAL_DETAILS = document.querySelector('.preview-modal');

PREVIEW.addEventListener('click', () => {
    MODAL_DETAILS.classList.add('show-modal');
})

const CLOSE_ICON = document.querySelector('.close-icon');

CLOSE_ICON.addEventListener('click', () => {
    MODAL_DETAILS.classList.remove('show-modal');
})


