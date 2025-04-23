import { SvgIconComponent, Backpack, Book, LocalGroceryStore, Person } from '@mui/icons-material';
import { CatchingPokemon } from '@mui/icons-material'

export interface MenuItem {
    icon: SvgIconComponent,
    label: string,
    path: string
}

export const menuList: MenuItem[] = [
    {icon: CatchingPokemon, label: 'Capturer', path: '/catch'},
    {icon: Backpack, label: 'Inventaire', path: '/inventory'},
    {icon: Book, label: 'Pokedex', path: '/pokedex'},
    {icon: LocalGroceryStore, label: 'Magasin', path: '/store'},
    {icon: Person, label: 'Dresseur', path: '/account'},
]