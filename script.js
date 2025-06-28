//Library of books array
let myLibrary = [];

//Book constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookId = crypto.randomUUID();
};

//Add a book to the library
function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book);
};

//UI element
const button = document.querySelector('button');

// Function to display books
function displayBooks() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = "";

    myLibrary.forEach(function(book) {
        const bookDiv = document.createElement("div");
        const bookTitle = document.createElement("h1");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        libraryDiv.appendChild(bookDiv);
    });
}

// Event listener; takes user inputs and adds to library
button.addEventListener('click', () => {
    const bookName = document.getElementById("book-name").value;
    const authorName = document.getElementById("author-name").value;
    const pages = document.getElementById("pages").value;
    addBookToLibrary(bookName, authorName, pages);
    displayBooks();
});

// Placeholder books
addBookToLibrary("Lord of the Rings", "J RR Tolkien", "500");
addBookToLibrary("Song of Solomon", "Toni Morrison", "280");
displayBooks();