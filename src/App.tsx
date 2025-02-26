import "./App.css"
import Sidebar from "./components/sidebar/Sidebar"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import "./contants/color.css"
import Inventory from "./pages/inventory/Inventory";
import Pokedex from "./pages/pokedex/Pokedex";
import Shop from "./pages/shop/Shop";
import UserProfile from "./pages/userProfile/UserProfile";
import Catch from "./pages/catch/Catch";
import BottomNavbar from "./components/bottomNavbar/BottomNavbar";

function AppLayout() {
  return (
    <div id='app-container' className='app-container'>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
      <BottomNavbar />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [ // Children are render in the Outlet
      {
        path: '/catch',
        element: <Catch />
      },
      {
        path: '/inventory',
        element: <Inventory />
      },
      {
        path: '/pokedex',
        element: <Pokedex />
      },
      {
        path: '/store',
        element: <Shop />
      },
      {
        path: '/account',
        element: <UserProfile />
      }
    ]
  }
])

export default function App() {

  return (
    <RouterProvider router={router} />
  )

}