const buttonElem = document.querySelector(".btn");
const buttonElem1 = document.querySelector(".btn1");
const msgBox = document.querySelector(".message");
const msgBox1 = document.querySelector(".messages");
const checkbox = document.querySelector(".checkbox")
const displaySentence = document.querySelector(".displaySentence")
const colourLabel = document.querySelector(".colourLabel")
const errorMsg = document.querySelector(".errorMsg")

buttonElem.addEventListener("click", () => {
    let guessNumber = document.getElementById("inputBox").value
    let sliderValue=document.getElementById('textInput').value
    if(guessNumber.length != 0){
        if(guessNumber.length<=sliderValue){
            highlightWords(); countWords(); displayLastSentences();colourLabel.classList.remove("hidden");
        }else if(guessNumber.length>sliderValue){
            inputSearch1= ''
            errorMsg.innerHTML='Please use the slider to select the length of the sentence you want to use'
            setTimeout(() => { errorMsg.classList.remove("hidden"); }, 500);
            setTimeout(() => { location.reload() }, 7000); 
        }   
    }else if (guessNumber.length == 0){
        errorMsg.innerHTML="Please enter a sentence"
        setTimeout(() => { errorMsg.classList.remove("hidden"); }, 500);
        setTimeout(() => { location.reload() }, 7000);
    }
});

function userInputHolder() {
    let guessNumber = document.getElementById("inputBox").value;
    const inputSearch1 = guessNumber.trim( ).replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').split(" ");
    return inputSearch1    
}

function highlightWords() {
    let holder = ''
    let inputSearch1 = userInputHolder()
    if (inputSearch1 != ''){
        errorMsg.innerHTML="PLease enter a sentence"
    }else{
        return inputSearch1
    }
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
    let inputSearch1 = userInputHolder()
    let holder = ''
    longestWord = findLongestWords()
    for (let i = 0; i < inputSearch1.length; i++) {
        newVar = inputSearch1[i];
        if (newVar.length <= 4) {
            holder += ` <mark class="hidden"> ${newVar}</mark>`
        } else if (newVar.length > 4) {
            if (newVar.length == longestWord) {
                holder += ` <mark class="colorWord"> ${newVar}</mark>`
            } else { holder += ` <mark class="colorWords"> ${newVar}</mark>` }
        }
    }
    return msgBox1.innerHTML = holder
}

let numberHolder=[]
function countWords() {
    let inputSearch1 = userInputHolder()
    numberHolder.push(inputSearch1.length)
    checkNumberHolder()
    var sum = numberHolder.reduce(function (x, y) {
        return x + y;
    }, 0);
    let average =(sum/(numberHolder.length))
    if(inputSearch1.length>=average){
        document.getElementById('test').style.background = "green";
        document.getElementById('tests').innerHTML = "Green means the length of the sentence entered is greater then average length of the last five sentence";
    }else{
        document.getElementById('test').style.background = "orange";
        document.getElementById('tests').innerHTML = "Orange means the length of the sentence entered is less then average length of the last five sentence";
    }
    return msgBox.innerHTML = `The length of the sentence is ${inputSearch1.length}`
}


function findLongestWords() {
    let inputSearch1 = userInputHolder()
    let longestWord = inputSearch1.reduce(function (longestWord, currentWord) {
        if (currentWord.length >= longestWord.length)
            return currentWord;
        else
            return longestWord;
    });
    return longestWord.length
}

let sentenceHolder = [];
if(localStorage['sentenceHolder']){
    sentenceHolder = JSON.parse(localStorage.getItem('sentenceHolder'))
}


function displayLastSentences() {
    let guessNumber = document.getElementById("inputBox").value
    checkSentenceHolder()
    sentenceHolder.push(guessNumber);
    localStorage.setItem('sentenceHolder', JSON.stringify(sentenceHolder))

    let text = "";
    for (let i = 0; i < sentenceHolder.length; i++) {
        text += "<li>" + sentenceHolder[i] + "</li>";
    }
    text += "";

    return displaySentence.innerHTML = text
}

function clickedSentence(sentence) {
    let guessNumber = sentence.target.innerHTML;
    const inputSearch1 = guessNumber.split(" ");

    function reCountWords() {
        return msgBox.innerHTML = `The length of the sentence is ${inputSearch1.length}`
    }

    reCountWords()

    function reHighlightWords() {
        longestWord = inputSearch1.reduce(function (longestWord, currentWord) {
            if (currentWord.length >= longestWord.length)
                return currentWord;
            else
                return longestWord;
        });
        let holder = ''
        for (let i = 0; i < inputSearch1.length; i++) {
            newVar = inputSearch1[i];
            if (newVar.length > 4) {
                if (newVar.length == longestWord.length) {
                    holder += ` <mark class="colorWord"> ${newVar}</mark>`
                } else { holder += ` <mark class="colorWords"> ${newVar}</mark>` }
            } else {
                holder += ` ${newVar}`
            }
        }
        return msgBox1.innerHTML = holder
    }

    reHighlightWords()

    checkbox.addEventListener("click", (evt) => {
        if (checkbox.checked == true) {
            reHideWords();
        } else {
            reHighlightWords();
        }
    });

    function reHideWords() {
        longestWord = inputSearch1.reduce(function (longestWord, currentWord) {
            if (currentWord.length >= longestWord.length)
                return currentWord;
            else
                return longestWord;
        });
        let holder = ''
        for (let i = 0; i < inputSearch1.length; i++) {
            newVar = inputSearch1[i];
            if (newVar.length <= 4) {
                holder += ` <mark class="hidden"> ${newVar}</mark>`
            } else if (newVar.length > 4) {
                if (newVar.length == longestWord.length) {
                    holder += ` <mark class="colorWord"> ${newVar}</mark>`
                } else { holder += ` <mark class="colorWords"> ${newVar}</mark>` }
            }
        }
        return msgBox1.innerHTML = holder
    }

}

const ul = document.querySelector(".sentences");
displaySentence.addEventListener('click', clickedSentence)

function checkSentenceHolder(){
    if(sentenceHolder.length==5){
        return sentenceHolder.shift()
    }else{
        return sentenceHolder=sentenceHolder;
    }
}

function checkNumberHolder(){
    if(numberHolder.length==5){
        return numberHolder.shift()
    }else{
        return numberHolder=numberHolder;
    }
}

function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
}




