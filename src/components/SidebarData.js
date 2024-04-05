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
        title: 'Search',
        path: '/discover/searchResultsPage',
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
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Book Clubs',
        path: '/community/bookClubs',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Discussions',
        path: '/community/discussions',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Events',
        path: '/community/eventsPage',
        icon: <IoIcons.IoIosPaper />
      }
    ]
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