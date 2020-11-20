import React from 'react';
import styled from 'styled-components';
import Spinns from '../../assets/svg/spinn.svg';

export default function Spinn() {
  return <Img src={Spinns} alt="spinn svg" />;
}

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 3.1rem;
  width: 100%;
  height: 100%;
`;
