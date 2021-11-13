import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { NavLink } from 'react-router-dom';

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li`
  ${tw`
    text-xs
    md:text-base
    text-black
    font-medium
    mr-5 
    md:mr-5 
    cursor-pointer
    transition
    duration-500 
    ease-in-out 
    

    
`}
`;

export function NavItems() {
  return (
    <ListContainer>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#">Services</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
}
