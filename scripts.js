// Declaring Class Book
// Class to Store Book Information.
class Book {
  // Initializing an Object
  constructor( // Creating a Constructor
    title = "unknown",
    author = "unknown",
    pages = "0",
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// Declaring Class Library
// Class to Store Book Objects in an Array.
class Library {
  //Initializing Object using Constructor.
  constructor() {
    this.books = [];
  }

  //Declaring Method to Add a Book to Library.
  addBook(newBook) {
    this.books.push(newBook);
  }

  //Method to Remove Book
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  //Method to Get Book
  getBook(title) {
    return this.books.find((book) => book.title === newBook.title);
  }

  //Method to Check if Book already Exists
  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }
}

const library = new Library();

// User Interface

const addBookForm = document.getElementById("addBookForm");
const submitBtn = document.getElementById("submitBtn");
const outputBooks = document.getElementById("outputBooks");

// Display Book
const bookOutput = (book) => {
  const bookArea = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("p");

  title.textContent = `"${book.title}"`;
  author.textContent = `"${book.author}"`;
  pages.textContent = `${book.pages} pages`;

  if (book.isRead) {
    read.textContent = "Read";
  } else {
    read.textContent = "Not Read";
  }

  bookArea.appendChild(title);
  bookArea.appendChild(author);
  bookArea.appendChild(pages);
  bookArea.appendChild(read);
  outputBooks.appendChild(bookArea);
};

// Function to Extract Book Details from Input Form.
const getBookFromInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;
  return new Book(title, author, pages, isRead);
};

const addBook = (e) => {
  e.preventDefault();
  const newBook = getBookFromInput();
  library.addBook(newBook);
  bookOutput();
};

addBookForm.onsubmit = addBook;
//To do :

// Figure out how to store in Object.
// Create elements and display on the screen. No CSS.
// Figure out styling and storing later on.
