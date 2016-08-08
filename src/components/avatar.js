import React from "react";
import ProfileLink from "./profileLink"
import ProfilePic from "./profilePic"

export default class Avatar extends React.Component {
  /**
   * [defaultProps 设置默认属性]
   * @type {Object}
   */
  // static defaultProps = {
  //   username: "halow"
  // };

  static propTypes = {
    username: React.PropTypes.string.isRequired
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
