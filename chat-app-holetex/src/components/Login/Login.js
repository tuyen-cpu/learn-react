import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { auth, fbProvider, signInWithPopup } from "../../firebase/config";

const { Title } = Typography;

const Login = () => {
  const handleFBLogin = () => {
    signInWithPopup(auth, fbProvider)
      .then((result) => {})
      .catch((error) => {
        // Handle Errors here.
        console.error("lỗi");
      });
  };

  //
  // useNavigate.push("")

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
