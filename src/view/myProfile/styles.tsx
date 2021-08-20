import styled from "styled-components";
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
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > span {
    font-weight: 700;
  }
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImage = styled.img`
  width: 15.625rem;
  height: 15.625rem;
`;

export const CoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  align-items: flex-start;
`;

export const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  margin: auto 0;
`;

export const Input = styled.input`
  width: 30rem;
  font-size: 1rem;
  padding: 0.2rem 0.3rem;

  border: 1px solid ${PALETTE.BLACK_700};
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${PALETTE.BLACK_700};
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
