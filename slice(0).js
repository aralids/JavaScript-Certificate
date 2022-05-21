// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let bookListModified = bookList.slice(0);
  bookListModified.push(bookName);
  return bookListModified;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let bookListModified = bookList.slice(0);
  const book_index = bookListModified.indexOf(bookName);
  if (book_index >= 0) {

    bookListModified.splice(book_index, 1);
    return bookListModified;

    // Change code above this line
    }
}