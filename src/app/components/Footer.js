import React from "react";
import Logo from "@images/Gentaur-logo.png";
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";
import { FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Section */}
      <div className="w-full lg:w-[85%] mx-auto py-10 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
          {/* Left Side: Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <Image src={Logo} alt="Logo" width={96} height={96} />
            <p className="text-gray-600 text-sm">
              Your Trusted Source for Life Science Essentials
            </p>
          </div>

          {/* Center: Navigation Links with Header */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Products & Services</h3>
            <ul className="space-y-2 text-sm font-medium text-gray-600">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/custom-services" className="hover:underline">
                Custom Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Terms and Support</h3>
            <ul className="space-y-2 text-sm font-medium text-gray-600">
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/custom-services" className="hover:underline">
                  Custom Services
                </Link>
              </li>
              <li>
                <Link href="/return-and-refund-policy" className="hover:underline">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side: Contact Info and Social Links */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">Our Contacts</h3>

            <a
              href="mailto:info@gentaur.com"
              className="text-sm text-gray-600 hover:underline flex items-center space-x-2"
            >
              <IoMailOutline size={18} className="text-primary" />
              <span>info@gentaur.com</span>
            </a>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <IoLogoFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition duration-300"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition duration-300"
              >
                <IoLogoLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300" />

      {/* Bottom Section */}
      <div className="bg-[#2c3493] text-white py-6">
        <div className="w-full lg:w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <span className="text-sm">
            © 2024 All Rights Reserved |
            <a href="/" className="hover:underline ml-1">
              Gentaur™
            </a>
          </span>

          {/* Payment Icons */}
          <div className="flex space-x-4">
            <FaPaypal
              size={24}
              className="text-white hover:text-blue-600 transition duration-300 transform hover:scale-110"
            />
            <FaCcVisa
              size={24}
              className="text-white hover:text-blue-600 transition duration-300 transform hover:scale-110"
            />
            <FaCcMastercard
              size={24}
              className="text-white hover:text-blue-600 transition duration-300 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
