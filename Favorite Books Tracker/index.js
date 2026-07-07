const bookInput= document.querySelector('#book-title');
const addBtn= document.querySelector('#add-btn');
const bookList= document.querySelector('#book-list');

let books= JSON.parse(localStorage.getItem('books')) || [];

function renderBooks(){
    bookList.innerHTML = '';
    books.forEach((book) =>
    {
        const li= document.createElement('li');
        li.textContent = book.title;
        bookList.appendChild(li);
    });
}

renderBooks();

addBtn.addEventListener('click', () => {
    const title= bookInput.value.trim();
    if(title === '') return;

        const newBook= {title: title};

        books.push(newBook);

        localStorage.setItem('books', JSON.stringify(books));

        renderBooks();

        bookInput.value= "";
    
});