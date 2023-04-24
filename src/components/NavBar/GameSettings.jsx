import TuneIcon from '@mui/icons-material/Tune';
import { Box, Dialog, DialogActions, DialogTitle, IconButton, Stack, Slider, Typography, Button, DialogContent, Tooltip } from '@mui/material';
import { useState } from 'react';

export default function GameSettings({board, setBoard}) {
    const [open, setOpen] = useState(false)
    const newBoard = {...board}
    
    const handleChange = e => {
        setBoard({...board, [e.target.name]: e.target.value})
    }
    const handleCancel = () => {
        setBoard(newBoard)
        setOpen(false)
    }
    const handleStart = () => {
        setOpen(false)
    }

    return (
        <>
            <Tooltip title="Game settings">
                <IconButton aria-label="game settings" component="label" onClick={() => setOpen(true)}>
                    <TuneIcon fontSize="large" sx={{ color: 'rgb(20, 30, 179)' }} />
                </IconButton>
            </Tooltip>
            < Dialog open={open} onClose={() => setOpen(false)} >
                <DialogTitle variant='h5'>Game Settings</DialogTitle>
                <DialogContent dividers>
                    <Box sx={{ width: 300, marginTop: '20px' }}>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" >
                            <Typography>Rows</Typography>
                            <Slider value={board.rows} onChange={handleChange} name='rows' defaultValue={8} step={1} marks min={3} max={16} valueLabelDisplay="auto" />
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" >
                            <Typography>Columns</Typography>
                            <Slider value={board.columns} onChange={handleChange} name='columns' defaultValue={8} step={1} marks min={3} max={16} valueLabelDisplay="auto" />
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" >
                            <Typography>Outbreaks</Typography>
                            <Slider value={board.mines} onChange={handleChange} name='mines' defaultValue={10} step={1} marks min={1} max={Math.floor(board.columns * board.rows * 0.4)} valueLabelDisplay="auto" />
                        </Stack>
                    </Box>
                </DialogContent>
                <DialogActions >
                        <Button onClick={handleCancel} variant='contained'>Cancel</Button>
                        <Button onClick={handleStart} variant='contained' autoFocus >Start</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}