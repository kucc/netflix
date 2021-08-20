import styled from "styled-components/macro";

export const Main = styled.div``;

export const ProfileList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ProfileItem = styled.div`
  background: white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 10px;
  border-radius: 30px;
`;

interface ImageProps {
  src: string;
}

export const ProfileImage = styled.div<ImageProps>`
  width: 100%;
  height: 150px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfileName = styled.div``;
