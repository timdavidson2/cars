import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

import CarLogoImg from '../../../assets/images/carLogo.png';
import CarLogoDarkImg from '../../../assets/images/carLogo2.png';

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
`}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
  ${({ color }: any) => (color === 'white' ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} />
      </Image>
      <LogoText>Supercar Rentals</LogoText>
    </LogoContainer>
  );
}
