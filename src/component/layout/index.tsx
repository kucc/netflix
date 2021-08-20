import { ReactChildren, ReactNode } from "react";
import Header from "../header";
import * as S from "./styles";

interface LayoutProps {
  children?: ReactNode[] | ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <S.Layout>
      <Header />
      <S.InnerContent>{children}</S.InnerContent>
    </S.Layout>
  );
}
