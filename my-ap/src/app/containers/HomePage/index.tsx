import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import { NavBar } from '../../components/navbar';
import { AboutUs } from './aboutUs';
import { BookingSteps } from './bookingSteps';
import { TopSection } from './topSection';

const PageContainer = styled.div`
  ${tw`
flex
 flex-col
 w-full
 h-full
 items-center
 overflow-x-hidden
`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4rem" />
      <BookCard />
      <Marginer direction="vertical" margin="10rem" />
      <BookingSteps />
      <Marginer direction="vertical" margin="5rem" />
      <AboutUs />
    </PageContainer>
  );
}
