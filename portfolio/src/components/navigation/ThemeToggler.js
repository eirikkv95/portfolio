import React from 'react';
import styled from 'styled-components';
import Sun from '../../assets/svg/sun.svg';
import Moon from '../../assets/svg/moon.svg';
import useLocalStorageState from '../useHooks/useLocalStorageState';

const ThemeToggler = () => {
  const [theme, setTheme] = useLocalStorageState('Theme-storage');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <Button onClick={() => setTheme(nextTheme)}>
      {theme === 'light' ? (
        <img src={Moon} alt="Moon" />
      ) : (
        <img src={Sun} alt="Sun" />
      )}
    </Button>
  );
};

export default ThemeToggler;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
