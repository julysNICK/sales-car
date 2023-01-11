import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 10rem;
`;

export const ContainerSlider = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ImageSlider = styled.img`
  width: 550px;
  object-fit: cover;
`;

export const AmountOfImages = styled.div`
  position: absolute;
  top: -2rem;
  right: 0;
  background: #000;
  color: #fff;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #000;
  color: #fff;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const PreviousButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: #000;
  color: #fff;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;
