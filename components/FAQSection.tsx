'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is ADmyBRAND AI Suite?',
    answer: 'It’s a set of AI-powered tools that help launch, manage, and scale campaigns faster and smarter.',
  },
  {
    question: 'Is this suitable for non-tech users?',
    answer: 'Yes! The no-code builder and 1-click automations make it beginner-friendly.',
  },
  {
    question: 'Can I try it for free?',
    answer: 'Absolutely. We offer a free plan so you can explore features before upgrading.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0e0e0e] text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-gray-400 mb-12">Answers to common questions about our AI Suite</p>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-4 cursor-pointer transition-all"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <p className="text-gray-400 mt-2 transition-all">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
