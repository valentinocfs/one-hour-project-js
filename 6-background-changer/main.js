const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.background = randomBg();
})

console.log(randomBg);

function randomBg() {
    return 'hsl(' + (Math.ceil(Math.random() * 255)) +
        ', 100%, 50%)';
}