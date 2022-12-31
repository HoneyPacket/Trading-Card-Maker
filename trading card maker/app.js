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
    topTxt.innerHTML = topInputBox.value;
    btmTxt.innerHTML = btmInputBox.value;
    midTxt.innerHTML = midInputBox.value;
    midTxt2.innerHTML = midInputBox2.value;
    numStat1.innerHTML = midTxtNum1.value;
    numStat2.innerHTML = midTxtNum2.value;
});



//top text color
let Twhite = document.getElementById('Twhite');
let Tblack = document.getElementById('Tblack');
let Tred = document.getElementById('Tred');
let Tmaroon = document.getElementById('Tmaroon');
let Tgreen = document.getElementById('Tgreen');
let Tyellow = document.getElementById('Tyellow');

Tred.addEventListener('click', ()=>{
    topTxt.style.color = 'red';
})
Twhite.addEventListener('click', ()=>{
    topTxt.style.color = 'antiquewhite';
})
Tblack.addEventListener('click', ()=>{
    topTxt.style.color = 'black';
})
Tmaroon.addEventListener('click', ()=>{
    topTxt.style.color = 'maroon';
})
Tgreen.addEventListener('click', ()=>{
    topTxt.style.color = 'green';
})
Tyellow.addEventListener('click', ()=>{
    topTxt.style.color = 'yellow';
})


//bottom text color
let Bwhite = document.getElementById('Bwhite');
let Bblack = document.getElementById('Bblack');
let Bred = document.getElementById('Bred');
let Bmaroon = document.getElementById('Bmaroon');
let Bgreen = document.getElementById('Bgreen');

Bred.addEventListener('click', ()=>{
    btmTxt.style.color = 'red';
})
Bwhite.addEventListener('click', ()=>{
    btmTxt.style.color = 'antiquewhite';
})
Bblack.addEventListener('click', ()=>{
    btmTxt.style.color = 'black';
})
Bmaroon.addEventListener('click', ()=>{
    btmTxt.style.color = 'maroon';
})
Bgreen.addEventListener('click', ()=>{
    btmTxt.style.color = 'green';
})



//Card background
let redCard = document.getElementById('redCard');
let blueCard = document.getElementById('blueCard');
let greenCard = document.getElementById('greenCard');
let cardBack = document.getElementById('back');

redCard.addEventListener('click', ()=>{
    cardBack.style.backgroundImage = "url('/imgs/redCard.png')";
})

blueCard.addEventListener('click', ()=>{
    cardBack.style.backgroundImage = "url('/imgs/blueCard.png')";
})

greenCard.addEventListener('click', ()=>{
    cardBack.style.backgroundImage = "url('/imgs/greenCard.png')";
})



//Border color
let mainImg = document.getElementById('mainImg');
let borderWhite = document.getElementById('borderWhite');
let borderYellow = document.getElementById('borderYellow');
let borderBlack = document.getElementById('borderBlack');


borderWhite.addEventListener('click', ()=>{
    mainImg.style.border = 'antiquewhite solid 4px';
})

borderYellow.addEventListener('click', ()=>{
    mainImg.style.border = 'yellow solid 4px';
})

borderBlack.addEventListener('click', ()=>{
    mainImg.style.border = '#5885d1 solid 4px';
})

