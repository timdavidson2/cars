import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import MclarenCarImg from '../../../assets/images/mclaren-orange-big.png';
import BlobImg from '../../../assets/images/blob.svg';
import { SCREENS } from '../../components/responsive';

const TopSectionContainer = styled.div`
  min-height: 25rem;
  margin-top: 6rem;
  ${tw`
    w-full
    max-w-screen-2xl 
    flex 
    justify-between 
    lg:pl-12 
    lg:pr-12 
    pl-3 
    pr-3 
`};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2 
    flex 
    flex-col
    
`}
`;
const RightContainer = styled.div`
  ${tw`
    w-1/2 
    flex 
    flex-col
    relative 
    mt-20 

`}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold 
    text-3xl 
    xl:text-6xl 
    sm:text-2xl 
    md:text-5xl 
    lg:font-black
    md:font-extrabold 
    text-black 
    mb-4 
    sm:leading-snug 
    xl:leading-relaxed 
  `}
`;

const Description = styled.p`
  ${tw`
    text-xs 
    lg:text-sm 
    xl:text-lg 
    sm:max-h-full 
    overflow-hidden 
    max-h-12 
    text-gray-800 
  
  `}
`;

const BlobContainer = styled.div`
  width: 15rem;
  height: 7rem;
  position: absolute;
  right: -1rem;
  top: -6rem;

  transform: rotate(-25deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandAloneCar = styled.div`
  width: auto;
  height: 10rem;
  right: 1rem;
  top: -5rem;
  position: relative;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -8em;
    top: -9em;
  }
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent Your Dream Supercar Today!</Slogan>
        <Description>
          Ever wanted to experience the same luxury that your favorite celebrity
          does everday? Look around and push that rental button today. You know
          you deserve it!
        </Description>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="orange blob" />
        </BlobContainer>
        <StandAloneCar>
          <img src={MclarenCarImg} alt="McLaren720s" />
        </StandAloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
