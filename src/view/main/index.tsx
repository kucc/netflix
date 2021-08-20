import * as S from "./styles";

interface Profile {
  image: string;
  name: string;
}

export default function Main() {
  const profiles = [] as Profile[];
  return (
    <S.Main>
      <S.ProfileList>
        {profiles.map((item, index) => {
          return (
            <S.ProfileItem>
              <S.ProfileImage src={item.image} />
              <S.ProfileName>{item.name}</S.ProfileName>
            </S.ProfileItem>
          );
        })}
      </S.ProfileList>
    </S.Main>
  );
}
