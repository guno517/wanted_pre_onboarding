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

const TagText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const InputForm = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 48px;
  min-width: 500px;
  border: 1px solid lightgray;
  border-radius: 10px;
  &:focus-within {
    border: 2px solid #6600ff;
  }
`;

const TagList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 7px 0 0 0;
`;

const TagListItem = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  margin: 0 5px;
  color: white;
  background: #6600ff;
  border-radius: 5px;
  &:first-child {
    margin-left: 10px;
  }
`;

const Item = styled.span`
  font-size: 14px;
`;

const CloseBtn = styled.span`
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  background: white;
  color: #6600ff;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 5px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  height: 46px;
  font-size: 16px;
  border-radius: 10px;
  &:focus {
    outline: transparent;
  }
`;

const InputTag = (props) => {
  const [tagItems, setTagItems] = useState(props.tagItems);

  const addTag = (e) => {
    if (e.target.value !== "") {
      setTagItems([...tagItems, e.target.value]);
      e.target.value = "";
    }
  };

  const deleteTag = (deleteTagItem) => {
    setTagItems([...tagItems.filter((_, index) => index !== deleteTagItem)]);
  };

  return (
    <InputForm>
      <TagList>
        {tagItems &&
          tagItems.map((item, index) => (
            <TagListItem key={index}>
              <Item>{item}</Item>
              <CloseBtn onClick={() => deleteTag(index)}> X </CloseBtn>
            </TagListItem>
          ))}
      </TagList>
      <Input
        onKeyUp={(e) => (e.key === "Enter" ? addTag(e) : null)}
        placeholder="Press enter to add tags"
      />
    </InputForm>
  );
};

export default function Tag() {
  return (
    <Base>
      <TagText>Tag</TagText>
      <InputWrapper>
        <InputTag tagItems={["CodeStates", "JJang"]} />
      </InputWrapper>
    </Base>
  );
}
