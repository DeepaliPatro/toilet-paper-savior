import Cell from "./Cell";
import './Board.css'
import {initGrid} from "../utils/init-grid";
import { useEffect, useState } from "react";
import { openAdjacentEmpty } from "../utils/open-adjacent-empty";
import { revealBoard } from "../utils/reveal-board";
import { countClosed } from "../utils/countClosed";
import { Button } from "@mui/material";

// get board from local storage
const getBoardFromLS = () => {
    const grid = localStorage.getItem('grid')
    if(grid[0].length > 0) {
        return JSON.parse(grid)
    } else {
        return null
    }
}
export default function Board({board}) {
    const [grid, setGrid] = useState(getBoardFromLS())
    const [result, setResult] = useState('')

    // initialize grid on changing the grid size or total mines
    useEffect(() => {
        setGrid(initGrid(board.rows, board.columns, board.mines))
    }, [board])

    useEffect(() => {
        // add board to local storage
        localStorage.setItem('grid', JSON.stringify(grid))
    }, [grid])

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
        
        if(countClosed(newGrid) === board.mines) {
            setResult("You won!!")
            newGrid = revealBoard(grid)
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
            <header>
                <h1 className="message">{result}</h1>
            </header>
            <div className="grid">
                <div className="rows">
                    {grid?.map((row, rowIndex) => {
                        return (
                            <div className="columns" key={rowIndex}>
                                {row.map((cell, columnIndex) => {
                                    return (
                                    <Cell cell={cell}
                                        result={result}
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
            <footer>
                <Button 
                variant="contained" 
                sx={{backgroundColor: "rgb(20, 30, 179)", borderRadius: '10px'}}
                onClick={() => setGrid(initGrid(board.rows, board.columns, board.mines))}
                >
                    Restart
                </Button>
            </footer>
        </div>
    )
}