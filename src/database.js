import mongoose from "mongoose";
import colors from "colors";

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/rubsan";
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose
  .connect(uri, config)
  .then(() => console.log(colors.blue(`Database connect in: ${uri}`)))
  .catch((err) => console.log(colors.red("Error connect database", err)));
