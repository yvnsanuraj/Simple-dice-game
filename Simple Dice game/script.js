const text = document.getElementById('text');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const play = document.querySelectorAll('.btn');

function initializingGame() {
    image1.src = "./images/dice0.png";
    image2.src = "./images/dice0.png";
    text.innerText = "Winner will be displayed here"
}
function startGame() {

    var randomNumber1 = Math.ceil((Math.random()) * 6);
    var randomNumber2 = Math.ceil((Math.random()) * 6);


    image1.src = "./images/dice" + randomNumber1 + ".png";
    image2.src = "./images/dice" + randomNumber2 + ".png";
    if (randomNumber1 > randomNumber2) {

        text.innerText = "Player 1 is the winner";
    }
    else if (randomNumber1 < randomNumber2) {
        text.innerText = "Player 2 is the winner";
    }
    else {
        text.innerText = "Drawed";
    }
}
function stopGame() {
    image1.src = "./images/dice0.png";
    image2.src = "./images/dice0.png";
    text.innerText = "Winner will be displayed here"
}
window.onload = initializingGame;
play[0].addEventListener('click', startGame);
play[1].addEventListener('click',stopGame);
