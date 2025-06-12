import { Github} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { SiHackthebox } from "react-icons/si";

const Hero: React.FC = () => (
  <section className="relative md:h-[85vh] overflow-hidden md:pl-36 pt-10 md:pt-4 px-4 md:px-24 flex items-center">
    {/* Background decorative elements */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full filter blur-[120px] opacity-20"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px] opacity-20"></div>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Content column */}
      <div className="flex flex-col justify-center space-y-2 md:space-y-4 md:not-visited:space-y-8">
        <div className="space-y-3">
          {/* Role badge with hover effect */}
          <div className="relative inline-flex group p-0.5">
            {/* Outer border */}
            <div className="absolute inset-0 border-2 border-green-500 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300"></div>

            {/* Inner content with white border */}
            <div className="relative m-0.5 px-4 py-1 bg-blue-900/30 border border-white rounded-full">
              <span className="text-green-400 font-medium tracking-wide text-sm">
                CYBERSECURITY ANALYST
              </span>
            </div>
            {/* Version superscript */}
            <div className="absolute -top-6 -right-12">
              <span className="text-xs text-gray-600 font-mono">v1.0.0</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold mt-2 mb-1 md:mt-4 md:mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Cynthia Orina.
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A Cybersecurity Analyst specializing in penetration testing, ethical hacking, and building secure systems.
          </p>
        </div>
        {/* Call to action buttons */}
        <div className="flex space-x-5 pt-2 md:pt-4">
          {/* Hire Me button with gradient */}
          <div className="relative group flex items-center justify-center p-0.5">
            {/* Outer border with animation */}
            <div className="absolute inset-0 border-2 border-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300"></div>

            {/* Inner button with gradient */}
            <a
              href="#contact"
              className="relative block px-6 py-2.5 m-0.5 bg-gradient-to-r from-blue-400 to-green-600 rounded-full hover:from-blue-600 hover:to-green-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-blue-900/30 font-medium"
            >
              Hire Me
            </a>
          </div>

          {/* GitHub button with white border */}
          <div className="relative group flex items-center justify-center p-0.5">
            {/* Outer border with animation */}
            <div className="absolute inset-0 border-2 border-green-500 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300"></div>

            {/* Inner button with white border */}
            <a
              href="https://app.hackthebox.com/profile/Raptor20"
              target="_blank"
              className="relative block px-6 py-2.5 m-0.5 bg-gray-900/50 border border-white rounded-full transform hover:-translate-y-1 hover:bg-gray-800 transition-all duration-200 font-medium"
            >
              Hack The Box
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center space-x-6 pt-4 md:pt-6 ">
          <div className="text-gray-400 text-sm">Connect with me</div>
          <div className="h-px bg-gray-700 flex-grow"></div>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <SiHackthebox className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/dagal_laqueen"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://app.hackthebox.com/profile/Raptor20"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Image column with effects */}
      <div className="relative flex items-center justify-center">
        {/* Image glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full filter blur-3xl transform rotate-12 scale-110"></div>

        {/* Image container with subtle animation */}
        <div className="relative z-10 animate-float">
          <img
            src="/image.png"
            alt="Cynthia Orina."
            className="object-cover max-h-[380px] md:max-h-[600px] filter drop-shadow-2xl rounded-2xl"
          />

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-500/30 rounded-lg transform rotate-12"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-green-500/30 rounded-lg transform -rotate-12"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;