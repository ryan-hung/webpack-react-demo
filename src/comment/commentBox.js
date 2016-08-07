import React from "react";
import CommentList from "./commentList";
import CommentForm from "./commentForm";
import ReactDOM from "react-dom";

export default class CommentBox extends React.Component{
  /**
   * [getInitStates 初始化状态]
   * @return {[type]} [description]
   */
  getInitStates() {
    return { data: [] };
  }

  componentDidMount () {

  }

  /**
   * [render 渲染]
   * @return {[type]} [description]
   */
  render () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}

var data = [
  { author: "ryan", text: "This is one comment"},
  { author: "hung", text: "This is *another* comment"},
]

ReactDOM.render(
  <CommentBox data={data} />,
  document.querySelector("#app")
)
