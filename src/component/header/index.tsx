import { Notifications } from "@material-ui/icons";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../context/user";
import * as S from "./styles";

export default function Header() {
  const history = useHistory();
  const user = useUser();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [notiCount, setNotiCount] = useState(0);

  return (
    <S.Header>
      <S.Layout>
        <div>
          <S.Logo
            src="https://user-images.githubusercontent.com/41494099/86317182-c58a8900-bc69-11ea-9a6e-dfdb1e0141be.png"
            alt="메인 로고"
            onClick={() => history.push("/")}
          />
          <S.Title>이지민 짱!</S.Title>
        </div>
        {user ? (
          <div>
            <S.ProfileButton
              onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
            >
              <S.NotiButton hasNoti={notiCount > 0}>
                <Notifications />
              </S.NotiButton>
              <S.Name>{user.user.name}</S.Name>
              <S.Profile src="https://images-na.ssl-images-amazon.com/images/I/81BES%2BtsVvL.png"></S.Profile>
              <S.ProfileModal isProfileModalOpen={isProfileModalOpen}>
                <Link to="/myProfile">내 정보</Link>
                <Link to="/notification">알림 ({notiCount})</Link>
              </S.ProfileModal>
            </S.ProfileButton>
          </div>
        ) : (
          <S.ProfileButton
            onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
          >
            <S.Name>로그인하세요.</S.Name>
            <S.Profile src="https://img.icons8.com/pastel-glyph/2x/person-male--v2.png"></S.Profile>
            <S.ProfileModal isProfileModalOpen={isProfileModalOpen}>
              <Link to="/login">로그인</Link>
              <Link to="/signup">회원가입</Link>
            </S.ProfileModal>
          </S.ProfileButton>
        )}
      </S.Layout>
    </S.Header>
  );
}
