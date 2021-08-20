import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 45rem;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 15.625rem;
  height: 15.625rem;
  margin-right: 5rem;
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
