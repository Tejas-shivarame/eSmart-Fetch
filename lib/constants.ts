import {
  Award,
  Brain,
  Building2,
  Cable,
  Cloud,
  Code2,
  Cpu,
  Database,
  Facebook,
  Fan,
  Flame,
  Globe,
  HardDrive,
  Instagram,
  Linkedin,
  Monitor,
  Network,
  Package,
  Rocket,
  Router,
  Server,
  ShieldCheck,
  Smartphone,
  Target,
  Twitter,
  Users,
  Video,
  Zap,
} from "lucide-react";

import type {
  NavLink,
  StatItem,
  FeatureCardData,
  RegionNode,
  FooterLinkGroup,
  ValuePillarData,
  MissionPoint,
  CompanyInfo,
  SocialLink,
} from "@/types";


export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY: CompanyInfo = {
  phone: "+919916172599",
  phoneDisplay: "9916172599",
  email: "sales@smart-fetch.com",
  since: "2025",
  locations: [
    {
      label: "Office",
      address:
        "No.10, Ground floor, Kalkere Main Road, Near Underpass, Anjanappa Layout, Horamavu, Bangalore - 560043",
    },
    { label: "Godown", address: "R.M. Nagar, Bangalore" },
  ],
   gstin: "GST"
};

export const MISSION_POINTS: MissionPoint[] = [
  { text: "Integrating hardware, software, and human expertise" },
  { text: "Benchmarking against global security standards" },
  { text: "Delivering true end-to-end, turnkey execution" },
  { text: "Backing every install with 24/7 responsive support" },
];

export const TRACK_RECORD: StatItem[] = [
  { label: "Enterprise Deployments", value: "120+", accent: "blue" },
  { label: "Cities Served Nationwide", value: "18+", accent: "purple" },
  { label: "Avg. Callout Response", value: "<4hrs" },
  { label: "Client Retention", value: "94%" },
];

export const WHY_CARDS: ValuePillarData[] = [
  {
    icon: Users,
    title: "Employee Centric",
    description: "A flexible, responsive team driving growth from the ground up.",
    accent: "blue",
  },
  {
    icon: Award,
    title: "World Class Quality",
    description: "Solutions engineered to standards that compare with the best in the world.",
    accent: "purple",
  },
  {
    icon: Target,
    title: "Client Focused",
    description: "Serving everyone from small businesses to large enterprises, on their terms.",
    accent: "blue",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Built to adapt as technology and economic conditions evolve.",
    accent: "purple",
  },
];

export const FOUNDATIONAL_STATS: StatItem[] = TRACK_RECORD;
export const VALUE_PILLARS: ValuePillarData[] = WHY_CARDS;

export const HERO_STATS: StatItem[] = [
  { label: "Latency", value: "<2ms" },
  { label: "Uptime", value: "99.99%" },
  { label: "Nodes", value: "14.2k" },
  { label: "Throughput", value: "PB/s" },
];

export const TRUSTED_COMPANIES = [


  { name: "ISS", image: "/companies/iss.png" },
  { name: "Oculus Design Studio", image: "/companies/oculus-design-studio.png" },
  { name: "Aditya Birla Group", image: "/companies/aditya-birla.png" },
  { name: "Hitachi", image: "/companies/hitachi.png" },
  { name: "ABB", image: "/companies/abb.png" },
  { name: "Bosch", image: "/companies/bosch.png" },
  { name: "Siemens", image: "/companies/siemens.png" },
  { name: "Honeywell", image: "/companies/honeywell.png" },
];


export const FEATURE_CARDS: FeatureCardData[] = [
  {
    icon: Zap,
    title: "Elastic Scaling",
    description:
      "Automatically expand your infrastructure as demand peaks, ensuring no packet is ever dropped.",
    accent: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Quantum Guard",
    description:
      "Zero-trust architecture built on post-quantum cryptographic standards for total security.",
    accent: "purple",
  },
  {
    icon: Code2,
    title: "API First",
    description:
      "Designed by developers, for developers. Robust documentation and SDKs across 12 languages.",
    accent: "blue",
  },
];

export const REGION_NODES: RegionNode[] = [
  { id: "us-east-1", label: "US-East-1", status: "active", x: 22, y: 38 },
  { id: "eu-west-2", label: "EU-West-2", status: "syncing", x: 48, y: 28 },
  { id: "ap-south-1", label: "Asia-Pacific", status: "active", x: 78, y: 48 },
];

export const SERVICES: FeatureCardData[] = [
  {
    icon: Video,
    title: "Audio Video Solutions",
    description: "Boardroom AV, conferencing, and public-address systems built for enterprise scale.",
    accent: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Security Surveillance",
    description: "CCTV, access control, and perimeter monitoring with real-time alerting.",
    accent: "purple",
  },
  {
    icon: Flame,
    title: "Fire Safety Systems",
    description: "Detection, suppression, and compliance-ready fire safety engineering.",
    accent: "blue",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Structured cabling, networking, and server rooms built to last.",
    accent: "purple",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];


export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" }, 
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Audio Video Solutions", href: "/services" },
      { label: "Security Surveillance", href: "/services" },
      { label: "Fire Safety Systems", href: "/services" },
      { label: "IT Infrastructure", href: "/services" },
    ],
  },
];export const ENGINEERING_CATEGORIES = [
  {
    title: "Electrical Works",
    icon: Zap,
    groups: [
      {
        heading: "Installation & Lighting",
        items: [
          "Indoor / Outdoor Lighting",
          "Emergency Lighting",
          "LED Lighting Systems",
          "Commercial Wiring",
          "Industrial Wiring",
          "Power Distribution",
        ],
      },
      {
        heading: "Maintenance & Safety",
        items: [
          "Panel Board Maintenance",
          "Earthing & Grounding",
          "Surge Protection",
          "Fault Diagnosis",
          "Preventive Maintenance",
          "Energy Audits",
        ],
      },
    ],
  },

  {
    title: "HVAC & Air Quality",
    icon: Fan,
    groups: [
      {
        heading: "Cooling & Ventilation",
        items: [
          "Split / VRF / Cassette AC",
          "Central Air Conditioning",
          "Ducting & Insulation",
          "Fresh Air Systems",
          "Exhaust Ventilation",
          "Air Balancing",
        ],
      },
      {
        heading: "Maintenance & Optimization",
        items: [
          "AHU / FCU Servicing",
          "Chiller Maintenance",
          "Filter Replacement",
          "Chemical Cleaning",
          "IAQ Testing",
          "Energy Optimization",
        ],
      },
    ],
  },

  {
    title: "Smart Automation",
    icon: Cpu,
    groups: [
      {
        heading: "Automation Systems",
        items: [
          "Smart Lighting",
          "Access Control",
          "Biometric Systems",
          "BMS Controllers",
          "Motion Sensors",
          "Energy Monitoring",
        ],
      },
      {
        heading: "Control Solutions",
        items: [
          "Home Automation",
          "Office Automation",
          "Remote Monitoring",
          "IoT Integration",
          "Smart Scheduling",
          "Centralized Control",
        ],
      },
    ],
  },

  {
    title: "Fire & Life Safety",
    icon: ShieldCheck,
    groups: [
      {
        heading: "Fire Protection",
        items: [
          "Fire Alarm Systems",
          "Sprinkler Systems",
          "Hydrant Systems",
          "Smoke Detectors",
          "Fire Doors",
          "Fire-Rated Cables",
        ],
      },
      {
        heading: "Emergency Safety",
        items: [
          "Fire Extinguishers",
          "Emergency Exit Lights",
          "Evacuation Systems",
          "Safety Audits",
          "AMC Services",
          "Compliance Testing",
        ],
      },
    ],
  },

  {
    title: "Interior Fit-Out",
    icon: Building2,
    groups: [
      {
        heading: "Interior Works",
        items: [
          "False Ceiling",
          "Partition Systems",
          "Flooring",
          "Wall Cladding",
          "Painting",
          "Carpentry",
        ],
      },
      {
        heading: "Finishing",
        items: [
          "Modular Furniture",
          "Glass Partitions",
          "Electrical Fit-Out",
          "Lighting Fixtures",
          "Space Planning",
          "Turnkey Execution",
        ],
      },
    ],
  },

  {
    title: "IT & Networking",
    icon: Network,
    groups: [
      {
        heading: "Network Infrastructure",
        items: [
          "Structured Cabling",
          "LAN / WAN",
          "Wi-Fi Solutions",
          "Fiber Optics",
          "Server Racks",
          "Patch Panels",
        ],
      },
      {
        heading: "IT Services",
        items: [
          "Server Installation",
          "Network Security",
          "Cloud Integration",
          "Data Backup",
          "AMC Support",
          "System Maintenance",
        ],
      },
    ],
  },
];
export const MATERIAL_CATEGORIES = [
  {
    title: "Networking Equipment",
    icon: Router,
    items: [
      "Enterprise Routers",
      "Managed Switches",
      "Wireless Access Points",
      "Network Firewalls",
    ],
  },
  {
    title: "Server Infrastructure",
    icon: Server,
    items: [
      "Rack Servers",
      "Blade Servers",
      "Virtualization",
      "Storage Systems",
    ],
  },
  {
    title: "Computer Hardware",
    icon: Monitor,
    items: [
      "Business Laptops",
      "Desktop Workstations",
      "Mini PCs",
      "Thin Clients",
    ],
  },
  {
    title: "Storage Solutions",
    icon: HardDrive,
    items: [
      "NAS Storage",
      "SAN Storage",
      "SSD Drives",
      "Backup Appliances",
    ],
  },
  {
    title: "Industrial Systems",
    icon: Cpu,
    items: [
      "Industrial PCs",
      "IoT Devices",
      "Embedded Controllers",
      "Automation Hardware",
    ],
  },
  {
    title: "Accessories",
    icon: Package,
    items: [
      "Server Racks",
      "UPS Systems",
      "Patch Panels",
      "Network Cables",
    ],
  },
];
