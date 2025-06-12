
export const MAX_TAGS_DISPLAY = 3;

export interface Project {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  status?: "development" | "live" | "completed";
  coverImage?: string;
  hoverLabel?: string;
  liveLink?: string;
  codeLink?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform Security",
    description:
      "Comprehensive penetration test of a major e-commerce platform. Found critical SQL injection vulnerabilities in login portal and checkout page, and exploited unsecured API endpoints that exposed user PII.",
    tags: ["Burp Suite", "SQLMap", "ZAP", "OWASP", "XSS"],
    year: "2024",
    status: "completed",
    coverImage: "/threat.png",
    hoverLabel: "Web Application Penetration Testing",
    codeLink: "#",
    liveLink: "#",
  },
  {
    title: "Enterprise LAN Assessment",
    description:
      "Network penetration test for a corporate environment. Identified open SMB shares, gained domain admin access via misconfigured RDP, and mapped the internal network to discover unpatched Windows Servers.",
    tags: ["Nmap", "Metasploit", "Wireshark", "Nessus"],
    year: "2024",
    status: "completed",
    coverImage: "/threat.png",
    hoverLabel: "Network Penetration Testing",
    codeLink: "#",
    liveLink: "#",
  },
  {
    title: "TryHackMe & HTB Challenges",
    description:
      "Completed numerous Capture The Flag challenges on popular platforms, earning badges and demonstrating practical skills in various attack scenarios. Solved real-world attack simulations in lab environments.",
    tags: ["CTF", "Kali Linux", "Python", "Metasploit"],
    year: "2023-2024",
    status: "live",
    coverImage: "/threat.png",
    hoverLabel: "Capture The Flag Achievements",
    liveLink: "https://app.hackthebox.com/profile/Raptor20",
    codeLink: "#",
  },
  {
    title: "Security Compliance Framework",
    description:
      "Developed and implemented a customized security compliance framework for a financial services client, aligning with ISO 27001 and local regulatory requirements. Created security policies and procedures.",
    tags: ["ISO 27001", "NIST", "Documentation", "Auditing"],
    year: "2023",
    status: "completed",
    coverImage: "/threat.png",
    hoverLabel: "Security Governance & Compliance",
    codeLink: "#",
    liveLink: "#",
  },
];
export const tagIcons: Record<string, React.ReactNode> = {
  "Burp Suite": <span className="text-orange-500">🔍</span>,
  SQLMap: <span className="text-red-500">💉</span>,
  ZAP: <span className="text-yellow-500">🔨</span>,
  OWASP: <span className="text-blue-500">🛡️</span>,
  XSS: <span className="text-purple-500">📝</span>,
  Nmap: <span className="text-green-500">🔎</span>,
  Metasploit: <span className="text-red-500">🧰</span>,
  Wireshark: <span className="text-blue-400">📊</span>,
  Nessus: <span className="text-green-400">🔍</span>,
  CTF: <span className="text-yellow-500">🚩</span>,
  "Kali Linux": <span className="text-blue-500">🐉</span>,
  Python: <span className="text-yellow-400">🐍</span>,
  "ISO 27001": <span className="text-blue-500">📘</span>,
  NIST: <span className="text-green-500">📋</span>,
  Documentation: <span className="text-gray-400">📄</span>,
  Auditing: <span className="text-yellow-600">🔍</span>,
};