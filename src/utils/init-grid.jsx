function createNewGrid(rows, columns) {
    let grid = []

    for(let row = 0; row < rows; row++) {
        grid.push([])
        for(let column = 0; column < columns; column++) {
            let cellState = {
                isMine: false,
                adjacentMines: 0,
                isOpen: false,
            }
            grid[row].push(cellState)
        }
    }
    return grid
}

function plantMines (rows, columns, mines, grid) {
    let mine = 1
    while( mine <= mines) {
        // generate random coordinates for mines on the grid
        let mineRow = Math.floor(Math.random()*rows)
        let mineColumn = Math.floor(Math.random()*columns)
        // plant mine if the cell is not mined already
        if( !grid[mineRow][mineColumn].isMine) {
            grid[mineRow][mineColumn].isMine = true
            mine++
        }
        // else generate another random location to plant mine
    }
    return grid
}

function countAdjacentMinesCell(row, column, grid) {
    let totalRows = grid.length
    let totalColumns = grid[0].length
    let adjacentMines = 0

    // for later: skip the mined cells
    
    // top (row-1, column)
    if(row > 0) {adjacentMines = grid[row-1][column]?.isMine ? adjacentMines + 1 : adjacentMines}

    // top-right (row-1, column+1)
    if(row > 0 && column < totalColumns - 1) {adjacentMines = grid[row-1][column+1]?.isMine ? adjacentMines+1 : adjacentMines}

    // right (row, column+1)
    if(column < totalColumns-1) {adjacentMines = grid[row][column+1]?.isMine?  adjacentMines+1 : adjacentMines}

    // bottom-right (row+1, column+1)
    if(row < totalRows-1 && column < totalColumns-1) {adjacentMines = grid[row+1][column+1]?.isMine?  adjacentMines+1 : adjacentMines}

    // bottom (row+1, column)
    if(row < totalRows-1) {adjacentMines = grid[row+1][column]?.isMine ? adjacentMines+1 : adjacentMines}

    // bottom-left (row+1, column-1)
    if(row < totalRows-1 && column > 0) {adjacentMines = grid[row+1][column-1]?.isMine ? adjacentMines+1 : adjacentMines}

    // left (row, column-1)
    if(column > 0) {adjacentMines = grid[row][column-1]?.isMine ? adjacentMines+1 : adjacentMines}

    // top-left (row-1, column-1)
    if(row > 0 && column > 0) {adjacentMines = grid[row-1][column-1]?.isMine ? adjacentMines+1 : adjacentMines}

    return adjacentMines
}

function countAdjacentMinesGrid(rows, columns, grid) {
    for(let row = 0; row < rows; row++) {
        for(let column = 0; column < columns; column++) {
            grid[row][column].adjacentMines = countAdjacentMinesCell(row, column, grid)
        }
    }
    return grid
}

export function initGrid(rows, columns, mines) {
    let grid = createNewGrid(rows, columns)
        grid = plantMines(rows, columns, mines, grid)
        grid = countAdjacentMinesGrid(rows, columns, grid)
    return grid
}