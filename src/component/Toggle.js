import React, { useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  height: 300px;
`;

const ToggleWrapper = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const ToggleText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ToggleCheckBox = styled.input`
  display: none;
  &:checked + span {
    background-color: #6600ff;
    &:before {
      transform: translateX(40px);
    }
  }
`;

const ToggleLabel = styled.span`
  display: flex;
  cursor: pointer;
  width: 75px;
  height: 35px;
  border-radius: 100px;
  background-color: lightgray;
  position: relative;
  transition: background-color 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 25px;
    height: 25px;
    border-radius: 21px;
    transition: 0.5s;
    background-color: white;
  }
`;

const SwitchText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export default function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggled = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Base>
      <ToggleText>Toggle</ToggleText>
      <ToggleWrapper>
        <ToggleCheckBox
          type="checkbox"
          checked={isToggled}
          onChange={handleToggled}
        />
        <ToggleLabel />
        <SwitchText>Toggle Switch {isToggled ? "ON" : "OFF"}</SwitchText>
      </ToggleWrapper>
    </Base>
  );
}
