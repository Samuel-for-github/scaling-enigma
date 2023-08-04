
let num1 = Math.floor((Math.random())*6)+1;
let num2 = Math.floor((Math.random())*6)+1;

document.body.addEventListener("load", imgChange())


function imgChange(){
    document.querySelector(".img1").src = `images/dice${num1}.png`;
    document.querySelector(".img2").src = `images/dice${num2}.png`;
}


if (num1>num2) {
    document.querySelector('h1').innerText = "🚩 Player 1 wins"
}
else if (num1<num2) {
    document.querySelector('h1').innerText = "Player 2 wins 🚩"
}
else{
    document.querySelector('h1').innerText = "🏳️ It a draw 🏳️"
}


