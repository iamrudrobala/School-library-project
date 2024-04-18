
  // Add click event listener to search button
  const searchButton = document.querySelector('.search-bar button');
  searchButton.addEventListener('click', performSearch);
  
  // Add keydown event listener to search input
  const searchInput = document.querySelector('.search-bar input');
  searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
  
  // Define search function
  function performSearch() {
    // Get search input value
    const searchInput = document.querySelector('.search-bar input');
    const searchValue = searchInput.value.trim().toLowerCase();
    
    // Get book grid
    const bookGrid = document.querySelector('.books');
    
    // If search input is empty, show all books and return
    if (searchValue === '') {
      const books = bookGrid.querySelectorAll('.book');
      books.forEach(book => {
        book.style.display = 'block';
      });
      searchInput.value = ''; // Clear search input value
      return;
    }
    
    // Loop through all books in grid
    const books = bookGrid.querySelectorAll('.book');
    books.forEach(book => {
      // Get book title and author
      const title = book.querySelector('h2').textContent.toLowerCase();
      const author = book.querySelector('p').textContent.toLowerCase();
      
      // Check if book title or author matches search value
      if (title.includes(searchValue) || author.includes(searchValue)) {
        book.style.display = 'block'; // Show book
      } else {
        book.style.display = 'none'; // Hide book
      }
    });
    searchInput.value = '';
  }

