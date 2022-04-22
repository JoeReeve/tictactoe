const Gameboard = (() => {
    const board = [
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0']
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
                cell.addEventListener("click", function() {
                    if (cell.textContent === 'X' || cell.textContent === 'O') return
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
                    alert("You win!")
                }
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

    const getPlayerTurn = () => {return playerTurn}

    return {
        changePlayer, getPlayerTurn
    }
})();

Gameboard.createBoard()