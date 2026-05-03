// Select elements
const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const statusInput = document.getElementById('status');
const bookList = document.getElementById('book-list');
const filterButtons = document.querySelectorAll('.filters button');

let books = [];

// Load books from localStorage
window.onload = () => {
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
    renderBooks();
  }
};

// Save books to localStorage
function saveToLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}

// Render books
function renderBooks(filter = 'All') {
  bookList.innerHTML = '';

  const filteredBooks = filter === 'All'
    ? books
    : books.filter(book => book.status === filter);

  if (filteredBooks.length === 0) {
    bookList.innerHTML = '<p>No books to display.</p>';
    return;
  }

  filteredBooks.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    const infoDiv = document.createElement('div');
    infoDiv.className = 'book-info';
    infoDiv.innerHTML = `
      <span><strong>Title:</strong> ${book.title}</span>
      <span><strong>Author:</strong> ${book.author}</span>
      <span class="status ${book.status.replace(/\s/g,'')}"><strong>Status:</strong> ${book.status}</span>
    `;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'book-actions';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = () => deleteBook(book.id);

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Next Status';
    updateBtn.className = 'update';
    updateBtn.onclick = () => updateStatus(book.id);

    actionsDiv.appendChild(updateBtn);
    actionsDiv.appendChild(deleteBtn);

    bookCard.appendChild(infoDiv);
    bookCard.appendChild(actionsDiv);

    bookList.appendChild(bookCard);
  });
}

// Add a new book
bookForm.addEventListener('submit', e => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const status = statusInput.value;

  if (!title || !author) return;

  const book = {
    id: Date.now(),
    title,
    author,
    status
  };

  books.push(book);
  saveToLocalStorage();
  renderBooks();

  bookForm.reset();
});

// Delete a book
function deleteBook(id) {
  books = books.filter(book => book.id !== id);
  saveToLocalStorage();
  renderBooks();
}

// Update book status (cycles through To Read ? Reading ? Finished ? To Read)
function updateStatus(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;

  const statuses = ['To Read', 'Reading', 'Finished'];
  const currentIndex = statuses.indexOf(book.status);
  const nextIndex = (currentIndex + 1) % statuses.length;
  book.status = statuses[nextIndex];

  saveToLocalStorage();
  renderBooks();
}

// Filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    renderBooks(filter);
  });
});