import { Avatar, Button, Typography } from "antd";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase/config";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { AuthConext } from "../../context/AuthProvider";
import useFirestore from "../../hooks/useFirestore";
const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: #fff;
    margin-left: 5px;
  }
`;
const UserInfo = () => {
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.dir({ data, snapshot, docs: snapshot.docs });
  //     // ...
  //   });
  // }, []);
  // const ss = useFirestore("users");
  // console.log(ss);
  const {
    user: { displayName, photoURL },
  } = useContext(AuthConext);
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="username">{displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Logout
      </Button>
    </WrapperStyled>
  );
};

export default UserInfo;
