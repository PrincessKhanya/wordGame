// const inputSearch=document.querySelector(".inputSearch");

const inputSearch='Create a widget that allows a user to enter a sentence of 5 or more words. When the user clicks a button the sentence should be analyzed.'

const testBtn=document.querySelector(".testBtn");
const demo=document.querySelector(".demo")
console.log(inputSearch)

testBtn.addEventListener("click", () => { searchWords(); });

function searchWords(){
    const inputSearch1=inputSearch.split(" ");
    console.log(inputSearch1);
    const result = inputSearch1.filter(word => word.length > 4);
    
    console.log(result)
    console.log(inputSearch1.length)
    inputSearch1.forEach(item => console.log(item));

    const intersection = inputSearch1.filter(element => result.includes(element));
    console.log(intersection)

    for(let i = 0; i < inputSearch1.length; i++) {
             
        // Loop for array2
        for(let j = 0; j < result.length; j++) {
             
            // Compare the element of each and
            // every element from both of the
            // arrays
            if(inputSearch1[i] === result[j]) {
             
                // Return if common element found
                inputSearch1[i].style.color='green'
            }
        }
    }

    // if(inputSearch1==result){



    // }
    // function findCommonElement(array1, array2) {
     
    //     // Loop for array1
    //     for(let i = 0; i < array1.length; i++) {
             
    //         // Loop for array2
    //         for(let j = 0; j < array2.length; j++) {
                 
    //             // Compare the element of each and
    //             // every element from both of the
    //             // arrays
    //             if(array1[i] === array2[j]) {
                 
    //                 // Return if common element found
    //                 return true;
    //             }
    //         }
    //     }
         
    //     // Return if no common element exist
    //     return false;
    // }



    demo.innerHTML=inputSearch
}
