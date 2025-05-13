import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import API_DOMAIN from "../config/config";
import { TextInputForm } from "../components/Forms";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { ClickButton } from "../components/ClickButton";
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const handleLogin = async () => {
  //   try {
  //     if (username === "" || password === "") {
  //       throw new Error("Username Or Password is Empty");
  //     }
  //     if (!username || !password) {
  //       throw new Error("Username and Password are required");
  //     }

  //     const loginData = {
  //       user_id: username,
  //       password: password,
  //     };

  //     const response = await fetch(`${API_DOMAIN}/login.php`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(loginData),
  //     });
  //     console.log("response", response);
  //     const responseData = await response.json();

  //     console.log("responseData", responseData);

  //     if (responseData.head.code !== 200) {
  //       setError(responseData.head.msg);
  //     } else if (responseData.head.code === 200) {
  //       onLogin();
  //       navigate("/console/dashboard");
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error.message);
  //     setError(error.message);
  //   }
  // };
  const handleLogin = async () => {
    try {
      // Define static username and password
      const STATIC_USERNAME = "admin";
      const STATIC_PASSWORD = "12345";

      // Check if fields are empty
      if (username === "" || password === "") {
        throw new Error("Username Or Password is Empty");
      }

      // Check if credentials match static values
      if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
        onLogin();
        navigate("/console/dashboard");
      } else {
        throw new Error("Invalid Username or Password");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="login-bg">
      <Container fluid className="px-5 pad">
        <Row className="justify-content-center">
          <Col lg="3" md="6" xs="12" className="align-self-center p-0 m-0">
            <div className="shadow login-box">
              <div className="text-center">
                <img
                  src={require("../components/sidebar/images/logo.jpeg")}
                  className="img-fluid login-logo"
                  alt=""
                />
              </div>
              <div className="text-center py-4 "> Welcome</div>
              <div className="py-3">
                <TextInputForm
                  placeholder={"User Name"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="py-3">
                <TextInputForm
                  placeholder={"Password"}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  suffix_icon={
                    showPassword ? (
                      <VscEye onClick={() => setShowPassword(false)} />
                    ) : (
                      <VscEyeClosed onClick={() => setShowPassword(true)} />
                    )
                  }
                />
              </div>
              <div className="py-3 text-center">
                <ClickButton label={<>Login</>} onClick={handleLogin} />
              </div>
              {error && (
                <Alert variant="danger">{error}</Alert> // Render error alert banner if error state is not null
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
