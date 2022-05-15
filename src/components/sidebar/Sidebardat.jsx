import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
const SidebarData=[
{
  title:"Home",
  icon:<HomeIcon/>,
  link:"/Myuser/Home"
},
{
    title:"Analytics",
    icon:<AnalyticsIcon/>,
    link:"/Myuser/Analytics"
  },
  {
    title:"Help center",
    icon:<HelpOutlineIcon/>,
    link:"/Myuser/Help"
  },
  {
    title:"Settings",
    icon:<SettingsIcon/>,
    link:"/Myuser/Settings"
  },
]
export default SidebarData