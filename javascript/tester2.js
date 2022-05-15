const flash = document.querySelector(".colorChanging");
const pattern = setInterval(() => {
    flash.style.backgroundColor = "red";
    setTimeout(() => {
        flash.style.backgroundColor = "yellow";
    }, 1000);
    setTimeout(() => {
        flash.style.backgroundColor = "blue";
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




