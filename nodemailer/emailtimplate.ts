export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to SwS!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      color: #ffffff;
      text-align: center;
      padding: 30px;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: bold;
    }
    .body {
      padding: 30px;
    }
    .body p {
      font-size: 16px;
      margin: 15px 0;
      line-height: 1.8;
    }
    .cta-button {
      display: inline-block;
      background: #25c16f;
      color: #ffffff !important;
      padding: 12px 30px;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      margin: 20px 0;
      transition: background 0.3s ease;
    }
    .cta-button:hover {
      background: #1fa15d;
    }
    .features {
      margin: 25px 0;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 8px;
    }
    .footer {
      text-align: center;
      padding: 25px;
      background-color: #f4f4f4;
      color: #666666;
      font-size: 14px;
    }
    .highlight {
      color: #25c16f;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Welcome to SwS! 🎉</h1>
    </div>
    <div class="body">
      <p>Hello {userName},</p>
      <p>We're thrilled to have you join the SwS community! You've taken the first step toward Sucess.</p>
      
      <div class="features">
        <p>Here's what you can do now:</p>
        <p>✅ Access premium features<br>
           📈 Track your progress<br>
           🔒 Manage your security settings<br>
           🎯 Set up your profile</p>
      </div>

      <p>Get started by exploring your dashboard:</p>
      <center>
        <a href="{dashboardLink}" class="cta-button">Get Started</a>
      </center>

      <p>Need help getting started? Check out our <a href="{helpCenterLink}">Help Center</a> or reply to this email.</p>
      
      <p>We're here to help you succeed!<br>
      Best regards,<br>
      The SwS Team</p>
    </div>
    <div class="footer">
      <p>This is an automated message - please do not reply directly to this email.</p>
      <p>© 2025 SwS. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .body {
      padding: 20px;
    }
    .body p {
      font-size: 16px;
      margin: 10px 0;
    }
    .verification-code {
      text-align: center;
      margin: 30px 0;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 5px;
      color: #2575fc;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #f4f4f4;
      color: #666666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Verify Your Email</h1>
    </div>
    <div class="body">
      <p>Hello,</p>
      <p>Thank you for signing up! Your verification code is:</p>
      <div class="verification-code">{verificationCode}</div>
      <p>Enter this code on the verification page to complete your registration.</p>
      <p>This code will expire in 15 minutes for security reasons.</p>
      <p>If you didn't create an account with us, please ignore this email.</p>
      <p>Best regards,<br>Your App Team</p>
    </div>
    <div class="footer">
      <p>This is an automated message, please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .body {
      padding: 20px;
    }
    .body p {
      font-size: 16px;
      margin: 10px 0;
    }
    .success-icon {
      text-align: center;
      margin: 30px 0;
    }
    .success-icon div {
      background-color: #2575fc;
      color: white;
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 50%;
      display: inline-block;
      font-size: 30px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #f4f4f4;
      color: #666666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Password Reset Successful</h1>
    </div>
    <div class="body">
      <p>Hello,</p>
      <p>We're writing to confirm that your password has been successfully reset.</p>
      <div class="success-icon">
        <div>✓</div>
      </div>
      <p>If you did not initiate this password reset, please contact our support team immediately.</p>
      <p>For security reasons, we recommend that you:</p>
      <ul>
        <li>Use a strong, unique password</li>
        <li>Enable two-factor authentication if available</li>
        <li>Avoid using the same password across multiple sites</li>
      </ul>
      <p>Thank you for helping us keep your account secure.</p>
      <p>Best regards,<br>Your App Team</p>
    </div>
    <div class="footer">
      <p>This is an automated message, please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color:rgb(191, 191, 191);
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .body {
      padding: 20px;
    }
    .body p {
      font-size: 16px;
      margin: 10px 0;
    }
    .button {
      display: inline-block;
      background-color:rgb(28, 48, 82);
      color: #ffffff;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      text-align: center;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #f4f4f4;
      color: #666666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Password Reset</h1>
    </div>
    <div class="body">
      <p>Hello,</p>
      <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
      <p>To reset your password, click the button below:</p>
      <a href="{resetURL}" class="button">Reset Password</a>
      <p>This link will expire in 1 hour for security reasons.</p>
      <p>Best regards,<br>Your App Team</p>
    </div>
    <div class="footer">
      <p>This is an automated message, please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
`;