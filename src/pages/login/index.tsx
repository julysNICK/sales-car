import { useState } from 'react';
import * as styled from './styles';

export default function LoginPage() {
  const [registerOrLogin, setRegisterOrLogin] = useState<'left' | 'right'>(
    'left',
  );

  return (
    <styled.Hero>
      <styled.FormBox>
        <styled.ButtonBox>
          <styled.BTN screenName={registerOrLogin}></styled.BTN>
          <styled.Button onClick={() => setRegisterOrLogin('left')}>
            Log in
          </styled.Button>
          <styled.Button onClick={() => setRegisterOrLogin('right')}>
            Sign up
          </styled.Button>
        </styled.ButtonBox>
        <styled.SocialIcon>
          <styled.Icon src="/iconLetter.jpg" />
          <styled.Icon src="/iconLetter.jpg" />
          <styled.Icon src="/iconLetter.jpg" />
        </styled.SocialIcon>

        {registerOrLogin === 'left' ? (
          <styled.FormLogin>
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
        ) : (
          <styled.FormLogin>
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
        )}
      </styled.FormBox>
    </styled.Hero>
  );
}
