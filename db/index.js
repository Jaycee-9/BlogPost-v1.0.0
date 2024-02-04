import { mongoose } from "mongoose";

const connectToDb = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.User}:${process.env.atlasPassword}@blogpost.d8jiplq.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Database Connected.");
};

export default connectToDb;
