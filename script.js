const icons=document.querySelectorAll('.step-one .icon');
const stepOne=document.querySelector('.step-one');
const stepTwo=document.querySelector('.step-two');
const playerChoice=document.querySelector('.player-choice img');
const houseChoice=document.querySelector('.house-choice img');
const Shadow=document.querySelector('.shadow');
const midBlock=document.getElementById('mid-block');
const result=document.querySelector('.result');
const playAgain=document.querySelector('.play-again');
const rulesBtn=document.querySelector('.rules-btn');
const closeIcon=document.querySelector('.close-icon');
const rulesImg=document.querySelector('.rules');
const scoreText=document.querySelector('.score span');

let score=0;
if(window.localStorage.Xscore){
    score=window.localStorage.Xscore;
    scoreText.textContent=score;
}

icons.forEach((icon)=>{
    icon.onclick=()=>{
        stepOne.classList.add('hidden');
        stepTwo.classList.remove('hidden')
        stepTwo.classList.add('flex')
        playerChoice.src=icon.src
        playerChoice.className=icon.className
        Play();
    }
})

const Play=()=>{
    setTimeout(() => {
        Shadow.classList.add('hidden');
        let rIndex=Math.floor(Math.random()*icons.length);
        houseChoice.src=icons[rIndex].src;
        houseChoice.className=icons[rIndex].className;
        compare();
    }, 1000);
}

const compare=()=>{
    setTimeout(() => {
        if(playerChoice.src===houseChoice.src){
            result.textContent='DRAW';
        }else if(playerChoice.classList.contains('paper-icon')){
            if(houseChoice.classList.contains('scissors-icon')){
                result.textContent='YOU LOSE';
                score--;
            }else{
                result.textContent='YOU WIN';
                score++;
            }
        }else if(playerChoice.classList.contains('scissors-icon')){
            if(houseChoice.classList.contains('paper-icon')){
                result.textContent='YOU WIN';
                score++;
            }else{
                result.textContent='YOU LOSE';
                score--;
            }
        }else if(playerChoice.classList.contains('rock-icon')){
            if(houseChoice.classList.contains('paper-icon')){
                result.textContent='YOU LOSE';
                score--;
            }else{
                result.textContent='YOU WIN';
                score++
            }
        }
        midBlock.classList.remove('hidden');
        scoreText.textContent= score;
        window.localStorage.setItem('Xscore', score);
    }, 1000);
}

playAgain.onclick=()=>{
    window.location.reload();
}

rulesBtn.onclick=()=>{
    rulesImg.classList.remove('hidden');
}

closeIcon.onclick=()=>{
    rulesImg.classList.add('hidden');
}
