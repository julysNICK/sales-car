import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: all 0.9s ease-in-out;
  visibility: hidden;
  opacity: 0;
`;

export const Content = styled.div`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;
  padding: 20px;
  border-radius: 5px;
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.9s ease-in-out;
  visibility: hidden;
  opacity: 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 50px;
`;

export const FormSale = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  background: #ccc;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #333;
    color: #fff;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #333;
    color: #fff;
  }
`;
