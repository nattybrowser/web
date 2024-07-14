// Fetch JSON data (replace with your actual API endpoint)
fetch('natty.json')
  .then(response => response.json())
  .then(data => {
    const postsContainer = document.querySelector('.posts');
    let displayedPosts = 0;

    // Function to display initial 12 posts
    function displayPosts(data) {
      for (let i = 0; i < Math.min(data.length, 12); i++) {
        const post = document.createElement('div');
        post.classList.add('post');
        // Process and display each post data
        post.innerHTML = `
          <a href="<span class="math-inline">\{data\[i\]\.link\}"\> <img src\="</span>{data[i].image}" alt="<span class="math-inline">\{data\[i\]\.title\}"\>
</a\>
<h3\></span>{data[i].title}</h3>
          <p>${data[i].excerpt}</p>
        `;
        postsContainer.appendChild(post);
      }
      displayedPosts = Math.min(data.length, 12);
    }

    // Display initial posts
    displayPosts(data);

    // Handle "See More" button click
    const seeMoreButton = document.querySelector('.see-more');
    seeMoreButton.addEventListener('click', () => {
      displayPosts(data.slice(displayedPosts)); // Display next 12 posts
