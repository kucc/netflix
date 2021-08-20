import styled, { css } from "styled-components/macro";
import { THEME } from "../../constant";

export const Header = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 10px;
`;

export const Layout = styled.div`
  width: 100%;
  max-width: 1020px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 8rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

interface ImageProps {
  src: string;
}

export const Profile = styled.div<ImageProps>`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

interface NotiButtonProps {
  hasNoti: boolean;
}

export const NotiButton = styled.button<NotiButtonProps>`
  position: relative;
  background: none;
  border: none;
  svg {
    font-size: 2rem;
  }
  ${(props) =>
    props.hasNoti &&
    css`
      ::after {
        position: absolute;
        bottom: 7px;
        right: 7px;
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: red;
      }
    `}
`;
