import * as S from "./styles";
import { Profile } from "../../constant";
import { DummyProfiles } from "../../dummy";
import {
  Add,
  Email,
  GitHub,
  Language,
  Phone,
  Search,
} from "@material-ui/icons";
import Header from "../../component/header";
import { useState } from "react";

export default function Main() {
  const [profiles, setProfiles] = useState(DummyProfiles);
  const [filteredProfiles, setFilteredProfiles] = useState(DummyProfiles);
  const [tags, setTags] = useState([] as string[]);
  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };
  const addTag = async (e: any) => {
    const val = e.target.value;
    if (tags.length > 9) return;
    if ((e.key === "Enter" || e.key === " ") && val) {
      if (
        tags.find((tag) => tag.replace(/\s/g, "") === val.replace(/\s/g, ""))
      ) {
        return;
      }
      e.target.value = "";
      setTags([...tags, val.replace(/\s/g, "")]);
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  const applyFilter = () => {
    setFilteredProfiles(
      profiles.filter((profile) =>
        tags.every((tag) =>
          [
            ...profile.hobby,
            ...profile.interest,
            ...profile.stack,
            ...profile.etc,
          ].includes(tag)
        )
      )
    );
  };

  return (
    <S.Main>
      <Header />
      <S.Layout>
        <S.FilterContainer>
          <S.Filter>
            {tags.map((tag, i) => (
              <S.FilterTag key={tag}>
                {tag}
                <button
                  type="button"
                  onClick={() => {
                    removeTag(i);
                  }}
                >
                  ×
                </button>
              </S.FilterTag>
            ))}
            <li>
              <S.FilterInput
                type="text"
                onKeyDown={addTag}
                placeholder="태그 입력"
              />
            </li>
          </S.Filter>
          <Search style={{ cursor: "pointer" }} onClick={() => applyFilter()} />
        </S.FilterContainer>
        <S.ProfileList>
          {filteredProfiles.map((item, index) => {
            return (
              <S.ProfileItem key={`${item.name}${item.joinDate}`}>
                <S.Image src={item.imageURL}>
                  <S.JoinDate>{item.joinDate}</S.JoinDate>
                </S.Image>
                <S.Content>
                  <div>
                    <S.TitleRow>
                      <S.Name>{item.name}</S.Name>
                      <S.MajorAndJob>{`${item.major}${
                        item.major && item.job && " · "
                      }${item.job}`}</S.MajorAndJob>
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
                </S.Content>
              </S.ProfileItem>
            );
          })}
        </S.ProfileList>
      </S.Layout>
      <S.AddButton>
        <Add />
      </S.AddButton>
    </S.Main>
  );
}
