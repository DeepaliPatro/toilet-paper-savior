export function openAdjacentEmpty(row, column, grid) {
    let totalRows = grid.length
    let totalColumns = grid[0].length
    
    // top (row-1, column)
    if((row > 0)) {
        let cell = grid[row-1][column]
        if(!cell?.isMine && !cell?.isFlagged && !cell?.isOpen) {
            cell.isOpen = true
            if(cell.adjacentMines === 0 ) {openAdjacentEmpty(row-1, column, grid)}
        }
    }

    // top-right (row-1, column+1)
    if(row > 0 && column < totalColumns - 1) {
        let cell = grid[row-1][column+1]
        if(!cell?.isMine && !cell?.isFlagged && !cell?.isOpen) {
            cell.isOpen = true
            if(cell.adjacentMines === 0 ) {openAdjacentEmpty(row-1, column+1, grid)}
        }
    }

    // right (row, column+1)
    if(column < totalColumns-1) {
        let cell = grid[row][column+1]
        if(!cell?.isMine && !cell?.isFlagged && !cell?.isOpen) {
            cell.isOpen = true
            if(cell.adjacentMines === 0 ) {openAdjacentEmpty(row, column+1, grid)}
        }
    }

    // bottom-right (row+1, column+1)
    if(row < totalRows-1 && column < totalColumns-1) {
        let cell = grid[row+1][column+1]
        if(!cell?.isMine && !cell?.isFlagged && !cell?.isOpen) {
            cell.isOpen = true
            if(cell.adjacentMines === 0 ) {openAdjacentEmpty(row+1, column+1, grid)}
        }
    }

    // bottom (row+1, column)
    if(row < totalRows-1) {
        let cell = grid[row+1][column]
        if(!cell?.isMine && !cell?.isFlagged && !cell?.isOpen) {
            cell.isOpen = true
            if(cell.adjacentMines === 0 ) {openAdjacentEmpty(row+1, column, grid)}
        }
    }

    // bottom-left (row+1, column-1)
    if(row < totalRows-1 && column > 0) {
        let cell = grid[row+1][column-1]
        if(!cell?.isMine && !cell?.isFlagged && !cell?.isOpen) {
            cell.isOpen = true
            if(cell.adjacentMines === 0 ) {openAdjacentEmpty(row+1, column-1, grid)}
        }
    }

    // left (row, column-1)
    if(column > 0) {
        let cell = grid[row][column-1]
        if(!cell?.isMine && !cell?.isFlagged && !cell?.isOpen) {
            cell.isOpen = true
            if(cell.adjacentMines === 0 ) {openAdjacentEmpty(row, column-1, grid)}
        }
    }

    // top-left (row-1, column-1)
    if(row > 0 && column > 0) {
        let cell = grid[row-1][column-1]
        if(!cell?.isMine && !cell?.isFlagged && !cell?.isOpen) {
            cell.isOpen = true
            if(cell.adjacentMines === 0 ) {openAdjacentEmpty(row-1, column-1, grid)}
        }
    }

    return grid
}