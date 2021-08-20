import * as S from "./styles";
import Toggle from "../../component/toggle";
import TagInput from "../../component/tagInput";
import { MainContainer } from "../../component/globalStyle/mainContainer";
import { useInput } from "../../hooks/useInput";
import Header from "../../component/header";
import Layout from "../../component/layout";

export default function MyProfile() {
  const { value: nameValue, onChange: onNameChange } = useInput();
  const { value: majorValue, onChange: onMajorChange } = useInput();
  const { value: jobValue, onChange: onJobChange } = useInput();
  const { value: joinDateValue, onChange: onJoinDateChange } = useInput();
  const { value: phoneValue, onChange: onPhoneChange } = useInput();
  const { value: emailValue, onChange: onEmailChange } = useInput();
  const { value: githubValue, onChange: onGithubChange } = useInput();
  const { value: blogValue, onChange: onBlogChange } = useInput();
  const tags = ["React", "Django", "Javascript"];

  return (
    <Layout>
      <S.TitleWrapper>
        <S.Title>내 프로필</S.Title>
        <S.ToggleWrapper>
          <span>내 프로필 공개</span>
          <Toggle />
        </S.ToggleWrapper>
      </S.TitleWrapper>
      <S.ProfileImageWrapper>
        <S.ProfileImage />
        <S.CoreInfoWrapper>
          <S.LabelWrapper>
            <S.Label>이름</S.Label>
            <S.Input value={nameValue} onChange={onNameChange} />
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>학과</S.Label>
            <S.Input
              value={majorValue}
              onChange={onMajorChange}
              placeholder="XX학과"
            />
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>소속</S.Label>
            <S.Input
              value={jobValue}
              onChange={onJobChange}
              placeholder="대학생/대학원생/직장인(XX 회사)"
            />
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>가입시기</S.Label>
            <S.Input
              value={joinDateValue}
              onChange={onJoinDateChange}
              placeholder="2021년 1학기"
            />
          </S.LabelWrapper>
        </S.CoreInfoWrapper>
      </S.ProfileImageWrapper>
      <S.SubInfoWrapper>
        <S.LabelWrapper>
          <S.Label>취미</S.Label>
          <TagInput tags={tags} />
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
          <S.Input
            value={phoneValue}
            onChange={onPhoneChange}
            placeholder="010-XXXX-XXXX"
          />
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label>이메일</S.Label>
          <S.Input
            value={emailValue}
            onChange={onEmailChange}
            placeholder="kucc@korea.ac.kr"
          />
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label>Github</S.Label>
          <S.Input
            value={githubValue}
            onChange={onGithubChange}
            placeholder="https://github.com/XXXX"
          />
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label>Blog</S.Label>
          <S.Input
            value={blogValue}
            onChange={onBlogChange}
            placeholder="https://blog.com"
          />
        </S.LabelWrapper>
      </S.SubInfoWrapper>
    </Layout>
  );
}
