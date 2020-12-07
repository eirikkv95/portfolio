import React from 'react';
import styled from 'styled-components';
import ThemeToggler from '../navigation/ThemeToggler';
import Sound from '../navigation/Sound';

export default function MenuToolTip({
  isOpen,
  handleSound,
  theme,
  setTheme,
  nextTheme,
  playMoon,
  playSun,
  toggleMute,
  soundEnabled,
  setSoundEnabled,
}) {
  return (
    <Wrapper isOpen={isOpen} theme={theme}>
      <ThemeToggler
        handleSound={handleSound}
        theme={theme}
        setTheme={setTheme}
        nextTheme={nextTheme}
        playMoon={playMoon}
        playSun={playSun}
      />
      <Sound
        toggleMute={toggleMute}
        theme={theme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        handleSound={handleSound}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-template-columns: 2rem;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 50px;
  right: -11px;
  color: white;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 1;
  transition: 0.3s ease-in-out;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transform: ${(props) =>
    props.isOpen
      ? 'skewY(0deg) rotate(0deg) translateY(0rem) '
      : 'skewY(-5deg) rotate(5deg) translateY(1rem)'};
  background: ${(props) =>
    props.theme === 'dark' ? 'rgb(17, 24, 39)' : '#e6e1ff'};
  @supports (
    (-webkit-backdrop-filter: blur(2rem)) or (backdrop-filter: blur(2rem))
  ) {
    background: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(20rem);
  }
`;
