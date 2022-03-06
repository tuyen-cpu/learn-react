import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";

import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppProvider";
import { AuthConext } from "../../context/AuthProvider";
import useFirestore from "../../hooks/useFirestore";
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
  const { rooms } = useContext(AppContext);
  console.log(rooms);
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="List of Rooms" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id}>{room.name}</LinkStyled>
        ))}

        <Button type="text" icon={<PlusSquareOutlined />} className="add-room">
          {" "}
          Add room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
