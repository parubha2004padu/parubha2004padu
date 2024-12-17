// Fetch and Display User Profile and Posts
async function loadProfile() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');

  if (!userId) {
    alert('User not found.');
    window.location.href = 'index.html';
    return;
  }

  const response = await fetch(`/profile/${userId}`);
  if (response.status === 404) {
    alert('User not found.');
    window.location.href = 'index.html';
    return;
  }

  const { profile, posts } = await response.json();

  // Populate Profile
  document.getElementById('userProfile').innerHTML = `
    <img src="${profile.profile_picture || 'default-avatar.jpg'}" alt="${profile.username}" class="profile-avatar">
    <h2>${profile.username}</h2>
    <p>${profile.bio || 'No bio available.'}</p>
    <p>Joined: ${new Date(profile.created_at).toLocaleDateString()}</p>
  `;

  // Populate Posts
  const postsContainer = document.getElementById('userPosts');
  postsContainer.innerHTML += posts.map(post => `
    <div class="post">
      <p>${post.content}</p>
      ${post.image_url ? `<img src="${post.image_url}" alt="Post Image">` : ''}
      <p><small>${new Date(post.created_at).toLocaleString()}</small></p>
    </div>
  `).join('');
}

// Load the profile when the page loads
window.onload = loadProfile;