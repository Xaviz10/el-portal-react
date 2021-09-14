import buyIcon from '../assets/static/icons/buy-icon.svg';
import rentIcon from '../assets/static/icons/rent-icon.svg';
import tradeIcon from '../assets/static/icons/trade-icon.svg';
import loginIcon from '../assets/static/icons/login-icon.svg';
import logoutIcon from '../assets/static/icons/logout-icon.svg';

export const navbarMenuData = [
    {
        title: 'Ventas',
        path: '/search/Venta/',
        icon: buyIcon,
        cName: 'menu-element'
    },
    {
        title: 'Arriendos',
        path: '/search/Arriendo/',
        icon: rentIcon,
        cName: 'menu-element'
    },
    {
        title: 'Publicar',
        path: '/publicar/',
        icon: tradeIcon,
        cName: 'menu-element'
    },
    {
        title: 'Gestión',
        path: '/admin/',
        icon: loginIcon,
        cName: 'menu-element--admin'
    },
    {
        title: 'Iniciar sesión',
        path: '/login/',
        icon: loginIcon,
        cName: 'menu-element--sesion'
    },
]