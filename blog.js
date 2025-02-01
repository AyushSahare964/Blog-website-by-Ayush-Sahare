// blog.js
document.addEventListener('DOMContentLoaded', () => {
  const blogForm = document.getElementById('blogForm'); // Form element
  const postsContainer = document.querySelector('.posts-container'); // Container for blog posts

  // Array to store blog posts
  let blogPosts = [];

  // Handle form submission
  blogForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    // Get form values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    // Create a new blog post object
    const newPost = {
      id: Date.now(), // Unique ID for each post
      title,
      content,
      author,
    };

    blogPosts.push(newPost);
    blogForm.reset();
    renderPosts();
  });

  function renderPosts() {

    postsContainer.innerHTML = '';

    blogPosts.forEach((post) => {
      const postCard = document.createElement('div');
      postCard.classList.add('post-card'); // Add CSS class for styling

      // Create HTML structure for the post card
      postCard.innerHTML = `
        <h3>${post.title}</h3>
        <p><strong>Author:</strong> ${post.author}</p>
        <p>${post.content}</p>
        <button onclick="deletePost(${post.id})">Delete</button>
      `;

      // Append the post card to the posts container
      postsContainer.appendChild(postCard);
    });
  }

  // Function to delete a blog post
  window.deletePost = (postId) => {
    // Filter out the post with the given ID
    blogPosts = blogPosts.filter((post) => post.id !== postId);

    renderPosts();
  };
  renderPosts();
});