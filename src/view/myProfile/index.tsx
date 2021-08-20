import * as S from "./styles";
import Toggle from "../../component/toggle";
import TagInput from "../../component/tagInput";
import { useInput } from "../../hooks/useInput";
import Layout from "../../component/layout";
import { Photo } from "@material-ui/icons";
import { THEME } from "../../constant";

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
      <S.ProfileImage
        src={
          "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"
        }
      >
        <Photo />
      </S.ProfileImage>
      <S.CoreInfoWrapper>
        <S.LabelWrapper>
          <S.Label>이름*</S.Label>
          <S.Input value={nameValue} onChange={onNameChange} placeholder="홍길동" />
          <S.Label>학과</S.Label>
          <S.Input value={majorValue} onChange={onMajorChange} placeholder="OO학과" />
          <S.Label>소속</S.Label>
          <S.Input value={jobValue} onChange={onJobChange} placeholder="대학생/대학원생/직장인(OO 회사)" />
          <S.Label>가입시기</S.Label>
          <S.Input value={joinDateValue} onChange={onJoinDateChange} placeholder="2021-1" />
        </S.LabelWrapper>
      </S.CoreInfoWrapper>
      <S.SubInfoWrapper>
        <S.TagWrapper>
          <S.Label>취미</S.Label>
          <TagInput tags={tags} tagColor={THEME.yellow} />
          <S.Label>관심 분야</S.Label>
          <TagInput tags={tags} tagColor={THEME.red} />
          <S.Label>기술 스택</S.Label>
          <TagInput tags={tags} tagColor={THEME.blue} />
          <S.Label>기타</S.Label>
          <TagInput tags={tags} tagColor={THEME.gray} />
        </S.TagWrapper>
        <S.ContactWrapper>
          <S.Label>전화번호</S.Label>
          <S.Input value={phoneValue} onChange={onPhoneChange} placeholder="010-XXXX-XXXX" />
          <S.Label>이메일</S.Label>
          <S.Input value={emailValue} onChange={onEmailChange} placeholder="kucc@korea.ac.kr" />
          <S.Label>Github</S.Label>
          <S.Input value={githubValue} onChange={onGithubChange} placeholder="Github ID" />
          <S.Label>Blog</S.Label>
          <S.Input value={blogValue} onChange={onBlogChange} placeholder="https://www.blog.com" />
        </S.ContactWrapper>
      </S.SubInfoWrapper>
    </Layout>
  );
}
