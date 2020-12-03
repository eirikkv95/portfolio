import React, { useState } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import ThemeToggler from './ThemeToggler';
import useLocalStorageState from '../useHooks/useLocalStorageState';
import die from '../sounds/die.mp3';
import platformJump from '../sounds/platformJump.mp3';
import MuteSound from './muteSound';

function Navigation() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [theme, setTheme] = useLocalStorageState('Theme');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  const [playMoon] = useSound(die, {
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

  return (
    <>
      <Nav>
        <ThemeToggler
          handleSound={handleSound}
          theme={theme}
          setTheme={setTheme}
          nextTheme={nextTheme}
          playMoon={playMoon}
          playSun={playSun}
        />
        <MuteSound
          mute={toggleMute}
          theme={theme}
          soundEnabled={soundEnabled}
        />
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
  display: flex;
  align-items: center;
`;
