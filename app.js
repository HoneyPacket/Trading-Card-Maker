//Image upload code
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            let img = document.getElementById('cardImg');
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            }
  
            img.src = URL.createObjectURL(this.files[0]);
        }
    });
  });


let btmTxt = document.getElementById('btmTxt');
let topTxt = document.getElementById('topTxt');
let midTxt = document.getElementById('midTxt');
let midTxt2 = document.getElementById('midTxt2');

let topInputBox = document.getElementById('topTxtArea');
let btmInputBox = document.getElementById('btmTxtArea');
let midInputBox = document.getElementById('midTxtArea');
let midInputBox2 = document.getElementById('midTxtArea2');

//Move number
let midTxtNum1 = document.getElementById('midTxtNum1');
let midTxtNum2 = document.getElementById('midTxtNum2');
let numStat1 = document.getElementById('numStat1');
let numStat2 = document.getElementById('numStat2');

let subBtn = document.getElementById('submitBtn');

subBtn.addEventListener('click', ()=>{
    topTxt.innerText = topInputBox.value;
    btmTxt.innerText = btmInputBox.value;
    midTxt.innerText = midInputBox.value;
    midTxt2.innerText = midInputBox2.value;
    numStat1.innerText = midTxtNum1.value;
    numStat2.innerText = midTxtNum2.value;
});






//Card background
let redCard = document.getElementById('redCard');
let blueCard = document.getElementById('blueCard');
let greenCard = document.getElementById('greenCard');
let cardBack = document.getElementById('back');

redCard.addEventListener('click', ()=>{
    cardBack.style.backgroundImage = "url('imgs/redCard.png')";
})

blueCard.addEventListener('click', ()=>{
    cardBack.style.backgroundImage = "url('imgs/blueCard.png')";
})

greenCard.addEventListener('click', ()=>{
    cardBack.style.backgroundImage = "url('imgs/greenCard.png')";
})

