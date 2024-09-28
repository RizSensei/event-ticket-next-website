import { FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

export const navbarItems = [
    {
        label:'Home',
        icon: <FaHome />,
        path:'/'
    },
    // {
    //     label:'Events',
    //     icon: <FaCalendarAlt />,
    //     path:'/events'
    // },
    {
        label:'Notifications',
        icon: <IoMdNotifications />,
        path:'/notifications'
    },
]