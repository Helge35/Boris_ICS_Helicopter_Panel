import React, { useRef } from "react";
import styled from "styled-components";

export const KnobComponent = () => {
  const knob = useRef() as React.MutableRefObject<HTMLInputElement>;
  let knobDirection = 0;
  let ind = 0;
  const degArray: number[] = [0, 25, 50, 70, 90, 250, 280, 310, 335];

  const turnKnob = (left: boolean) => {
    if (left) {
      ind = ind < 0 ? degArray.length : ind - 1;
    } else {
      ind = degArray.length > ind ? ind + 1 : 0;
    }

    knob.current.style.transform = `rotate(${degArray[ind]}deg)`;
  };

  return (
    <MainBtn ref={knob}>
      <TurnDiv onClick={() => turnKnob(true)}></TurnDiv>
      <TurnDiv onClick={() => turnKnob(false)}></TurnDiv>
    </MainBtn>
  );
};

const TurnDiv = styled.div`
  background-color: transparent;
  min-width: 60px;
  height: 120px;
  float: left;
`;

const MainBtn = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(/ics_main_knob.png);
  background-repeat: no-repeat;
  background-size: contain;
  left: 390px;
  top: 270px;
  position: relative;
`;
