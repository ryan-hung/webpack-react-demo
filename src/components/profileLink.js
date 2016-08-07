import React from "react"

export default class ProfileLink extends React.Component {
  render () {
    return (
      <a href={"http://www.facebook.com/" + this.props.username} >
        {this.props.username}
      </a>
    )
  }
}
