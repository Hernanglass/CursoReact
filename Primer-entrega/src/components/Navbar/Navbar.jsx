import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (<AppBar>
        <Toolbar className='toolbar-navbar' sx={{display: "flex", justifyContent: "space-evenly"}}>
            <Typography sx={{color: "white"}}>
                JULI PORCELANA
            </Typography>
            <Button sx={{color: 'white'}}>
                Inicio
            </Button>

            <Button sx={{color: 'white'}}>
                Productos
            </Button>

            <Button sx={{color: 'white'}}>
               Contacto 
            </Button>
            <CartWidget />

        </Toolbar>
    </AppBar>);
}

export default Navbar;

