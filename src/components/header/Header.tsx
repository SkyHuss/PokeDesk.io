import { useLocation } from 'react-router-dom';
import { menuList } from '../../contants/menu';
import UserGold from '../user/userGold/UserGold';
import UserPicture from '../user/userPicture/UserPicture';
import './Header.css';

export default function Header() {

    const location = useLocation();

    const getLabelFromPath = (path: string): string | undefined => {
        const menuItem = menuList.find(item => item.path === path);
        return menuItem ? menuItem.label : undefined;
    };

    return <div className="header-container">
        <div className="page-name">
            {getLabelFromPath(location.pathname)}
        </div>

        <div className="user-items">
            <UserPicture />
            <UserGold />
        </div>
    </div>
}