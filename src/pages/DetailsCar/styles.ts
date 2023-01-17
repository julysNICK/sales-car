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
  background: #676464;
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
  background: #807e7e;
  color: #fff;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
`;

export const PreviousButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: #807e7e;
  color: #fff;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
`;

export const ContainerInfoCar = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;

  padding-bottom: 5rem;
`;
export const TitleCar = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  color: #000;
`;

export const BoxInfo = styled.div`
  width: 40%;
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid #000;
`;

export const InfoTech = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  margin-bottom: 1rem;
`;

export const InfoCar = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  margin-left: 1rem;
`;

export const BoxButtons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: fixed;

  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  opacity: 0.9;
`;

export const ButtonGetInTouch = styled.button`
  width: 35%;
  height: 4rem;
  background: #f7ca00;
  color: #0f1111;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 2rem;
`;

export const ButtonMakeOffer = styled.button`
  width: 35%;
  height: 4rem;
  background: #ffa41c;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
`;
