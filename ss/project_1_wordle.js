// Initialise array of words
const words = ["array", "wrath", "hello"]
console.log(words)
// Randomly generate word to be guessed

// function randomWord() {
//     let randomNumber = math.floor(math.random());
//     console.log(randomNumber)   
//     return words[randomNumber]
// }

// randomWord()    
// if button is clicked on keyboard:
//  - display letter on grid
//  - run check on correct letter
//  - run check on correct position

// Initialise variables:

const numberOfGuesses = 6
let guessesRemaining = numberOfGuesses
let currentGuess = []
let nextLetter = 0
let rowNumber = 1
let colNumber = 1

// Write a function that initialises a 6 x 5 wordle board
function initialiseBoard() {

    let board = document.getElementById("wordleBoard")
    for (let r=0; r<6; r++) {
        let row = document.createElement("div")
        row.className = "letterRow"
        let colNumber = 1
        for (let c=0; c<5; c++) {
            let box = document.createElement("div")
            box.id = "r" + rowNumber +"c" + colNumber
            //console.log(box.id)
            box.className = "letterContainer"
            row.appendChild(box)
            colNumber += 1
        }

        board.appendChild(row)

        rowNumber += 1
    }

}

initialiseBoard()

// Create keyboard

// Creates an object called 'keys' that stores all the buttons for the keyboard
let keys = document.getElementsByClassName("key")
// keys is an object
console.log(typeof keys)
console.log(keys)

// Loop through each key
for (let keyElement of keys) {
    let key = keyElement.textContent
    // key is a string
    //console.log(typeof key)
    let outputID = "r" + rowNumber +"c" + colNumber
    // outputID is a string
    //console.log(typeof outputID)
    //console.log(outputID)
    let output = document.getElementById(outputID)
    let chosenLetterElement = document.createElement("p")
    //console.log(output)
    // Add an event listener to the key
    keyElement.addEventListener("click", function() {
        // Check which row and which column
        let output = document.getElementById(outputID)
        console.log(key)
        chosenLetterElement.innerHTML = key
        // chosenLetterElement is an object
        console.log(chosenLetterElement)
        output.appendChild(chosenLetterElement)
        console.log(output)
    
    }
    
    )
}

// Write function for delete button
// FCC code
// function deleteLetter(){
//     let row = getElementsByClassName("letterRow")[6 - guessRemaining]
//     let box = row.children[nextLetter - 1]
//     box.textContent = " "
//     box.classList.remove("filledBox")
//     currentGuess.pop()
//     nextLetter -= 1
// }

// Write function for enter button


// Wrtie function that inserts letter
// function insertLetter() {
//     if (nextLetter === 5) {
//         return
//     } 

//     pressedKey = pressedKey.toLowerCase()

//     let row = document.getElementsByClassName("letterRow")[6 - guessRemaining]
//     let box = row.children[nextLetter]
//     box.textContent = pressedKey
//     box.classList.add("filled-box")
//     currentGuess.push(pressedKey)
//     nextLetter += 1
// }

// FCC - Accepting user input:

// document.addEventListener("keyup", function(e){
//     if (guessRemaining === 0) {
//         return
//     }
//     let pressedKey = string(e.key)

//     if (pressedKey === "Delete" && nextLetter !== 0){
//         deleteLetter()
//         return
//     }

//     let found = pressedKey.match
// })
