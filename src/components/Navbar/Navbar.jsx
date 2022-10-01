import { useState } from 'react';
import { navLinks } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);

  @media (max-width: 1080px) {
  padding: 0 40px;
  }
  @media (max-width: 768px) {
  padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  z-index: 12;
  display: flex;
  justify-content: space-between;
`;

const StyledFaButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
  }
`;

const StyledHorizontalLinks = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
    list-style: none;
    
    li {
      margin: 0 5px;
      position: relative;
      
      a {
        padding: 10px;
        color: var(--light-slate);
      }
      
      a:hover {
        color: var(--green);
      }
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledVerticalLinks = styled(StyledHorizontalLinks)`
  flex-direction: column;
  ul {
    flex-direction: column;

    li {
      margin: 5px 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export default function Navbar() {
  const [menuDropdown, setMenuDropdown] = useState(false);

  const toggleMenu = () => setMenuDropdown(!menuDropdown);

  const LinkLineItems = navLinks.map(link => {
    return (
      <li key={link.name}>
        <a href={link.url} onClick={toggleMenu}>{link.name}</a>
      </li>
    );
  });

  return (
    <StyledHeader>
      <StyledNav>
        <h1>My Portfolio</h1>
        {menuDropdown ? (
          <StyledVerticalLinks>
            <StyledFaButton onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} color='var(--green)' size='xl' />
            </StyledFaButton>
            <ul>{LinkLineItems}</ul>
          </StyledVerticalLinks>
        ) 
        : 
        (
          <StyledFaButton onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} color='var(--green)' size='xl'/>
          </StyledFaButton>
        )}
        <StyledHorizontalLinks>
          <ul>{LinkLineItems}</ul>
        </StyledHorizontalLinks>
      </StyledNav>
    </StyledHeader>
  );
}