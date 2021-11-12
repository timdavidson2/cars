import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const NavbarContainer = styled.div`
  min-heght: 68px;
  ${tw`
    w-full
    max-w-2xl
    flex
    items-center
    lg:pl-12 
    lg:pr-12 
    justify-between
`}
`;

export function NavBar() {
  return <NavbarContainer></NavbarContainer>;
}
