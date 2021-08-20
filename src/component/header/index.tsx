import { Notifications } from "@material-ui/icons";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <S.Layout>
        <div>
          <S.Logo src="https://user-images.githubusercontent.com/41494099/86317182-c58a8900-bc69-11ea-9a6e-dfdb1e0141be.png" />
          <S.Title>이지민 짱!</S.Title>
        </div>
        <div>
          <S.NotiButton hasNoti={true}>
            <Notifications />
          </S.NotiButton>
          <S.Name>김기융</S.Name>
          <S.Profile src="https://images-na.ssl-images-amazon.com/images/I/81BES%2BtsVvL.png"></S.Profile>
        </div>
      </S.Layout>
    </S.Header>
  );
}
