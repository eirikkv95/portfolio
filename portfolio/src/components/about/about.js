import React from 'react';
import styled, { keyframes } from 'styled-components';

import Sparkles from '../sparkle/sparkles';
import Eirik from '../../assets/images/eirikNew.jpg';
import Rings from '../../assets/svg/ring.svg';

const About = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <Img src={Eirik} alt="Eirik Kalvø Vattøy" />
          <Ring src={Rings} alt="ring" />
        </ImageWrapper>
        <Info>
          <HeadingTwo>Hvem er jeg</HeadingTwo>
          <Paragraph>
            Jeg er en 25 år gammel mann fra Ulsteinvik som er spesielt
            interessert i <Sparkles>UI</Sparkles>. Jeg har en Bachelor i Web
            Utvikling og er for øyeblikket på jakt etter min første jobb som
            nyutdannet webutvikler.
          </Paragraph>

          <Paragraph>
            Jeg vil anse meg selv som en lojal, avslappet og samarbeidsvillig
            person som liker en utfordring. Selv om jeg kan være litt sjenert i
            starten, blir jeg fort varm i trøya.
          </Paragraph>
        </Info>
      </ContentWrapper>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 640px) {
    padding: 0 2rem;
  }
`;
const ImageWrapper = styled.div`
  display: grid;
  position: relative;
  @media (max-width: 680px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 28rem;
  border-radius: 50%;
  &:after {
    content: '';
    width: 30rem;
    height: 30rem;
    position: absolute;
    background: red;
  }
`;

const spin = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
`;
const Ring = styled.img`
  position: absolute;
  width: 31rem;
  height: 31rem;
  top: -16px;
  left: -15px;
  animation: ${spin} 80s forwards infinite ease;
`;

const ContentWrapper = styled.div`
  max-width: 980px;
  padding: 0 2rem;
  margin: 10rem auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(1rem, 1fr));
  position: relative;
  gap: 2rem;

  @media (max-width: 680px) {
    display: block;
    margin: 5rem auto;
    padding: 0;
  }
`;

const Info = styled.div`
  grid-column: 2/3;
  grid-row: 1/-1;
  top: 7.5rem;
  display: grid;
  gap: 2rem;
  @media (max-width: 780px) {
  }
  @media (max-width: 640px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    top: 0;
  }
`;

const HeadingTwo = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  color: var(--primary);
  position: relative;

  @media (max-width: 1020px) {
    font-size: 3rem;
  }

  @media (max-width: 1020px) {
    width: 25rem;
  }
  @media (max-width: 640px) {
    content: none;
  }
`;

const Paragraph = styled.p`
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 150%;
  color: var(--text);
  position: relative;

  @media (max-width: 1020px) {
    font-size: 1.6rem;
  }
`;
