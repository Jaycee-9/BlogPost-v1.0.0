import { useState, useEffect, useContext } from "react";
import Header from "../Header/header";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API } from "../../service/api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DataContext } from "../../context/DataProvider";
import { Button } from "@mui/material";

function DetailView() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const { user } = useContext(DataContext);
  const navigate = useNavigate();
  console.log(post);
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, [id]);

  const deletePost = async () => {
    let response = await API.deletePost(post._id);
    if (response.isSuccess) {
      navigate("/");
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className="detail-view-img">
          <img src={post.picture} alt="upload" />
        </div>
        <div className="details">
          <div className="detail-view-category">
            <h3>
              <span>Author</span> : {post.username}
            </h3>
            <h3>Category : {post.category}</h3>
            <h4>{new Date(post.createdDate).toDateString()}</h4>
          </div>
          <div className="caption">
            <div className="details-view-caption">
              <p>
                <span style={{ fontWeight: "bold" }}>{post.title}</span>
              </p>
              <p>{post.description}</p>
            </div>
            {user.name === post.username && (
              <div className="detail-view-btn">
                <Link to={`/update/${post._id}`}>
                  <EditIcon />
                </Link>
                <Button>
                  <DeleteForeverIcon onClick={deletePost} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
