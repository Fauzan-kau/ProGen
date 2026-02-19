'use client';

import { useState, FormEvent } from 'react';
import { Container, Button, Toast } from '@components/ui';
import { submitContactForm, ContactFormData } from '../services/emailService';

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    program: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('success');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowToast(false);

    try {
      await submitContactForm(formData);
      // Show success toast
      setToastType('success');
      setToastMessage("Message sent successfully! We'll get back to you within 24 hours.");
      setShowToast(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        program: '',
      });
    } catch (error) {
      // Show error toast
      setToastType('error');
      setToastMessage(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      );
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}

      <section id="contact" className="section-padding bg-background-light dark:bg-background-dark">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-light dark:text-text-dark mb-3 md:mb-4">
            Get in <span className="text-brand-red">Touch</span>
          </h2>
          <p className="text-base md:text-lg text-text-light/70 dark:text-text-dark/70">
            Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-5 lg:col-span-2">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-text-light dark:text-text-dark mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:hello@progen.com"
                      className="text-text-light/70 dark:text-text-dark/70 hover:text-brand-red transition-colors"
                    >
                      hello@progen.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+966123456789"
                      className="text-text-light/70 dark:text-text-dark/70 hover:text-brand-red transition-colors"
                    >
                      +966 12 345 6789
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">
                      Location
                    </h4>
                    <p className="text-text-light/70 dark:text-text-dark/70">
                      Riyadh, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white dark:bg-surface rounded-xl p-5 shadow-premium">
              <h4 className="font-heading font-semibold text-lg text-text-light dark:text-text-dark mb-3">
                Working Hours
              </h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-light/70 dark:text-text-dark/70">Sunday - Thursday</span>
                  <span className="font-medium text-text-light dark:text-text-dark">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light/70 dark:text-text-dark/70">Friday - Saturday</span>
                  <span className="font-medium text-text-light dark:text-text-dark">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-surface rounded-xl p-5 md:p-6 shadow-premium-lg lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-white dark:bg-background-dark text-text-light dark:text-text-dark"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-white dark:bg-background-dark text-text-light dark:text-text-dark"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone & Program Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-white dark:bg-background-dark text-text-light dark:text-text-dark"
                    placeholder="+966 XX XXX XXXX"
                  />
                </div>

                {/* Program Interest */}
                <div>
                  <label
                    htmlFor="program"
                    className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5"
                  >
                    Program Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-white dark:bg-background-dark text-text-light dark:text-text-dark"
                  >
                    <option value="">Select a program</option>
                    <option value="academic-excellence">Academic Excellence Program</option>
                    <option value="career-strategy">Career Strategy Coaching</option>
                    <option value="leadership">Leadership & Professional Development</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all bg-white dark:bg-background-dark text-text-light dark:text-text-dark"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 outline-none transition-all resize-none bg-white dark:bg-background-dark text-text-light dark:text-text-dark"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button type="submit" variant="primary" size="md" fullWidth loading={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
};
