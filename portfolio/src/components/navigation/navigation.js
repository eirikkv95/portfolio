import React, { useState } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import ThemeToggler from './ThemeToggler';
import useLocalStorageState from '../useHooks/useLocalStorageState';
import faint from '../sounds/die.mp3';
import platformJump from '../sounds/platformJump.mp3';
import Sound from './Sound';
import MenuToolTip from '../tooltips/MenuTooltip';
import Burger from './Burger/Burger';

export default function Navigation() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [theme, setTheme] = useLocalStorageState('Theme');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const [isOpen, setIsOpen] = useState(false);

  const [playMoon] = useSound(faint, {
    volume: 0.1,
    interrupt: true,
    soundEnabled,
  });
  const [playSun] = useSound(platformJump, {
    volume: 0.1,
    interrupt: true,
    soundEnabled,
  });

  function toggleMute() {
    setSoundEnabled(!soundEnabled);
  }
  function handleSound(event) {
    if (theme === 'light' && event.key === 'Enter') {
      playMoon();
    }
    if (theme === 'dark' && event.key === 'Enter') {
      playSun();
    }
  }
  function toggleBurger() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Nav>
        <Main>
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
          />
        </Main>
        <Secondary>
          <Burger toggleBurger={toggleBurger} isOpen={isOpen} theme={theme} />

          <MenuToolTip
            toggleMute={toggleMute}
            theme={theme}
            setTheme={setTheme}
            nextTheme={nextTheme}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
            isOpen={isOpen}
            playMoon={playMoon}
            playSun={playSun}
            handleSound={handleSound}
          />
        </Secondary>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem 3rem 0 0;
  z-index: 9999;
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 680px) {
    display: none;
  }
`;

const Secondary = styled.div`
  display: none;
  @media (max-width: 680px) {
    display: block;
  }
`;
