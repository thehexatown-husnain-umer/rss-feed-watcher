const mongoose = require("mongoose");

const upWorkJobSchema = mongoose.Schema(
  {
    // author: {
    //   type: String,
    // },
    link: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const upWorkJob = mongoose.model("upWorkJob", upWorkJobSchema);
module.exports = upWorkJob;
