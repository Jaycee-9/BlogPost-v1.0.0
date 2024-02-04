import { useState, useEffect } from "react";
import { API } from "../../service/api";
import Post from "./post/Post";
import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function MyPost() {
  const [myPost, setMyPost] = useState([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await API.getAllPost({ category: category || "" });
      if (response.isSuccess) {
        setMyPost(response.data);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <div className="posts">
      {myPost && myPost.length > 0 ? (
        myPost.map((post) => (
          <Grid item lg={6} sm={8} xs={10} key={post._id}>
            <ul>
              <Post post={post} />
            </ul>
          </Grid>
        ))
      ) : (
        <div className="post-container">
          <h1>So empty here, start uploading blogs</h1>
        </div>
      )}
    </div>
  );
}

export default MyPost;
