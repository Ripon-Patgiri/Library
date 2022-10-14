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
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
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

//To do :

// addBookBtn
// addBookForm
// Create Basic HTML form to Accept Book Details.
// Figure out how to store in Object.
// Create elements and display on the screen. No CSS.
// Figure out styling and storing later on.