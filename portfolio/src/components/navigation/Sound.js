import React from 'react';
import styled from 'styled-components';
import Volume from './volume/volume';
import NoVolume from './volume/noVolume';

const Sound = ({ toggleMute, soundEnabled }) => {
  return soundEnabled ? (
    <Button aria-label="unMute" onClick={toggleMute}>
      <Volume />
    </Button>
  ) : (
    <Button aria-label="mute" onClick={toggleMute}>
      <NoVolume />
    </Button>
  );
};

export default Sound;

const Button = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  border: none;
  background: none;
  cursor: pointer;
`;
