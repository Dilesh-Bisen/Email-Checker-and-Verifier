"use client";
import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How is the Verifier different from other email verifier tools?",
      answer: (
        <>
          <p className="mb-4">BrandNav Verifier stands out for several reasons:</p>
          <ul className="list-disc list-inside text-gray-300">
            <p>Accuracy: Our advanced algorithms ensure precise email verification.</p>
            <p>Efficiency: Fast processing for large email lists, saving you time.</p>
            <p>User-Friendly: Easy-to-use interface makes verification hassle-free.</p>
            <p>Data Security: Your information is handled with the utmost security.</p>
            <p>Support: Responsive customer support to assist you at any step.</p>
          </ul>
          <p className="mt-4">Don't just take our word for it, checkout our G2 reviews we're rated 4.8/5 by users.</p>
        </>
      ),
    },
    {
      question: "What does it mean when an email address is valid?",
      answer: "",
    },
    {
      question: "What does it mean when an email address is unknown?",
      answer: "",
    },
    {
      question: "What does it mean when an email address is invalid?",
      answer: "",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen-xl px-16 py-24 bg-[#1A0B2E] text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Frequently asked questions</h1>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#1F1629] border border-gray-700 rounded-lg shadow-lg">
            <div
              className={`flex justify-between items-center cursor-pointer p-6 ${activeIndex === index ? "border-b-2 border-gray-700" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className="text-gray-400">
                {activeIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-6 bg-[#1A1426] text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
