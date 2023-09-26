import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (<AppBar>
        <Toolbar className='toolbar-navbar' sx={{display: "flex", justifyContent: "space-evenly"}}>
           
           <NavLink className="navbar-link" to="/">
            <Typography sx={{color: "white"}}>
                FITNESS WORLD
            </Typography>
           </NavLink>

            <NavLink className="navbar-link" to="/">
            <Typography sx={{color: 'white'}}>
                Inicio
            </Typography>
            
           </NavLink>

            <NavLink className="navbar-link" to="/products">
            <Typography sx={{color: 'white'}}>
                Productos
            </Typography>
            
           </NavLink>

            <NavLink className="navbar-link" to="/category">
            <Typography sx={{color: 'white'}}>
               Categorias
            </Typography>
            </NavLink>
            
            <CartWidget />

        </Toolbar>
    </AppBar>);
}

export default Navbar;

