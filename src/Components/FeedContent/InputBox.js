import React from 'react';
import { connect } from 'react-redux';
class InputBox extends React.Component {
  ref;
  render() {
    const { type } = this.props;
    return (
      <div className="major-padding input-group">
        <div className="input-group-addon">
          <img
            src={this.props.currentUser && this.props.currentUser.profilePic}
            className="avatar-without-margin"
            alt="avatar"
          />
        </div>

        <input
          {...this.props}
          onChange={this.props.onChange}
          className="form-control"
          placeholder={
            type === 'reply'
              ? 'Type your reply here...'
              : 'Type your comment here...'
          }
          value={this.props.value}
          onKeyDown={event => {
            if (event.keyCode === 13) this.props.sendPost();
          }}
        />
        <span className="input-group-addon">
          <i className="glyphicon glyphicon-camera" />
        </span>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('[[MAP STATE TO PROPS PostFild]]', state);
  return {
    currentUser: state.auth.currentUser,
    uID: state.auth.uID
  };
};
export default connect(mapStateToProps, null)(InputBox);
