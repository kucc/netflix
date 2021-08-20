import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../component/layout";
import { useInput } from "../../hooks/useInput";
import * as S from "./styles";

export default function Login() {
  const history = useHistory();
  const { value: idValue, setValue: setIdValue, onChange: onChangeId } = useInput();
  const { value: passwordValue, setValue: setPasswordValue, onChange: onChangePassword } = useInput();

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <S.Main>
        <S.Form onSubmit={onLogin}>
          <S.InputWrapper>
            <S.Label htmlFor="id">아이디</S.Label>
            <S.Input id="id" value={idValue} onChange={onChangeId} />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="password">비밀번호</S.Label>
            <S.Input id="password" type="password" value={passwordValue} onChange={onChangePassword} />
          </S.InputWrapper>
          <S.signUpMessage type="button" onClick={() => history.push("/signup")}>
            아직 회원이 아니신가요?
          </S.signUpMessage>
          <S.LoginButton>로그인</S.LoginButton>
        </S.Form>
      </S.Main>
    </Layout>
  );
}
