import React from "react";
import { FaDiscord, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHackthebox } from "react-icons/si";

const Contact: React.FC = () => {
  const email = "cynthiabon5002@gmail.com";

  return (
    <section id="contact" className="relative py-6 px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500 rounded-full filter blur-[120px] opacity-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-block px-4 py-1 bg-green-900/30 rounded-full">
            <span className="text-green-400 font-medium tracking-wide text-sm">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl font-bold mt-4 mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="max-w-lg text-gray-400">
            Looking for a security assessment or consultation? I'm available for
            freelance penetration testing, vulnerability assessments, and
            cybersecurity analyst roles.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-800/20 rounded-2xl transform -rotate-1 scale-[1.03]"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-sm p-10 rounded-xl border border-green-700/30 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left column: Get in touch message */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    I'm currently available for freelance security work,
                    internships, and analyst roles. Let's secure
                    systems—together.
                  </p>

                  <div className="mt-8 p-6 border border-blue-500/20 rounded-xl bg-gray-900/50">
                    <p className="text-gray-300 italic">
                      "I break systems to make them unbreakable. My goal is to
                      discover vulnerabilities before attackers do, helping
                      organizations build true cyber resilience."
                    </p>
                  </div>
                </div>

                {/* Right column: Contact methods */}
                <div className="space-y-6">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center p-4 border border-gray-800 rounded-lg hover:border-blue-500/50 hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-900/30 group-hover:bg-blue-900/50 transition-colors">
                      <FaEnvelope className="text-blue-400 text-xl" />
                    </div>
                    <div className="ml-4 overflow-hidden">
                      <p className="text-sm text-gray-400">Email</p>
                      <p
                        className="text-white group-hover:text-blue-400 transition-colors truncate"
                        title={email}
                      >
                        {email}
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/message/+254703779459"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-4 border border-gray-800 rounded-lg hover:border-green-500/50 hover:bg-gray-800/50 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-900/30 group-hover:bg-green-900/50 transition-colors">
                      <FaWhatsapp className="text-green-400 text-xl" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="text-white group-hover:text-green-400 transition-colors">
                        (+254) 703 779 459
                      </p>
                    </div>
                  </a>

                  <div className="pt-6">
                    <p className="text-sm font-medium text-gray-400 mb-4">
                      Or connect with me on:
                    </p>
                    <div className="flex flex-col space-y-4">
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-blue-900/30 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <FaXTwitter className="text-xl group-hover:text-blue-400" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-blue-400">
                          dagal.dê laqueen
                        </span>
                      </a>
                      <a
                        href="https://app.hackthebox.com/profile/Raptor20"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-green-900/30 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <SiHackthebox className="text-xl group-hover:text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-green-400">
                          HackTheBox: Raptor20
                        </span>
                      </a>
                      <a
                        href="https://www.github.com/cynthia-orina"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-green-900/30 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <FaGithub className="text-xl group-hover:text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-green-400">
                          github.com/cyntia-orina
                        </span>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 hover:bg-blue-900/30 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <FaDiscord className="text-xl group-hover:text-blue-400" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-blue-400">
                          theraptor_35218
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formal approach section */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Ready to discuss your security needs? Send me a message!
            </p>
            <div className="inline-flex items-center justify-center border rounded-full border-green-500 p-0.5">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r border border-white rounded-full from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                <FaEnvelope className="mr-2" />
                <span className="font-medium">Request Security Assessment</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
