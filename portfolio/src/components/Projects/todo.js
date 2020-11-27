import React from 'react';
import styled from 'styled-components';
import { H2, BodyText } from '../styles/textstyles';
import Mockup from '../../assets/svg/mockup.svg';
import TodoButton from '../Buttons/todoButton';

export default function Todo() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Info>
          <Heading>Todo App</Heading>
          <Paragraph>
            Procratination is the <Span>thief of time</Span>, meaning that
            someone who continually put things off ultimately achives little.
            Time is an essential aspect of our lifes. Procrastination leads to
            loss of precious time. Time once lost, is lost forever. It can never
            be regained.
          </Paragraph>
          <Paragraph>
            Starting on your task early allows you time to plan better, gather
            information and make modifications or improvments to your work. This
            will not only eliminate erros but will actually improve the quality
            of your work.
          </Paragraph>
          <TodoButton
            text="Check out the App"
            link="https://elastic-mestorf-542d1e.netlify.app/"
          />
        </Info>
        <MockupWrapper>
          <Img src={Mockup} alt="Iphone and Ipad mockup" />
          <RadialGradient />
        </MockupWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 980px;
  padding: 0 2rem;
  margin: 20rem auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: 45rem auto;
  gap: 2rem;

  @media (max-width: 680px) {
    max-width: 500px;
    margin: 10rem auto;
    padding: 0 2rem;
    display: block;
  }
`;

const Info = styled.div`
  display: grid;
  gap: 2rem;
`;

const Heading = styled(H2)`
  color: var(--primary);

  @media (max-width: 680px) {
    font-size: 4rem;
  }
`;

const Paragraph = styled(BodyText)`
  color: var(--text);

  @media (max-width: 1020px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
const Span = styled.span`
  font-weight: bold;
`;

const MockupWrapper = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  @media (max-width: 680px) {
    display: none;
  }
`;
const Img = styled.img`
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
`;
const RadialGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(180, 87, 87, 0.9) 0%,
    rgba(112, 48, 145, 0.459) 47.4%,
    rgba(34, 31, 165, 0) 100%
  );
`;
