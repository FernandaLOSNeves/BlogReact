import React from 'react';
import {createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';

export default function Navbar() {
    const [token, setToken]= useLocalStorage('token');
    let history =useNavigate();

    function goLogout(){
        setToken('')
        alert ("Deslogando... Tchau, mô!")
        history('/login')
    }

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#397683" }}>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Blog Fernanda Neves
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/posts' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/temas' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>

                            <Box mx={1} className='cursor' onClick={goLogout} >
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>

                    </Box>

                </Toolbar>
            </AppBar></>
    )
}