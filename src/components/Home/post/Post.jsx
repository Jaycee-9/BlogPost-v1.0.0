import { addElipsis } from "../../../utils/common-utils";
import { Link } from "react-router-dom";
function Post({ post }) {
  return (
    <div className="post-container">
      <Link to={`details/${post._id}`} style={{ textDecoration: "none" }}>
        <div className="post-body">
          <img src={post.picture} alt="post" />
        </div>
        <div className="post-title">
          <li>{post.title}</li>
          <li>{post.category}</li>
        </div>
        <div className="post-caption">
          <li>
            <strong>@{post.username}</strong> {" - "}
            {addElipsis(post.description, 100)}
          </li>
        </div>
      </Link>
    </div>
  );
}

export default Post;
