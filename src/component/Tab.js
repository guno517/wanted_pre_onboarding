import React, { useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 90%;
  height: 300px;
  border: 2px solid lightgray;
  border-radius: 10px;
  margin: 5px auto;

  @media screen and (min-width: 1200px) {
    width: 65%;
  }
`;

const Head = styled.div`
  display: flex;
`;

const TabText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  width: fit-content;
`;

const TabMenuBar = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  color: gray;
  height: 50px;
  background: lightgray;
  justify-content: center;
  align-items: center;
`;

const TabMenu = styled.li`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const TabContentWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TabContent = styled.div`
  text-align: center;
  margin: 50px auto;
  font-weight: bold;
`;

export default function Tab() {
  const [selectedTab, setSelectedTab] = useState(0);
  const TabArr = [
    { title: "Tab1", content: "Tabe menu ONE" },
    { title: "Tab2", content: "Tabe menu TWO" },
    { title: "Tab3", content: "Tabe menu THREE" },
  ];

  const handleClickMenu = (index) => {
    setSelectedTab(index);
  };

  const selectedStyle = {
    background: "#6600ff",
    width: "100%",
    cursor: "pointer",
    color: "white",
  };

  const nonSelectedStyle = {
    background: "lightgray",
    width: "100%",
    cursor: "pointer",
  };

  return (
    <Base>
      <Head>
        <TabText>Tab</TabText>
        <TabMenuBar>
          {TabArr.map((item, index) => {
            return (
              <TabMenu
                key={index}
                onClick={() => handleClickMenu(index)}
                style={selectedTab === index ? selectedStyle : nonSelectedStyle}
              >
                {item.title}
              </TabMenu>
            );
          })}
        </TabMenuBar>
      </Head>
      <TabContentWrapper>
        <TabContent>{TabArr[selectedTab].content}</TabContent>
      </TabContentWrapper>
    </Base>
  );
}
