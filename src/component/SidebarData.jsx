import React from "react"
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';

export const SidebarData = [

    {
        title: "Gmail" ,
        icon: <EmailIcon />,
        link : "/gmail"
    },

    {
        title: "Calendar",
        icon: <CalendarTodayIcon />,
        link: "/Calendar"
    },

    {
        title: "Keeper",
        icon: <FormatListBulletedIcon />,
        link: "/Keeper"
    },

    {
        title: "Drive",
        icon: <AddToDriveIcon />,
        link: "/Drive"
    },

];
   

