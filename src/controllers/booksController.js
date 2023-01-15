import Book from "../models/books";
import ApiError from "../error/ApiError";

export const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find({});
    return res.json(books);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

export const getBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json(book);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

export const createBook = async (req, res, next) => {
  try {
    const { title, author, release_year } = req.body;

    const candidate = await Book.findOne({ title, author });
    if (candidate)
      return res
        .status(400)
        .json({ message: `Book with title ${title} already exist` });

    const book = await Book.create({ title, author, release_year });
    return res.json(book);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, release_year } = req.body;
    const book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      release_year,
    });
    return res.json(book);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.deleteOne({ _id: id });
    return res.json(book);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};
