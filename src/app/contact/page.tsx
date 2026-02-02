'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Me</h1>
          <p className="text-gray-600 mb-8">Have questions or want to get in touch? Reach out using the information below.</p>
        
        </div>
      </div>
    </div>
  );
}