// Initialising variables

// Word to check code
// let word = "fairy"
// Write function to generate random word to be geussed:

function getWord() {
    const validWords = ['AALII', 'AARGH', 'AARTI', 'ABACA', 'ABACI', 'ABACK', 'ABACS', 'ABAFT', 'ABAKA', 'ABAMP', 'ABAND', 'ABASE', 'ABASH', 'ABASK']
    const randomWord = validWords[Math.floor(Math.random()*validWords.length)].toLowerCase()
    return randomWord
}
let word = getWord()

console.log(word)

// An array inside an array as each word is an array of letters
let guessedWords = [[]]

// Iterates through the Id's of the squares once a letter has been chosen
let availableSpace = 1;

// To help determine which tiles to overturn 
let guessedWordCount = 0;

// Create 6 x 5 worlde board



function initialiseBoard() {
    const gameBoard = document.getElementById("wordleBoard")

    for (let index = 0; index < 30; index++) {
        // create 30 divs for each of the letters
        let square = document.createElement("div")
        // square.classList = "square"
        // gives the flip animation
        square.classList.add("square")
        square.classList.add("animate__animated")
        square.id = index + 1
        // console.log(square.className)
        // console.log(square.id)
        gameBoard.appendChild(square)
        
    }
}

initialiseBoard()

// Function to determine the tile colour:
function getTileColour(letter, index) {
    // Checks if the letter is correct - if the word includes the letter (not taking into account position)
    const isCorrectLetter = word.includes(letter)

    // If the letter is not in the word at all
    if (!isCorrectLetter) {
        return ("rgb(58, 58, 60)")
    } 

    // Check if its in the right space - gets the letter of the actual word in that position
    const letterAtPosition = word.charAt(index)
    console.log(letterAtPosition)
    // isCorrectPosition is a boolean, only true if the letter passed through is the same as the letter at the position of the word
    const isCorrectPosition = letter === letterAtPosition

    if (isCorrectPosition){
        // If it is correct letter and position, return green 
        return "rgb(83, 141, 78)"
    } else {
        return "rgb(181, 159, 59)"
    }
}

// Function that stores the word as an array when Enter is clicked
function handleEnterButton() {
    // Check that there has been 5 letters chosen
    const currentWordArray = getCurrentWordArray()
    console.log(word)
    if (currentWordArray.length !== 5) {
        console.log("Not enough letters")
        window.alert("Your guess must be 5 letters!")
    }
    
    else {
        // Turn the array into a string by joining all the letters together
        const currentWord = currentWordArray.join("")

        // delay for the flip animation
        const interval = 200;

        // Gets the position id of the first letter of the word in the array 
        // Either: 1, 6, 11, 16, 21, 26
        const firstLetterId = guessedWordCount * 5 + 1;

        // CODE FOR ANIMATION TAKEN FROM https://github.com/ianlenehan/wordle-clone/blob/master/js/main.js
        currentWordArray.forEach((letter, index) => {
            setTimeout(() => {
                const tileColour = getTileColour(letter, index);
                const letterId = firstLetterId + index;
                const letterElement = document.getElementById(letterId)
                letterElement.classList.add("animate__flipInX")
                letterElement.style = `background-color:${tileColour}; border-color:${tileColour}`
            }, interval * index);
        })

        // Updating the guessed word count
        guessedWordCount += 1
        // Check against the actual word
        if (currentWord === word) {
            console.log("CORRECT!")
            window.alert("Correct! You guessed it!")
        } else {
            window.alert("Wrong word!")
        }
    }

    // Now they have guessed a 5 letter word, push a new empty array into the guessedWords
    guessedWords.push([])

    // Must be 7 because at the end of the 6th array, the function creates a new empty one.
    if (guessedWords.length === 7) {
        window.alert("You have lost the game, loser.")
    }

}

// Write a function that handles the delete button

function handleDeleteButton() {

    // Retrieving the current word array we are guessing
    const currentWordArray = getCurrentWordArray()

    // Removing the last letter in this array and storing it in a new array
    const removedLetter = currentWordArray.pop()

    // Storing the new popped word in the guessedWords array
    guessedWords[guessedWords.length-1] = currentWordArray

    // getting the position of the CURRENT square element. The available space increments one ahead when a button is clicked
    const lastLetterElement = document.getElementById(String(availableSpace-1))

    // Making that CURRENT element blank
    lastLetterElement.textContent = " "
    // Move back one available space
    availableSpace = availableSpace - 1
}

// This function keeps track of number of guessed words so far, returns the position word we are at
function getCurrentWordArray() {
    // Therefore the current word we're on will be the index one less since we start indexing at 0
    // so if we're on the second word in the array, the index is 1
    // this function returns guessedWords[currentIndex] - the current word at that index.
    return guessedWords[(guessedWords.length)-1]
}

// Create a function to store and update guessed words
function updateGuessedWords(letter) {
    const currentWordArray = getCurrentWordArray()

    if (currentWordArray && currentWordArray.length < 5) {+
        currentWordArray.push(letter)
    }

    // Available space
    const availableSpaceElement = document.getElementById(String(availableSpace))
    availableSpace = availableSpace + 1

    availableSpaceElement.textContent = letter;
}

// Make the keyboard get the letter that is pressed

// Creates an object of all the keys by taking all the buttons in the class of keyboardRow
const keys = document.querySelectorAll(".keyboardRow button");
// console.log(keys)

// Loops through all the key
for (let i = 0; i < keys.length; i++) {

    // If a key is clicked, we retrieve the data in the data-key attribute
    keys[i].addEventListener("click", function() {
        
        const letter = keys[i].getAttribute("data-key")
        console.log(letter)
        
        if (letter === "Enter") {
            handleEnterButton()
            return;
        } else if (letter === "Delete") {
            handleDeleteButton()
            return;
        }
        // Pushes the selected letter into the current array to make the word.
        updateGuessedWords(letter)
    })
    
}