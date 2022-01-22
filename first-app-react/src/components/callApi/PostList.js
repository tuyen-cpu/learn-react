import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  posts: PropTypes.array,
};
PostList.defaultProps = {
  posts: [],
};
function PostList(props) {
  console.log("re-render: list");
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
// export default PostList;
export default React.memo(PostList);
