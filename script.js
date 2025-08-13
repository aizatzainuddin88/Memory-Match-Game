let cards = [
    "A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F",
    "G", "G", "H", "H"
];
let flippedCards = [];
let matchedCards = [];
let gameBoard = document.getElementById("game-board");

function createCard(cardValue) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.textContent = cardValue;
    card.onclick = flipCard;
    return card;
}

function shuffleCards() {
    flippedCards = [];
    matchedCards = [];
    gameBoard.innerHTML = "";
    cards = shuffle(cards);

    cards.forEach(cardValue => {
        gameBoard.appendChild(createCard(cardValue));
    });
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        flippedCards.push(this);
        
        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    if (flippedCards[0].textContent === flippedCards[1].textContent) {
        flippedCards[0].classList.add("matched");
        flippedCards[1].classList.add("matched");
        matchedCards.push(flippedCards[0], flippedCards[1]);
        flippedCards = [];
    } else {
        setTimeout(() => {
            flippedCards[0].classList.remove("flipped");
            flippedCards[1].classList.remove("flipped");
            flippedCards = [];
        }, 1000);
    }

    if (matchedCards.length === cards.length) {
        alert("You win! All pairs matched.");
    }
}

// Initialize the game when the page loads
window.onload = shuffleCards;
