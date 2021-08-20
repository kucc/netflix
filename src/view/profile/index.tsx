import Modal from "../../component/modal";
import * as S from "./styles";
import Tag from "../../component/tag";

export default function Profile() {
  const tags = ["React", "Django", "Javascript"];

  return (
    <Modal>
      <S.Main>
        <S.ProfileImageWrapper>
          <S.ProfileImage alt="사용자 이미지" />
          <S.CoreInfoWrapper>
            <S.LabelWrapper>
              <S.Label>이름</S.Label>
              <S.Info>김기융</S.Info>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>학과</S.Label>
              <S.Info>컴퓨터학과</S.Info>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>소속</S.Label>
              <S.Info>네이버...</S.Info>
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label>가입시기</S.Label>
              <S.Info>2021년 1학기</S.Info>
            </S.LabelWrapper>
          </S.CoreInfoWrapper>
        </S.ProfileImageWrapper>
        <S.SubInfoWrapper>
          <S.LabelWrapper>
            <S.Label>취미</S.Label>
            <S.TagWrapper>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </S.TagWrapper>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>관심 분야</S.Label>
            <S.TagWrapper>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </S.TagWrapper>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>기술 스택</S.Label>
            <S.TagWrapper>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </S.TagWrapper>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>기타</S.Label>
            <S.TagWrapper>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </S.TagWrapper>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>전화번호</S.Label>
            <S.Info>010-1234-1234</S.Info>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>이메일</S.Label>
            <S.Info>abc@abc.com</S.Info>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>Github</S.Label>
            <S.Info>https://github.com</S.Info>
          </S.LabelWrapper>
          <S.LabelWrapper>
            <S.Label>Blog</S.Label>
            <S.Info>https://blog.com</S.Info>
          </S.LabelWrapper>
        </S.SubInfoWrapper>
      </S.Main>
    </Modal>
  );
}
