import { useState } from 'react'
import './Cell.css'

export default function Cell({cell, onClick}) {

    const [cellState, setCellState] = useState(cell)
    const [value, setValue] = useState('')

    const handleClick = () => {  
        setCellState({...cellState, isOpen: true})
        setValue(cell.isMine ? '🦠' :  cell.adjacentMines ? cell.adjacentMines : '')
    }

    return (
        <div className="cell" onClick={handleClick}>{value}</div>
    )
}