import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      const body = {
        email: email,
        password: password,
      };

      try {
        // const response = await axios.post("http://localhost:3007/signin", body);
        const response = await axios.post(
          "http://51.20.103.139:3007/signin",
          body
        );

        // Successfully logged in
        if (response.status === 200 && response.data.jwtToken) {
          alert("Login successful");
          navigate("/allvideos");
        } else {
          alert("Unexpected error occurred. Please try again later.");
        }
      } catch (error) {
        console.log(error);

        // Handle specific error messages from the server
        if (error.response) {
          if (
            error.response.status === 400 &&
            error.response.data === "Invalid Password"
          ) {
            alert("Invalid Password. Please try again.");
          } else if (
            error.response.status === 400 &&
            error.response.data === "Email Doesn't Exists"
          ) {
            alert("Email Doesn't Exist. Please check and try again.");
          } else {
            alert("Error occurred during login. Please try again.");
          }
        } else {
          alert("Unexpected error occurred. Please try again.");
        }
      }
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="bg-cont">
      <div
        style={{ padding: 110 }}
        className="d-flex flex-row justify-content-center"
      >
        <div className="form-container">
          <center className="middle">Login Here</center>
          <form className="form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter Your Email"
              value={email}
              required
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
            <center>
              {" "}
              <button>Login</button>
            </center>

            <span style={{ paddingBottom: 55, paddingTop: 25 }}>
              Don't Have An Account?
              <Link to="/signup">
                <span style={{ color: "#0D6EFD" }}> Sign Up</span>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
