import React, { useRef, useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 90%;
  height: 300px;
  border: 2px solid lightgray;
  border-radius: 10px;
  margin: 5px auto;
`;

const EditText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const NameWrapper = styled.div`
  font-weight: bolder;
  margin-bottom: 20px;
`;
const AgeWrapper = styled.div`
  font-weight: bolder;
  margin-bottom: 20px;
`;
const ResultWrapper = styled.div`
  font-weight: bolder;
  display: flex;
  justify-content: space-around;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const Input = styled.input`
  text-align: center;
  &:focus {
    outline-color: skyblue;
  }
`;

const Name = styled.div`
  margin-right: 5px;
`;
const Age = styled.div``;

export default function ClickToEdit() {
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState("20");

  return (
    <Base>
      <EditText>ClickToEdit</EditText>
      <ContentWrapper>
        <NameWrapper>
          <Label>이름</Label>
          <Input
            onBlur={(e) => setName(e.target.value)}
            defaultValue={"김코딩"}
          />
        </NameWrapper>
        <AgeWrapper>
          <Label>나이</Label>
          <Input onBlur={(e) => setAge(e.target.value)} defaultValue={20} />
        </AgeWrapper>
        <ResultWrapper>
          <Name>이름 {name} </Name>
          <Age>나이 {age}</Age>
        </ResultWrapper>
      </ContentWrapper>
    </Base>
  );
}
