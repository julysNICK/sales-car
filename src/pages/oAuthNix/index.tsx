import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles';

export default function OauthNix({
  setNameNix,
  setEmailNix,
  handleSubmitRegisterNix,
  handleSubmitLoginByNix,
}: {
  setNameNix: (name: string) => void;
  setEmailNix: (email: string) => void;
  handleSubmitRegisterNix: () => void;
  handleSubmitLoginByNix: () => void;
}) {
  const [registerOrLogin, setRegisterOrLogin] = useState<'login' | 'register'>(
    'login',
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const formLoginRef = useRef<HTMLFormElement>(null);
  const formRegisterRef = useRef<HTMLFormElement>(null);
  const BtnRef = useRef<HTMLDivElement>(null);

  const verificationEmail = (email: string) => {
    const emailVerification = email.split('@');
    const emailVerification2 = emailVerification[1].split('.');

    if (emailVerification2[0] === 'nix' && emailVerification2[1] === 'com') {
      return true;
    }
    return false;
  };

  const registerFN = () => {
    console.log('registerFN');
    const formRegister = formRegisterRef.current;
    const formLogin = formLoginRef.current;
    const Btn = BtnRef.current;

    if (registerOrLogin !== 'register' && formRegister && formLogin && Btn) {
      formRegister.style.left = '50px';
      formLogin.style.left = '-450px';
      Btn.style.left = '110px';
      setRegisterOrLogin('register');
      return;
    }

    return;
  };

  const loginFN = () => {
    const formRegister = formRegisterRef.current;
    const formLogin = formLoginRef.current;
    const Btn = BtnRef.current;

    if (registerOrLogin !== 'login' && formRegister && formLogin && Btn) {
      formRegister.style.left = '-450px';
      formLogin.style.left = '50px';
      Btn.style.left = '0px';
      setRegisterOrLogin('login');
      return;
    }

    return;
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (verificationEmail(email)) {
      console.log('handleSubmitLogin');
      try {
        const response = await axios.post('http://localhost:9090/login', {
          email: email,
          password: password,
        });

        console.log(response);

        setNameNix(response.data.name);
        setEmailNix(response.data.email);

        await handleSubmitLoginByNix();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    const formRegister = formRegisterRef.current;
    const formLogin = formLoginRef.current;
    const Btn = BtnRef.current;
    e.preventDefault();
    if (verificationEmail(email)) {
      try {
        const response = await axios.post('http://localhost:9090/register', {
          name: name,
          email: `${email}`,
          password: password,
        });

        console.log(response);

        setNameNix(name);
        setEmailNix(email);

        await handleSubmitRegisterNix();

        localStorage.setItem('token', response.data.token);
        if (registerOrLogin !== 'login' && formRegister && formLogin && Btn) {
          formRegister.style.left = '-450px';
          formLogin.style.left = '50px';
          Btn.style.left = '0px';
          setRegisterOrLogin('login');
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <styled.Hero>
      <styled.FormBox>
        <styled.TitleForm>Nix authentication</styled.TitleForm>
        <styled.ButtonBox>
          <styled.BTN ref={BtnRef}></styled.BTN>
          <styled.Button onClick={() => loginFN()}>Log in</styled.Button>
          <styled.Button onClick={() => registerFN()}>Sign up</styled.Button>
        </styled.ButtonBox>

        <styled.FormLogin
          id="login"
          ref={formLoginRef}
          onSubmit={handleSubmitLogin}
        >
          <styled.InputText
            type="text"
            placeholder="Email: name@nix.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <styled.InputText
            type="password"
            placeholder="Password..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <styled.CheckBox type="checkbox" required />
          <styled.SpanCheck>
            I agree to the terms and conditions
          </styled.SpanCheck>

          <styled.ButtonLogin type="submit">Log IN</styled.ButtonLogin>
        </styled.FormLogin>

        <styled.FormLogin
          id="register"
          onSubmit={handleSubmitRegister}
          ref={formRegisterRef}
        >
          <styled.InputText
            type="text"
            placeholder="Name..."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <styled.InputText
            type="text"
            placeholder="Email: name@nix.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <styled.InputText
            type="password"
            placeholder="Password..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <styled.InputText
            type="password"
            placeholder="Confirm Password..."
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <styled.CheckBox type="checkbox" required />
          <styled.SpanCheck>
            I agree to the terms and conditions
          </styled.SpanCheck>

          <styled.ButtonLogin type="submit">Register</styled.ButtonLogin>
        </styled.FormLogin>
      </styled.FormBox>
    </styled.Hero>
  );
}
