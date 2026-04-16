function parseDate(dateStr: string): number {
  const currentYear = new Date().getFullYear();
  const yearMatch = dateStr.match(/(\d{4})/);
  if (yearMatch) {
    return parseInt(yearMatch[1]);
  }
  return currentYear;
}

export const projects = [
  {
    title: "Twin DJ Platform",
    dates: "February 2025 - Present",
    description: "A web-based platform that helps aspiring DJs learn and practice mixing by deconstructing and visualizing song transition techniques. Built a MIDI data processing pipeline that transforms raw controller signals into human-readable action summaries.",
    sortDate: 2025,
  },
  {
    title: "AI Personal Portfolio",
    dates: "Summer 2025",
    description: "An interactive portfolio using RAG to answer questions about my experiences. Features include dynamic Q&A, semantic search, and voice integration via ElevenLabs for a conversational 'Digital Me' experience.",
    sortDate: 2025,
  },
  {
    title: "Cudney Family Apiaries Website",
    dates: "Summer 2025",
    description: "A modern informational website for a small-batch honey producer. Built with React and Tailwind CSS v4, featuring custom branding, responsive design, and scalable architecture for future e-commerce.",
    sortDate: 2025,
  },
  {
    title: "DIY Gamma-Ray Spectrometer",
    dates: "December 2024 - May 2025",
    description: "Senior capstone project building a custom gamma-ray spectrometer from scratch with a $2,000 budget. Hands-on hardware development and physics instrumentation.",
    sortDate: 2024,
  },
  {
    title: "NASA ExoSky Hackathon",
    dates: "October 2024",
    description: "An ambitious interactive solar system visualization built during a NASA Hackathon containing educational content about celestial bodies.",
    sortDate: 2024,
  },
  {
    title: "TuffMarketplace",
    dates: "2023 - 2024",
    description: "A community-centric online marketplace for Tufts students. Included business insight features and evolved into a successful platform for campus commerce.",
    sortDate: 2023,
  },
  {
    title: "Somerville Homeless Coalition Web-App",
    dates: "Fall 2023 - Spring 2024",
    description: "A full-stack web app for a non-profit that streamlined client-to-funding matches. Built with React, Node.js, Express, and MongoDB to help case workers efficiently process financial relief applications.",
    sortDate: 2023,
  },
  {
    title: "MIT COVID Bluetooth Contact Tracing",
    dates: "May 2020 - July 2020",
    description: "Research on private automated contact tracing methods using Bluetooth technology during the pandemic. Explored privacy-preserving approaches to track potential viral exposure.",
    sortDate: 2020,
  },
].sort((a, b) => b.sortDate - a.sortDate).map(({ sortDate, ...rest }) => rest);

export const experience = [
  {
    title: "Empower - Software Engineering Intern",
    dates: "May 2024 - August 2024",
    description: "Software engineering intern at a leading financial services company in Boston. Contributed to front-end development initiatives focused on enhancing user experience and content delivery.",
    sortDate: 2024,
  },
  {
    title: "MIT Media Lab - Research Intern",
    dates: "May 2023 - September 2023",
    description: "Research intern at MIT Media Lab Fluid Interfaces group. Explored conversational AI systems designed to reduce loneliness through adaptive interactions.",
    sortDate: 2023,
  },
  {
    title: "Tufts HCI Lab - Research Intern",
    dates: "June 2022 - September 2022",
    description: "Research intern working on EEG studies analyzing brain signals during chess performance, and eye-tracking heat maps for urban planning research.",
    sortDate: 2022,
  },
].sort((a, b) => b.sortDate - a.sortDate).map(({ sortDate, ...rest }) => rest);

export const extracurriculars = [
  {
    title: "Course Instructor",
    dates: "Spring 2025",
    description: "Taught my own university course as a Swim coach, PE 0110",
    sortDate: 2025,
  },
  {
    title: "Tufts Swim Captain",
    dates: "2024 - 2025",
    description: "Team captain for the Tufts varsity swim team. Leading by example and fostering team culture.",
    sortDate: 2024,
  },
  {
    title: "Tufts Varsity Swimming",
    dates: "2021 - 2025",
    description: "Varsity swimmer for Tufts Jumbo's swim team. Competing in collegiate athletics while managing academic commitments.",
    sortDate: 2021,
  },
  {
    title: "Tufts JumboCode",
    dates: "2023 - 2025",
    description: "Member of Tufts' student-run coding club. Developing apps for local non-profits and building the campus tech community.",
    sortDate: 2023,
  },
  {
    title: "Swim Lesson Instructor",
    dates: "2017 - 2025",
    description: "Teaching swimming lessons and coaching at local pools and for the Tufts swim team. Sharing my passion for swimming with others.",
    sortDate: 2017,
  },
  {
    title: "Tufts Wind-Ensemble",
    dates: "2021 - 2023",
    description: "Playing French horn and exploring music production. DJing as a creative outlet for parties and events.",
    sortDate: 2021,
  },
].sort((a, b) => b.sortDate - a.sortDate).map(({ sortDate, ...rest }) => rest);

export const education = [
  {
    title: "Columbia University - M.S. Computer Science",
    dates: "2025 - 2026",
    description: "Master's with a focus on Machine Learning.",
    sortDate: 2025,
  },
  {
    title: "Tufts University - B.S. Computer Science",
    dates: "2021 - 2025",
    description: "Summa Cum Laude Bachelor's in Computer Science.",
    sortDate: 2021,
  },
].sort((a, b) => b.sortDate - a.sortDate).map(({ sortDate, ...rest }) => rest);

export const hobbies = [
  {
    title: "DJing",
    description: "Learning to DJ as a new creative outlet. Playing sets for friends and campus events, bringing my love of music to the dance floor.",
  },
  {
    title: "Swimming",
    description: "A lifelong passion for swimming. Competitive athlete turned instructor and coach, sharing the sport with others.",
  },
  {
    title: "Cooking",
    description: "Enjoy experimenting with new recipes and cuisines. Cooking as a way to unwind and express creativity.",
  },
  {
    title: "Games",
    description: "Video games and board games with friends. A fun way to relax and stay connected with people.",
  },
];