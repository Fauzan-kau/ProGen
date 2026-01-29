import emailjs from '@emailjs/browser';

/**
 * Email Service Configuration
 *
 * To set up EmailJS:
 * 1. Go to https://www.emailjs.com/
 * 2. Create a free account
 * 3. Add an email service (Gmail, Outlook, etc.)
 * 4. Create an email template
 * 5. Copy your Public Key, Service ID, and Template ID
 * 6. Add them to your .env file:
 *    - VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *    - VITE_EMAILJS_SERVICE_ID=your_service_id
 *    - VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *    - VITE_EMAILJS_REPLY_TEMPLATE_ID=your_reply_template_id
 */

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID || 'YOUR_REPLY_TEMPLATE_ID';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  program?: string;
}

/**
 * Send contact form to ProGen admin
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      program: formData.program || 'Not specified',
      to_email: 'hello@progen.com', // ProGen admin email
      reply_to: formData.email,
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};

/**
 * Send confirmation email to user
 */
export const sendConfirmationEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      to_name: formData.name,
      to_email: formData.email,
      message: `Thank you for contacting ProGen! We have received your inquiry regarding "${formData.subject}" and will get back to you within 24 hours.`,
    };

    await emailjs.send(SERVICE_ID, REPLY_TEMPLATE_ID, templateParams, PUBLIC_KEY);
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    // Don't throw error - confirmation email is optional
  }
};

/**
 * Submit contact form - sends both emails
 */
export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  // Send email to ProGen admin
  await sendContactEmail(formData);

  // Send confirmation to user
  await sendConfirmationEmail(formData);
};
