import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
  },
  { autoCreate: true }
);

export default mongoose.model("User", Schema);
