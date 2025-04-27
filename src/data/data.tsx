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
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
/*import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg'; */
import profilepic from '../images/profilepic.jpg';
//import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  //TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sourav Malla Homepage',
  description: "Example site built with Sourav Malla's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'Upcoming-Events',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;
export type SectionId = typeof SectionId[keyof typeof SectionId];


// Testimonials: 'testimonials',
//Portfolio: 'portfolio'


/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hey There! I'm Sourav`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Living in the UK. <strong className="text-stone-100">Currently working as a Senior Software Engineer</strong> for Barclays. <strong className="text-stone-100"></strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Love<strong className="text-stone-100"> Impromptu Plans  </strong>
        and<strong className="text-stone-100"> Travelling</strong>, follow along
        <strong className="text-stone-100">  to know more about me :)</strong>
      </p>
      <div className="mb-3 rounded-lg bg-gray-900/60 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl font-bold text-orange-500">🌎 24/195 ~ 12% covered</span>
      </div>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1TvZ7aE0vEWX0ETZOOHHdd1VDzhGdISFW/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
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
  description: `Love Travelling and Photography. Enthusiastic in learning new Musical Instruments`,
  aboutItems: [
    {label: 'Location', text: 'Manchester,UK', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
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
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'German',
        level: 3,
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
    name: 'Backend Development',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Scala',
        level: 8,
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
    title: 'Poland',
    description: '07/03/2025 - Trip to Poland',
    url: '',
    status: 'Going',
    completed: 'yes',
    image: porfolioImage1,
  },
  {
    title: 'Cant Rush Greatness - Central Cee',
    description: '30/04/2025 - Live performance at Manchester Co-Ops Live',
    url: '',
    status: 'Going',
    completed: 'yes',
    image: porfolioImage2,
  },
  /*
  {
    title: 'Venice',
    description: 'Serene place in Italy',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Amalfi',
    description: 'The santorini of Italy :)',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Copenhagen',
    description: 'Day-out in Denmark',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Rome',
    description: 'Pantheon - Italy',
    url: '',
    image: porfolioImage6,
  }, */
  /*
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
  }, */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2020',
    location: 'IIT Kharagpur',
    title: 'Engineering (Bachelor in Technology)',
    content: <p>Fascinated about Computers and Algorithms</p>,
  },
 /*  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  }, */
];

export const experience: TimelineItem[] = [
  {
    date: 'Aug 2020-Nov 2021 & Oct 2022-Present',
    location: 'Pune & Manchester',
    title: 'API & AWS Developer at Barclays UK PLC',
    content: (
      <p>
        Currently working on AWS Lambda, Step Function, ECS, EC2 to integrate with different Rest-APIs to
        outline the complete Customer On-boarding Journey on AWS Platform.
      </p>
    ),
  },
  {
    date: 'Nov 2021 - Oct 2022',
    location: 'Bangalore',
    title: 'Software Engineer (Backend) at Tookitaki.ai ,Singapore',
    content: (
      <p>
        Worked as a Backend Developer in the Engineering and Research Team for optimising different ML
        pipelines using Scala,Hadoop,Spark as major technologies.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
/* export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
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
}; */

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
      href: 'mailto:skmalla98@gmail.com',
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Assassin17'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sourav-malla-274524139/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/sourav_98/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com'},
];
