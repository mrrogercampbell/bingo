

const bingoObj = [
    { number: 63, x: 0, y: 0 },
    { number: 52, x: 1, y: 0 },
    { number: 41, x: 2, y: 0 },
    { number: 63, x: 3, y: 0 },
    { number: 51, x: 4, y: 0 },
    { number: 98, x: 0, y: 1 },
    { number: 54, x: 1, y: 1 },
    { number: 27, x: 2, y: 1 },
    { number: 91, x: 3, y: 1 },
    { number: 59, x: 4, y: 1 },
    { number: 24, x: 0, y: 2 },
    { number: 99, x: 1, y: 2 },
    { number: 'Free', x: 2, y: 2 },
    { number: 30, x: 3, y: 2 },
    { number: 46, x: 4, y: 2 },
    { number: 88, x: 0, y: 3 },
    { number: 40, x: 1, y: 3 },
    { number: 53, x: 2, y: 3 },
    { number: 32, x: 3, y: 3 },
    { number: 3, x: 4, y: 3 },
    { number: 8, x: 0, y: 4 },
    { number: 73, x: 1, y: 5 },
    { number: 15, x: 2, y: 5 },
    { number: 41, x: 3, y: 5 },
    { number: 61, x: 4, y: 5 },
]


const mainGrid = document.querySelector('#grid')
for (let i = 0; i <= 24; i++) {
    let { number, x, y } = bingoObj[i]
    console.log(number, x, y)
    const createdDiv = document.createElement('div')
    createdDiv.innerHTML = `${number}`
    createdDiv.setAttribute('class', 'cell unclicked')
    createdDiv.setAttribute('id', `cell-${x}${y}`)
    mainGrid.appendChild(createdDiv)
}
console.log(bingoObj)