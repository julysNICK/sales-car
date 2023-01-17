import { useRef, useState } from 'react';
import * as styled from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OauthNix from '../oAuthNix';
import RenderWindow from '../../components/renderWindow';
import NewWindow from 'react-new-window';

export default function LoginPage() {
  const [registerOrLogin, setRegisterOrLogin] = useState<'login' | 'register'>(
    'login',
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const formLoginRef = useRef<HTMLFormElement>(null);
  const formRegisterRef = useRef<HTMLFormElement>(null);
  const [openWindow, setOpenWindow] = useState(false);
  const BtnRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const closeWindow = () => {
    setOpenWindow(false);
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
    console.log('handleSubmit');
    try {
      const response = await axios.post('http://localhost:8080/api/v1/login', {
        email: email,
        password: password,
      });

      localStorage.setItem('token', response.data.token);

      navigate('/', { replace: true });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/register',
        {
          firstName: name,
          lastName: name,
          email: email,
          password: password,
        },
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <styled.Hero>
      <styled.FormBox>
        <styled.ButtonBox>
          <styled.BTN ref={BtnRef}></styled.BTN>
          <styled.Button onClick={() => loginFN()}>Log in</styled.Button>
          <styled.Button onClick={() => registerFN()}>Sign up</styled.Button>
        </styled.ButtonBox>
        <styled.SocialIcon>
          <styled.Icon
            src="/iconLetter.jpg"
            onClick={() => setOpenWindow(!openWindow)}
          />
          <styled.Icon src="/iconLetter.jpg" />
          <styled.Icon src="/iconLetter.jpg" />
        </styled.SocialIcon>

        {openWindow && (
          <NewWindow>
            <OauthNix />
          </NewWindow>
        )}

        <styled.FormLogin
          id="login"
          ref={formLoginRef}
          onSubmit={handleSubmitLogin}
        >
          <styled.InputText
            type="text"
            placeholder="Email..."
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
            placeholder="Email..."
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
