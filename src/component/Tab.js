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

const TabText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const TabWapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const TabMenu = styled.li``;

const TabContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabContent = styled.div``;

export default function Tab() {
  const [showTab, setShowTab] = useState(1);

  return (
    <Base>
      <TabText>Tab</TabText>
      <TabWapper>
        <TabMenu>Tab1</TabMenu>
        <TabMenu>Tab2</TabMenu>
        <TabMenu>Tab3</TabMenu>
      </TabWapper>
      <TabContentWrapper>
        <TabContent>Tab Menu1</TabContent>
        <TabContent>Tab Menu2</TabContent>
        <TabContent>Tab Menu3</TabContent>
      </TabContentWrapper>
    </Base>
  );
}
