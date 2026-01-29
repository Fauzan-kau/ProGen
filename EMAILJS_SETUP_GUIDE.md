# EmailJS Setup Guide for Contact Form

## 📧 What is EmailJS?

EmailJS allows you to send emails directly from your website without a backend server. It's perfect for contact forms, inquiries, and automated emails.

---

## 🚀 Step-by-Step Setup

### **Step 1: Create EmailJS Account**

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

---

### **Step 2: Add Email Service**

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook**
   - **Yahoo**
   - Or any SMTP service
4. Follow the connection wizard
5. **Copy the Service ID** (e.g., `service_abc123`)

---

### **Step 3: Create Email Templates**

#### **Template 1: Admin Notification (ProGen receives inquiry)**

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set up the template:

**Template Name:** ProGen Contact Form Submission

**To Email:** `hello@progen.com` (or your ProGen email)

**Subject:** New Contact Form Submission from {{from_name}}

**Email Body:**
```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Program Interest: {{program}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent via ProGen Contact Form
Reply to: {{reply_to}}
```

4. **Save the template**
5. **Copy the Template ID** (e.g., `template_xyz789`)

#### **Template 2: User Confirmation (Auto-reply)**

1. Create another template
2. Set up:

**Template Name:** ProGen Contact Confirmation

**To Email:** `{{to_email}}` (user's email)

**Subject:** Thank you for contacting ProGen!

**Email Body:**
```
Dear {{to_name}},

Thank you for reaching out to ProGen - Saudi Arabia's premier career-focused academy!

We have received your inquiry and our team will review your message carefully. You can expect a response within 24 hours during our business hours (Sunday - Thursday, 9:00 AM - 6:00 PM).

Your inquiry details:
Subject: {{subject}}

If you have any urgent questions, feel free to call us at +966 12 345 6789.

Best regards,
ProGen Team
Where Education Becomes a Career Strategy

---
ProGen Academy
Riyadh, Saudi Arabia
Email: hello@progen.com
Website: www.progen.com
```

3. **Save the template**
4. **Copy the Template ID** (e.g., `template_reply_123`)

---

### **Step 4: Get Your Public Key**

1. In EmailJS dashboard, go to **"Account"** → **"General"**
2. Find your **Public Key** (or API Key)
3. **Copy it** (e.g., `user_abcXYZ123`)

---

### **Step 5: Configure ProGen Website**

1. In your ProGen project, create a `.env` file:

```bash
# Copy from .env.example
cp .env.example .env
```

2. Open `.env` and add your EmailJS credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_REPLY_TEMPLATE_ID=template_reply_123
```

3. **Save the file**

---

### **Step 6: Test the Contact Form**

1. Start the development server:
```bash
npm run dev
```

2. Open the website: `http://localhost:5174/`

3. Scroll to the **Contact Form** section (or click any "Get Started" button)

4. Fill out the form with test data:
   - Name: Test User
   - Email: your-email@example.com
   - Phone: +966 50 123 4567
   - Program: Academic Excellence
   - Subject: Test Inquiry
   - Message: This is a test message

5. Click **"Send Message"**

6. Check for:
   - ✅ Success message on the website
   - ✅ Email received at `hello@progen.com` (ProGen admin)
   - ✅ Confirmation email received at the user's email

---

## 📋 Email Template Variables

These variables are automatically replaced when emails are sent:

### **Admin Notification Email:**
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{subject}}` - Inquiry subject
- `{{message}}` - User's message
- `{{program}}` - Program interest
- `{{reply_to}}` - User's email (for reply)

### **User Confirmation Email:**
- `{{to_name}}` - User's name
- `{{to_email}}` - User's email
- `{{subject}}` - Inquiry subject

---

## 🎨 Customizing Email Templates

You can customize the email design in EmailJS:

1. Go to your template
2. Click **"Edit"**
3. Use the **HTML editor** for custom styling
4. Add your ProGen logo (upload to EmailJS)
5. Match your brand colors (#FC5B50)

**Example HTML Template:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #FC5B50; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">ProGen</h1>
  </div>
  <div style="padding: 30px; background: #F8F5E8;">
    <p>Dear {{to_name}},</p>
    <p>Thank you for contacting ProGen!</p>
    <!-- Rest of your content -->
  </div>
</div>
```

---

## 🔒 Security Best Practices

1. **Never commit `.env` file** to Git (it's already in `.gitignore`)
2. **Use environment variables** for production
3. **Enable reCAPTCHA** in EmailJS (optional, prevents spam)
4. **Set rate limits** in EmailJS dashboard
5. **Monitor usage** to detect abuse

---

## 💰 EmailJS Free Plan Limits

- **200 emails/month** - Free forever
- Upgrade to paid plans for more emails
- No credit card required for free plan

---

## 🐛 Troubleshooting

### **Emails not sending:**
1. Check `.env` file has correct credentials
2. Verify Service ID and Template IDs are correct
3. Check browser console for errors
4. Ensure email service is connected in EmailJS dashboard

### **User not receiving confirmation:**
1. Check spam folder
2. Verify reply template ID is correct
3. Check EmailJS dashboard for failed emails

### **"Failed to send" error:**
1. Check internet connection
2. Verify Public Key is correct
3. Check EmailJS service status
4. Review browser console for detailed error

---

## 📞 Contact Form Features Implemented

✅ **All Buttons Functional** - All CTA buttons scroll to contact form
✅ **Full Contact Form** - Name, email, phone, program, subject, message
✅ **Email to Admin** - ProGen receives all inquiries at hello@progen.com
✅ **Auto-Reply to User** - User gets confirmation email
✅ **Form Validation** - Required fields, email format, phone format
✅ **Loading States** - Shows "Sending..." during submission
✅ **Success/Error Messages** - Clear feedback to users
✅ **Mobile Responsive** - Works perfectly on all devices
✅ **Contact Information Display** - Email, phone, location visible in email

---

## 🎯 What Happens When User Submits?

1. User fills out contact form
2. Clicks "Send Message"
3. Form validates all fields
4. **Email 1** sent to `hello@progen.com`:
   - Contains all user info
   - Reply-to is user's email
   - Admin can click reply to respond
5. **Email 2** sent to user:
   - Confirmation message
   - Shows ProGen contact info
   - Professional auto-reply
6. Success message shown on website
7. Form resets automatically

---

## 🚀 Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform:
   - Go to project settings
   - Add all `VITE_EMAILJS_*` variables
   - Use the same values from your `.env` file

2. Rebuild and deploy

3. Test the contact form on production

---

**Your contact form is now fully functional!** 🎉

All buttons scroll to the contact form, and emails are sent to both ProGen admin and the user with full contact information.
