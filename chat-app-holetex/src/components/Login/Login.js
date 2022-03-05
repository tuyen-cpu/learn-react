import React from "react";
import { Row, Col, Typography, Button } from "antd";
import {
  auth,
  fbProvider,
  signInWithPopup,
  additionalUserInfo,
  db,
} from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { addDocument } from "../../firebase/services";
const { Title } = Typography;

const Login = () => {
  const handleFBLogin = async () => {
    const data = await signInWithPopup(auth, fbProvider);
    const { user } = data;
    const additionalUser = additionalUserInfo(data);
    console.log(user);
    addDocument("users", {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.displayName,
      provider: additionalUser.providerId,
    });
    // const docRef = await addDoc(collection(db, "user"), {
    //   displayName: user.displayName,
    //   email: user.email,
    //   photoURL: user.photoURL,
    //   uid: user.displayName,
    //   provider: additionalUser.providerId,
    // });
  };

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun chat
          </Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            onClick={handleFBLogin}
          >
            Login with Facebook
          </Button>
          <Button style={{ width: "100%" }}>Login with Google</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
