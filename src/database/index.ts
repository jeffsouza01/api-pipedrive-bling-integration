import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://pipe_user:pipe_user@authcloudproject.uqbgf.mongodb.net/pipeDriveIntegration?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
