import styled, { css } from "styled-components/macro";
import { THEME } from "../../constant";

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 5rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ListItemProps {
  isRead: boolean;
}

export const ListItem = styled.div<ListItemProps>`
  padding: 0.8rem 1rem;
  background: ${(props) => (props.isRead ? THEME.lightgray : "white")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  div > b {
    font-weight: 700;
  }
  ${(props) =>
    !props.isRead &&
    css`
      ::after {
        content: "";
        background: ${THEME.kucc};
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
      }
    `}
`;
