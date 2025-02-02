// blog.js
document.addEventListener('DOMContentLoaded', () => {
  const blogForm = document.getElementById('blogForm'); 
  const postsContainer = document.querySelector('.posts-container'); 

  let blogPosts = [];


  blogForm.addEventListener('submit', (e) => {
    e.preventDefault(); 


    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

  
    const newPost = {
      id: Date.now(), 
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
      postCard.classList.add('post-card'); g

     
      postCard.innerHTML = `
        <h3>${post.title}</h3>
        <p><strong>Author:</strong> ${post.author}</p>
        <p>${post.content}</p>
        <button onclick="deletePost(${post.id})">Delete</button>
      `;

      
      postsContainer.appendChild(postCard);
    });
  }

 
  window.deletePost = (postId) => {
  
    blogPosts = blogPosts.filter((post) => post.id !== postId);

    renderPosts();
  };
  renderPosts();
});
