import Header from "../Header/header";
import create from "../../public/images/create.png";

import {
  FormControl,
  Box,
  styled,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { API } from "../../service/api";

//mui styling
const Container = styled(Box)`
  margin-left: 50px;
  margin-right: 50px;
`;

const Image = styled("img")({
  width: "100%",
  height: "65vh",
  objectFit: "cover",
});

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 20px;
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 30px;
  font-size: 18px;
  border: none;
  &:focus-visible {
    outline: none;
  }
`;

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  category: "",
  createDate: new Date(),
};

//rendering

function CreatePost() {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (evt) => {
    setPost({ ...post, [evt.target.name]: evt.target.value });
  };

  const { user } = useContext(DataContext);

  const imageurl = post.picture ? post.picture : create;

  const savePost = async () => {
    let response = await API.createPost(post);
    if (response.isSuccess) {
      navigate("/");
    }
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        // Api call
        const response = await API.uploadFile(data);

        // Update state using setPost
        setPost((prevPost) => ({ ...prevPost, picture: response.data }));
      }
    };

    // Use the asynchronous version of getImage
    getImage();

    // Update other properties of the post object
    setPost((prevPost) => ({
      ...prevPost,
      category: location.search?.split("=")[1] || "all",
      username: user.name,
    }));
  }, [file, location.search, user.name]);

  return (
    <Box>
      <Header />
      <Container>
        <Image src={imageurl} alt="postbanner" />

        <StyledFormControl>
          <label htmlFor="fileinput">
            <Add fontSize="large" color="action" />
          </label>

          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(evt) => setFile(evt.target.files[0])}
          />

          <InputTextField
            placeholder="Title"
            onChange={handleChange}
            name="title"
          />

          <Button variant="contained" onClick={savePost}>
            Publish
          </Button>
        </StyledFormControl>
        <TextArea
          minRows={5}
          placeholder="Tell your story..."
          onChange={handleChange}
          name="description"
        />
      </Container>
    </Box>
  );
}

export default CreatePost;
