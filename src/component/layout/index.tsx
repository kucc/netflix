import { ReactChildren, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header";
import * as S from "./styles";

interface LayoutProps {
  children?: ReactNode[];
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <S.Layout>
      <Header />
      <S.InnerContent>{children}</S.InnerContent>
    </S.Layout>
  );
}
