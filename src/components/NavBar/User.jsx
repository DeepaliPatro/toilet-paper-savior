import { Box, Dialog, DialogActions, DialogTitle, IconButton, Stack, Slider, Typography, Button, DialogContent, Avatar, TextField, ButtonGroup } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

export default function User({user, onLogin}) {
    const [open, setOpen] = useState(false)
    const handleLogin = () => {
        onLogin(user)
        setOpen(false)
    }
    return (
        <>
            <IconButton color="primary" component="label" onClick={() => setOpen(true)}>
                <PersonIcon fontSize="large" sx={{ color: 'rgb(20, 30, 179)' }} />
                <Typography variant='h6' component='div' >{user ? user : ''}</Typography>
            </IconButton>
            <Dialog open={open} >
                <DialogContent>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PersonIcon sx={{ mr: 1, my: 0.5 }} />
                        <TextField autoFocus id="username" label="Username" variant="standard" value={user}
                                    onChange={(e) => onLogin(e.target.value)} />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLogin} variant='contained' autoFocus>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}