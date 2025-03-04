export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Bookify!</title>
  <style>
    body {
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #e6e9f0;
      margin: 0;
      padding: 0;
      background-color: #0a0e1a;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #020817;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      border: 1px solid #1a2035;
    }
    .header {
      background: linear-gradient(135deg, #020817, #0f1a3a);
      color: #ffffff;
      text-align: center;
      padding: 35px 30px;
      border-bottom: 1px solid #1a2035;
    }
    .header h1 {
      margin: 0;
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .logo {
      font-size: 42px;
      margin-bottom: 15px;
      display: inline-block;
      background: linear-gradient(135deg, #4f6bff, #36c2e0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .body {
      padding: 35px 30px;
    }
    .body p {
      font-size: 16px;
      margin: 16px 0;
      line-height: 1.8;
      color: #cfd5e8;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #3a50e4, #2c3fe0);
      color: #ffffff !important;
      padding: 14px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      margin: 25px 0;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(58, 80, 228, 0.3);
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(58, 80, 228, 0.4);
    }
    .features {
      margin: 25px 0;
      padding: 25px;
      background: rgba(15, 26, 58, 0.5);
      border-radius: 10px;
      border-left: 4px solid #3a50e4;
    }
    .feature-item {
      display: flex;
      align-items: center;
      margin: 12px 0;
    }
    .feature-icon {
      margin-right: 10px;
      font-size: 18px;
      color: #4f6bff;
    }
    .footer {
      text-align: center;
      padding: 25px;
      background-color: #010613;
      color: #6c7793;
      font-size: 14px;
      border-top: 1px solid #1a2035;
    }
    .highlight {
      color: #4f6bff;
      font-weight: 600;
    }
    a {
      color: #4f6bff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Welcome to Bookify ✨ </h1>
    </div>
    <div class="body">
      <p>Hello {userName},</p>
      <p>Welcome to <span class="highlight">Bookify</span> – your personal gateway to a world of knowledge and imagination!</p>
     
      <div class="features">
        <div class="feature-item">
          <span class="feature-icon">📚</span>
          <span>Access our curated collection of premium books and articles</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🔖</span>
          <span>Create personalized reading lists and track your progress</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">💫</span>
          <span>Discover new titles with our AI-powered recommendation engine</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🌙</span>
          <span>Enjoy comfortable reading with our customizable dark mode</span>
        </div>
      </div>
      
      <p>Your literary journey begins now:</p>
      <center>
        <a href="{libraryLink}" class="cta-button">Explore Your Library</a>
      </center>
      <p>Looking for something specific? Our <a href="{helpCenterLink}">Help Center</a> can guide you through all of Bookify's features.</p>
     
      <p>Happy reading!<br>
      <span class="highlight">The Bookify Team</span></p>
    </div>
    <div class="footer">
      <p>© 2025 Bookify. All rights reserved.</p>
      <p>This email was sent to {userEmail}. <a href="{unsubscribeLink}" style="color: #6c7793;">Manage preferences</a></p>
    </div>
  </div>
</body>
</html>
`