let items = ['rock', 'paper', 'scissors']
let pcChoice = ""
let userChoice = ""
let userScore = 0
let pcScore = 0

function getComputerChoice() {
    return "PC: " +  items[Math.floor(Math.random() * 3)]
}

function getUserChoice() {
    userChoice = prompt("What is your choice: 'rock', 'paper' or 'scissors'?").toLowerCase()

    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
        userChoice = prompt("Try again!").toLowerCase()
    }

    return "User: " + userChoice
}


function playRound(userItem, pcItem) {
    if (userItem == pcItem) {
        return "--- TIE! ---"
    }
}

console.log(playRound(getUserChoice(), getComputerChoice()))


