export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Please wait",
  },
  success: {
    title: "Success",
    message: "Load successfully!",
  },
  responseFailure: {
    title: "Error",
    message: "An Error Occured while fetching Try Again",
  },
  requestFailure: {
    title: "Error",
    message: "An Error Occured while parsing request Try Again",
  },
  networkError: {
    title: "Error",
    message: "Something went wrong try again",
  },
};

//api service call

export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
  uploadFile: { url: "/file/upload", method: "POST" },
  createPost: { url: "/create", method: "POST" },

  getAllPost: { url: "/posts", method: "GET", params: true },
  getPostById: { url: "/post", method: "GET", query: true },

  updatePost: { url: "/update", method: "PUT", query: true },

  deletePost: { url: "/delete", method: "DELETE", query: true },
};
