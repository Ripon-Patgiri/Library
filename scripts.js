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
  constructor() {
    this.books = [];
  }
}
