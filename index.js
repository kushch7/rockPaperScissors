let items = ['rock', 'paper', 'scissors']

console.log("Hi, Gamer! Let's play 'Rock-Paper-Scissors'.")

let userItem = prompt("What is your choice: 'rock', 'paper' or 'scissors' ?").toLowerCase()

while (userItem !== "rock" || userItem !== "paper" || userItem !== "scissors") {
    userItem = prompt(`What? Choose one the options!`)
}
console.log(`Your choice: ${userItem}`)

let pcItem = items[Math.floor(Math.random() * 3)]
console.log(`PC choice: ${pcItem}`)

