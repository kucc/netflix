import { Notifications } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export default function Header() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  return (
    <S.Header>
      <S.Layout>
        <div>
          <S.Logo src="https://user-images.githubusercontent.com/41494099/86317182-c58a8900-bc69-11ea-9a6e-dfdb1e0141be.png" />
          <S.Title>이지민 짱!</S.Title>
        </div>
        <div>
          <S.ProfileButton
            onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
          >
            <S.NotiButton hasNoti={true}>
              <Notifications />
            </S.NotiButton>
            <S.Name>김기융</S.Name>
            <S.Profile src="https://images-na.ssl-images-amazon.com/images/I/81BES%2BtsVvL.png"></S.Profile>
            <S.ProfileModal isProfileModalOpen={isProfileModalOpen}>
              <Link to="/myProfile">내 정보</Link>
              <Link to="/">알림 (1)</Link>
            </S.ProfileModal>
          </S.ProfileButton>
        </div>
      </S.Layout>
    </S.Header>
  );
}
