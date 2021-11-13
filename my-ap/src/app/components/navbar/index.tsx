import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';
import { NavItems } from './navitems';

const NavbarContainer = styled.div`
  min-heght: 4.375rem;
  ${tw`flex items-center justify-between w-full max-w-screen-2xl lg:pl-12 lg:pr-12`}
`;

const LogoContainer = styled.div``;

export function NavBar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
