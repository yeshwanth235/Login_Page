import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister, userLogin } from "../action/index";

const Home = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [login, setLogin] = useState({ email: "", password: "" });
  const userInfo = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    try {
      dispatch(userRegister(data));
      setData({ username: "", email: "", password: "" });
    } catch (err) {
      console.log(`Error in RegisterPage: ${err}`);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(userLogin(login));
      setLogin({ email: "", password: "" });
    } catch (err) {
      console.log(`Error in LoginPage: ${err}`);
    }
  };
  return (
    <div>
      <div>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              value={login.email}
              placeholder="Email"
              onChange={(e) => {
                setLogin({ ...login, email: e.target.value });
              }}
            />
            <br />
            <input
              type="password"
              name="password"
              value={login.password}
              placeholder="Password"
              onChange={(e) => {
                setLogin({ ...login, password: e.target.value });
              }}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div>
        <h1>Registration</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="Username"
            onChange={(e) => {
              setData({ ...data, username: e.target.value });
            }}
          />
          <br />
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <br />
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      {userInfo.loggedIn ? (
        <div>
          <h1>Logged In</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
