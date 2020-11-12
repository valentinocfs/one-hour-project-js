const img = document.getElementById('image');

console.log(image);

img.addEventListener('mousemove', (e) => {
    const {
        clientX: x,
        clientY: y
    } = e;

    img.style.transform = "scale(1.5)";
    img.style.transformOrigin = (x / 3) + "px" + " " + (y / 2)+ "px";
})

img.addEventListener('mouseleave', () => {
    img.style.transform = "none";
})