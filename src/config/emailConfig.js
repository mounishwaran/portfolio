/**
 * EmailJS Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create an EmailJS account at https://www.emailjs.com/
 * 2. Create a new email service (e.g., Gmail)
 * 3. Create an email template with the following variables:
 *    - {{to_name}}: Recipient name
 *    - {{from_name}}: Sender name
 *    - {{from_email}}: Sender email
 *    - {{subject}}: Email subject
 *    - {{message}}: Email message
 * 4. Connect your Gmail account to EmailJS
 * 5. Copy your SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY from EmailJS dashboard
 * 6. Replace the placeholder values below with your actual credentials
 * 
 * TEMPLATE EXAMPLE:
 * 
 * Subject: {{subject}}
 * 
 * From: {{from_name}} ({{from_email}})
 * 
 * Message:
 * {{message}}
 * 
 * IMPORTANT: All messages will be sent to mounish27934@gmail.com
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_48egnhq', // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'template_lc7nr0g', // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'QiQFVs3F1SzIx40_E', // Replace with your EmailJS Public Key
  RECIPIENT_EMAIL: 'mounish27934@gmail.com' // All messages will be sent here
};

/**
 * HOW TO GET EMAILJS CREDENTIALS:
 * 
 * 1. Go to https://www.emailjs.com/ and sign up/login
 * 2. Navigate to Email Services → Add New Service
 * 3. Select Gmail (or your preferred email service)
 * 4. Follow the instructions to connect your email account
 * 5. Navigate to Email Templates → Create New Template
 * 6. Design your template with the variables mentioned above
 * 7. Copy the SERVICE_ID from Email Services page
 * 8. Copy the TEMPLATE_ID from Email Templates page
 * 9. Copy the PUBLIC_KEY from Account → General → Public Key
 * 10. Update the values in EMAILJS_CONFIG above
 */
