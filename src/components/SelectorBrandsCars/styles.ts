import styled, { css } from 'styled-components';

export const ContainerBrands = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
`;

export const HorinzontalScroll = styled.div`
  width: 100%;

  height: 80px;
  border: 1px solid #000;

  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const ButtonRight = styled.button``;

export const ButtonLeft = styled.button``;

export const ContainerBrandsCars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BrandCar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #000;
  padding: 15px;
  cursor: pointer;
`;

export const NameBrand = styled.p`
  font-size: 14px;

  font-weight: 500;
`;
