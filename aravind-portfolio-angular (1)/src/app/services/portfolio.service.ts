import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioData, PersonalInfo, Experience, Project, Skill, Education, Certification } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolioData: PortfolioData = {
    personalInfo: {
      name: 'Jilla Aravind',
      title: 'Angular Frontend Developer',
      location: 'Hyderabad',
      email: 'aravindjilla121@gmail.com',
      phone: '8317598609',
      summary: 'Dynamic and detail-oriented Angular Frontend Developer with 2 years of experience in the fintech domain, specializing in card issuance projects. Proficient in developing and maintaining responsive web applications using Angular, TypeScript, and RESTful APIs. Experienced in Agile methodologies, collaborating effectively with cross-functional teams to implement best practices in coding and design, with a strong focus on delivering high-quality user experiences. Committed to continuous learning and improvement, with excellent problem-solving abilities in fast-paced environments.'
    },

    experience: [
      {
        company: 'Toucan Payments Pvt Ltd',
        position: 'Angular Developer',
        duration: 'April 2023 - Present',
        responsibilities: [
          'Developed and maintained responsive web applications using Angular and TypeScript, enhancing user experience and functionality for fintech solutions',
          'Collaborated with cross-functional teams including product managers, designers, and backend developers to gather requirements, troubleshoot issues, and ensure seamless integration of front-end components',
          'Implemented best practices in software development, including version control with Git, unit testing, and code reviews, resulting in improved code quality and maintainability',
          'Specialized in card issuance projects with focus on security and compliance',
          'Worked with RESTful APIs to integrate frontend with backend services',
          'Applied Agile methodologies for efficient project delivery'
        ],
        technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Git', 'RESTful APIs']
      }
    ],

    projects: [
      {
        name: 'School Management System',
        description: 'Developed a comprehensive web-based school management system to streamline administrative tasks, including student enrollment, attendance tracking, and grade management.',
        features: [
          'User-friendly interface designed with Angular for administrators, teachers, students, and parents',
          'Real-time data access through RESTful APIs for efficient management of student records',
          'Timetable management and examination scheduling functionality',
          'Report generation system supporting diverse school community needs',
          'Enhanced communication features with notifications and messaging between stakeholders'
        ],
        technologies: ['Angular', 'TypeScript', 'RESTful APIs', 'HTML', 'CSS'],
        highlights: [
          'Improved user engagement through intuitive interface design',
          'Enabled real-time communication and collaboration',
          'Streamlined administrative processes'
        ]
      },
      {
        name: 'Residential Welfare Association Platform',
        description: 'Developed a web-based platform for Residential Welfare Association to manage community activities, enhance communication, and improve overall resident engagement.',
        features: [
          'Integrated parking management system for efficient space reservation',
          'User-friendly Angular interface for easy access to community information',
          'Real-time notifications and updates for community events and announcements',
          'Tools for event planning, maintenance requests, and feedback collection',
          'Discussion forums and profile management for residents'
        ],
        technologies: ['Angular', 'TypeScript', 'Real-time APIs', 'HTML', 'CSS'],
        highlights: [
          'Enhanced community interaction and collaboration',
          'Addressed common parking management concerns',
          'Fostered sense of belonging within residential community'
        ]
      },
      {
        name: 'Card Issuance Project',
        description: 'Comprehensive payment card system providing secure and efficient debit and prepaid cards to clients, enhancing their financial transaction capabilities.',
        features: [
          'Secure card production, management, and security technology integration',
          'User-friendly platform for card application, management, and utilization',
          'Advanced fraud detection systems for transaction monitoring',
          'Robust risk assessment protocols for applicant creditworthiness evaluation',
          'Partnership integration for co-branded cards and exclusive promotions',
          'Regulatory compliance ensuring data protection and consumer rights'
        ],
        technologies: ['Angular', 'TypeScript', 'Security APIs', 'Payment Processing', 'Compliance Systems'],
        highlights: [
          'Enhanced customer satisfaction and payment process efficiency',
          'Implemented advanced fraud prevention mechanisms',
          'Ensured full regulatory compliance and industry standards',
          'Drove customer loyalty through strategic partnerships'
        ]
      }
    ],

    skills: [
      {
        category: 'Frontend Technologies',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'RxJS', 'SASS']
      },
      {
        category: 'Backend Technologies',
        items: ['Node.js', 'Java', 'Python']
      },
      {
        category: 'Database',
        items: ['SQL']
      },
      {
        category: 'Development Practices',
        items: ['Git Version Control', 'Agile Methodologies', 'Unit Testing', 'Code Reviews', 'RESTful APIs']
      },
      {
        category: 'Soft Skills',
        items: ['Strong organizational and time-management skills', 'Good communication and interpersonal skills', 'Team collaboration and independent work', 'Detail-oriented multitasking', 'Budget management and financial document handling']
      }
    ],

    education: [
      {
        degree: 'Bachelor of Technology in Information Technology',
        institution: 'GRIET (Gokaraju Rangaraju Institute of Engineering and Technology)',
        duration: '2017 - 2021'
      },
      {
        degree: 'MPC (Mathematics, Physics, Chemistry)',
        institution: 'Narayana Jr College',
        duration: '2015 - 2017'
      }
    ],

    certifications: [
      {
        name: 'Angular Basics',
        issuer: 'GeeksforGeeks',
        description: 'Fundamental concepts and practical implementation of Angular framework'
      },
      {
        name: 'Python Certification',
        issuer: 'Kaggle',
        description: 'Python programming fundamentals and data manipulation techniques'
      },
      {
        name: 'Introduction to Machine Learning',
        issuer: 'NPTEL',
        description: 'Core concepts of machine learning algorithms and applications'
      },
      {
        name: 'Introduction to Computer Networks',
        issuer: 'CCNA',
        description: 'Network fundamentals, protocols, and infrastructure concepts'
      }
    ],

    languages: ['English', 'Telugu', 'Hindi']
  };

  getPortfolioData(): Observable<PortfolioData> {
    return of(this.portfolioData);
  }

  getPersonalInfo(): Observable<PersonalInfo> {
    return of(this.portfolioData.personalInfo);
  }

  getExperience(): Observable<Experience[]> {
    return of(this.portfolioData.experience);
  }

  getProjects(): Observable<Project[]> {
    return of(this.portfolioData.projects);
  }

  getSkills(): Observable<Skill[]> {
    return of(this.portfolioData.skills);
  }

  getEducation(): Observable<Education[]> {
    return of(this.portfolioData.education);
  }

  getCertifications(): Observable<Certification[]> {
    return of(this.portfolioData.certifications);
  }

  getLanguages(): Observable<string[]> {
    return of(this.portfolioData.languages);
  }
}