import React from "react";
import ProfileLink from "./profileLink"
import ProfilePic from "./profilePic"

export default class Avatar extends React.Component {
  getInitStates() {
    return { username: "haha" };
  }

  render () {
    return (
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    )
  }
}
