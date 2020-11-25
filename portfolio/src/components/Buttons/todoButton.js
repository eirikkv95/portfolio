import React from 'react';
import styled from 'styled-components';

export default function TodoButton(props) {
  const { text, link } = props;
  return <Link href={link}>{text}</Link>;
}
const Link = styled.a`
  color: var(--text);
  font-size: 1.6rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 139px;
  height: 45px;
  border-bottom: 2px solid var(--primary);
  margin-top: 2rem;
  transition: all 0.2s ease;
  &:hover {
    border-bottom: 2px solid transparent;
    color: var(--primary);
  }
`;
