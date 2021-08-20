import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

export const Tag = styled.span<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  min-width: 3rem;
  width: fit-content;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : PALETTE.GRAY_300)};
`;

export const DeleteImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.2rem;
`;
