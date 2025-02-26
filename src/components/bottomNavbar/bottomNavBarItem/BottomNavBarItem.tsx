import { useLocation, NavLink } from 'react-router-dom';
import { MenuItem } from '../../../contants/menu';
import './BottomNavBarItem.css'

interface Props {
    item: MenuItem;
}


export default function BottomNavbarItem({item}: Props) {

    const Icon = item.icon;

    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    }

    return (
        <NavLink 
            to={item.path}
            className={`bottom-navbar-item-container ${isActive(item.path) && 'active'}`} 
        >
            <Icon className='icon'/>
        </NavLink>
    )
}