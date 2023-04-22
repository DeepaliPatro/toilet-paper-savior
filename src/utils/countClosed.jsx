export function countClosed(grid) {
    let count = 0
    for (let row of grid) {
      for (let cell of row) {
        count = cell.isOpen ? count : count + 1;
      }
    }   
    return count
}