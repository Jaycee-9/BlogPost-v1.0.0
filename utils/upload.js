import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";

const storage = new GridFsStorage({
  url: `mongodb+srv://${process.env.User}:${process.env.atlasPassword}@blogpost.d8jiplq.mongodb.net/?retryWrites=true&w=majority`,
  file: (req, file) => {
    console.log("File received:", file);

    const match = ["image/png", "image/jpg", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      console.log("Invalid file type");
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
