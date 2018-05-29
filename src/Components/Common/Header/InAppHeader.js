import React, { Component } from 'react';
import logo from '../../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { userSignOut } from '../../../Actions/auth';
import { connect } from 'react-redux';
class InAppHeader extends Component {
  render() {
    if (!this.props.uID) {
      this.props.notSignedAction();
    }
    return (
      <div className="in-app-header-container">
        <div className="in-app-logo-container">
          <img src={logo} className="in-app-logo" alt="InAppLogo" />
        </div>
        <div className="header-icons">
          <Link to={`/user/${this.props.uID}`}>
            <img
              src={this.props.currentUser && this.props.currentUser.profilePic}
              className="avatar"
              alt="avatar"
            />
            <span className="text-icon major-padding">
              {this.props.currentUser &&
                this.props.currentUser.fName +
                  ' ' +
                  this.props.currentUser.lName}
            </span>
          </Link>
          <Link to="/home">
            <span className="text-icon major-padding">Home</span>
          </Link>
          <div className="float-right row">
            <div className="icon-nav col-lg-2 col-md-2 col-sm-2">
              <span className="icon-nav">
                <i className="glyphicon glyphicon-user" />
              </span>
            </div>
            <div className="icon-nav col-lg-2 col-md-2 col-sm-2">
              <span>
                <i className="glyphicon glyphicon-send" />
              </span>
            </div>
            <div className="icon-nav col-lg-2 col-md-2 col-sm-2">
              <span>
                <i className="glyphicon glyphicon-globe" />
              </span>
            </div>
            <div className="icon-nav col-lg-2 col-md-2 col-sm-2">
              <span>
                <i className="glyphicon glyphicon-question-sign" />
              </span>
            </div>
            <div className="icon-nav col-lg-1 col-md-1 col-sm-1">
              <span>
                <i className="glyphicon glyphicon-triangle-bottom" />
              </span>
            </div>
            <button
              className="btn btn-default btn-login"
              onClick={() => {
                this.props.userSignOut();
                this.props.redirect();
              }}
            >
              Sign out
            </button>
          </div>
        </div>
        <div className="input-group search-input-container">
          <input className="form-control search-input " placeholder="Search" />
          <span className="input-group-addon search-icon">
            <i className="glyphicon glyphicon-search" />
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('[[MAP STATE TO PROPS Header]]', state);
  return {
    currentUser: state.auth.currentUser,
    uID: state.auth.uID
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userSignOut: () => dispatch(userSignOut())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InAppHeader);
