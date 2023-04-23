import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import NavBar from './components/NavBar/NavBar';
import { AppBar, Avatar, Container, Toolbar, Typography } from '@mui/material';

function App() {
  const [board, setBoard] = useState({ rows: 8, columns: 8, mines: 10 })
  
  return (
    <div className="App">
      <AppBar position="static" elevation={2} sx={{borderRadius: '20px 20px 0 0'}}>
        <Container sx={{backgroundColor: 'white'}}>
          <Toolbar sx={{display: 'flex', justifyContent: 'center', gap: '10px'}} disableGutters>
          <Avatar sx={{ bgcolor: 'blueviolet' }}>🦠</Avatar>
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'rgb(20, 30, 179)',
            }}
          >
            TP Savior
          </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <NavBar board={board} setBoard={setBoard}/>
      <Board  board={board}/>
    </div>
  );
}

export default App;
