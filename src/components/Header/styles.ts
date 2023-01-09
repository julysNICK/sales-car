import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 0px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  padding: 20px 10%;

  transition: all 0.3s ease-in-out;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 150px;

  height: auto;
`;

export const ListUnordered = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 0 10px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;

  margin: 10px 22px;

  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ff9000;
  }
`;

export const DivIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivUsage = styled.div``;
