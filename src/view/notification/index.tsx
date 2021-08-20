import Layout from "../../component/layout";
import * as S from "./styles";

export default function Notification() {
  return (
    <Layout>
      <S.Title>알림</S.Title>
      <S.List>
        <S.ListItem isRead={false}>
          <div>
            <b>강관훈</b>님이 당신에게 '친해지고 싶어요!' 메세지를 보냈어요!
          </div>
        </S.ListItem>
        <S.ListItem isRead={false}>
          <div>
            <b>강관훈</b>님이 당신에게 '친해지고 싶어요!' 메세지를 보냈어요!
          </div>
        </S.ListItem>
        <S.ListItem isRead={true}>
          <div>
            <b>강관훈</b>님이 당신에게 '친해지고 싶어요!' 메세지를 보냈어요!
          </div>
        </S.ListItem>
      </S.List>
    </Layout>
  );
}
