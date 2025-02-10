import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  EllipsisHorizontalIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  LightBulbIcon,
  PencilSquareIcon,
  PercentBadgeIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  BriefcaseIcon,
  CloudIcon,
  CloudLightningIcon,
  Code2,
  CodeIcon,
  HandshakeIcon,
  LucideCloudLightning,
  MegaphoneIcon,
  ShoppingBagIcon,
} from "lucide-react";

import travelAndHospitality from "/src/images/industries/IndustriesHero/travel-and-hospitality.jpg";
import healthAndWellness from "/src/images/industries/IndustriesHero/health-and-wellness.jpg";
import education from "/src/images/industries/IndustriesHero/education.jpg/";
// import
const industriesObj = [
  {
    name: "Finance & FinTech",
    // description: "Get a better understanding of your traffic",
    href: "/industries/finance-and-fintech",
    icon: ChartPieIcon,
  },
  {
    name: "Travel & Hospitality",
    // description: "Speak directly to your customers",
    href: "/industries/travel-and-hospitality",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Real Estate & Construction",
    // description: "Your customers’ data will be safe and secure",
    href: "/industries/real-estate-and-construction",
    icon: FingerPrintIcon,
  },
  {
    name: "Health & Wellness",
    // description: "Connect with third-party tools",
    href: "/health-and-wellness",
    icon: SquaresPlusIcon,
  },
  {
    name: "Transportation & Logistics",
    // description: "Build strategic funnels that will convert",
    href: "/industries/transportation-and-logistics",
    icon: ArrowPathIcon,
  },
  {
    name: "Professional services",
    // description: "Build strategic funnels that will convert",
    href: "/industries/professional-services",
    icon: ArrowPathIcon,
  },
  {
    name: "Media & Entertainment",
    // description: "Build strategic funnels that will convert",
    href: "/industries/media-and-entertainment",
    icon: ArrowPathIcon,
  },
  {
    name: "Retail & e-Commerce",
    // description: "Build strategic funnels that will convert",
    href: "/industries/retail-and-ecommerce",
    icon: ArrowPathIcon,
  },
  {
    name: "Education",
    // description: "Build strategic funnels that will convert",
    href: "/industries/education",
    icon: ArrowPathIcon,
  },
  {
    name: "Manufacturing",
    // description: "Build strategic funnels that will convert",
    href: "/industries/manufacturing",
    icon: ArrowPathIcon,
  },
  {
    name: "Telecommunications",
    // description: "Build strategic funnels that will convert",
    href: "/industries/telecommunications",
    icon: ArrowPathIcon,
  },
  {
    name: "View All Industries",
    // description: "Build strategic funnels that will convert",
    href: "/industries",
    icon: EllipsisHorizontalIcon,
  },
];

// const financeObj = {
// title: "Finance and Fintech",
// src: "",
// description: ``,
// extendedContent: ``,
// e
// sections: [
//   {
//     title: "Who We Serve",
//     description:
//       "We cater to a variety of financial institutions and service providers.",
//     items: [
//       {
//         name: "Banks",
//         info: "Financial institutions providing banking services.",
//       },
//       {
//         name: "Insurance Companies",
//         info: "Organizations offering risk management through insurance.",
//       },
//       {
//         name: "Lending Companies",
//         info: "Firms that provide loans to individuals and businesses.",
//       },
//       {
//         name: "Payment Service Providers",
//         info: "Companies facilitating electronic payments.",
//       },
//       {
//         name: "Investment Companies",
//         info: "Firms that manage investments for clients.",
//       },
//       {
//         name: "Fintech Startups",
//         info: "Emerging companies leveraging technology for financial services.",
//       },
//       {
//         name: "Defi Companies",
//         info: "Decentralized finance firms offering blockchain-based services.",
//       },
//       {
//         name: "Financial Software Product Companies",
//         info: "Businesses developing software for financial applications.",
//       },
//     ],
//   },
//   {
//     title: "Financial Services and Solutions We Specialize In",
//     description:
//       "Our expertise spans across various financial systems and solutions.",
//     items: [
//       {
//         name: "Underwriting Automation Systems",
//         info: "Software to automate underwriting processes.",
//       },
//       {
//         name: "Insurance Claims Processing Systems",
//         info: "Tools to manage and process insurance claims.",
//       },
//       {
//         name: "Policy Administrative Systems",
//         info: "Software for handling policy administration tasks.",
//       },
//       {
//         name: "Actuarial Software",
//         info: "Applications for actuarial calculations and risk assessment.",
//       },
//       {
//         name: "Loan Management Software",
//         info: "Solutions for tracking and managing loans.",
//       },
//       {
//         name: "Debt Collection Systems",
//         info: "Tools for managing debt recovery processes.",
//       },
//       {
//         name: "Treasury Software",
//         info: "Applications for managing treasury operations.",
//       },
//       {
//         name: "Payment Gateways",
//         info: "Platforms for processing online payments securely.",
//       },
//       {
//         name: "Payment Orchestration Software",
//         info: "Solutions to streamline payment processing.",
//       },
//       {
//         name: "Investor Relationship Management Software",
//         info: "Tools for managing investor relations effectively.",
//       },
//       {
//         name: "Investment Platforms",
//         info: "Online platforms for managing investments.",
//       },
//     ],
//   },
//   {
//     title: "Customer-Facing Apps",
//     description: "We develop apps designed to enhance customer experiences.",
//     items: [
//       {
//         name: "Mobile Banking Apps",
//         info: "Applications for mobile banking services.",
//       },
//       {
//         name: "Insurance Apps",
//         info: "Apps to manage insurance policies and claims.",
//       },
//       { name: "Lending Apps", info: "Applications for facilitating loans." },
//       {
//         name: "Buy Now Pay Later Apps",
//         info: "Apps offering flexible payment options.",
//       },
//       {
//         name: "Payment Apps",
//         info: "Applications for secure and easy transactions.",
//       },
//       {
//         name: "Money Transfer Apps",
//         info: "Apps designed for fast and secure money transfers.",
//       },
//       {
//         name: "Investor Portals",
//         info: "Platforms for investors to manage their portfolios.",
//       },
//       {
//         name: "Crypto Wallets",
//         info: "Applications for managing cryptocurrency assets.",
//       },
//     ],
//   },
//   {
//     title: "Software For General Business Administration",
//     description:
//       "We provide versatile software solutions for business operations.",
//     items: [
//       { name: "CRM", info: "Customer Relationship Management software." },
//       {
//         name: "Accounting Software",
//         info: "Tools for managing financial accounts.",
//       },
//       {
//         name: "Document Management Software",
//         info: "Software for organizing and managing documents.",
//       },
//       {
//         name: "Human Resource Management Systems",
//         info: "Applications for HR management.",
//       },
//       {
//         name: "Corporate ERPs",
//         info: "Enterprise Resource Planning software for businesses.",
//       },
//     ],
//   },
// ]
// }

const travelObj = {
  title: "Travel and Hospitality",
  src: travelAndHospitality,
  sections: [
    {
      title: "Who We Serve",
      description:
        "We support businesses in the travel and hospitality industry.",
      items: [
        {
          name: "Hotels & Resorts",
          info: "Luxury, boutique, and chain hotels managing guest experiences.",
        },
        {
          name: "Travel Agencies",
          info: "Organizations planning and booking travel itineraries.",
        },
        {
          name: "Airlines & Cruise Lines",
          info: "Companies providing air and sea travel services.",
        },
      ],
    },
    {
      title: "Guest Experience Solutions",
      description: "Innovative solutions to elevate guest satisfaction.",
      items: [
        {
          name: "Mobile Check-In Apps",
          info: "Apps for seamless, contactless guest services.",
        },
        {
          name: "Personalized Recommendation Engines",
          info: "AI tools for tailored travel suggestions.",
        },
      ],
    },
    {
      title: "Operational Efficiency Tools",
      description:
        "Optimizing operations in the travel and hospitality sector.",
      items: [
        {
          name: "Property Management Systems",
          info: "Software for managing hotel operations.",
        },
        {
          name: "Reservation Platforms",
          info: "Solutions for booking management.",
        },
        {
          name: "Staff Scheduling Tools",
          info: "Applications for efficient workforce management.",
        },
      ],
    },
    {
      title: "Marketing and Engagement Platforms",
      description: "Driving customer engagement through targeted marketing.",
      items: [
        {
          name: "Loyalty Programs",
          info: "Tools to manage customer loyalty rewards.",
        },
        {
          name: "Social Media Integration Tools",
          info: "Platforms for seamless social media marketing.",
        },
        {
          name: "Feedback and Review Management",
          info: "Solutions to manage customer feedback effectively.",
        },
      ],
    },
  ],
};

const healthObj = {
  title: "Health and Wellness",
  src: healthAndWellness,
  sections: [
    {
      title: "Healthcare Providers",
      description: "Supporting hospitals, clinics, and healthcare networks.",
      items: [
        {
          name: "Hospitals & Clinics",
          info: "Facilities providing medical treatment and services.",
        },
        {
          name: "Telemedicine Platforms",
          info: "Virtual healthcare consultation services.",
        },
        {
          name: "Pharmaceutical Companies",
          info: "Organizations involved in drug development and distribution.",
        },
      ],
    },
    {
      title: "Patient-Centric Solutions",
      description: "Improving patient care through technology.",
      items: [
        {
          name: "Health Monitoring Apps",
          info: "Mobile apps for tracking health metrics.",
        },
        {
          name: "Electronic Health Records",
          info: "Systems for managing patient medical histories.",
        },
      ],
    },
    {
      title: "Healthcare Administration Tools",
      description: "Streamlining healthcare administrative processes.",
      items: [
        {
          name: "Hospital Management Systems",
          info: "Software for managing hospital operations.",
        },
        {
          name: "Billing and Coding Software",
          info: "Tools for efficient medical billing.",
        },
        {
          name: "Inventory Management for Healthcare",
          info: "Solutions for tracking medical supplies.",
        },
      ],
    },
    {
      title: "Wellness and Fitness Applications",
      description: "Promoting health and wellness through technology.",
      items: [
        {
          name: "Fitness Tracking Apps",
          info: "Applications for monitoring physical activity.",
        },
        {
          name: "Mental Health Platforms",
          info: "Tools to support mental health and well-being.",
        },
        {
          name: "Nutrition Management Apps",
          info: "Apps for managing diet and nutrition.",
        },
      ],
    },
  ],
};

const manufacturingObj = {
  title: "Manufacturing",
  sections: [
    {
      title: "Production Management",
      description: "Optimizing manufacturing processes for efficiency.",
      items: [
        {
          name: "Manufacturing Execution Systems",
          info: "Tools for managing production operations.",
        },
        {
          name: "Supply Chain Management",
          info: "Software to streamline supply chain processes.",
        },
        {
          name: "Inventory Control Systems",
          info: "Applications for tracking and managing inventory.",
        },
      ],
    },
    {
      title: "Quality Assurance Solutions",
      description: "Ensuring product quality through advanced tools.",
      items: [
        {
          name: "Inspection Software",
          info: "Tools for product quality inspection.",
        },
        {
          name: "Defect Tracking Systems",
          info: "Applications to monitor and address defects.",
        },
      ],
    },
    {
      title: "Workforce Management",
      description: "Enhancing productivity with effective workforce tools.",
      items: [
        {
          name: "Employee Scheduling Software",
          info: "Tools for managing employee shifts and schedules.",
        },
        {
          name: "Training and Development Platforms",
          info: "Solutions for workforce skill development.",
        },
      ],
    },
    {
      title: "Data Analytics and Reporting",
      description: "Leveraging data for smarter manufacturing decisions.",
      items: [
        {
          name: "Real-Time Analytics Tools",
          info: "Software for live production data analysis.",
        },
        {
          name: "Business Intelligence Platforms",
          info: "Tools for advanced data reporting and insights.",
        },
      ],
    },
  ],
};

const educationObj = {
  title: "Education",
  src: education,
  sections: [
    {
      title: "Learning Management Systems",
      description:
        "Platforms to manage educational content and track progress.",
      items: [
        {
          name: "Virtual Classrooms",
          info: "Environments for online learning and collaboration.",
        },
        {
          name: "Assessment Tools",
          info: "Applications for quizzes and exams.",
        },
        {
          name: "Content Authoring Tools",
          info: "Software to create educational materials.",
        },
      ],
    },
    {
      title: "Student Engagement Platforms",
      description: "Technologies to enhance student participation.",
      items: [
        {
          name: "Gamified Learning Apps",
          info: "Games designed to make learning fun and engaging.",
        },
        {
          name: "Discussion Forums",
          info: "Spaces for academic discussions and peer learning.",
        },
      ],
    },
    {
      title: "Administration Solutions",
      description:
        "Streamlining administrative tasks for educational institutions.",
      items: [
        {
          name: "Enrollment Management Software",
          info: "Tools for handling student admissions.",
        },
        {
          name: "Attendance Tracking Systems",
          info: "Applications to monitor student attendance.",
        },
      ],
    },
    {
      title: "Research and Development Tools",
      description: "Supporting academic research through advanced technology.",
      items: [
        {
          name: "Data Analysis Software",
          info: "Tools for conducting academic research.",
        },
        {
          name: "Reference Management Tools",
          info: "Applications to organize and manage research references.",
        },
      ],
    },
  ],
};

const realEstateObj = {
  title: "Real Estate & Construction",
  src: "",
  description: "Transforming Property Management with Smart Tech Solutions",
  extendedContent: `We empower real estate and construction businesses with cutting-edge digital solutions. From property management platforms to construction project optimization tools, we help streamline operations, enhance marketing strategies, and improve financial management for seamless growth.`,
  sections: [
    {
      title: "Property Management",
      description: "Solutions to manage properties efficiently.",
      items: [
        {
          name: "Real Estate CRM",
          info: "Tools to manage client relationships and property listings.",
        },
        {
          name: "Lease Management Software",
          info: "Applications to handle lease agreements and renewals.",
        },
        {
          name: "Building Maintenance Systems",
          info: "Software to schedule and track maintenance activities.",
        },
      ],
    },
    {
      title: "Construction Project Management",
      description: "Optimizing construction workflows and project timelines.",
      items: [
        {
          name: "Project Scheduling Tools",
          info: "Software to plan and manage construction projects.",
        },
        {
          name: "Resource Allocation Systems",
          info: "Tools for managing construction resources effectively.",
        },
      ],
    },
    {
      title: "Marketing & Sales Platforms",
      description: "Boosting real estate sales and marketing efforts.",
      items: [
        {
          name: "Virtual Tour Software",
          info: "Applications for showcasing properties virtually.",
        },
        {
          name: "Lead Generation Tools",
          info: "Platforms to attract potential buyers and renters.",
        },
      ],
    },
    {
      title: "Financial Management Solutions",
      description: "Handling finances for real estate businesses.",
      items: [
        {
          name: "Property Accounting Software",
          info: "Tools for managing property-related finances.",
        },
        {
          name: "Investment Analysis Tools",
          info: "Applications to analyze real estate investments.",
        },
      ],
    },
  ],
};

// data/transportation.js
const transportationObj = {
  title: "Transportation & Logistics",
  src: "",
  description: "Driving Efficiency Through Advanced Technology",
  extendedContent: `Revolutionize your logistics and transportation operations with our innovative IT solutions. We specialize in fleet management systems, supply chain optimization tools, and real-time tracking technologies that improve route efficiency, reduce costs, and ensure regulatory compliance.`,
  sections: [
    {
      title: "Fleet Management",
      description: "Tools to manage and optimize vehicle fleets.",
      items: [
        {
          name: "GPS Tracking Systems",
          info: "Real-time tracking of vehicles and routes.",
        },
        {
          name: "Fleet Maintenance Software",
          info: "Applications to schedule and track vehicle maintenance.",
        },
      ],
    },
    {
      title: "Supply Chain Optimization",
      description: "Improving supply chain efficiency and transparency.",
      items: [
        {
          name: "Logistics Management Systems",
          info: "Software to streamline logistics operations.",
        },
        {
          name: "Warehouse Management Tools",
          info: "Applications for inventory control and storage optimization.",
        },
      ],
    },
    {
      title: "Route Planning Solutions",
      description: "Enhancing delivery efficiency with optimized routes.",
      items: [
        {
          name: "Dynamic Routing Tools",
          info: "Real-time route optimization based on traffic conditions.",
        },
        {
          name: "Delivery Scheduling Software",
          info: "Applications for planning and managing delivery schedules.",
        },
      ],
    },
    {
      title: "Compliance & Safety Management",
      description: "Ensuring transportation safety and regulatory compliance.",
      items: [
        {
          name: "Driver Safety Monitoring Systems",
          info: "Tools to monitor driver behavior and promote safety.",
        },
        {
          name: "Regulatory Compliance Software",
          info: "Applications to manage industry-specific compliance requirements.",
        },
      ],
    },
  ],
};

export {
  industriesObj,
  financeObj,
  travelObj,
  healthObj,
  manufacturingObj,
  educationObj,
  realEstateObj,
  transportationObj,
};
