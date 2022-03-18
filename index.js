const buttonElem = document.querySelector(".btn");
const buttonElem1 = document.querySelector(".btn1");
const msgBox = document.querySelector(".message");
const msgBox1 = document.querySelector(".messages");
const checkbox = document.querySelector(".checkbox")
const displaySentence = document.querySelector(".displaySentence")

buttonElem.addEventListener("click", () => { highlightWords(); countWords(); displayLastSentences() });

function highlightWords() {
    let holder = ''
    let guessNumber = document.getElementById("inputBox").value.replaceAll('.', '');
    const inputSearch1 = guessNumber.split(" ");

    longestWord = findLongestWords()

    for (let i = 0; i < inputSearch1.length; i++) {
        newVar = inputSearch1[i];
        if (newVar.length > 4) {
            if (newVar.length == longestWord) {
                holder += ` <mark class="colorWord"> ${newVar}</mark>`
            } else { holder += ` <mark class="colorWords"> ${newVar}</mark>` }
        } else {
            holder += ` ${newVar}`
        }
    }
    return msgBox1.innerHTML = holder
}
checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
        hideWords();
    } else {
        highlightWords();
    }

});

function hideWords() {
    let guessNumber = document.getElementById("inputBox").value;
    const inputSearch1 = guessNumber.split(" ");
    let holder = ''
    longestWord = findLongestWords()

    for (let i = 0; i < inputSearch1.length; i++) {
        newVar = inputSearch1[i];
        if (newVar.length <= 4) {
            holder += ` <mark class="hidden"> ${newVar}</mark>`
        }else if(newVar.length > 4){
            if (newVar.length == longestWord) {
                holder += ` <mark class="colorWord"> ${newVar}</mark>`
            }else{ holder += ` <mark class="colorWords"> ${newVar}</mark>` }
        }
    }
    return msgBox1.innerHTML = holder
}


function countWords() {
    let guessNumber = document.getElementById("inputBox").value;
    const inputSearch1 = guessNumber.split(" ");
    return msgBox.innerHTML = `The length of the sentence is ${inputSearch1.length}`
}

function findLongestWords() {
    let guessNumber = document.getElementById("inputBox").value.replaceAll('.', '');
    const inputSearch1 = guessNumber.split(" ");

    let longestWord = inputSearch1.reduce(function (longestWord, currentWord) {
        if (currentWord.length >= longestWord.length)
            return currentWord;
        else
            return longestWord;
    });
    return longestWord.length
}

sentenceHolder = [];

function displayLastSentences() {
    let guessNumber = document.getElementById("inputBox").value
    sentenceHolder.push(guessNumber);

    let text = "";
    for (let i = 0; i < sentenceHolder.length; i++) {
        text += "<li>" + sentenceHolder[i] + "</li>";
    }
    text += "";
    
    return displaySentence.innerHTML = text
}

function clickedSentence(sentence){
    console.log(sentence.target.innerHTML)
    
}

const ul=document.querySelector(".sentences");
displaySentence.addEventListener('click',clickedSentence)










