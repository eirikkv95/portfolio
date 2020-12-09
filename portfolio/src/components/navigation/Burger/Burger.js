import React from 'react';
import styled from 'styled-components';
const Burger = ({ isOpen, toggleBurger, theme }) => {
  return (
    <StyledBurger
      onClick={toggleBurger}
      isOpen={isOpen}
      theme={theme}
      aria-label="Menu"
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export default Burger;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) => (props.theme === 'dark' ? '#111827' : '#e6e1ff')};
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: relative;
  bottom: 2.6rem;

  div {
    width: 2.5rem;
    height: 0.3rem;
    background: ${({ theme }) => (theme === 'light' ? '#0D0C1D' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: translateX(0);
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
