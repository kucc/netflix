import Modal from "../../component/modal";
import * as S from "./styles";
import Tag from "../../component/tag";
import { DummyProfiles } from "../../dummy";
import { Email, GitHub, Language, Phone } from "@material-ui/icons";

interface ProfileProps {
  profileId: string;
  setOpen: (s: string) => void;
}

export default function Profile({ profileId, setOpen }: ProfileProps) {
  const tags = ["React", "Django", "Javascript"];
  const item = DummyProfiles[2];

  return (
    <Modal isOpen={profileId !== null} setOpen={setOpen}>
      <S.Main>
        <S.ProfileImage src={item.imageURL}>
          {item.joinDate && <S.JoinDate>{item.joinDate}</S.JoinDate>}
        </S.ProfileImage>
        <S.Contents>
          <div>
            <S.TitleRow>
              <S.Name>{item.name}</S.Name>
              <S.MajorAndJob>{`${item.major}${item.major && item.job && " · "}${
                item.job
              }`}</S.MajorAndJob>
            </S.TitleRow>
            <S.Comment>{item.comment}</S.Comment>
            <S.Table>
              <S.Section>취미</S.Section>
              <S.Tags section="hobby">
                {item.hobby.map((hobby, index) => {
                  return <S.Tag key={hobby}>{hobby}</S.Tag>;
                })}
              </S.Tags>
              <S.Section>관심 분야</S.Section>
              <S.Tags section="interest">
                {item.interest.map((interest, index) => {
                  return <S.Tag key={interest}>{interest}</S.Tag>;
                })}
              </S.Tags>
              <S.Section>기술 스택</S.Section>
              <S.Tags section="stack">
                {item.stack.map((stack, index) => {
                  return <S.Tag key={stack}>{stack}</S.Tag>;
                })}
              </S.Tags>
              <S.Section>기타</S.Section>
              <S.Tags section="etc">
                {item.etc.map((etc, index) => {
                  return <S.Tag key={index}>{etc}</S.Tag>;
                })}
              </S.Tags>
            </S.Table>
          </div>
          <div>
            <S.Section>
              연락처
              <S.ContactButton>친해지고 싶어요!</S.ContactButton>
            </S.Section>
            <S.ContactList>
              {item.phone && (
                <S.ContactItem>
                  <Phone />
                  {item.phone}
                </S.ContactItem>
              )}
              {item.email && (
                <S.ContactItem>
                  <Email />
                  {item.email}
                </S.ContactItem>
              )}
              {item.github && (
                <a
                  href={`https://github.com/${item.github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <S.ContactItem>
                    <GitHub />
                    {item.github}
                  </S.ContactItem>
                </a>
              )}
              {item.blog && (
                <a href={item.blog} target="_blank" rel="noreferrer">
                  <S.ContactItem>
                    <Language />
                    {item.blog
                      .replace(/^https?:\/\//i, "")
                      .replace(/^http?:\/\//i, "")}
                  </S.ContactItem>
                </a>
              )}
            </S.ContactList>
          </div>
        </S.Contents>
      </S.Main>
    </Modal>
  );
}
