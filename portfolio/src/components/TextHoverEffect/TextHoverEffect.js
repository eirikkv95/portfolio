import React from 'react';
import styled from 'styled-components';

export default function TextHoverEffect({ children }) {
  return (
    <Container>
      <Span>{children}</Span>
      <Span>{children}</Span>
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const Span = styled.span`
    position:absolute;
    transform: translate(-50%,-50%)

  &:nth-child(2) {
    color: red;
    text-stroke: 2px #03a9f4;
  }
`;
