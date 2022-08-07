import { useState } from "react";
import styled from "styled-components";

export const SwitchComponent = () => {
  const [pic, setPic] = useState<string>("/SWITCH11_UP.png");
  let direction = false;

  const changeStatus = () => {
    direction = !direction;
    setPic(direction ? "/SWITCH11_DOWN.png" : "/SWITCH11_UP.png");
  };

  return (
    <SwitchDivDown
      dir={pic}
      onClick={changeStatus}
    ></SwitchDivDown>
  );
};


const SwitchDivDown = styled.div<{ dir: any }>`
  width: 120px;
  height: 120px;
  background-image: url(${(props) => props.dir});
  background-repeat: no-repeat;
  background-size: contain;
  left: 390px;
  top: 270px;
  position: relative;
`;
