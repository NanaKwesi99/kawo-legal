import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/Logo.png";
import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import './Login.css';

const Login = () => {
  return (
    <div>
      <nav className="navbar navbar-default login-navbar">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand login-brand-image" href="#home">
              <img src={Logo} alt="kawolegal logo" />
            </a>
          </div>

          <div
            className="collapse navbar-collapse nav-button"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right nav-button">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/startups">Startups</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container form">
        <h3>Already a Member? Login to add your Startup.</h3>
        <form className="register">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-default login-btn">
            Sign Up
          </button>
        </form>
      </div>

      <div className="footer">
        <div className="container footer-content">
          <p>&copy 2017 KawoLegal. All Rights Reserved</p>
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
    </div>
  );
};

export default Login;