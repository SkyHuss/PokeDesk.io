import { menuList } from '../../contants/menu'
import './BottomNavbar.css'
import BottomNavbarItem from './bottomNavBarItem/BottomNavBarItem';

export default function BottomNavbar() {
    return <div className="bottom-navbar-container">
        {menuList.map((item) => (
            <BottomNavbarItem item={item}/>
        ))}
    </div>
}