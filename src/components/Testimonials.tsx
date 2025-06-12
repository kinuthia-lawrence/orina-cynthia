import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ quote, author, position, company }: {
  quote: string;
  author: string;
  position: string;
  company: string;
}) => (
  <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl relative group hover:border-blue-500/40 transition-all duration-300">
    <FaQuoteLeft className="text-blue-500/20 text-4xl absolute top-4 left-4" />
    <div className="pt-4">
      <p className="text-gray-300 italic relative z-10">"{quote}"</p>
      
      <div className="mt-6 flex items-center">
        <div className="mr-3">
          <HiUserCircle className="w-10 h-10 text-gray-400" />
        </div>
        <div>
          <p className="font-medium text-white">{author}</p>
          <p className="text-sm text-gray-400">
            {position} · <span className="text-blue-400">{company}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="px-4 bg-black/70 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full">
            <span className="text-green-400 font-medium tracking-wide text-sm">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Feedback
            </span>
          </h2>
          <p className="max-w-2xl text-gray-400">
            Here's what clients and colleagues have to say about my security work and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            quote="Cynthia's testing revealed issues we never knew existed. Her report helped us secure our platform before a major release."
            author="DevOps Lead"
            position="Technical Lead"
            company="Blackie Networks"
          />
          <TestimonialCard 
            quote="Her attention to detail and ability to think like an attacker made her a standout intern. Exceptional technical skills coupled with clear communication."
            author="Director"
            position="Security Director"
            company="E-MAXY IT-SERV LTD"
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            <span className="text-white font-medium">Ready to work together?</span> Let's build a more secure digital presence for your organization.
          </p>
         {/*  <div className="mt-6">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r border border-white rounded-full from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transform hover:-translate-y-1 transition-all duration-200"
            >
              <span className="font-medium">Get in Touch</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;