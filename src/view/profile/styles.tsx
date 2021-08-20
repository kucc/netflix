import styled, { keyframes } from "styled-components";
import { THEME } from "../../constant";

export const Main = styled.div`
  width: calc(100vw - 10rem);
  max-width: 30rem;
  max-height: calc(100vh - 10rem);
  overflow-y: overlay;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
  ::-webkit-scrollbar {
    width: 4px;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

export const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const MajorAndJob = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin-left: 5px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.3rem;
`;

export const Comment = styled.div`
  font-size: 1rem;
  font-weight: 400;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  margin-bottom: 1rem;
`;

export const Table = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-gap: 0.6rem 0.5rem;
  margin-bottom: 1.4rem;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1rem;
  font-weight: 700;
`;

interface TagProps {
  section: "hobby" | "interest" | "stack" | "etc";
}

export const Tags = styled.div<TagProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  div {
    background: ${(props) => {
      switch (props.section) {
        case "hobby":
          return THEME.yellow;
        case "interest":
          return THEME.red;
        case "stack":
          return THEME.blue;
        default:
          return THEME.gray;
      }
    }};
  }
`;

export const Tag = styled.div`
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  white-space: nowrap;
  font-weight: 600;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 400;
  color: black;
  svg {
    width: 1rem;
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  background: ${THEME.lightgray};
  padding: 0.4rem 0.8rem;
  margin-top: 0.5rem;
`;

const bounce = keyframes`
  0%   { transform: translateY(0); }
  100%  { transform: translateY(-0.3rem); }
`;

export const ContactButton = styled.button`
  border: 1px solid ${THEME.darkgray};
  color: ${THEME.darkgray};
  outline: none;
  background: none;
  border-radius: 0.2rem;
  animation: ${bounce} 0.5s ease infinite alternate;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JoinDate = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.4rem 0.8rem;
  background: white;
  font-weight: 700;
  font-size: 0.8rem;
`;

export const CoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SubInfoWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  align-items: flex-start;
`;

export const Label = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  margin: auto 0;
`;

export const Info = styled.span`
  font-size: 1rem;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;
