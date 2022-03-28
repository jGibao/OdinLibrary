let myLibrary = [];
let myTable = document.querySelector('#table');

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let book1 = new Book("J. K. Rowling", "Harry Potter 1", 500, true);
let book2 = new Book("J. K. Rowling", "Harry Potter 2", 600, true);
let book3 = new Book("J. K. Rowling", "Harry Potter 3", 450, true);
let book4 = new Book("J. K. Rowling", "Harry Potter 4", 850, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

let headers = ['Author', 'Title', 'Total Pages', 'Read'];

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

myLibrary.forEach(book => {
    let row = document.createElement('tr');
    Object.values(book).forEach(text => {
        let cell = document.createElement('td');

        if (text == false) {
            let textNode = document.createTextNode('No');
            cell.appendChild(textNode);
            row.appendChild(cell);
        } else if (text == true) {
            let textNode = document.createTextNode('Yes');
            cell.appendChild(textNode);
            row.appendChild(cell);
        } else {
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        }
    });
    table.appendChild(row);
});

myTable.appendChild(table);

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function addBook() {
    let book = new Book(document.getElementById("author").value, document.getElementById("title").value, document.getElementById("pages").value, document.getElementById("read").checked);
    myLibrary.push(book);
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    let textNode = document.createTextNode(book.author);
    cell.appendChild(textNode);
    row.appendChild(cell);
    cell = document.createElement('td');
    textNode = document.createTextNode(book.title);
    cell.appendChild(textNode);
    row.appendChild(cell);
    cell = document.createElement('td');
    textNode = document.createTextNode(book.pages);
    cell.appendChild(textNode);
    row.appendChild(cell);
    cell = document.createElement('td');
    console.log(book.read);
    if (!book.read) {
        textNode = document.createTextNode("No");
    } else {
        textNode = document.createTextNode("Yes");
    }
    cell.appendChild(textNode);
    row.appendChild(cell);
    cell = document.createElement('td');
    table.appendChild(row);
}