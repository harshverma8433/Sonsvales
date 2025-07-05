import React, { useState } from 'react';
import { Phone, MessageCircle, Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How to create an account?",
    answer: 'To create an account, find the "Sign up" or "Create account" button, fill out the registration form with your personal information, and click "Create account" or "Sign up." Verify your email address if needed, and then log in to start using the platform.'
  },
  {
    question: "What is the payment process?",
    answer: "Our payment process is simple and secure. Choose your plan, enter payment details, and confirm your subscription."
  },
  {
    question: "How can I reset my password?",
    answer: "Click on 'Forgot password' on the login page. Enter your email and follow the instructions sent to your inbox."
  },
  {
    question: "Have any trust issue?",
    answer: "We are trusted by millions of users worldwide. We follow strict security standards and data protection."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    You have different questions?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our team will answer all your questions. We ensure a quick response.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Contact Our Team</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;