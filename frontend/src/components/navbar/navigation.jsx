import { RiAddCircleFill } from "react-icons/ri";

export const privateRoutes =[
    
  
   
    {
        name: 'Tasks',
        path: '/tasks'
    },
    {
        name: 'Add',
        path: '/tasks/new',
        icon: <RiAddCircleFill className="w-5 h-5"/>,
    },
    
    {
        name: 'Profile',
        path: '/profile'
    }

]

export const publicRoutes =[
    
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Login',
        path: '/login'
    },
    {
        name: 'Register',
        path: '/register'
    }

]
