import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';

import LamboImg from '../../../assets/images/lambo.png';

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 14rem;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 15rem;
  }
  @media (min-width: ${SCREENS['2xl']}) {
    height: 17.5rem;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={LamboImg} />
      </CarContainer>
      <InfoContainer>
        <Title>
          Come Make Your Dreams Come True, Once In A Lifetime Experience
        </Title>
        <InfoText>
          We know the difference is in the details and that’s why our exotic and
          luxury car rental services, in the tourism and business industry,
          stand out for their quality and good taste, to offer you an unique
          experience. Choose from our selection of high-end, late model, exotic
          sports cars, sedans and SUVs from some of the world's top luxury car
          manufacturers.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
