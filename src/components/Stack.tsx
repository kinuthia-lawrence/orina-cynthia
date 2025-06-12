import React from "react";
import { FaLinux } from "react-icons/fa";
import {
  SiKalilinux,
  SiWireshark,
  SiPython,
  SiGnubash,
  SiSplunk,
  SiBurpsuite
} from "react-icons/si";
import { 

  TbBrandPowershell, 
  TbHexagon 
} from "react-icons/tb";
import { GiHook } from "react-icons/gi";

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
}

const TechItem = ({ icon, name }: TechItemProps) => (
  <div className="flex flex-col items-center group">
    <div className="relative w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
      <div className="absolute inset-0 border-2 border-green-500 rounded-xl opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
      {/* Inner content with white border */}
      <div className="relative w-[90%] h-[90%] flex items-center justify-center border-2 border-white rounded-lg bg-gray-900/50">
        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
    </div>
    <span className="mt-2 text-xs font-medium text-gray-300">{name}</span>
  </div>
);

const Stack = () => {
  const technologies = [
    { icon: <SiBurpsuite className="text-orange-500" />, name: "Burp Suite" },
    { icon: <FaLinux className="text-green-400" />, name: "Nmap" },
    { icon: <TbHexagon className="text-red-500" />, name: "Metasploit" },
    { icon: <SiWireshark className="text-blue-400" />, name: "Wireshark" },
    { icon: <SiPython className="text-yellow-300" />, name: "Python" },
    { icon: <SiSplunk className="text-green-500" />, name: "Splunk" },
    { icon: <SiKalilinux className="text-blue-400" />, name: "Kali Linux" },
    { icon: <GiHook className="text-red-400" />, name: "Cobalt Strike" },
    { icon: <SiGnubash className="text-green-300" />, name: "Bash" },
    { icon: <TbBrandPowershell className="text-blue-500" />, name: "PowerShell" },
    { icon: <FaLinux className="text-white" />, name: "Impacket" },
    { icon: <FaLinux className="text-blue-500" />, name: "Azure Sentinel" },
    { icon: <TbHexagon className="text-purple-500" />, name: "Ghidra" },
    { icon: <SiWireshark className="text-yellow-500" />, name: "Zap" },
    { icon: <FaLinux className="text-white" />, name: "SQLMap" },
    { icon: <TbHexagon className="text-green-400" />, name: "Nessus" },
    { icon: <TbHexagon className="text-orange-500" />, name: "PfSense" },
    { icon: <TbHexagon className="text-blue-300" />, name: "Hydra" },
    { icon: <TbHexagon className="text-yellow-400" />, name: "Nikto" },
    { icon: <SiPython className="text-purple-400" />, name: "CSRF Tools" },
    { icon: <TbHexagon className="text-red-400" />, name: "XSS Frameworks" },
  ];

  return (
    <section className="py-4 px-4 bg-black/30 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-1 text-center">
          <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full">
            <span className="text-blue-400 font-medium tracking-wide text-sm">
              SECURITY TOOLS
            </span>
          </div>
        </div>

        {/* Continuous scrolling container with two rows */}
        <div className="overflow-hidden">
          {/* First row - left to right */}
          <div className="overflow-hidden w-full py-4 mb-2">
            <div className="infinite-scroll-left flex">
              {[...technologies, ...technologies].map((tech, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 mx-3">
                  <TechItem icon={tech.icon} name={tech.name} />
                </div>
              ))}
            </div>
          </div>
          {/* Second row - right to left (opposite direction) */}
          <div className="overflow-hidden w-full py-2">
            <div className="infinite-scroll-right flex">
              {[...technologies, ...technologies]
                .reverse()
                .map((tech, index) => (
                  <div key={`row2-${index}`} className="flex-shrink-0 mx-3">
                    <TechItem icon={tech.icon} name={tech.name} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;