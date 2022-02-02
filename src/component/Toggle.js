import React, { useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 90%;
  height: 300px;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  margin: 5px auto;
`;

const ToggleText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ToggleWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  width: fit-content;
  margin: 90px auto 10px;
`;

const ToggleCheckBox = styled.input`
  display: none;
  &:checked + span {
    &:before {
      transform: translate(-100%, -50%) scale(2);
    }
    &:after {
      transform: translateX(40px);
    }
  }
`;

const ToggleLabel = styled.span`
  position: relative;
  background-color: lightgray;
  display: block;
  width: 75px;
  height: 35px;
  border-radius: 25px;
  cursor: pointer;

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: #6600ff;
    transform: translate(-100%, -50%) scale(1);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 25px;
    height: 25px;
    border-radius: 21px;
    transition: transform 0.5s;
    background-color: white;
  }
`;

const SwitchText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      </ToggleWrapper>
      <SwitchText>Toggle Switch {isToggled ? "ON" : "OFF"}</SwitchText>
    </Base>
  );
}
