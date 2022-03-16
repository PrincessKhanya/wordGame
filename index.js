const buttonElem = document.querySelector(".btn");
const buttonElem1 = document.querySelector(".btn1");
const msgBox = document.querySelector(".message");
const msgBox1 = document.querySelector(".messages");
const msgBox2 = document.querySelector(".message1");


buttonElem.addEventListener("click", () => { comparedGuess(); });

function comparedGuess() {
    let holder=''
    let guessNumber = document.getElementById("inputBox").value;
    const inputSearch1 = guessNumber.split(" ");

    msgBox.innerHTML = `The length of the sentence is ${inputSearch1.length}`;
    const result = inputSearch1.filter(word => word.length > 4);


    for(let i=0; i<inputSearch1.length; i++){
        newVar=inputSearch1[i];
        if(newVar.length>4){
            holder+=`<mark class="colorWords"> ${newVar}</mark>`
        }else{
            holder+= " "+newVar
        }
    }
    msgBox1.innerHTML=holder

    console.log(inputSearch1)
    var longestWord = inputSearch1.reduce(function(longestWord, currentWord) {
        if(currentWord.length > longestWord.length)
           return currentWord;
        else
           return longestWord;
      });
    console.log(longestWord)
    msgBox2.innerHTML=`The longest word in your sentence is <mark class="colorWord">${longestWord}</mark>`


}

buttonElem1.addEventListener("click", () => { hideWords();


});

function hideWords() {
    let guessNumber = document.getElementById("inputBox").value;
    const inputSearch1 = guessNumber.split(" ");
    let holder=''


    for(let i=0; i<inputSearch1.length; i++){
        newVar=inputSearch1[i];
        if(newVar.length<=4){
            holder+=`<mark class="hidden"> ${newVar}</mark>`
        }else{
            holder+= " "+newVar
        }
    }
    msgBox1.innerHTML=holder

}






