// function play(){
//     const homesreanSection = document.getElementById('home-screen');
//     homesreanSection.classList.add('hidden');

//     const playgrounSection = document.getElementById('play-ground');
//     playgrounSection.classList.remove('hidden');
// }
function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('your random number:',alphabet)

    const currentAlphbet = document.getElementById('curround-alphabet');
    currentAlphbet.innerText = alphabet;

    setBackGraoundColorById(alphabet);

    
}

function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}