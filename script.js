const bingoObj = [
    { number: 9, x: 0, y: 0 },
    { number: 26, x: 1, y: 0 },
    { number: 35, x: 2, y: 0 },
    { number: 46, x: 3, y: 0 },
    { number: 65, x: 4, y: 0 },
    { number: 2, x: 0, y: 1 },
    { number: 23, x: 1, y: 1 },
    { number: 41, x: 2, y: 1 },
    { number: 50, x: 3, y: 1 },
    { number: 70, x: 4, y: 1 },
    { number: 12, x: 0, y: 2 },
    { number: 19, x: 1, y: 2 },
    { number: 'Free', x: 2, y: 2 },
    { number: 56, x: 3, y: 2 },
    { number: 61, x: 4, y: 2 },
    { number: 7, x: 0, y: 3 },
    { number: 30, x: 1, y: 3 },
    { number: 42, x: 2, y: 3 },
    { number: 54, x: 3, y: 3 },
    { number: 68, x: 4, y: 3 },
    { number: 3, x: 0, y: 4 },
    { number: 18, x: 1, y: 5 },
    { number: 44, x: 2, y: 5 },
    { number: 60, x: 3, y: 5 },
    { number: 71, x: 4, y: 5 },
]
const mainGrid = document.querySelector('#grid')

const handleBingoClick = (e) => {
    let cell = e.target
    cell.className == 'cell unclicked' ? cell.setAttribute('class', 'cell clicked') : cell.setAttribute('class', 'cell unclicked')

}



for (let i = 0; i <= 24; i++) {
    let { number, x, y } = bingoObj[i]

    const createdDiv = document.createElement('div')
    createdDiv.innerHTML = `${number}`
    createdDiv.setAttribute('class', 'cell unclicked')
    createdDiv.setAttribute('id', `cell-${x}${y}`)
    createdDiv.addEventListener('click', handleBingoClick)
    mainGrid.appendChild(createdDiv)
}


const handleSetUserName = (e) => {
    let greetingTag = document.querySelector('#greeting')
    let usersName = prompt('Welcome to Code Differently Bingo! What is your name?')

    greetingTag.innerHTML = `Welcome to Bingo ${usersName}!`
}

handleSetUserName()
