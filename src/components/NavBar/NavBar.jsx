import './NavBar.css'
import { useState } from 'react';
import GameSettings from './GameSettings';
import Help from './Help';
import User from './User';

function getUserFromLS() {
    const username = localStorage.getItem('username')
    return username ? JSON.parse(username) : ''
}

export default function NavBar({board, setBoard}) {
    
    const [user, setUser] = useState(getUserFromLS())

    return (
        <header className="nav-bar">
            <nav className="profile">
                <User user={user} onLogin={setUser} />
            </nav>
            <nav className="action-btns">
                <GameSettings board={board} setBoard={setBoard}/>
                <Help />
            </nav>
        </header>
    )
}