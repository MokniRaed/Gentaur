// src/app/services/page.js
"use client";
import { FaFlask, FaCogs, FaChalkboardTeacher, FaSeedling, FaLeaf, FaMicroscope } from "react-icons/fa";

const CustomServiceSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Gentaur Custom Services</h1>
        <p className="text-lg text-gray-700 mb-10">
          Gentaur offers a wide range of custom services to meet the specific needs of our customers. Our team of experienced scientists and engineers is dedicated to providing innovative solutions that help our customers achieve their research goals.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Custom Services Include:</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <FaFlask className="text-primary mr-3 mt-1" size={24} />
              <div>
                <strong>Synthesis of custom molecules:</strong> We can synthesize a wide range of molecules, including antibodies, proteins, peptides, and nucleic acids. We can also provide custom modifications to existing molecules.
              </div>
            </li>
            <li className="flex items-start">
              <FaCogs className="text-primary mr-3 mt-1" size={24} />
              <div>
                <strong>Design and manufacture of custom equipment:</strong> We can design and manufacture custom equipment to meet the specific needs of our customers. Our team has experience in a wide range of areas, including PCR, ELISA, and DNA sequencing.
              </div>
            </li>
            <li className="flex items-start">
              <FaChalkboardTeacher className="text-primary mr-3 mt-1" size={24} />
              <div>
                <strong>Consulting and training:</strong> We offer consulting and training services to help our customers get the most out of our products and services. Our team can provide guidance on a wide range of topics, including research design, data analysis, and laboratory safety.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Fields We Support:</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <FaMicroscope className="text-primary mr-3 mt-1" size={24} />
              <div>
                <strong>Biomedicine:</strong> We support research in areas such as cancer, infectious diseases, and human genetics.
              </div>
            </li>
            <li className="flex items-start">
              <FaSeedling className="text-primary mr-3 mt-1" size={24} />
              <div>
                <strong>Agriculture:</strong> We support research in areas such as crop improvement and food safety.
              </div>
            </li>
            <li className="flex items-start">
              <FaLeaf className="text-primary mr-3 mt-1" size={24} />
              <div>
                <strong>Environmental sciences:</strong> We support research in areas such as pollution control and climate change.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Examples of Our Work:</h2>
          <ul className="space-y-4 text-gray-700">
            <li>🔬 A team of researchers used Gentaur&apos;s custom synthesis services to develop a new antibody that could be used to diagnose a rare cancer.</li>
            <li>⚙️ A company used Gentaur&apos;s custom equipment design services to develop a new PCR machine that was more efficient and accurate.</li>
            <li>🏫 A university used Gentaur&apos;s consulting services to help them set up a new research lab.</li>
          </ul>
        </section>

        <section className="text-center mt-10">
          <p className="text-lg text-gray-700">
            Gentaur is committed to providing innovative custom services that help our customers achieve their research goals. We are always looking for new ways to use our expertise to make a positive impact on the world.
          </p>
          <a href="/contact" className="inline-block mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primaryDark transition">
            Contact Us to Learn More
          </a>
        </section>
      </div>
    </div>
  );
};

export default CustomServiceSection;
