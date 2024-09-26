// function play(){
//     const homesreanSection = document.getElementById('home-screen');
//     homesreanSection.classList.add('hidden');

//     const playgrounSection = document.getElementById('play-ground');
//     playgrounSection.classList.remove('hidden');
// }

function handleKeyBoradButtonPress(event){
    const playerPress = event.key;
    console.log('player press:',playerPress);

    if(playerPress === 'Escape'){
        gameOver();
    }


    // to get a expected alphabet
    const currentAlphbetElement = document.getElementById('curround-alphabet');
    const currentAlphbet = currentAlphbetElement.innerText;
    const expectedAlphabet = currentAlphbet.toLowerCase();
    console.log(playerPress,expectedAlphabet)


    // to matched the alphabet
    if (playerPress === expectedAlphabet){
        // console.log('you got a point')
        // console.log('you have pass curently',expectedAlphabet)

        // get score value
        const currentScore = getElementValueById('current-score')
        // increase score
        const newScore = currentScore + 1; 
        setElementById('current-score',newScore);
        
       
        // ------------------------------------------------
        // got a score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoretext = currentScoreElement.innerText;
        // const currentScore  = parseInt (currentScoretext);

        // --------------------------------------------------------

        

        // start a new round
        romoveBackGraoundColorById(expectedAlphabet);
        continueGame();

    }
    else{
        const currentLife = getElementValueById('current-life');
        const newLife = currentLife - 1;
        setElementById('current-life',newLife);

        if( newLife === 0){
            gameOver();
        }

        // ------------------------------
        // console.log('you loss a point')
        // const currentLifeLossElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeLossElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // increase loss score
        // const newLossLife = currentLife - 1 ;

        // // set the life value
        // currentLifeLossElement.innerText = newLossLife;


    }
}

document.addEventListener('keyup', handleKeyBoradButtonPress);

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('your random number:',alphabet)

    const currentAlphbet = document.getElementById('curround-alphabet');
    currentAlphbet.innerText = alphabet;

    setBackGraoundColorById(alphabet);

    
}
// // go to the score screen
// function buttonClick(){
//     hiddenElementById('play-ground');
//     showElementById('score-screen')

// }
// // play again
// function goHome(){;
//     hiddenElementById('score-screen');
//     showElementById('play-ground');
// }

function play(){
    hiddenElementById('home-screen');
    hiddenElementById('score-screen');

    // set the value 
    setElementById('current-life',5);
    setElementById('current-score',0);

    showElementById('play-ground');
    continueGame();
}
function gameOver(){
    hiddenElementById('play-ground');
    showElementById('score-screen');

    // get the new score
    const gameScore = getElementValueById('current-score');
    setElementById('score',gameScore);

     // set the value 
     const currentAlphbet = getTextElementById('curround-alphabet');
     romoveBackGraoundColorById(currentAlphbet);
}