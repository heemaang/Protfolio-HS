import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "React js Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "NEXT js Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "1930 Cyber Helpline Improvement",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2023 - January 2024",
    points: [
      "Developed an advanced prototype of the 1930 helpline for the Rajasthan Cyber Police Hackathon using the MERN stack.",
      "Integrated AI/ML for legal decision-making, fraud detection, and personalized lawyer support, enhancing serviceefficiency by 40%.",
      "Designed a user-centric interface for the 1930 helpline prototype, prioritizing clear communication and ease ofaccess for victims of cybercrime..",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "I-Galaxy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Spearheaded the development of the I-Galaxy e-commerce website, overseeing a team of 5 members, resulting in a30% increase in project efficiency and timely delivery.",
      "Crafted a robust backend and an engaging frontend for I-Galaxy, ensuring exceptional system availability (99.9%)and fostering an interactive user experience.",
      "Managed the end-to-end project lifecycle for I-Galaxy, improving team collaboration and productivity by 25%through effective leadership and streamlined processes.",
      "Implemented A/B testing to optimize website conversion rates, leading to a significant boost in sales for I-Galaxy.",
    ],
  },
  {
    title: "Next js Developer",
    company_name: "Crest-Pluto",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Built a feature-rich desktop experience with Next.js: Engineered a comprehensive frontend in Next.js that replicates the functionality and user interaction of a desktop operating system. This includes elements like windows, menus, file management, and potentially even multitasking capabilities.",
      "Leveraged Next.js's performance optimizations: Utilized Next.js's built-in features like code-splitting and automatic code optimization to ensure a smooth and responsive user experience, even with the complexity of a full OS simulation.",
      "Enabled seamless navigation with dynamic routing: Mimicked opening/closing windows and application switching within the simulated OS.",
      "Built a visually immersive UI with custom components and animations, replicating the desktop experience within the browser.",
    ],
  },
  {
    title: "React js Developer",
    company_name: "StayCationer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Implemented critical functionalities into the StayCationer app using the MERN stack, achieving a 25% reduction.",
      "Architected scalable web solutions, boosting system efficiency by 25% and enhancing application performance.",
      "Aced agile projects with optimized workflows, boosting team velocity by 30%..",
      "Championed user-centric design principles, resulting in a 40% increase in user satisfaction for StayCationer",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "1930 Cyber Helpline Improvement",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/heemaang",
  },
  {
    name: "I-Galaxy",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/heemaang",
  },
  {
    name: "Employee Time Tracking System",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/heemaang",
  },
  {
    name: "AAHAAR",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/heemaang",
  },
  {
    name: "Vidya Vani",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/heemaang",
  },
  {
    name: "CREATE-Pluto",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/heemaang",
  },
];

export { services, technologies, experiences, testimonials, projects };
