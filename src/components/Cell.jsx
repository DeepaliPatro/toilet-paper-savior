// import { useEffect, useState } from 'react'
import 'animate.css';
import './Cell.css'


export default function Cell({cell, onOpen, onFlag, result, onEndGame}) {
    // const [value, setValue] = useState('')

    const handleClick = () => {  
        onOpen()
        if(cell.isMine) {
            onEndGame("You lost.")
        }
    }
    
    const handleFlag = e => {
        e.preventDefault()
        onFlag()
        // setValue(getValue()) // update marker for every flag
    }

    // useEffect(() => {
    //     setValue(getValue())
    // }, [cell.isOpen]) // update value when any cell is opened

    function getValue() {
        let cellValue = ''
        if(!cell.isOpen) {
            cellValue = cell.isFlagged ? '🧻' : ''
        } else if (cell.isMine) {
            cellValue = '🦠'
        } else if (cell.adjacentMines === 0) {
           cellValue = ''
        } else {
            cellValue = cell.adjacentMines
        }
        return cellValue
    }

    return (
        <div className={cell.isOpen ? "cell open" : "cell" } onClick={handleClick} onContextMenu={handleFlag} >{getValue()}  </div>
    )
}