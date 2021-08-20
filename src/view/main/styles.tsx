import styled from "styled-components/macro";
import { THEME } from "../../constant";

export const MainTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 5rem;
`;

export const ProfileList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-gap: 1rem;
  margin-bottom: 2rem;
`;

export const ProfileItem = styled.div`
  background: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 10px;
`;

interface ImageProps {
  src: string;
}

export const Image = styled.div<ImageProps>`
  position: relative;
  width: 100%;
  height: 150px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

export const Content = styled.div`
  height: calc(100% - 150px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1.2rem;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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

export const ContactButton = styled.button`
  border: 1px solid ${THEME.darkgray};
  color: ${THEME.darkgray};
  outline: none;
  background: none;
  border-radius: 0.2rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Filter = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;
  background: ${THEME.lightgray};
  margin-top: 1rem;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-x: overlay;

  li {
    list-style: none;
    margin: 0.3rem;
    display: flex;
    align-items: center;
  }
`;

export const FilterTag = styled.li`
  font-size: 1rem;
  font-weight: 500;
  background: white;
  border-radius: 0.3rem;
  padding: 0.2rem 0.6rem;
  white-space: nowrap;
  button {
    align-items: center;
    appearance: none;
    border: none;
    background: none;
    border-radius: 50%;
    cursor: pointer;
    display: inline-flex;
    font-size: 0.8rem;
    font-weight: 800;
    justify-content: center;
    line-height: 0;
    margin-left: 0.4rem;
    padding: 0;
    width: 1rem;
    height: 1rem;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  min-width: 10rem;
  flex-grow: 1;
  background: none;
  outline: none;
  border: none;
`;

export const AddButton = styled.button`
  background: white;
  outline: none;
  border: none;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 4rem;
  height: 4rem;
  z-index: 2;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 10px;
`;
