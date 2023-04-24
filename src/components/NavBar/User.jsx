import { Box, Dialog, DialogActions, IconButton, Typography, Button, DialogContent, TextField, Tooltip, Menu, MenuItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

export default function User({user, onLogin}) {
    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl)
    const handleClick = (e) => {setAnchorEl(e.target)}
    const handleClose = () => {setAnchorEl(null)}
    const [open, setOpen] =useState(false)
    const handleSubmit = () => {
        onLogin(user)
        setOpen(false)
        setAnchorEl(null)
    }
    const handleLogin = () => {
        setOpen(true)
        setAnchorEl(null)
    }
    const handleLogout = () => {
        onLogin('')
        setAnchorEl(null)
    }
    return (
        <>
            <Tooltip title="Profile">
            <IconButton sx={{ p: 0 }} onClick={handleClick}>
                <PersonIcon fontSize="large" sx={{ color: 'rgb(20, 30, 179)' }} />
                <Typography variant='h6' component='div' >{user ? user : ''}</Typography>
            </IconButton>
            </Tooltip>
            <Menu id="user-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
                {user ? 
                    <MenuItem onClick={handleLogout}>Logout</MenuItem> 
                    : 
                    <MenuItem >
                        <Typography onClick={handleLogin}>Login</Typography>
                        <Dialog open={open}>
                            <DialogContent>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <PersonIcon sx={{ mr: 1, my: 0.5 }} />
                                    <TextField autoFocus id="username" label="Username" variant="standard" value={user}
                                    onChange={(e) => onLogin(e.target.value)} />
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleSubmit} variant='contained' autoFocus>Submit</Button>
                            </DialogActions>
                        </Dialog>
                    </MenuItem>  
                }
            </Menu>
        </>
    )
}

        