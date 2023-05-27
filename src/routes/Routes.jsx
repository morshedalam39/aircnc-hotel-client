import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Logo from '../components/Shared/Navbar/Logo'
import SignUp from '../pages/SignUp/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
  {
    path:'/login',
    element:<Logo></Logo>
  },
  {
    path:'/SignUp',
    element:<SignUp></SignUp>
  },
])
