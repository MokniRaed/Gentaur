"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { FaChevronRight } from "react-icons/fa";
import React from 'react';

const PrivacyPolicySection = () => {
  const policySections = useMemo(() => [
    { id: "who-we-are", title: "Who We Are", content: "Our website address is: https://gentaur.com." },
    {
      id: "comments",
      title: "Comments",
      content: `When visitors leave comments, we collect data in the form and the visitor’s IP address and browser user agent for spam detection. An anonymized string created from your email may be sent to the Gravatar service to check if you are using it. After approval of your comment, your profile picture is visible publicly.`,
    },
    {
      id: "media",
      title: "Media",
      content: `If you upload images, avoid including embedded location data (EXIF GPS) to prevent visitors from extracting location data.`,
    },
    {
      id: "cookies",
      title: "Cookies",
      content: `If you leave a comment, you may opt to save your details in cookies for convenience. Login and display options cookies last for up to one year.`,
    },
    {
      id: "embedded-content",
      title: "Embedded Content",
      content: `Embedded content from other websites behaves as if you visited the other website, which may collect your data.`,
    },
    {
      id: "data-sharing",
      title: "Who We Share Your Data With",
      content: `If you request a password reset, your IP address will be included in the reset email.`,
    },
    {
      id: "data-retention",
      title: "How Long We Retain Your Data",
      content: `If you leave a comment, it is retained indefinitely. For registered users, personal information is stored in their profile.`,
    },
    {
      id: "your-rights",
      title: "Your Rights Over Your Data",
      content: `If you have an account or left comments, you can request a file of the personal data we hold about you.`,
    },
    {
      id: "data-destination",
      title: "Where Your Data Is Sent",
      content: `Visitor comments may be checked through an automated spam detection service.`,
    },
  ], []);

  const [activeSection, setActiveSection] = useState(policySections[0].id);
  const sectionRefs = useRef(policySections.map(() => React.createRef()));

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = policySections[0].id;

      sectionRefs.current.forEach((ref, index) => {
        if (ref.current && ref.current.getBoundingClientRect().top < 150) {
          closestSection = policySections[index].id;
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [policySections]);

  const handleScrollToSection = (id, index) => {
    const sectionRef = sectionRefs.current[index];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
   <div className="flex bg-gray-100 min-h-screen">
     <div className="flex flex-col lg:flex-row w-full">
       <aside className="lg:w-1/4 w-full bg-white border-r border-gray-200 px-6 py-10 max-h-screen sticky top-0 overflow-y-auto">
         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Privacy Policy</h2>
         <nav className="space-y-2">
           {policySections.map((section, index) => (
            <button
             key={section.id}
             onClick={() => handleScrollToSection(section.id, index)}
             className={`flex items-center w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 transition-transform duration-200 ease-in-out ${activeSection === section.id ? "bg-blue-50 font-semibold text-blue-600" : "text-gray-700"}`}
            >
              <FaChevronRight className="mr-2 text-primary" />
              {section.title}
            </button>
           ))}
         </nav>
       </aside>

       <main className="lg:w-3/4 w-full p-8 lg:p-12 space-y-12">
         {policySections.map((section, index) => (
          <section
           key={section.id}
           id={section.id}
           ref={sectionRefs.current[index]}
           className="bg-white rounded-lg shadow-lg p-8 transition-transform transform duration-200 ease-in-out hover:shadow-xl"
          >
            <h3 className="text-xl font-bold text-primary mb-4">{section.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </section>
         ))}
       </main>
     </div>
   </div>
  );
};

export default PrivacyPolicySection;