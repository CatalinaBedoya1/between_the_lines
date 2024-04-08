import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import BTLLogo from '../assets/BTLLogo.png'; 

import './Navbar.css';

const Nav = styled.div`
  background: #407D8F;
  height: 80px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  
`;

const Logo = styled.img`
  height: 60px;
  margin-left: 79px;
  
`;

const NavIcon = styled(Link)`
  margin-left: 20px;
  font-size: 30px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
    background: #407D8F; /* dark teal blue */
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    transition: 350ms;
    z-index: 10;
  `;

const LoginButton = styled(Link)`
  
  margin-right: 20px;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #A08786;
    border-color: #A08786;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={toggleSidebar} />
          </NavIcon>
          <Logo src={BTLLogo} alt="BTL Logo" /> 
          <LoginButton to="/login">Login</LoginButton>
        </Nav>
        {isOpen && (
          <SidebarNav>
            <SidebarWrap>
              <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={closeSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        )}
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
