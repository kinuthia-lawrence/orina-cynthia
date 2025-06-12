import React from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHackthebox } from "react-icons/si";

const About: React.FC = () => (
  <section id="about" className="relative pt-24 pb-8 px-4 md:px-36 bg-black/90 text-white overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div>
    <div className="absolute bottom-40 right-10 w-64 h-64 bg-green-500 rounded-full filter blur-[130px] opacity-10"></div>
    
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Left column: Profile image and branding */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start">
          <div className="relative group">
            {/* Image decorative border */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
            <div className="relative">
              <img
                src="/Backgroundless.png"
                alt="Cynthia Orina"
                className="w-36 h-36 rounded-full border-4 border-white object-cover z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className="mt-6 text-center md:text-left">
            <div className="font-bold text-xl text-white">
              Rap<span className="text-black bg-white px-1 ml-0.5">tor</span>
            </div>
            <p className="text-blue-400 font-medium text-sm mt-1">Breaking systems, building security</p>
          </div>
        </div>

        {/* Middle column: About text */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">
              Hi, I'm Cynthia{" "}
              <span className="text-sm font-light text-gray-400 block md:inline mt-1 md:mt-0 md:ml-2">[Cybersecurity Specialist]</span>
            </h2>
            <div className="h-1 w-30 bg-gradient-to-r from-black via-green-500 to-black my-4 mx-auto md:mx-0"></div>
            <p className="text-gray-300 mt-4 leading-relaxed">
              I'm a passionate Cybersecurity Analyst with a focus on website and network penetration testing. I break systems to make them unbreakable.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              With expertise in vulnerability assessment, penetration testing, threat hunting, and security compliance, I help organizations build cyber resilience that withstands modern threats.
            </p>
          </div>
        </div>

        {/* Right column: Social links and copyright */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end gap-8">
          {/* Social links with double borders */}
          <div className="grid grid-cols-3 gap-4">
            <a href="#" className="social-link group">
              <div className="relative">
                {/* Outer border */}
                <div className="absolute inset-0 border-2 border-green-500 rounded-lg opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                {/* Inner content with white border */}
                <div className="relative m-0.5 flex items-center justify-center border border-white rounded-md bg-gray-900/50 p-2 group-hover:bg-gray-900 transition-all duration-300">
                  <FaDiscord className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                </div>
              </div>
              <span className="mt-1 text-xs text-center block text-gray-400 group-hover:text-blue-400 transition-colors duration-300">Discord</span>
            </a>
            
            <a href="mailto:cynthiabon5002@gmail.com" target="_blank" className="social-link group">
              <div className="relative">
                {/* Outer border */}
                <div className="absolute inset-0 border-2 border-blue-500 rounded-lg opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                {/* Inner content with white border */}
                <div className="relative m-0.5 flex items-center justify-center border border-white rounded-md bg-gray-900/50 p-2 group-hover:bg-gray-900 transition-all duration-300">
                  <FaEnvelope className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                </div>
              </div>
              <span className="mt-1 text-xs text-center block text-gray-400 group-hover:text-blue-400 transition-colors duration-300">Email</span>
            </a>
            
            <a href="https://app.hackthebox.com/profile/Raptor20" target="_blank" className="social-link group">
              <div className="relative">
                {/* Outer border */}
                <div className="absolute inset-0 border-2 border-green-500 rounded-lg opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                {/* Inner content with white border */}
                <div className="relative m-0.5 flex items-center justify-center border border-white rounded-md bg-gray-900/50 p-2 group-hover:bg-gray-900 transition-all duration-300">
                  <SiHackthebox className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                </div>
              </div>
              <span className="mt-1 text-xs text-center block text-gray-400 group-hover:text-green-400 transition-colors duration-300">HTB</span>
            </a>
            
            <a href="https://www.github.com/cynthia-orina" target="_blank" className="social-link group">
              <div className="relative">
                {/* Outer border */}
                <div className="absolute inset-0 border-2 border-blue-500 rounded-lg opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                {/* Inner content with white border */}
                <div className="relative m-0.5 flex items-center justify-center border border-white rounded-md bg-gray-900/50 p-2 group-hover:bg-gray-900 transition-all duration-300">
                  <FaGithub className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                </div>
              </div>
              <span className="mt-1 text-xs text-center block text-gray-400 group-hover:text-blue-400 transition-colors duration-300">Github</span>
            </a>
            
            <a href="https://wa.me/message/+254703779459" target="_blank" className="social-link group">
              <div className="relative">
                {/* Outer border */}
                <div className="absolute inset-0 border-2 border-green-500 rounded-lg opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                {/* Inner content with white border */}
                <div className="relative m-0.5 flex items-center justify-center border border-white rounded-md bg-gray-900/50 p-2 group-hover:bg-gray-900 transition-all duration-300">
                  <FaWhatsapp className="text-green-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                </div>
              </div>
              <span className="mt-1 text-xs text-center block text-gray-400 group-hover:text-green-400 transition-colors duration-300">WhatsApp</span>
            </a>
            <a href="https://x.com/dagal_laqueen" target="_blank" className="social-link group">
              <div className="relative">
                {/* Outer border */}
                <div className="absolute inset-0 border-2 border-blue-500 rounded-lg opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                {/* Inner content with white border */}
                <div className="relative m-0.5 flex items-center justify-center border border-white rounded-md bg-gray-900/50 p-2 group-hover:bg-gray-900 transition-all duration-300">
                  <FaXTwitter className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                </div>
              </div>
              <span className="mt-1 text-xs text-center block text-gray-400 group-hover:text-blue-400 transition-colors duration-300">X</span>
            </a>
            
          </div>
          
          {/* Copyright */}
          <div className="mt-8 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2">
              <span className="text-gray-400 text-sm">© 2025 Cynthia B. All rights reserved.</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70"
              >
                <path
                  d="M5 3H11V11H5V3ZM13 3H19V5H15V9H13V3ZM5 13H9V15H3V19H5V15H9V21H5V19H3V13H5ZM19 13H21V21H13V19H19V13Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 opacity-70"></div>
  </section>
);

export default About;