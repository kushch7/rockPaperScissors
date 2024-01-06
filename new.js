let items = ['rock', 'paper', 'scissors']
let userScore = 0
let pcScore = 0
let playerSelection
let computerSelection

let userItem
let pcItem

let pcChoice = function() {
    pcItem = items[Math.floor(Math.random() * 3)]

    return pcItem
}

let userChoice = function() {
    userItem = prompt("What is your choice: 'rock', 'paper' or 'scissors'?").toLowerCase()

    while (userItem != "rock" && userItem != "paper" && userItem != "scissors") {
        userItem = prompt("Try again!").toLowerCase()
    }

    return userItem
}


function playRound(user, pc) {

    playerSelection = userChoice()
    computerSelection = pcChoice()

    console.log(`User: ${playerSelection}`)
    console.log(`PC: ${computerSelection}`)

    if (user == pc) {

        return "--- TIE! --- "

    } else if (pc == "rock"){

        if (user == "paper") {
            return "--- WIN! ---"
        } else if (user == "scissors") {
            return "--- LOSE! ---"
        }

    } else if (pc == "paper"){

        if (user == "scissors") {
            return "--- WIN! ---"
        } else if (user == "rock") {
            return "--- LOSE! ---"
        }

    } else if (pc == "scissors"){

        if (user == "rock") {
            return "--- WIN! ---"
        } else if (user == "paper") {
            return "--- LOSE! ---"
        }

    }

}

function game(rounds){
    for (let i = 0; i < rounds; i++) {
        console.log(playRound(playerSelection, computerSelection))
    }
}

game(5)