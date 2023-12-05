import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("users", schema);
// console.log("Model is ", model);
export default model;