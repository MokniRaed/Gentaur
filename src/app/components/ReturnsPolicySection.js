"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ReturnsPolicySection = () => {
  const [expanded, setExpanded] = useState(null);

  // Data for policy sections
  const policySections = [
    {
      title: "Returns Policy",
      content: (
        <p>
          At Gentaur, we strive to ensure your satisfaction with our products.
          If you receive an incorrect or unopened item within 30 days of
          delivery, we welcome you to return it for a full refund. In the rare
          instance of an error on our part, where you receive a different
          product than the one ordered, we will cover the return shipping costs.
          <br />
          <br />
          To initiate a return for an incorrect item, simply reach out to us
          with your order number and provide details about the product in
          question. We will promptly respond with clear instructions on how to
          proceed with the return.
          <br />
          <br />
          Please note that, aside from situations involving incorrect items, we
          do not accept or process returns for any other reasons.
        </p>
      ),
    },
    {
      title: "Shipping",
      content: (
        <p>
          GentaurShop is committed to delivering your products promptly and
          efficiently. We make every effort to dispatch in-stock items on the
          same or next working day. However, for orders placed later in the day,
          delivery may extend to the subsequent working day.
          <br />
          <br />
          The actual delivery timeline may vary based on the courier&apos;s
          accessibility to the shipping address or customs clearance for
          international shipments. For products not currently in stock or those
          requiring manufacturing, the delivery period typically ranges from 1
          to 4 weeks. For specific details on delivery times, especially for
          non-stock items, please contact our technical support team.
          <br />
          <br />
          When placing your order, please acknowledge that the shipping process
          involves third-party carriers such as TNT, FedEx, UPS, and/or
          Schenker. It is the customer&apos;s responsibility to provide an accurate
          and verified shipping/delivery address. GentaurShop assures accurate
          address information input as communicated by the customer and reserves
          the right to disclaim liability in cases of unexpected delays or
          errors beyond our control.
        </p>
      ),
    },
    {
      title: "Refunds",
      content: (
        <p>
          If, for any reason, you wish to cancel and refund your order before it
          has been processed, please contact our support team. We define
          &apos;processed&apos; as the moment your order is added to our ordering system.

          <br />
          <br />
          Refunds for canceled orders are typically processed within two weeks.
          This timeframe includes the processing time on our end (3 to 5
          business days) and the processing time required by your bank for our
          refund request (5 to 10 business days). In many cases, you may receive
          your refund more promptly. We appreciate your understanding and
          cooperation in this process.
        </p>
      ),
    },
    {
      title: "Exceptions",
      content: (
        <ul className="list-disc pl-5">
          <li>Products that have been opened or used</li>
          <li>Products that have been damaged by misuse or neglect</li>
          <li>Products that are expired or beyond their shelf life</li>
          <li>Products that are missing any components or accessories</li>
        </ul>
      ),
    },
    {
      title: "Disclaimer",
      content: (
        <p>
          Gentaur reserves the right to modify or update this Return & Refund
          Policy at any time without prior notice.
        </p>
      ),
    },
  ];

  // Toggle expand/collapse
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Returns & Shipping Policy
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {policySections.map((section, index) => {
          const isOpen = expanded === index;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full flex justify-between items-center p-5 text-left text-gray-800 font-semibold text-lg"
              >
                {section.title}
                {isOpen ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown className="text-primary" />
                )}
              </button>
              <div
                className={`transition-all overflow-hidden duration-300 ${
                  isOpen ? "max-h-screen p-5 border-t border-gray-200" : "max-h-0"
                }`}
                style={{
                  height: isOpen ? "auto" : 0,
                  paddingTop: isOpen ? "1rem" : 0,
                  paddingBottom: isOpen ? "1rem" : 0,
                }}
              >
                <div className="text-gray-700">{section.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReturnsPolicySection;
