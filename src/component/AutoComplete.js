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

const InputForm = styled.input`
  width: 100%;
  height: 36px;
  border: 1px solid lightgray;
  border-radius: 10px;

  &:focus {
    outline: none;
    box-shadow: 0px 3px 3px 3px lightgray;
  }
`;

const Ul = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  border: 1px solid lightgray;
`;

const LI = styled.li`
  &:hover {
    background: lightgray;
  }
`;

export default function AutoCoplete({ inputText }) {
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
    completion = [];
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
      <div>AutoCoplete</div>
      <InputForm type={"text"} onChange={handleChange} />
      {getCompletions()}
    </Base>
  );
}
