import { useState } from "react";
import * as S from "./styles";

export default function Toggle() {
  const [isToggleOn, setToggleOn] = useState(false);

  return (
    <S.Button type="button" isToggleOn={isToggleOn} onClick={() => setToggleOn((state) => !state)}>
      <S.ToggleCircle isToggleOn={isToggleOn} />
    </S.Button>
  );
}
