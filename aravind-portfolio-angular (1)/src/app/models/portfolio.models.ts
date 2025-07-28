export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  description?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
  languages: string[];
}