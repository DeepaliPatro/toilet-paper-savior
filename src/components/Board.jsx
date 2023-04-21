import Cell from "./Cell";
import './Board.css'
import {initGrid} from "../utils/init-grid";
import { useEffect, useState } from "react";


export default function Board({board}) {
    const [grid, setGrid] = useState(null)

    // initialize grid on changing the grid size or total mines

    useEffect(() => {
        setGrid(initGrid(board.rows, board.columns, board.mines))
    }, [board])

    return (
        <div className="grid">
            <div className="rows">
                {grid?.map((row, rowIndex) => {
                    return (
                        <div className="columns" key={rowIndex}>
                            {row.map((cell, columnIndex) => <Cell cell={cell} key={[rowIndex, columnIndex]} />)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}