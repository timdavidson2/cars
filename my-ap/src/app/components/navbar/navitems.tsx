import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive/index';

const ListContainer = styled.ul`
  ${tw`flex list-none `};
`;

const NavItem = styled.li`
  ${tw`mr-5 text-xs font-medium text-black transition duration-500 ease-in-out cursor-pointer md:text-base md:mr-5`}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu>
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
      </Menu>
    );

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
