import React, { Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { BodyText, H2 } from '../styles/textstyles';
import Eirik from '../../assets/images/eirikNew.webp';
import Rings from '../../assets/svg/ring.svg';
import Loader from '../Loader/loader.js';

const Sparkles = React.lazy(() => import('../sparkle/sparkles'));

const About = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Suspense fallback={<Loader />}>
          <ImageWrapper>
            <Img src={Eirik} alt="Eirik Kalvø Vattøy" />
            <Ring src={Rings} alt="ring" />
          </ImageWrapper>
          <Info>
            <HeadingTwo>Who am I</HeadingTwo>

            <Paragraph>
              Hi, I'm Eirik, a friendly, 20 something-year-old Front End
              Developer with an educational background in{' '}
              <Sparkles>Web development</Sparkles>.
            </Paragraph>

            <Paragraph>
              During my studies and knowledge gained in my spare time, I have
              worked up experience with technologies such as Html, Css/Sass,
              JavaScript, React and Github. I'm also interested in design and
              have experience working with responsiv design from different
              projects.
            </Paragraph>
          </Info>
        </Suspense>
      </ContentWrapper>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  position: relative;
`;
const ImageWrapper = styled.div`
  display: grid;

  align-items: center;
  position: relative;
  @media (max-width: 680px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 28rem;
  height: 28rem;
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
    transform:rotate(359deg);
  }
`;
const Ring = styled.img`
  position: absolute;
  width: 31rem;
  height: 31rem;
  top: 9px;
  left: -15px;
  animation: ${spin} 80s infinite linear;

  @media (max-width: 1020px) {
    top: -8px;
  }
  @media (max-width: 831px) {
    top: 5px;
  }
  @media (max-width: 751px) {
    top: 16px;
  }
  @media (max-width: 689px) {
    top: 30px;
  }
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
    max-width: 500px;
    display: block;
    margin: 5rem auto;
    padding: 0 2rem;
  }
`;

const Info = styled.div`
  grid-column: 2/3;
  grid-row: 1/-1;
  top: 7.5rem;
  display: grid;
  gap: 2rem;

  @media (max-width: 640px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    top: 0;
  }
`;

const HeadingTwo = styled(H2)`
  color: var(--primary);
  position: relative;

  @media (max-width: 680px) {
    content: none;
    font-size: 4rem;
  }
`;

const Paragraph = styled(BodyText)`
  color: var(--text);
  position: relative;

  @media (max-width: 1020px) {
    font-size: 1.6rem;
  }
`;
