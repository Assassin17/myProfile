import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
  title: 'Sourav Malla Bio',
  description: "Example site built with My Bio data",
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
  name: `Hey There I am Sourav.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Living in Manchester and Working as a<strong className="text-stone-100">Software Engineer</strong>
        With <strong className="text-stone-100">Barclays UK PLC</strong> helping the Onboarding and KYC Team in its domain APIs.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Love <strong className="text-stone-100">Impromptu Plans</strong>,
        and <strong className="text-stone-100">Travelling and Trips</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">streets of London :P</strong>.
      </p>
    </>
  ),
//   actions: [
//     {
//       href: '/assets/resume.pdf',
//       text: 'Resume',
//       primary: true,
//       Icon: DownloadIcon,
//     },
//     {
//       href: `#${SectionId.Contact}`,
//       text: 'Contact',
//       primary: false,
//     },
//   ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Love Travelling and Photography. Enthusiastic in learning new Musical Instruments`,
  aboutItems: [
    {label: 'Location', text: 'Manchester,UK', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, Sci-Fy Movies, Trips', Icon: SparklesIcon},
    {label: 'Study', text: 'IIT Kharagpur', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Barclays UK PLC', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'German',
        level: 3,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'NPL & Recommender System',
        level: 8,
      },
      {
        name: 'AI & Deep Learning',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Scala',
        level: 7,
      },
      {
        name: 'C++',
        level: 9,
      },
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
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Batch of 2020',
    location: 'IIT Kharagpur',
    title: 'Graduate in Industrial And Systems Engineering',
    content: <p>Lovely Campus and Good Old Memories</p>,
  },
//   {
//     date: 'March 2003',
//     location: 'School of Business',
//     title: 'What did you study 101',
//     content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
//   },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'Barclays Radbroke, Manchester',
    title: 'API & AWS Developer',
    content: (
      <p>
        Working with the Onboarding and KYC team as a API/Backend Developer using Java,AWS, SpringBoot
        as major tool(s) and Framework.
      </p>
    ),
  },
//   {
//     date: 'March 2007 - February 2010',
//     location: 'Garage Startup Studio',
//     title: 'Junior bug fixer',
//     content: (
//       <p>
//         Describe work, special projects, notable achievements, what technologies you have been working with, and
//         anything else that would be useful for an employer to know.
//       </p>
//     ),
//   },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Not Sure but gonna try reverting Back ASAP',
  items: [
    {
      type: ContactType.Email,
      text: 'souravmalla1998@gmail.com',
      href: 'mailto:souravmalla1998@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Manchester, United Kingdom',
      href: 'https://goo.gl/maps/x38PDaYEgDSoKL4A7',
    },
    {
      type: ContactType.Instagram,
      text: 'Instagram',
      href: 'https://www.instagram.com/sourav_98/',
    },
    {
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/Assassin17',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
