const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  {
    name: "Tech Stack",
    link: "#techstack",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/hero-slide/ideas.svg" },
  { text: "Concepts", imgPath: "/images/hero-slide/concepts.svg" },
  { text: "Designs", imgPath: "/images/hero-slide/designs.svg" },
  { text: "Code", imgPath: "/images/hero-slide/code.svg" },
  { text: "Ideas", imgPath: "/images/hero-slide/ideas.svg" },
  { text: "Concepts", imgPath: "/images/hero-slide/concepts.svg" },
  { text: "Designs", imgPath: "/images/hero-slide/designs.svg" },
  { text: "Code", imgPath: "/images/hero-slide/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "CompletedProjects" },
  { value: 3, suffix: "", label: "Hackathons" },
  { value: 0, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Team Player" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Hillary Tran",
    mentions: "@hillarytran001",
    review:
      "An up-and-coming software engineer with a rare combination of technical curiosity and a genuine willingness to help others. Always eager to learn and never shies away from a challenge.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Frankie Hong",
    mentions: "@franklin-hong",
    review:
      "A fantastic collaborator who brings positive energy to every project. His ability to work independently and quickly pick up new skills makes him a standout on any team.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Eric Sun",
    mentions: "@esun02",
    review:
      "Shows impressive initiative and drive, always going above and beyond to master new technologies. Delivers high-quality work and adapts seamlessly to new situations.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Aurelius Young",
    mentions: "@aurelius-young-1ba660234",
    review:
      "A true team player who also excels when working solo. His passion for software engineering and commitment to continuous learning are truly inspiring.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Julie Truong",
    mentions: "@julie-truong-648286317",
    review:
      "Brings enthusiasm and dedication to every project, always ready to go the extra mile to ensure success. A pleasure to work with and a great asset to any team.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Will Vuong",
    mentions: "@william-vuong-469182243",
    review:
      "Works well with others and has a relentless pursuit of knowledge. Highly recommended for any team looking for a motivated and talented software engineer!",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
    link: "https://www.linkedin.com/in/hangryan/" // update with your LinkedIn
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/RyanHang07" // update with your GitHub
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
