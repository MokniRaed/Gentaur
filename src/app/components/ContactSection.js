/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, FormControl, Input, Textarea } from "@mui/joy";
import { InputLabel } from "@mui/material";
import Lottie from "lottie-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingAnimation from "../animations/loading.json";
import { applyForContact } from "../api/requests";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user_details = Object.fromEntries(new FormData(e.currentTarget));
      const data = {
        ...user_details,
        platform: "genprice",
      };

      await applyForContact(data);

      toast.success("Contact received!");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Please try again");
    }
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-4">
      <Toaster />
      <h1 className="text-4xl font-bold text-primary mb-3">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md text-center">
        We'd love to hear from you! Please fill in your details below, and our team will get back to you shortly.
      </p>

      {isLoading ? (
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Lottie
            style={{ width: 250, height: 250 }}
            animationData={LoadingAnimation}
            loop={true}
          />
        </div>
      ) : (
        <div className="w-full lg:w-3/4 xl:w-1/2 bg-white shadow-xl rounded-lg p-8">
          <form className="w-full" onSubmit={submitForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormControl>
                <InputLabel className="flex items-center gap-1 text-gray-700">
                  <AiOutlineUser /> First Name
                </InputLabel>
                <Input
                  name="first_name"
                  color="neutral"
                  sx={{ borderRadius: "6px" }}
                  placeholder="Enter your first name"
                  variant="soft"
                  className="hover:shadow-md focus:shadow-lg transition-shadow duration-300"
                />
              </FormControl>

              <FormControl>
                <InputLabel className="flex items-center gap-1 text-gray-700">
                  <AiOutlineUser /> Last Name
                </InputLabel>
                <Input
                  name="last_name"
                  color="neutral"
                  sx={{ borderRadius: "6px" }}
                  placeholder="Enter your last name"
                  variant="soft"
                  className="hover:shadow-md focus:shadow-lg transition-shadow duration-300"
                />
              </FormControl>

              <FormControl>
                <InputLabel className="flex items-center gap-1 text-gray-700">
                  <AiOutlineMail /> Email
                  <span className="text-secondaryDark">*</span>
                </InputLabel>
                <Input
                  required
                  name="email"
                  color="neutral"
                  sx={{ borderRadius: "6px" }}
                  placeholder="Enter your email"
                  variant="soft"
                  className="hover:shadow-md focus:shadow-lg transition-shadow duration-300"
                />
              </FormControl>

              <FormControl>
                <InputLabel className="flex items-center gap-1 text-gray-700">
                  <AiOutlinePhone /> Phone
                </InputLabel>
                <Input
                  name="phone"
                  color="neutral"
                  sx={{ borderRadius: "6px" }}
                  placeholder="Enter your phone number"
                  variant="soft"
                  className="hover:shadow-md focus:shadow-lg transition-shadow duration-300"
                />
              </FormControl>

              <FormControl className="md:col-span-2">
                <InputLabel className="text-gray-700">Message</InputLabel>
                <Textarea
                  minRows={6}
                  name="message"
                  color="neutral"
                  sx={{ borderRadius: "6px" }}
                  placeholder="Write your message here"
                  variant="soft"
                  className="hover:shadow-md focus:shadow-lg transition-shadow duration-300"
                />
              </FormControl>
            </div>

            <Button
              sx={{ borderRadius: "6px", padding: "12px" }}
              className="w-full mt-6 bg-primary hover:bg-primaryDark text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </div>
      )}

   {/* Contact Information Table */}
<div className="w-full lg:w-3/4 xl:w-1/2 mt-12">
  <h2 className="text-2xl font-semibold text-primary  text-center">Our Global Offices</h2>
  <p className="  text-gray-700  text-sm  mb-4 mt-2 text-center">Don't hesitate To Contact us

</p>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
      <thead>
        <tr className="bg-primary text-white text-left text-sm leading-normal">
          <th className="py-3 px-6">Country</th>
          <th className="py-3 px-6 ">Company Legal Name</th>
          <th className="py-3 px-6">Phone</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Address</th>
          <th className="py-3 px-6">VAT / TAX ID</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-sm">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">Belgium</td>
          <td className="py-3 px-6"><a href="https://gentaur.be/" className="text-blue-500 hover:underline">Gentaur BV</a></td>
          <td className="py-3 px-1 whitespace-nowrap ">+32 2 265 09 20</td>
          <td className="py-3 px-6"><a href="mailto:info@gentaur.com" className="text-blue-500 hover:underline">info@gentaur.com</a></td>
          <td className="py-3 px-6">Voortstraat 49, 1910 Kampenhout</td>
          <td className="py-3 px-6">BE0473327336</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">Netherlands</td>
          <td className="py-3 px-6"><a href="https://gentaur.nl/" className="text-blue-500 hover:underline">Gentaur BV</a></td>
          <td className="py-3 px-1 whitespace-nowrap">+31 20 808 0893</td>
          <td className="py-3 px-6"><a href="mailto:netherlands@gentaur.com" className="text-blue-500 hover:underline">netherlands@gentaur.com</a></td>
          <td className="py-3 px-6">Kuiper 1, 5521 DG Eersel</td>
          <td className="py-3 px-6">NL850396268B01</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">Germany</td>
          <td className="py-3 px-6"><a href="https://gentaur.de/" className="text-blue-500 hover:underline">Gentaur GmbH</a></td>
          <td className="py-3 px-1 whitespace-nowrap">+49 (0)24 193 688 188</td>
          <td className="py-3 px-6"><a href="mailto:germany@gentaur.com" className="text-blue-500 hover:underline">germany@gentaur.com</a></td>
          <td className="py-3 px-6">Marienbongard 20, 52062 Aachen</td>
          <td className="py-3 px-6">DE815175831</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">Spain</td>
          <td className="py-3 px-6"><a href="https://gentaur.es/" className="text-blue-500 hover:underline">Gentaur España</a></td>
          <td className="py-3 px-1 whitespace-nowrap">+34 (0)911 87 65 58</td>
          <td className="py-3 px-6"><a href="mailto:spain@gentaur.com" className="text-blue-500 hover:underline">spain@gentaur.com</a></td>
          <td className="py-3 px-6">Avenida de Andalucía, 27, 29006 Málaga</td>
          <td className="py-3 px-6">BE0473327336</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">France</td>
          <td className="py-3 px-6"><a href="https://gentaur.fr/" className="text-blue-500 hover:underline">Gentaur France SARL</a></td>
          <td className="py-3 px-1 whitespace-nowrap">+33 (0)1 43 25 01 50</td>
          <td className="py-3 px-6"><a href="mailto:france@gentaur.com" className="text-blue-500 hover:underline">france@gentaur.com</a></td>
          <td className="py-3 px-6">9 Rue Lagrange, 75005 Paris</td>
          <td className="py-3 px-6">FR63484237888</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">Italy</td>
          <td className="py-3 px-6"><a href="https://gentaur.it/" className="text-blue-500 hover:underline">Gentaur Italia SRL</a></td>
          <td className="py-3 px-1 whitespace-nowrap">+39 (0) 350 086 186</td>
          <td className="py-3 px-6"><a href="mailto:italy@gentaur.com" className="text-blue-500 hover:underline">italy@gentaur.com</a></td>
          <td className="py-3 px-6">Largo Bortolo Belotti 5, 24121 Bergamo</td>
          <td className="py-3 px-6">IT03841300167</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">Poland</td>
          <td className="py-3 px-6"><a href="https://www.gentaur.pl/" className="text-blue-500 hover:underline">Gentaur Sp. z o.o.</a></td>
          <td className="py-3 px-1 whitespace-nowrap">+48 58 710 33 44</td>
          <td className="py-3 px-6"><a href="mailto:poland@gentaur.com" className="text-blue-500 hover:underline">poland@gentaur.com</a></td>
          <td className="py-3 px-6">lok.2, Grunwaldzka 88A, 81-771 Sopot</td>
          <td className="py-3 px-6">PL2040002710</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">Bulgaria</td>
          <td className="py-3 px-6"><a href="https://gentaur.bg/" className="text-blue-500 hover:underline">Gentaur EOOD</a></td>
          <td className="py-3 px-1 whitespace-nowrap">+359 897 455 388</td>
          <td className="py-3 px-6"><a href="mailto:bulgaria@gentaur.com" className="text-blue-500 hover:underline">bulgaria@gentaur.com</a></td>
          <td className="py-3 px-6">Ul iSkar 53, 1191 Kokalyane</td>
          <td className="py-3 px-6">BG201358931</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">UK</td>
          <td className="py-3 px-6"><a href="https://gentaur.co.uk/" className="text-blue-500 hover:underline">Gentaur UK Ltd.</a></td>
          <td className="py-3 px-1 whitespace-nowrap">+44 (0)2 033 938 531</td>
          <td className="py-3 px-6"><a href="mailto:uk@gentaur.com" className="text-blue-500 hover:underline">uk@gentaur.com</a></td>
          <td className="py-3 px-6">Station Close, Unicorn House, Potters Bar EN6 1TL</td>
          <td className="py-3 px-6">GB111298832</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6">USA</td>
          <td className="py-3 px-6"><a href="https://store.genprice.com/" className="text-blue-500 hover:underline">Genprice Inc.</a></td>
          <td className="py-3 px-1 whitespace-nowrap">+1 (408) 7 800 908</td>
          <td className="py-3 px-6"><a href="mailto:genprice@gentaur.com" className="text-blue-500 hover:underline">genprice@gentaur.com</a></td>
          <td className="py-3 px-6">6017 Snell Avenue, San Jose, CA 95123</td>
          <td className="py-3 px-6">-</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default ContactSection;
