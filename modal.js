const d = document;
const PREVIEW = d.querySelector('#preview-text');
const MODAL = d.querySelector('.preview-modal');

PREVIEW.addEventListener('click', () => {
    MODAL.classList.add('show-modal');
})

const CLOSE_ICON = d.querySelector('.close-icon');

CLOSE_ICON.addEventListener('click', () => {
    MODAL.classList.remove('show-modal');
})