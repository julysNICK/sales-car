import styled, { css } from 'styled-components';

export const Hero = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url('/pexels-mike-b-120049.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
  `}
`;

export const FormBox = styled.div`
  width: 380px;
  height: 580px;
  position: relative;
  margin: 6% auto;
  background: #fff;
  padding: 5px;
  overflow: hidden;
  #login {
    left: 50px;
  }

  #register {
    left: 450px;
  }
`;

export const ButtonBox = styled.div`
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px #ff61241f;
  border-radius: 30px;
`;

export const Button = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
`;

export const BTN = styled.div`
  ${({ screenName }: { screenName: 'left' | 'right' }) => css`
    top: 0;
    left: 0;
    position: absolute;
    width: 110px;
    height: 100%;
    background: linear-gradient(90deg, #ff105f, #ffad06);
    border-radius: 30px;
    transition: 0.5s;
  `}
`;

export const SocialIcon = styled.div`
  margin: 30px auto;
  text-align: center;
`;

export const Icon = styled.img`
  width: 30px;
  margin: 0 12px;
  box-shadow: 0 0 20px 0 #7f7f7f3d;
  cursor: pointer;

  border-radius: 50%;
`;

export const FormLogin = styled.form`
  top: 180px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
  font-size: 16px;
`;

export const CheckBox = styled.input`
  margin: 30px 10px 30px 0;
`;

export const SpanCheck = styled.span`
  color: #777;
  font-size: 12px;
  letter-spacing: 1px;
  bottom: 68px;
  position: absolute;
`;

export const ButtonLogin = styled.button`
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: linear-gradient(90deg, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
`;
