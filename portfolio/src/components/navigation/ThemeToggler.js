import React from 'react';
import styled from 'styled-components';
import Sun from '../../assets/svg/sun.svg';
import Moon from '../../assets/svg/moon.svg';

const ThemeToggler = ({
  theme,
  setTheme,
  nextTheme,
  handleSound,
  playMoon,
  playSun,
}) => {
  return (
    <Button onClick={() => setTheme(nextTheme)} onKeyDown={handleSound}>
      {theme === 'light' ? (
        <Img src={Moon} alt="Moon" onClick={playMoon} />
      ) : (
        <Img src={Sun} alt="Sun" onClick={playSun} />
      )}
    </Button>
  );
};

export default ThemeToggler;

const Button = styled.button`
  margin-right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const Img = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
