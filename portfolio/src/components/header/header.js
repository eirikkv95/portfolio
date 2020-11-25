import React from 'react';
import styled, { keyframes } from 'styled-components';
import { H1 } from '../styles/textstyles';

import Spinn from '../background/spinn';

const Header = () => {
  return (
    <Wrapper>
      <Spinn />
      <ContentWrapper>
        <TextContent>
          <Heading>
            Hi! I'm <Span> Eirik Kalvø Vattøy</Span>
          </Heading>
          <Heading>Front End Developer</Heading>
        </TextContent>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;

const ShowHeader = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
const ContentWrapper = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(20px);

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }
  @media (max-width: 410px) {
  }
`;

const TextContent = styled.div`
  max-width: 700px;
  position: relative;
  z-index: 11;
  animation: ${ShowHeader} 1s 0.5s forwards cubic-bezier(0, 0, 0.39, 2);
  opacity: 0;

  @media (max-width: 630px) {
    padding: 3rem 0;
  }
`;

const Heading = styled(H1)`
  text-align: center;
  line-height: 160%;
  color: var(--text);

  @media (max-width: 980px) {
    font-size: 4.2rem;
  }

  @media (max-width: 640px) {
    font-size: 3rem;
  }

  @media (max-width: 440px) {
    font-size: 2.8rem;
  }
`;

const Span = styled.span`
  color: var(--primary);
`;
