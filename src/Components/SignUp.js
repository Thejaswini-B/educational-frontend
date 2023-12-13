import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [gender, setGender] = useState("");

  const validatePassword = () => {
    const isValid =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
        password
      );

    if (!isValid) {
      setErrors([
        "Password must be at least 8 characters, contain at least one alphabet, one digit, and one special character.",
      ]);
    } else {
      setErrors([]);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // checking for non-empty fields
    if (name !== "" && email !== "" && password !== "" && gender !== "") {
      const body = {
        name: name,
        email: email,
        password: password,
        gender: gender,
      };
      try {
        // const response = await axios.post("http://localhost:3007/signup", body);
        const response = await axios.post(
          "http://51.20.107.240:3007/signup",
          body
        );

        console.log(response.data);
        alert("signup successful");
        setName("");
        setEmail("");
        setPassword("");
        setGender("");
        navigate("/login");
      } catch (error) {
        console.log(error);
        alert("signup failed");
      }
    }
  };
  return (
    <div className="bg-cont">
      <div
        style={{ padding: 60 }}
        className="d-flex flex-row justify-content-center"
      >
        <div className="form-container-signup">
          <center className="middle-signup">Create Account</center>
          <form className="form-signup" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              className="input-signup"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            <label>Email</label>
            <input
              type="email"
              className="input-signup"
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
              onBlur={validatePassword}
              className="input-signup"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
            <ul>
              {errors.map((error, index) => (
                <li key={index} style={{ color: "red" }}>
                  {error}
                </li>
              ))}
            </ul>
            <label>Gender</label>
            <input
              type="text"
              className="input-signup"
              placeholder="Gender"
              value={gender}
              required
              onChange={(e) => {
                handleGenderChange(e);
              }}
            />
            <center>
              {" "}
              <button>Sign Up</button>{" "}
            </center>

            <span style={{ paddingBottom: 35, paddingTop: 10 }}>
              Already Have An Account?
              <Link to="/login">
                <span style={{ color: "#0D6EFD" }}> Login </span>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
