import React, { useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 90%;
  height: 300px;
  border: 2px solid lightgray;
  border-radius: 10px;
  margin: 5px auto;
`;

const AutoCompleteText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
`;

const InputWrapper = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  margin: 90px auto 0 auto;
  border-radius: 10px;
  box-sizing: border-box;
  &:focus-within {
    box-shadow: 0 5px 5px 5px lightgray;
  }
`;

const InputForm = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  padding: 0 10px;
  font-size: 14px;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
`;

const CloseBtn = styled.span`
  position: absolute;
  border: none;
  display: block;
  width: fit-content;
  height: fit-content;
  font-size: 14px;
  font-weight: bolder;
  text-align: center;
  background: white;
  top: 0;
  bottom: 0;
  right: 6%;
  margin: auto;
  padding: 0;
  outline: none;
  cursor: pointer;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid lightgray;
`;

const LI = styled.li`
  padding: 0 10px;
  margin: 10px auto;
  &:hover {
    background: lightgray;
  }
`;

export default function AutoComplete({ inputText }) {
  const [searchText, setSearchText] = useState("");
  const [complete, setComplete] = useState([]);

  let completion = [];

  const handleChange = (e) => {
    let inputWord = e.target.value;
    completion = [];
    if (inputWord.length > 0) {
      completion =
        inputText &&
        inputText
          .sort()
          .filter((e) => e.toLowerCase().includes(inputWord.toLowerCase()));
    }
    setComplete(completion);
    setSearchText(inputWord);
  };

  const completionSelected = (value) => {
    setSearchText(value);
    //setComplete([]);
  };

  const getCompletions = () => {
    if (complete.length === 0 && searchText !== "") {
      return null;
    } else {
      return (
        <Ul>
          {complete.map((item, index) => {
            return (
              <div key={index}>
                <LI onClick={() => completionSelected(item)}>{item}</LI>
              </div>
            );
          })}
        </Ul>
      );
    }
  };

  return (
    <Base>
      <AutoCompleteText>AutoCoplete</AutoCompleteText>
      <InputWrapper>
        <InputForm value={searchText} type={"text"} onChange={handleChange} />
        <CloseBtn
          onClick={() => {
            setSearchText("");
            setComplete([]);
          }}
        >
          X
        </CloseBtn>
        {getCompletions()}
      </InputWrapper>
    </Base>
  );
}
