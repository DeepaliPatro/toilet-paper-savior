import Cell from "./Cell";
import './Board.css'
import {initGrid} from "../utils/init-grid";
import { useEffect, useState } from "react";
import { openAdjacentEmpty } from "../utils/open-adjacent-empty";
import { revealBoard } from "../utils/reveal-board";


export default function Board({board}) {
    const [grid, setGrid] = useState(null)
    const [result, setResult] = useState('')

    // initialize grid on changing the grid size or total mines
    useEffect(() => {
        setGrid(initGrid(board.rows, board.columns, board.mines))
    }, [board])

    const handleOpenCell = (row, column) => {
        
        // if cell is flagged don't open cell, option to add 'unknown: ?' later
        if(grid[row][column].isFlagged) return;
        
        let newGrid = [...grid]
        // open cell and if cell has adjacent mines show number of adjacent mines
        newGrid[row][column].isOpen = true

        // if mine, game lost
        // handled through setResult
        if(grid[row][column].isMine) {
            newGrid = revealBoard(grid)
        }
        
        // if cell is empty (no adjacent mines and not mined), recursively open all adjacent empty cells
        if(grid[row][column].adjacentMines === 0) {
            newGrid = openAdjacentEmpty(row, column, newGrid)
        }  
        setGrid(newGrid)
    } 

    const onFlag = (row, column) => {
        let newGrid = [...grid]
        newGrid[row][column].isFlagged = !newGrid[row][column].isFlagged
        setGrid(newGrid)
    }
    
    return (
        <div className="board">
            <h1 className="message">{result}</h1>
            <div className="grid">
                <div className="rows">
                    {grid?.map((row, rowIndex) => {
                        return (
                            <div className="columns" key={rowIndex}>
                                {row.map((cell, columnIndex) => {
                                    return (
                                    <Cell cell={cell}
                                        onEndGame={setResult}
                                        onOpen={() => handleOpenCell(rowIndex, columnIndex)} 
                                        onFlag={() => onFlag(rowIndex, columnIndex)} key={[rowIndex, columnIndex]} />
                                    )})
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}