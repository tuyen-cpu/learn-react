import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";

import React from "react";
import styled from "styled-components";
const { Panel } = Collapse;
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: #fff;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;
const LinkStyled = styled(Typography.Link)`
  display: flex;
  margin-bottom: 5px;
  color: white;
`;
export default function RoomList() {
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="List of Rooms" key="1">
        <LinkStyled>Link 1</LinkStyled>
        <LinkStyled>Link 2</LinkStyled>
        <LinkStyled>Link 3</LinkStyled>
        <Button type="text" icon={<PlusSquareOutlined />} className="add-room">
          {" "}
          Add room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
