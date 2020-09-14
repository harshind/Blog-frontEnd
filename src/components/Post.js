import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
const Post = (props) => {
  const history = useHistory();
  const openPost = () => history.push(`/posts/${props.id}`);
  return (
    <div className="container">
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>
        {props.isSummary
          ? `${props.content.substring(0, 100)}...`
          : props.content}
      </p>
      {props.isSummary ? <Button onClick={openPost}>Read More</Button> : null}
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isSummary: PropTypes.bool.isRequired
};

export default Post;
