const searchBar = document.querySelector('.search-bar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  searchBar.classList.toggle('active');
});