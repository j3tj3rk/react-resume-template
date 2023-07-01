import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Josh Lea.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Earth based <strong className="text-stone-100">Penetration Tester</strong>, currently working
        at <strong className="text-stone-100">Black Lantern Security</strong> where I help clients improve their security posture through offensive
        security and risk analysis.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me reading <strong className="text-stone-100">comic books</strong>,
        building <strong className="text-stone-100">legos</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">City, State and National Parks</strong> with my wife <strong className="text-stone-100">REDACTED</strong>
        and our dog <strong className="text-stone-100">ALSO-REDACTED</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'United States, Earth', Icon: MapIcon},
    {label: 'Age', text: '39', Icon: CalendarIcon},
    {label: 'Nationality', text: 'United States of America', Icon: FlagIcon},
    {label: 'Interests', text: 'Motor Sport, Rock Climbing, Information Security', Icon: SparklesIcon},
    {label: 'Study', text: 'Athens State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Black Lantern Security', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Penetration Testing',
    skills: [
      {
        name: 'OSINT',
        level: 10,
      },
      {
        name: 'Internal Network',
        level: 8,
      },
      {
        name: 'External Network',
        level: 7,
      },
      {
        name: 'Active Directory',
        level: 7,
      },
      {
        name: 'Web Applications',
        level: 6,
      },
      {
        name: 'Mobile Applications',
        level: 3,
      },
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Ruby',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      {
        name: 'PHP',
        level: 3,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2016',
    location: 'Birmingham, AL',
    title: 'CompTIA Network+',
    content: <p>CompTIA's Network+ validates the knowledge and skills needed to troubleshoot, configure and manage wired and wireless networks found in companies around the world.</p>,
  },
  {
    date: 'June 2018',
    location: 'Gulf Shores, AL',
    title: 'CompTIA Security+',
    content: <p>The CompTIA Security+ exam focuses on today's best practices for risk management and risk mitigation, including more emphasis on the practical and hands-on ability to both identify and address security threats, attacks and vulnerabilities.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2022 - Present',
    location: 'Black Lantern Security',
    title: 'Penetration Tester',
    content: (
      <ul>
        <li>Lead penetration tests and red team activities against enterprise environments</li>
        <li>Creat and deliver reports on vulnerabilities discovered during an assessment, risk management, and overall security program maturity to executive and technical stakeholders</li>
        <li>Provided detailed remediation and mititgation strategies</li>
        <li>Develop custom applications to solve operational and technical problems</li>
        <li>Wild West Hacking Fest - Deadwood 2022 CTF Champions</li>
      </ul>
    ),
  },
  {
    date: 'Dec 2017 - Jan 2022',
    location: 'Birmingham, AL',
    title: 'Senior End User Services Technician',
    content: (
      <p>
        Serve as the IT liaison to end users and provide desk side and remote technical assistance to end users 
        during and after regular business hours due to an emergency, or in support of special business projects and initiatives.
      </p>
    ),
    (
      <ul>
        <li>Awarded 'IT Spotlight Award' Oct 2019, May 2020, Dec 2021</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Cody Martin',
      text: 'Working with Josh was always an absolute pleasure. His keen eye for detail coupled with a combination of technical and soft skills made him invaluable as a team member and team lead. He regularly handled uneasy clients with grace and professionalism. As a professional, his hunger to continue learning is consistent and it shows in the quality of his work. On a personal note, Josh is a caring and understanding individual who tries to do right by others in all situations. I could not recommend Josh enough as a professional or as a person you would enjoy having in your life.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'j3tj3rk@gmail.com',
      href: 'mailto:j3tj3rk@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'j3tj3rk',
      href: 'https://github.com/j3tj3rk',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/j3tj3rk'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/joshleasecurity/'},
];
