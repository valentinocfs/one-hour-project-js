const open = document.getElementById('open');
const close = document.getElementById('close');
const popup = document.getElementById('container');

open.addEventListener('click', () => {
    popup.classList.add('active');
})

close.addEventListener('click', () => {
    popup.classList.remove('active');
})