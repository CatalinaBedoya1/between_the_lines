import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { faComments } from '@fortawesome/free-solid-svg-icons';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    


  },
  {
    title: 'Discover',
    path: '/discover',
    icon: <IoIcons.IoIosSearch />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Whats Trending',
        path: '/discover/whatsTrending',
        
        cName: 'sub-nav'
      },
      {
        title: 'Search',
        path: '/discover/searchResultsPage',
        
        cName: 'sub-nav'
      },
      {
        title: 'Take Our Quiz',
        path: '/discover/takeOurQuiz',
        
      }
    ]
  },
  {
    title: 'Community',
    path: '/community',
    icon: < IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Book Clubs',
        path: '/community/bookClubs',
        
        cName: 'sub-nav'
      },
      {
        title: 'Discussions',
        path: '/community/discussions',
        
        cName: 'sub-nav'
      },
      {
        title: 'Events',
        path: '/community/eventsPage',
        
      }
    ]
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <IoIcons.IoIosPaper />
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