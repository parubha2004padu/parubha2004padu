// script.js

// Handle Post Submission
document.querySelector('.post-form button').addEventListener('click', () => {
  const content = document.querySelector('.post-form textarea').value;
  if (content.trim() === '') {
    alert('Post content cannot be empty!');
    return;
  }
  alert('Post submitted successfully!');
  // Add functionality to submit the post to the server or add to the feed dynamically.
});

// Friend List Interactions
document.querySelectorAll('.friend').forEach((friend) => {
  friend.addEventListener('click', () => {
    alert(`Opening ${friend.textContent.trim()}'s profile...`);
  });
});