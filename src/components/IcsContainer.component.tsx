import styled from "styled-components";
import { KnobComponent } from "./Knob.component";
import { SwitchComponent } from "./Switch.component";

export const IcsContainerComponent = () => {
  return (
    <MainDiv>
      <KnobComponent />
      <SwitchComponent />
    </MainDiv>
  );
};

const MainDiv = styled.div`
  background-image: url(/ics_background.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 1000px;
  height: 800px;
  z-index: -1;
`;
