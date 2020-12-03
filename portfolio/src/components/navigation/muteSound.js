import React from 'react';
import styled from 'styled-components';
import Volume from './volume/volume';
import VolumeNoSound from './volume/noVolume';

const MuteSound = ({ mute, soundEnabled }) => {
  return soundEnabled ? (
    <Button aria-label="unMute" onClick={mute}>
      <Volume />
    </Button>
  ) : (
    <Button aria-label="mute" onClick={mute}>
      <VolumeNoSound />
    </Button>
  );
};

export default MuteSound;

const Button = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  border: none;
  background: none;
  cursor: pointer;
`;
