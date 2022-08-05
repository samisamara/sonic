const flash = document.querySelector(".colorChanging");
const text = document.querySelector(".text");
const pattern = setInterval(() => {
    flash.style.backgroundColor = "red";
    text.style.color = "red";
    setTimeout(() => {
        flash.style.backgroundColor = "yellow";
        text.style.color = "yellow";
    }, 1000);
    setTimeout(() => {
        flash.style.backgroundColor = "blue";
        text.style.color = "blue";
    }, 2000);
}, 3000);

const charDisplay = document.querySelector("form");
const charImage = document.querySelector('.charTesting');

charDisplay.addEventListener('submit', e => {
    e.preventDefault();
    const charChoice = document.querySelector('#charChoose').value;
    charImage.style.display = "block";
    charImage.src = `/character_images/${charChoice}.png`
});

const now = new Date();
// console.log(now);
// console.log(dateFns.format(now, 'YYYY'));

