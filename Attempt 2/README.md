# Wordle! (General Assembly)
Wordle Project for GA

TECHNOLOGIES USED:
1 HTML page for display
1 CSS page for styling
1 Javascript file for game logic and stlying for animations

APPROACH TAKEN:
HTML/JS FOR FRONT-END:
Each section is split into CONTAINERS so it's easy to organise and style. There is a section for:
    - Header
    - Wordle Board
    - Keyboard

Within those sections there are subsections:
Header subsection:
- Title

Wordle Board Container:
- Wordle Board --> further divided into:
    - squares (that hold the letter) with id's to reference

Keyboard Container:
- Keyboard --> further divided into:
    - keyboard rows
    - key board keys (buttons) with data key to store the value

JAVASCRIPT GAME LOGIC:
Each action to be defined in a function:

Initliasing the keyboard:
- Runs through a loop to create 30 squares (6 guesses of 5 words)

Get the tile colour:
- If the letter is not in the word at all, turn grey
- if the letter is in the word but wrong position turn yellow
- If the letter is in the word and right position turn green


Get user input from keyboard
- Has an event listener to check which key is clicked:
    - If a letter is clicked, take the data key and display in the square
    - If the Enter Key is clicked, run the function that handles it
    - If the Delete Key is clicked, run the function that handles it

Handle the Enter Key
- Checks if its a 5 letter word
- Checks and changes the tile colours with separate function

Handle the Delete Key
- Removes the last letter of the array
- Updates which square user is at

Get the current word array
- Tracks which word in the array we are at

Update current guessed words:
- Takes the letters of the user and pushes it into an array

UNSOLVED PROBLEMS:
    Current version cannot handle duplicate letters - i.e 
    Currently cannot handle fake words
    Does not stop user from entering more letters than 5 when pressing enter


[link to my Wordle](https://heystellabella.github.io/Wordle_GA/Attempt%202/wordle_attempt2.html)