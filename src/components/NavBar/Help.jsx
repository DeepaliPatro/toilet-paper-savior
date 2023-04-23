import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from "react";

export default function Help() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <IconButton color="primary" component="label" onClick={() => setOpen(true)} > 
                <HelpOutlineIcon fontSize="large" sx={{ color: 'rgb(20, 30, 179)' }} />
            </IconButton>
            <Dialog open={open} onClose={() => setOpen(false)} scroll='paper' >
                <DialogTitle variant='h5'> Help</DialogTitle>
                <DialogContent dividers >
                    <Typography gutterBottom>
                        This game is my take on the classic single-player puzzle game, Minesweeper. Here are the basic rules:
                    </Typography>
                    <Typography gutterBottom>
                        The game board contains hidden viruses under some of the tiles. The size of the board and number of viruses varies depending on the difficulty level.
                    </Typography>
                    <Typography gutterBottom>
                        Your goal is to uncover all the tiles on the board that are clear of viruses, without exposing any of the contaminated tiles.
                    </Typography>
                    <Typography gutterBottom>
                        To help you accomplish this goal, each tile that does not contain a virus will display a number that indicates the number of viruses under the adjacent tiles (horizontally, vertically, and diagonally).
                    </Typography>
                    <Typography gutterBottom>
                        If you click on a tile that contains a virus, the game is over and you lose.
                    </Typography>
                    <Typography gutterBottom>
                        You can mark tiles that you think might contain a virus by right-clicking on them. This will place a 🧻 on the tile to help stop the spread. 🧻s are useful for keeping track of which tiles you think are dangerous.
                    </Typography>
                    <Typography gutterBottom>
                        If you uncover all the tiles that do not contain viruses, you win!
                    </Typography>
                    <Typography gutterBottom>
                        That's about it! Good luck!
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} autoFocus>Ok</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}