import React from 'react';
import { connect } from 'react-redux';
import { postContent } from '../../../Actions/postData';
class PostField extends React.Component {
  state = {
    post: ''
  };
  render() {
    return (
      <div className="w3-card minor-padding">
        <div className="input-group">
          <div className="input-group-addon">
            <img
              src={this.props.currentUser && this.props.currentUser.profilePic}
              className="avatar-post"
              alt="avatar"
            />
          </div>
          <textarea
            className="form-control"
            rows="4"
            value={this.state.post}
            placeholder="What's kicking?..."
            onChange={event => this.setState({ post: event.target.value })}
          />
        </div>
        <button
          onClick={() => {
            if (this.state.post.length > 0) {
              this.props.postContent(
                this.props.uID,
                this.props.currentUser.fName +
                  ' ' +
                  this.props.currentUser.lName,
                this.state.post
              );
              this.setState({ post: '' });
            }
          }}
          className="btn-login w3-round-xxlarge minor-padding feed-margin flex-self"
        >
          Post
        </button>
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
const mapDispatchToProps = dispatch => {
  return {
    postContent: (aID, aName, conent) =>
      dispatch(postContent(aID, aName, conent))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostField);
