import React, { useRef, useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 90%;
  height: 300px;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  margin: 5px auto;
`;

export default function ClickToEdit() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  return (
    <Base>
      <div>ClickToEdit</div>
      <label>이름</label>
      <input onBlur={(e) => setName(e.target.value)} />
      <label>나이</label>
      <input onBlur={(e) => setAge(e.target.value)} />
      <div>
        이름 {name} 나이 {age}
      </div>
    </Base>
  );
}
