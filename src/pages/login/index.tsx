import { useRef, useState } from 'react';
import * as styled from './styles';

export default function LoginPage() {
  const [registerOrLogin, setRegisterOrLogin] = useState<'left' | 'right'>(
    'left',
  );

  const formLoginRef = useRef<HTMLFormElement>(null);
  const formRegisterRef = useRef<HTMLFormElement>(null);
  const BtnRef = useRef<HTMLDivElement>(null);

  const registerFN = () => {
    console.log('registerFN');
    const formRegister = formRegisterRef.current;
    const formLogin = formLoginRef.current;
    const Btn = BtnRef.current;

    if (formRegister && formLogin && Btn) {
      formRegister.style.left = '-400px';
      formLogin.style.left = '50px';
      Btn.style.left = '110px';
    }
  };

  const loginFN = () => {
    console.log('loginFn');
    const formRegister = formRegisterRef.current;
    const formLogin = formLoginRef.current;
    const Btn = BtnRef.current;

    if (formRegister && formLogin && Btn) {
      formRegister.style.left = '50px';
      formLogin.style.left = '450px';
      Btn.style.left = '0px';
    }
  };

  return (
    <styled.Hero>
      <styled.FormBox>
        <styled.ButtonBox>
          <styled.BTN ref={BtnRef} screenName={registerOrLogin}></styled.BTN>
          <styled.Button onClick={() => loginFN()}>Log in</styled.Button>
          <styled.Button onClick={() => registerFN()}>Sign up</styled.Button>
        </styled.ButtonBox>
        <styled.SocialIcon>
          <styled.Icon src="/iconLetter.jpg" />
          <styled.Icon src="/iconLetter.jpg" />
          <styled.Icon src="/iconLetter.jpg" />
        </styled.SocialIcon>

        <styled.FormLogin id="login" ref={formLoginRef}>
          <styled.InputText type="text" placeholder="Name..." required />
          <styled.InputText type="text" placeholder="Email..." required />
          <styled.InputText
            type="password"
            placeholder="Password..."
            required
          />
          <styled.CheckBox type="checkbox" required />
          <styled.SpanCheck>
            I agree to the terms and conditions
          </styled.SpanCheck>

          <styled.ButtonLogin>Log IN</styled.ButtonLogin>
        </styled.FormLogin>

        <styled.FormLogin id="register" ref={formRegisterRef}>
          <styled.InputText type="text" placeholder="Name..." required />
          <styled.InputText type="text" placeholder="Email..." required />
          <styled.InputText
            type="password"
            placeholder="Password..."
            required
          />
          <styled.InputText
            type="password"
            placeholder="Confirm Password..."
            required
          />
          <styled.CheckBox type="checkbox" required />
          <styled.SpanCheck>
            I agree to the terms and conditions
          </styled.SpanCheck>

          <styled.ButtonLogin>Register</styled.ButtonLogin>
        </styled.FormLogin>
      </styled.FormBox>
    </styled.Hero>
  );
}
