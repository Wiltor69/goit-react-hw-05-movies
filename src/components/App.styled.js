import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 8px 0;
  margin-bottom: 16px;
  /* border-bottom: 3px solid black; */
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: purple;
  }
`;
