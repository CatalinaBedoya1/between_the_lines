import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    


  },
  {
    title: 'Discover',
    path: '/discover',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Whats Trending',
        path: '/discover/whatsTrending',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Genres',
        path: '/discover/genres',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Take Our Quiz',
        path: '/discover/takeOurQuiz',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Community',
    path: '/community',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'About Us',
    path: '/aboutus',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },

];

export default SidebarData;