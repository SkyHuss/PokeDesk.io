import { NavLink } from 'react-router-dom';
import { MenuItem } from '../../../contants/menu';
import './BottomNavBarItem.css'

interface Props {
    item: MenuItem;
}


export default function BottomNavbarItem({item}: Props) {

    const Icon = item.icon;

    return (
        <NavLink 
            to={item.path}
            className={`bottom-navbar-item-container`} 
        >
            <Icon className='icon'/>
        </NavLink>
    )
}