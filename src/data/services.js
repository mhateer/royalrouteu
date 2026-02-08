import { 
  Building2, Plane, FileText, Users, 
  Briefcase, GraduationCap, Globe, BadgeCheck, 
  CreditCard, FileCheck 
} from 'lucide-react';

export const services = [
  {
    id: "business-setup",
    title: "Company Formation",
    icon: Building2,
    description: "Mainland, Freezone, and Offshore setup.",
    details: "Complete assistance for new trade licenses, initial approvals, and finding local sponsors for your business."
  },
  {
    id: "license-services",
    title: "License Renewals", // ADDED FROM PDF
    icon: FileCheck,
    description: "License amendments, renewals, and freezing.",
    details: "We handle all commercial license modifications, including changing partners, upgrading activities, and annual renewals."
  },
  {
    id: "immigration",
    title: "Visa & Emirates ID", // UPDATED FROM PDF
    icon: Plane,
    description: "Golden Visa, Family, and Employment visas.",
    details: "End-to-end processing for residency visas, Emirates ID registration, and medical fitness typing services."
  },
  {
    id: "amer-tasheel",
    title: "MOHRE & Amer", // MATCHES PDF
    icon: Users,
    description: "Labor contracts, offer letters, and cancellations.",
    details: "Official typing services for Ministry of Human Resources (MOHRE), including quota updates and labor card processing."
  },
  {
    id: "ejari-services",
    title: "Ejari Services", // ADDED FROM PDF
    icon: FileText,
    description: "Tenancy contract registration and attestation.",
    details: "Formal registration of your rental contracts (Ejari) as required by Dubai Land Department for all business and residential needs."
  },
  {
    id: "govt-approvals",
    title: "Govt. Approvals", // MATCHES PDF
    icon: BadgeCheck,
    description: "External approvals from all Dubai municipalities.",
    details: "We secure NOCs and permits from Dubai Municipality, Civil Defense, and Economic Department (DED)."
  },
  // I KEPT THESE BELOW AS THEY ARE STANDARD PRO SERVICES
  // IF YOU DON'T OFFER THEM, DELETE THEM.
  {
    id: "attestation",
    title: "Attestation",
    icon: GraduationCap,
    description: "MOFA and Embassy document attestation.",
    details: "Legalization of birth certificates, marriage certificates, and educational degrees for use in the UAE."
  },
  {
    id: "legal-translation",
    title: "Legal Translation",
    icon: Globe,
    description: "Certified translation for official documents.",
    details: "Ministry of Justice certified translations for courts, embassies, and government applications."
  }
];