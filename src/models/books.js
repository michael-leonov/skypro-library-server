import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    require: true,
    minLength: [2, "Min 2 letters"],
  },
  author: {
    type: String,
    require: false,
    minLength: [2, "Min 2 letters"],
  },
  release_year: {
    type: Number,
    require: false,
  },
});

const Book = model("books", bookSchema);

export default Book;
