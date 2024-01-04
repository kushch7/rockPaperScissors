let items = ['rock', 'paper', 'scissors']
let pcScore = 0
let userScore = 0

console.log("Hi, Gamer! Let's play 'Rock-Paper-Scissors'.")



while (pcScore < 5 && userScore < 5){

    let userItem = prompt("What is your choice: 'rock', 'paper' or 'scissors' ?").toLowerCase()

    while (userItem != "rock" && userItem != "paper" && userItem != "scissors") {
        userItem = prompt("What? Choose one of the options, nothing more!").toLowerCase()
    }

    console.log(`Your choice: ${userItem}`)

    let pcItem = items[Math.floor(Math.random() * 3)]
    console.log(`PC choice: ${pcItem}`)


    if (pcItem == "rock"){

        if (userItem == "rock") {
            console.log("TIE!")
    
        } else if (userItem == "paper"){
            console.log("WIN!")
            ++userScore
    
        } else if (userItem == "scissors") {
            console.log("LOSE!")
            ++pcScore
        }
    
    } else if (pcItem == "paper") {
    
        if (userItem == "rock") {
            console.log("LOSE!")
            ++pcScore
    
        } else if (userItem == "paper"){
            console.log("TIE!")
    
        } else if (userItem == "scissors") {
            console.log("WIN!")
            ++userScore
        }
    
    } else if (pcItem == "scissors") {
    
        if (userItem == "rock") {
            console.log("WIN!")
            ++userScore
    
        } else if (userItem == "paper"){
            console.log("LOSE!")
            ++pcScore
    
        } else if (userItem == "scissors") {
            console.log("TIE!")
        }
    
    }
    console.log(`---------------------------------`)
    console.log(`Your score: ${userScore}`)
    console.log(`PC score: ${pcScore}`)
    console.log(`---------------------------------`)

}

console.log("END GAME!")
