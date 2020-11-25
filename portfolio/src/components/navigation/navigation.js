import React from 'react';
import styled from 'styled-components';

import ThemeToggler from './ThemeToggler';

function Navigation() {
  return (
    <>
      <Nav>
        <ThemeToggler />
      </Nav>
    </>
  );
}

export default Navigation;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem 3rem 0 0;
  z-index: 9999;
`;
