//What do we need for war card game

/**
 * Deck
 *  52 cards
 *      -Rank
 *      -Suit
 *      -values
 * a way to shuffle
 * a way to pass the cards to the players
 * 
 * Players
 *  Name
 *  Score
 *  Hand
 *  
 * Logic to play (higher hand wins the round)
 *  Ways to compare the cards (number values on each card)
 * 
 * 
 * Deck class
 *  Should have:
 *      An array to store the cards
 *      An array to store the cards ranks
 *      An Array to store the cards suits
 * 
 * 
 */
//I created a class for the deck, this will define the deck, ranks, and suits
class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = [
            "Clubs ♠", "Hearts ♥", "Spades ♣", "Diamond ♦"
        ];
    }

//I used to a for loop in order to give value to the cards in the deck

createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.ranks.length; j++) {
            let card = {
                name: `${this.ranks[j]} of ${this.suits[i]}` ,
                value: j + 1
            }
        //This "push" will allow the deck to push a card each round
            this.deck.push(card)

            // console.log(card);
        }
    }
}

//This information was found on the video walkthrough, I did type it in for practice though

shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];    
    }
}

}

//Class for a Game (WAR)
/**
 * Needs:
 * a Deck
 * 
 * Create the deck, shuffle deck, pass deck
 * 
 * logic to play game
 *  Turn based
 *  Do players have a hand yet?
 *  control flow statement logic to decide winner?
 * 
 * 2 Players
 *  Hand
 *  Score
 *  Name
 */

//This is where I created a class for the game itself, it consists of name, score and hand of each player
class Game {
    constructor(){
        this.player1 ={
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 ={
            name: 'Player 2',
            score: 0,
            hand: []
        }
}

//Method to play the game
/**
 * Pass out cards to our players
 * Take x amount of turns
 * Award points based on card value
 * Log the winner
 */

//I am using the already created deck and shuffle
playGame() {
    
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()

//I created the push in order to get the next card, the shift will remove the first element from an array and returns that removed element
    while (deck.deck.length !== 0) {

        this.player1.hand.push(deck.deck.shift())
        this.player2.hand.push(deck.deck.shift())
    }

// This is showing the actual "game play"

    for (let i = 0; i < this.player1.hand.length; i++) {
        if (this.player1.hand[i].value > this.player2.hand[i].value) {
    this.player1.score ++
    console.log(`
        P1 Card: ${this.player1.hand[i].name}
        P2 Card: ${this.player2.hand[i].name}
        Player 1 wins a point!
        Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
        `)
        } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
        this.player2.score ++
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name}
            Player 2 wins a point!
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `)
        } else {
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Tie: No points awarded
                Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
                `)
        }
    }
//This is showing what messages will appear depending on the winner/tie
    if (this.player1.score > this.player2.score) {
        console.log(`Player 1 wins! Final Score: p1: ${this.player1.score} p2: ${this.player2.score}`)
    } else if (this.player2.score > this.player1.score) { console.log(`Player 2 wins! Final Score: p1: ${this.player1.score} p2: ${this.player2.score}`)
    } else {
        console.log('Tie')
    }

    }

// console.log(this.player1.hand)
// console.log(this.player2.hand)
}



const game = new Game
game.playGame()

const deck = new Deck
deck.createDeck()
deck.shuffleDeck()

// console.log(deck.deck)