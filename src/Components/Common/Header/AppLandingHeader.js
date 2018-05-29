import React, { Component } from 'react';
import logo from '../../../Assets/logo.png';
export default class AppLandingHeader extends Component {
  render() {
    return (
      <div className="app-landing-container">
        <div className="landing-logo-container">
          <img src={logo} className="landing-logo" alt="Logo" />
          <span className="logo-text">NOTEBOOK</span>
        </div>
        <div className="login-form-container">
          <div className="form-group form-internal-left spacing">
            <label className="login-form-text">Email address:</label>
            <input
              type="email"
              className="form-control text-input"
              id="email"
              onChange={this.props.onChangeEmailLogin}
            />
          </div>
          <div className="form-group form-internal-left spacing">
            <label className="login-form-text">Password:</label>
            <input
              type="password"
              className="form-control text-input"
              id="password"
              onChange={this.props.onChangePasswordLogin}
            />
          </div>
          <div className="form-internal-right">
            <button
              className="btn btn-default btn-login"
              onClick={this.props.loginPress}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
