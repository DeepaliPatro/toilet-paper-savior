export function revealBoard(grid) {
    let newGrid = [...grid]
    for (let row of newGrid) {
      for (let cell of row) {
        cell.isOpen = true;
      }
    }   
    return newGrid
}