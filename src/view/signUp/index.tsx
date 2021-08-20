import axios from "axios";
import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../component/layout";
import { BASE_URL } from "../../constant";
import { useInput } from "../../hooks/useInput";
import * as S from "./styles";

export default function SignUp() {
  const history = useHistory();
  const { value: emailValue, setValue: setEmailValue, onChange: onChangeEmail } = useInput();
  const { value: passwordValue, setValue: setPasswordValue, onChange: onChangePassword } = useInput();
  const {
    value: confirmPasswordValue,
    setValue: setConfirmPasswordValue,
    onChange: onChangeConfirmPassword,
  } = useInput();

  const onSignUp = async (e: FormEvent) => {
    e.preventDefault();

    if (passwordValue !== confirmPasswordValue) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/signup`, { email: emailValue, password: passwordValue });

      history.push("/");
    } catch (e) {
      alert("회원가입에 실패하였습니다");
    }
  };

  return (
    <Layout>
      <S.Main>
        <S.Form onSubmit={onSignUp}>
          <S.InputWrapper>
            <S.Label htmlFor="email">아이디</S.Label>
            <S.Input id="email" value={emailValue} onChange={onChangeEmail} required />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="password">비밀번호</S.Label>
            <S.Input id="password" type="password" value={passwordValue} onChange={onChangePassword} required />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="confirm-password">비밀번호 확인</S.Label>
            <S.Input
              id="confirm-password"
              type="password"
              value={confirmPasswordValue}
              onChange={onChangeConfirmPassword}
              required
            />
          </S.InputWrapper>
          <S.SignUpButton>회원가입</S.SignUpButton>
        </S.Form>
      </S.Main>
    </Layout>
  );
}
