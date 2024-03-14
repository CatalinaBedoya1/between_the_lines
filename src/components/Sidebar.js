import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


import './Navbar.css';


const Nav = styled.div`
  background: #A08786;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;




const SidebarNav = styled.nav`
    background: #A08786;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
  `;

  const LoginButton = styled(Link)`
  margin-left: auto;
  margin-right: 2rem;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px; /* Add padding to create a box around the text */
  border: 2px solid transparent; /* Add border to create a box */
  border-radius: 5px; /* Add border radius for rounded corners */
  transition: all 0.3s ease; /* Add transition for smooth hover effect */

  &:hover {
    background-color: #fff; /* Change background color on hover */
    color: #A08786; /* Change text color on hover */
    border-color: #A08786; /* Change border color on hover */
  }
`;


const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <LoginButton to="/login">Login</LoginButton>
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;