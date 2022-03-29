let myLibrary = [];
let myTable = document.querySelector('#table');
let firstStart = true;

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

updateTable();

function updateTable() {
    deletePrevTable();
    let headers = ['Author', 'Title', 'Total Pages', 'Read'];

    let table = document.createElement('table');
    table.setAttribute("id", "tableProv");
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
        let readbutton = document.createElement('button');
        readbutton.className = 'readButton';
        readbutton.textContent = "Un/Read";
        readbutton.addEventListener("mousedown", function() { unread(book.title) });
        row.appendChild(readbutton);

        let deletebutton = document.createElement('button');
        deletebutton.className = 'deleteButton';
        deletebutton.textContent = "Delete";

        deletebutton.addEventListener("mousedown", function() { deleteBook(book.title) });
        row.appendChild(deletebutton);
        table.appendChild(row);
    });

    myTable.appendChild(table);
    firstStart = false;
}

function deletePrevTable() {
    if (!firstStart) {
        let tableProv = document.getElementById("tableProv");
        tableProv.remove();
    }

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function addBook() {
    let exists = false;
    let book = new Book(document.getElementById("author").value, document.getElementById("title").value, document.getElementById("pages").value, document.getElementById("read").checked);
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == book.title) {
            exists = true;
        } else {
            exists = false;
        }
    }
    if (!exists) {
        myLibrary.push(book);
        updateTable();
    } else {
        window.alert("That book is already inserted!");
    }
}

function deleteBook(title) {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == title) {
            myLibrary.splice(i, 1);
            updateTable();
            return;
        }
    }
}

function unread(title) {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == title) {
            myLibrary[i].read = !myLibrary[i].read;
            updateTable();
            return; //will only update 1 book if there are repeated entries of the same book
        }
    }
}