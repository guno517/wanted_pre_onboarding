import React, { useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  height: 200px;
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
  margin: 10px auto;
  margin-top: 25px;
`;

const ToggleCheckBox = styled.input`
  display: none;
  &:checked + span {
    transform: scaleX(1);
    opacity: 1;
    &:before {
      transform: scaleX(1);
    }
    &:after {
      transform: translateX(40px);
    }
  }
`;

const ToggleLabel = styled.span`
  position: relative;
  cursor: pointer;
  width: 75px;
  height: 35px;
  border-radius: 100px;
  background-color: lightgray;
  position: relative;

  &:before {
    content: " ";
    transition: all 0.4s ease;
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    width: 75px;
    height: 35px;
    border-radius: 20px;
    float: left;
    background-color: #6600ff;
    opacity: 1;
    transform-origin: 0 100%;
  }

  &:after {
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
