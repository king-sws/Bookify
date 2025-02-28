import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailtimplate";
import transporter from "./nodemailer";

/**
 * Sends a welcome email to a new user
 * @param email The recipient's email address
 * @param name The recipient's name
 */
export const SendWelcomeEmail = async (email: string, fullName: string): Promise<void> => {
    const mailOptions = {
        from: `Bookif ${process.env.SENDLER_USER as string}`, // Professional format
        to: email,
        subject: "Welcome to Our Platform!",
        html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", fullName)
    };

    try {
        // Send email with error handling
        await transporter.sendMail(mailOptions);
        console.log(`📧 Welcome email sent to ${email}`);
    } catch (error) {
        console.error(`Error sending welcome email to ${email}:`, error);
        throw error;
    }
};

/**
 * Sends a verification email with a code
 * @param email The recipient's email address
 * @param verificationCode The verification code to include in the email
 */
export const SendVerificationEmail = async (email: string, verificationCode: string): Promise<void> => {
    const mailOptions = {
        from: process.env.SENDLER_USER as string,
        to: email,
        subject: "Email Verification",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationCode),
    };

    try {
        // Send email with error handling
        await transporter.sendMail(mailOptions);
        console.log(`📧 Verification email sent to ${email}`);
    } catch (error) {
        console.error(`Error sending verification email to ${email}:`, error);
        throw error;
    }
};

/**
 * Sends a password reset email with a link
 * @param email The recipient's email address
 * @param resetPasswordLink The reset password link to include in the email
 */
export const SendResetPasswordEmail = async (email: string, resetPasswordLink: string): Promise<void> => {
    const mailOptions = {
        from: process.env.SENDLER_USER as string,
        to: email,
        subject: "Reset Password",
        html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetPasswordLink),
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`📧 Password reset email sent to ${email}`);
    } catch (error) {
        console.error(`Error sending password reset email to ${email}:`, error);
        throw error;
    }
};

/**
 * Sends a confirmation email after password has been reset
 * @param email The recipient's email address
 */
export const SendResetPasswordEmailSuccess = async (email: string): Promise<void> => {
    const mailOptions = {
        from: process.env.SENDLER_USER as string,
        to: email,
        subject: "Password Reset Successful",
        html: PASSWORD_RESET_SUCCESS_TEMPLATE
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`📧 Password reset confirmation email sent to ${email}`);
    } catch (error) {
        console.error(`Error sending password reset confirmation email to ${email}:`, error);
        throw error;
    }
};