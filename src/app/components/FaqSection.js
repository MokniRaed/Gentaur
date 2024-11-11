"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  // Data for FAQ items
  const faqItems = [
    {
      question: "How to contact us?",
      answer:
        "You can contact us by telephone, email, or post. Our contact details are available on our website.",
    },
    {
      question: "What are some of the benefits of using Gentaur molecular biology products?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>High quality:</strong> Gentaur&apos;s products are ISO 9001:2015 certified and CE marked, known for high quality and reliability.
          </li>
          <li>
            <strong>Competitive prices:</strong> Gentaur offers competitive pricing on its products.
          </li>
          <li>
            <strong>Fast shipping:</strong> Gentaur provides quick and efficient shipping options.
          </li>
          <li>
            <strong>Global delivery:</strong> Gentaur products are available globally.
          </li>
          <li>
            <strong>Technical support:</strong> Excellent technical support to assist researchers with their products.
          </li>
        </ul>
      ),
    },
    {
      question: "What are some of the different types of molecular biology products that Gentaur offers?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>PCR kits:</strong> Includes high-fidelity, conventional, and fast PCR kits.</li>
          <li><strong>Enzymes:</strong> Includes Taq DNA polymerase, AmpliTaq Gold DNA polymerase, Phusion DNA polymerase, and more.</li>
          <li><strong>Reagents:</strong> Offers dNTPs, PCR buffer, and primers.</li>
          <li><strong>Equipment:</strong> Thermocyclers, pipettes, sample brushes, and more.</li>
        </ul>
      ),
    },
    {
      question: "How can I order Gentaur molecular biology products?",
      answer: "You can order Gentaur molecular biology products online.",
    },
    {
      question: "What is the return policy for Gentaur molecular biology products?",
      answer: "Gentaur offers a 30-day money-back guarantee on its products.",
    },
    {
      question: "How can I get technical support for Gentaur molecular biology products?",
      answer:
        "Gentaur offers a variety of technical support options, including email, phone, and live chat.",
    },
    {
      question: "What are some of the applications for Gentaur molecular biology products?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Gene expression analysis</li>
          <li>Genotyping</li>
          <li>Sequencing</li>
          <li>DNA cloning</li>
          <li>Protein expression</li>
        </ul>
      ),
    },
    {
      question: "What are some of the certifications that Gentaur has?",
      answer: "Gentaur is ISO 9001:2015 certified and its products are CE marked.",
    },
    {
      question: "Where is Gentaur located?",
      answer:
        "Gentaur is headquartered in Belgium and has offices and distributors worldwide, including in the United States, United Kingdom, Germany, France, Italy, Spain, Netherlands, Poland, Bulgaria, and China.",
    },
  ];

  // Toggle expanded state
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Gentaur FAQ</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = expanded === index;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium"
              >
                {item.question}
                {isOpen ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown className="text-primary" />
                )}
              </button>
              <div
                className={`transition-all overflow-hidden duration-300 ${
                  isOpen ? "max-h-screen p-4 border-t border-gray-200" : "max-h-0"
                }`}
                style={{
                  height: isOpen ? "auto" : 0,
                  paddingTop: isOpen ? "1rem" : 0,
                  paddingBottom: isOpen ? "1rem" : 0,
                }}
              >
                <div className="text-gray-700">
                  {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
