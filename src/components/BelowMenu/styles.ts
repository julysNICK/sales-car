import styled, { css } from 'styled-components';

export const SectionBelowMenu = styled.section`
  padding: 60px 10% 15%;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/653ab9dd1ef121f163c484d03322f1a9.jpg');
  background-size: cover;
  background-position: center;
  display: flex;

  align-items: center;
  justify-content: flex-start;
`;

export const HomeText = styled.div``;

export const HomeTextTitle = styled.h1`
  font-family: 'Leckerli One', cursive;
  font-size: 4.5rem;

  color: #8be3e4;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const HomeTextDescription = styled.p`
  font-size: 1.5rem;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 50px;
`;

export const HomeTextLink = styled.a`
  padding: 20px 35px;
  background: #2ca7e1;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
`;
