'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      alert('Form submitted!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl shadow-lg max-w-lg mx-auto">
      <div>
        <label className="block text-gray-800 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 rounded-md bg-gray-100 text-gray-800"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block  text-gray-800 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 rounded-md bg-gray-100 text-gray-800"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block  text-gray-800 font-semibold">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full p-2 rounded-md bg-gray-100 text-gray-800"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-md text-white font-semibold">
        Send Message
      </button>
    </form>
  );
}
