const text = 'It\'s Ok to take a break or have a rest';

let i = 0;

function autoWrite() {
    document.body.innerText = text.slice(0, i);

    i++;

    if (i > text.length) {
        i = 0;
    }
}

setInterval(autoWrite, 200);
