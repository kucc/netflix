import { useState } from "react";
import { Button, ToggleCircle } from "./styles";

export default function Toggle() {
  const [isToggleOn, setToggleOn] = useState(false);

  return (
    <Button type="button" isToggleOn={isToggleOn} onClick={() => setToggleOn((state) => !state)}>
      <ToggleCircle />
    </Button>
  );
}
