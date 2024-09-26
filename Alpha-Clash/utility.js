function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackGraoundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}



function romoveBackGraoundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

// score for function
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText =value;
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25 ;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    return alphabet;
}

