import * as S from "./styles";
import cancelSVG from "../../assets/svg/cancel.svg";

interface Props {
  children: string;
  bgColor?: string;
  canDelete?: boolean;
}

export default function Tag({ children, bgColor, canDelete }: Props) {
  return (
    <S.Tag bgColor={bgColor}>
      {children}
      {canDelete && <S.DeleteImage src={cancelSVG} alt="태그 삭제" />}
    </S.Tag>
  );
}
