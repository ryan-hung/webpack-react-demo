import React from "react";

export default class ProfilePic extends React.Component {
  render() {
    return (
      <img src={"http://graph.facebook.com/" + this.props.username + "/picture"} />
    )
  }
}
