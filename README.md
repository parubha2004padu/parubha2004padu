<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SocialConnect</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navigation Bar -->
  <header class="navbar">
    <div class="logo">SocialConnect</div>
    <nav class="nav-links">
      <input type="text" class="search-bar" placeholder="Search...">
      <a href="#home">Home</a>
      <a href="#profile">Profile</a>
      <a href="#friends">Friends</a>
      <a href="#notifications">Notifications</a>
    </nav>
  </header>

  <!-- Main Content -->
  <main class="main-content">
    <!-- Profile Section -->
    <section class="profile">
      <img class="cover-photo" src="cover-photo.jpg" alt="Cover Photo">
      <div class="profile-info">
        <img class="profile-picture" src="profile-picture.jpg" alt="Profile Picture">
        <h2>User Name</h2>
        <p>Bio: This is a short bio about the user.</p>
        <div class="stats">
          <p><strong>Posts:</strong> 120</p>
          <p><strong>Followers:</strong> 500</p>
          <p><strong>Following:</strong> 180</p>
        </div>
      </div>
    </section>

    <!-- Post Section -->
    <section class="post-form">
      <textarea placeholder="What's on your mind?"></textarea>
      <button>Post</button>
    </section>

    <!-- Feed Section -->
    <section class="feed">
      <article class="post">
        <div class="post-header">
          <h3>User Name</h3>
          <p>2 hours ago</p>
        </div>
        <p>This is a sample post content!</p>
        <div class="post-actions">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </article>
    </section>

    <!-- Friends List -->
    <section class="friends-list">
      <h3>Your Friends</h3>
      <div class="friend">
        <img src="friend1.jpg" alt="Friend 1">
        <p>Friend 1</p>
      </div>
      <div class="friend">
        <img src="friend2.jpg" alt="Friend 2">
        <p>Friend 2</p>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <p>© 2024 SocialConnect. All Rights Reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>