import * as S from "./styles";
import { MainContainer } from "../../component/global-style/mainContainer";
import Toggle from "../../component/toggle";
import { useInput } from "../../hook/useInput";

export default function Profile() {
  const { value: nameValue, onChange: onNameChange } = useInput();
  const { value: majorValue, onChange: onMajorChange } = useInput();
  const { value: jobValue, onChange: onJobChange } = useInput();
  const { value: joinDateValue, onChange: onJoinDateChange } = useInput();
  const { value: phoneValue, onChange: onPhoneChange } = useInput();
  const { value: emailValue, onChange: onEmailChange } = useInput();
  const { value: githubValue, onChange: onGithubChange } = useInput();
  const { value: blogValue, onChange: onBlogChange } = useInput();

  return (
    <MainContainer>
      <S.Main>
        <S.TitleWrapper>
          <S.Title>내 프로필</S.Title>
          <S.ToggleWrapper>
            <span>내 프로필 공개</span>
            <Toggle />
          </S.ToggleWrapper>
        </S.TitleWrapper>
        <S.ProfileImageWrapper>
          <S.profileImage />
          <S.CoreInfoWrapper>
            <S.LabelWrapper>
              <S.Label>이름</S.Label>
              <S.Input value={nameValue} onChange={onNameChange} />
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>학과</S.Label>
              <S.Input value={majorValue} onChange={onMajorChange} />
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>소속</S.Label>
              <S.Input value={jobValue} onChange={onJobChange} />
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>가입시기</S.Label>
              <S.Input value={joinDateValue} onChange={onJoinDateChange} />
            </S.LabelWrapper>
          </S.CoreInfoWrapper>
        </S.ProfileImageWrapper>
        <S.SubInfoWrapper>
          <S.LabelWrapper>
            <S.Label>취미</S.Label>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>관심 분야</S.Label>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>기술 스택</S.Label>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>기타</S.Label>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>전화번호</S.Label>
            <S.Input value={phoneValue} onChange={onPhoneChange} />
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>이메일</S.Label>
            <S.Input value={emailValue} onChange={onEmailChange} />
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>Github</S.Label>
            <S.Input value={githubValue} onChange={onGithubChange} />
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>Blog</S.Label>
            <S.Input value={blogValue} onChange={onBlogChange} />
          </S.LabelWrapper>
        </S.SubInfoWrapper>
      </S.Main>
    </MainContainer>
  );
}
