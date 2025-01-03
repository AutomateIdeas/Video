import { type } from "express/lib/response";
import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema({
  content: { type: String, require: true },
  video: { type: Schema.Types.ObjectId, ref: "Video" },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

commentSchema.plugin(mongooseAggregatePaginate);

export const Comment = mongoose.model("Comment", commentSchema);
