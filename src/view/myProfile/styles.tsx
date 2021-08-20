import styled from "styled-components/macro";
import { THEME } from "../../constant";
import { PALETTE } from "../../styles/palette";

export const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = styled.div`
  width: 100%;
  max-width: 1020px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  & > span {
    font-weight: 700;
  }
`;

interface ImageProps {
  src: string;
}

export const ProfileImage = styled.div<ImageProps>`
  position: relative;
  width: 100%;
  height: 15rem;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 5rem;
    color: white;
    z-index: 1;
    opacity: 0;
    transition: 0.2s ease;
    cursor: pointer;
  }
  ::before {
    content: "";
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.2s ease;
    cursor: pointer;
  }
  :hover {
    ::before {
      opacity: 1;
    }
    svg {
      opacity: 0.8;
    }
  }
`;

export const CoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr 5rem 1fr;
  grid-gap: 1rem;
`;

export const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  height: 100%;
`;

export const TagWrapper = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-gap: 2rem;
`;

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-gap: 1rem;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.3rem 0.8rem;

  border-radius: 0.5rem;
  font-size: 1rem;

  outline: none;
  border: none;
  background: ${THEME.lightgray};

  transition: 0.2s ease;

  :focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px;
  }
`;

export const SubInfoWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TagInput = styled.input`
  width: 10rem;
  padding: 0.2rem 0.3rem;
  border: 1px solid ${PALETTE.BLACK_700};
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${PALETTE.BLACK_700};
  }
`;
