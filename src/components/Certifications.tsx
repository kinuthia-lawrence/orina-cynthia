import React from "react";
import { FaCertificate, FaUniversity } from "react-icons/fa";
import { SiCisco, SiComptia } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";

const CertificationCard = ({ title, issuer, date, icon }: { 
  title: string; 
  issuer: string; 
  date: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-800/50 group">
    <div className="flex items-start">
      <div className="mr-4 text-3xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-medium mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{issuer}</p>
        <p className="text-blue-400/80 text-xs mt-2">{date}</p>
      </div>
    </div>
  </div>
);

const Certifications: React.FC = () => (
  <section id="certifications" className="py-10 px-4 md:px-24 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500 rounded-full filter blur-[130px] opacity-10"></div>
    
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full">
          <span className="text-blue-400 font-medium tracking-wide text-sm">
            CREDENTIALS
          </span>
        </div>
        <h2 className="text-4xl font-bold mt-4 mb-4">
          Certifications &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <p className="max-w-2xl text-gray-400">
          Professional qualifications that validate my expertise in cybersecurity tools, methodologies, and best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <TbCertificate className="mr-3 text-blue-500" />
            Professional Certifications
          </h3>
          <div className="space-y-4">
            <CertificationCard 
              title="Cisco CyberOps Associate" 
              issuer="Cisco" 
              date="2024"
              icon={<SiCisco />}
            />
            <CertificationCard 
              title="Cloud Security, Networking, Ethical Hacking" 
              issuer="Cisco" 
              date="2023"
              icon={<SiCisco />}
            />
            <CertificationCard 
              title="Introduction to Cybersecurity" 
              issuer="Cisco" 
              date="2023"
              icon={<SiCisco />}
            />
            <CertificationCard 
              title="CompTIA Security+ (in progress)" 
              issuer="CompTIA" 
              date="Expected 2025"
              icon={<SiComptia />}
            />
            <CertificationCard 
              title="OSCP (Planned)" 
              issuer="Offensive Security" 
              date="Planned 2026"
              icon={<FaCertificate />}
            />
            <CertificationCard 
              title="Cybersecurity and Emerging Technologies Awareness" 
              issuer="Training Certificate" 
              date="2023"
              icon={<TbCertificate />}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <FaUniversity className="mr-3 text-green-500" />
            Education
          </h3>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
            <h3 className="text-xl text-white font-medium mb-3">BSc. Computer Science</h3>
            <p className="text-green-400 mb-1">Cybersecurity Track</p>
            <p className="text-gray-400 text-sm mb-4">Chuka University</p>
            
            <div className="mt-6 border-t border-gray-800 pt-4">
              <h4 className="text-lg text-white mb-3">Key Coursework:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Network Security
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Ethical Hacking
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Digital Forensics
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Cryptography
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Security Compliance
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Secure Software Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;