import { 
  Gavel, Globe, Building2, FileText, 
  Users, Briefcase, GraduationCap, Plane 
} from 'lucide-react';

export const services = [
  {
    id: "dubai-court",
    title: "Dubai Court Services",
    icon: Gavel,
    description: "Legal typing, pleadings, and execution documents for all court levels.",
    details: "We provide comprehensive assistance for all Dubai Court related applications, including Notary Public, Case Registration, and Legal Notices."
  },
  {
    id: "immigration",
    title: "Immigration & Visa",
    icon: Plane,
    description: "Golden Visa, Family, Investor, and Tourist visa processing.",
    details: "Complete support for residency and visit visas for individuals and families."
  },
  {
    id: "business-setup",
    title: "Business Setup",
    icon: Building2,
    description: "Mainland, Freezone, and Offshore company formation.",
    details: "End-to-end support for trade licenses, MOA drafting, and local sponsorship."
  },
  {
    id: "attestation",
    title: "Certificate Attestation",
    icon: GraduationCap,
    description: "MOFA, Embassy, and apostille services for all documents.",
    details: "Attestation for educational, marriage, and birth certificates for use in UAE."
  },
  {
    id: "trakhees",
    title: "Trakhees Services",
    icon: FileText,
    description: "Engineering and modification approvals for Trakhees zones.",
    details: "Permits for modification, engineering approvals, and compliance certification."
  },
  {
    id: "amer-tasheel",
    title: "Amer & Tasheel",
    icon: Users,
    description: "MOHRE labor contracts, offer letters, and cancellations.",
    details: "Official typing services for Ministry of Human Resources and Emiratisation."
  },
  {
    id: "pro-services",
    title: "Corporate PRO",
    icon: Briefcase,
    description: "Annual contracts for document clearing and government liaison.",
    details: "Dedicated PRO services for companies to handle all government interactions."
  },
  {
    id: "legal-translation",
    title: "Legal Translation",
    icon: Globe,
    description: "Certified translation for over 50 languages.",
    details: "Ministry of Justice certified translations for official use."
  }
];