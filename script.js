const Gameboard = (() => {
    const board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    const createBoard = () => {
        const gameboardDiv = document.getElementById('gameboard')

        for (let i = 0; i < board.length; i++) {
            const row = document.createElement('div')
            row.classList.add('row')
            for (let j = 0; j < board.length; j++) {
                const cell = document.createElement('div')
                cell.textContent = board[i][j]
                cell.classList.add('cell')
                cell.setAttribute('data-position', `${i}${j}`)
                console.log(cell.getAttribute('data-position')[0])
                cell.addEventListener("click", function() {
                    //making sure there's not already an X/O in the clicked cell
                    if (cell.textContent === 'X' || cell.textContent === 'O') return

                    //updating the board state with the new selection
                    cellPosition1 = cell.getAttribute('data-position')[0]
                    cellPosition2 = cell.getAttribute('data-position')[1]
                    board[cellPosition1][cellPosition2] = Engine.getPlayerTurn()
                    console.log(board)
                    cell.textContent = Engine.getPlayerTurn()

                    checkWin(cell.textContent)
                    Engine.changePlayer()
                })
                row.appendChild(cell)
            }
            gameboardDiv.appendChild(row)
        }
    }

    const checkWin = (char) => {
        let player
        if (char = "X") {
            player = `${player1.name}`
        } else {
            player = `${player2.name}`
        }
        //horizontals
        for (let i = 0; i < board.length; i++) {
            let charsInARow = 0
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] != char) {
                    break
                } else {
                    charsInARow += 1
                }
                if (charsInARow === 3) {
                    alert(`${player} wins! (horizontal)`)
                    let playAgain = confirm("Play again?");
                    if (playAgain) {
                        window.location.reload()
                    }
                    return
                }
            }
        }
        //verticals
        for (let i = 0; i < board.length; i++) {
            let charsInARow = 0
            for (let j = 0; j <board.length; j++) {
                if (board[j][i] != char) {
                    break
                } else {
                    charsInARow += 1
                }
                if (charsInARow === 3) {
                    alert(`${player} wins! (vertical)`)
                    let playAgain = confirm("Play again?");
                    if (playAgain) {
                        window.location.reload()
                    }
                    return
                }
            }
        }
        //diagonals
        let charsInARow = 0
        for (let i = 0; i < board.length; i++) {
            console.log(i)
            if (board[i][i] != char) {
                break
            } else {
                charsInARow += 1
            }
            if (charsInARow === 3) {
                alert(`${player} wins! (diagonal down)`)
                let playAgain = confirm("Play again?");
                    if (playAgain) {
                        window.location.reload()
                    }
                return
            }
        }
        charsInARow = 0
        for (let i = board.length - 1; i >= 0; i--) {
            console.log(i)
            if (board[board.length-1-i][i] != char) {
                break
            } else {
                charsInARow += 1
            }
            if (charsInARow === 3) {
                alert(`${player} wins! (diagonal up)`)
                let playAgain = confirm("Play again?");
                    if (playAgain) {
                        window.location.reload()
                    }
                return
            }
        }
        //ties
        let blanks = 0
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === ' ') {
                    blanks += 1
                }
            }
        }
        if (blanks === 0) {
            alert("Tie game!")
            let playAgain = confirm("Play again?");
                    if (playAgain) {
                        window.location.reload()
                    }
        }
    }

    return {
        createBoard
    }
})();

const Player = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName, name};
}

const Engine = (() => {
    let playerTurn = 'X'

    const changePlayer = () => {
        console.log(playerTurn)
        if (playerTurn === 'X') {
            playerTurn = 'O'
        } else {
            playerTurn = 'X'
        }
    }
    const resetBtn = document.getElementById('resetBtn')
    resetBtn.addEventListener("click", function() {
        window.location.reload()
    })

    const getPlayerTurn = () => {return playerTurn}

    return {
        changePlayer, getPlayerTurn
    }

})();

Gameboard.createBoard()
let player1Name = prompt("Player 1 Name: ")
let player2Name = prompt("Player 2 Name: ")
const player1 = Player(player1Name)
const player2 = Player(player2Name)