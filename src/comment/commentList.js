import React from "react";
import Comment from "./comment";

class CommentList extends React.Component {
  render() {
    console.log(this.props.data);
    let commentNodes = this.props.data.map(comment => (
      <Comment key={comment.author} author={comment.author} children={comment.text} >
      </Comment>
    ));
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
};

export default CommentList;
