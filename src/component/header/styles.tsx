import styled, { css } from "styled-components/macro";
import { THEME } from "../../constant";

export const Header = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
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
  width: 6rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
`;

export const Title = styled.div`
  font-size: 1.6rem;
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
        background: #c3201f;
      }
    `}
`;

export const ProfileButton = styled.button`
  background: none;
  border: none;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
`;

interface ProfileModalProps {
  isProfileModalOpen: boolean;
}

export const ProfileModal = styled.div<ProfileModalProps>`
  position: absolute;
  height: auto;
  max-height: ${(props) => (props.isProfileModalOpen ? "7rem" : "0px")};
  transition: max-height 0.2s ease;
  overflow: hidden;
  top: 3.5rem;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    font-weight: 600;
    padding: 0.8rem 2rem;
  }
`;
