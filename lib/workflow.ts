import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient, resend } from "@upstash/qstash";

export const workflowClient = new WorkflowClient({
  baseUrl: process.env.QSTASH_URL,
  token: process.env.QSTASH_TOKEN,
});

const qstashClient = new QStashClient({
    token: process.env.QSTASH_TOKEN, // Use QSTASH_TOKEN instead of QSTASH_URL
  });

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: process.env.RESEND_API_KEY! }),
    },
    body: {
      from: `"Bookify" <${process.env.SENDLER_USER}>`,
      to: [email],
      subject,
      html: message,
    },
  });
};