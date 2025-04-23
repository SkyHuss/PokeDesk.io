import { CatchingPokemon, Favorite, KeyboardBackspace, Menu } from '@mui/icons-material'
import { useState } from 'react'
import { menuList } from '../../contants/menu';
import './Sidebar.css'
import SidebarItem from './sidebarItem/SidebarItem';

export default function Sidebar () {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const toggleCollpase = () => {
        setIsCollapsed(!isCollapsed);
    }

    return <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="header">
            {!isCollapsed &&
                <div className="title">
                    <CatchingPokemon />
                    Pokedesk
                </div>
            }

            <div className="collapse-button" onClick={toggleCollpase}>
                { isCollapsed ?  <Menu /> : <KeyboardBackspace /> }
            </div>
        </div>
        <div className="menu">
            {menuList.map(item => (
                <SidebarItem isCollapsed={isCollapsed} item={item} key={item.path}/>
            ))}
        </div>
        <div className="footer">
            {!isCollapsed && <span>Made with love by Gonzales Brothers <Favorite /> </span>}
            {isCollapsed && <span><Favorite /></span>}
        </div>
    </div>
}