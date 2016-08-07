import React from "react";
import marked from "marked";

class Comment extends React.Component {
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {santize: true});
    return { __html: rawMarkup};
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span>{this.props.children}</span>
      </div>
    )
  }
}

export default Comment;
