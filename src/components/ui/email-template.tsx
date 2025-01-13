import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div>
    <h1>Hello this is the message from justslava.com</h1>
    <h2>
      Contacted person: {firstName}, {lastName}
    </h2>
    <p>Email: {email}</p>
    <p>Text Message:</p>
    <p>{message}</p>
  </div>
);
