import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",

    },
    {
        title: "Discover",
        path: "/discover",
        icons: <FaIcons.FaCartPlus />,
        cName: "nav-text",
       

    },
    {
        title: "Community",
        path: "/community",
        icons: <IoIcons.IoIosPaper />,
        cName: "nav-text",

    },
    {
        title: "Dashboard",
        path: "/dashboard",
        icons: <IoIcons.IoIosPaper />,
        cName: "nav-text",

    },
    {
        title: "About Us",
        path: "/aboutus",
        icons: <IoIcons.IoIosPaper />,
        cName: "nav-text",

    },
    
];