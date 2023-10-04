/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Paz Papa",
  title: "Hello, I'm Gero!",
  subTitle: emoji(
    "A passionate Full Stack web engineer and developer 🚀 with experience in technologies like JavaScript / React / Node / Express, along with some other intriguing frameworks. Marketing and engineering are my other two passions!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cv5xcstgkaYQzgn_BL0ngYrz0U5sGsnp/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin:
    "https://www.linkedin.com/in/geronimo-nicolas-paz-papa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  github: "https://github.com/GeroPazPapa1",
  gmail: "geronimonicolaspazpapa@gmail.com",
  twitter: "https://twitter.com/IngeEnPrograma",
  //linktree: "https://linktr.ee/geronimonicolaspazpapa",
  //gitlab: "https://linktr.ee/geronimonicolaspazpapa",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter, and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technologies!",
  subTitle:
    "I'm a cool developer who likes to explore different tech stacks, and also, learn from colleagues!",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front-end and Back-end web projects for your web and mobile applications"
    ),
    emoji("⚡ Marketing, brand activations, video and photo editing"),
    emoji(
      "⚡ Eager to solve processes and problems efficiently and practically, with an engineering perspective"
    )
  ],

  /* Make Sure to include the correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JAVASCRIPT",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "EXPRESS JS",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "REACT JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NODE JS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SLACK",
      fontAwesomeClassname: "fab fa-slack"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "POSTGRES-SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MY-SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "FIREBASE",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "TRELLO",
      fontAwesomeClassname: "fab fa-trello"
    },
    {
      skillName: "BOOTSTRAP",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "SCRUM",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "ENGLISH",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "SQUARESPACE",
      fontAwesomeClassname: "fab fa-squarespace"
    },
    {
      skillName: "FB ADS",
      fontAwesomeClassname: "fab fa-facebook"
    },
    {
      skillName: "FIGMA",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Henry",
      logo: require("./assets/images/henryLogo.png"),
      subHeader: "Full Stack Web Developer",
      duration: "May 2023 - September 2023",
      desc: "800 Hours",
      descBullets: ["800 hours of theoretical-practical coursework"]
    },
    {
      schoolName: "Universidad del Norte Santo Tomas de Aquino",
      logo: require("./assets/images/unstaLogo.png"),
      subHeader: "Industrial Engineer",
      duration: "March 2017 - February 2023",
      desc: "One of the most important universities in the northern region of the country, focused on engineering",
      descBullets: ["Engineer's degree with international validity"]
    },
    {
      schoolName: "FASTA Ángel María Boisdron",
      logo: require("./assets/images/BoisdronLogo.png"),
      subHeader: "Science and Technology High School",
      duration: "March 2010 - December 2016",
      //desc: "800 Horas",
      descBullets: ["Specialized in Science and Technology"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Image / Video Editing",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer, Marketing",
      company: "Freelance",
      companylogo: require("./assets/images/fullstackLogo.jpg"),
      date: "Mar 2020 - Present",
      desc: "Argentina/United States.",
      descBullets: [
        "Developing e-commerce, landing pages, and web applications using (React, Redux, Axios, Node.js, Express, Morgan, Cors, Dotenv, and templates).",
        "Crafting digital marketing strategies. Proficient in: Adobe Illustrator, Photoshop, Figma, and others).",
        "Advertising campaigns on social media platforms using meta ads.",
        "Creating a brand's visual identity."
      ]
    },
    {
      role: "Community Manager",
      company: "Scale Webs Miami",
      companylogo: require("./assets/images/scaleLogo.jpg"),
      date: "Jun 2023 - Present",
      desc: "Social media management, video/photo editing, and advertising",
      descBullets: [
        "Social media management based on a monthly plan for each required social platform.",
        "Audience interaction: Responding to questions, comments, and messages to maintain active communication.",
        "Metrics analysis: Monitoring social media statistics to enhance strategies and reach.",
        "Crafting compelling and relevant content.",
        "Strategic marketing, campaign planning, and promotions."
      ]
    },
    {
      role: "Engineer",
      company: "Fabrica Rivoli S.A",
      companylogo: require("./assets/images/rivoliLogo.jpg"),
      date: "Sep 2022 - Mar 2023",
      desc: "Product, quality, and planning areas.",
      descBullets: [
        "Consolidate the design and development of software to facilitate product placement in conjunction with nomenclature for allocation and recommendation of available spaces.",
        "Lead an automation project along with layout in the finished product area, to automate and improve factory processes, in order to digitize and perfect tasks."
      ]
    },
    {
      role: "New York, Manhattan",
      company: "Management and Website",
      companylogo: require("./assets/images/organicmarket.jpg"),
      date: "Dec 2021 - May 2022.",
      desc: "Freelance",
      descBullets: [
        "Creating a website for architect Juan Cruz Reverberi.",
        "Improving procedures/processes, overall management, quality control, stock management, inventory, and order tracking."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Created Projects",
  projects: [
    {
      image: require("./assets/images/proyectofinal.jpeg"),
      projectName: "Final Project Vehibuy",
      projectDesc:
        "Participated in an agile development team, presenting progress to a Product Owner on the development of an E-commerce with design and development of the following features: local storage, cloudinary, CRUD of products, third-party auth, catalog, MercadoPago gateway, checkout, pop-ups, logical deletion, reviews, shopping cart management, and user management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vehibuy-rho.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/reverberi.jpeg"),
      projectName: "Reverberi Architect",
      projectDesc:
        "This project began in the year 2022 when architect Juan Cruz Reverberi employed my services to write a presentation letter, allowing him to showcase his works.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.jreverberi.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/estudiopaz.jpeg"),
      projectName: "Estudio / Consultora Paz",
      projectDesc:
        "This website is designed as a landing page, providing information about the architectural studio and the services it offers to its clients.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.estudiocontablepaz.com.ar/"
        }
      ]
    },
    {
      image: require("./assets/images/just4vibes.jpeg"),
      projectName: "Just4Vibes",
      projectDesc:
        "The goal of this project was to create a website for a group of investors who aimed to design and market a new clothing brand. When designing this website, the top priority was to showcase a minimalist style to focus their attention on their distinctive hoodies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://just4vibesclo.com/"
        }
      ]
    },
    {
      image: require("./assets/images/Henry.png"),
      projectName: "Individual Project Henry",
      projectDesc:
        "Complete creation of a country application from scratch, utilizing React, Redux, and CSS for the front-end, coupled with a back-end developed in Node.js and Express. This application encompassed database design and incorporated features such as creation, search, sorting, and filtering.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/GeroPazPapa1/Individual-Project---Countries.git"
        }
      ]
    },
    {
      image: require("./assets/images/Henry.png"),
      projectName: "Rick And Morty Project",
      projectDesc:
        "Development of a web application for Rick and Morty characters using React, Redux, and CSS for the front-end, in conjunction with a back-end built with Node.js and Express. Additionally, database design was carried out for this project.",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/GeroPazPapa1/MyProjectRickAndMorty.git"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆 "),
  subtitle: "ACHIEVEMENTS, CERTIFICATIONS",

  achievementsCards: [
    {
      title: "Industrial Engineer",
      subtitle:
        "Among the most important universities in the northern part of the country, focused on engineering.",
      image: require("./assets/images/unstaLogo.png"),
      imageAlt: "Industrial Engineer",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1eOK0psN0NHDrYjMlL--nYjRDp2PNcNEk/view?usp=sharing"
        }
      ]
    },
    {
      title: "Full Stack Programmer",
      subtitle: "800 hours of theoretical-practical coursework.",
      image: require("./assets/images/henryLogo.png"),
      imageAlt: "Full Stack Programmer",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificates.soyhenry.com/new-cert?id=98349bf95229c289c32b8197fedd00b0f00b45294e0e28dfac33617925209a95"
        }
      ]
    },
    {
      title: "EF SET English Certificate (C1 Advanced)",
      subtitle:
        "The achieved English level is 64/100 on the EF SET score scale and C1 Advanced according to the Common European Framework of Reference (CEFR). The EF SET score is calculated as an average of the reading and listening scores.",
      image: require("./assets/images/EFLOGO.jpg"),
      imageAlt: "EF SET English Certificate",
      footerLink: [
        {name: "Certification", url: "https://www.efset.org/cert/2x4yiW"}
      ]
    },
    {
      title: "XVII ARGENTINE CONGRESS OF INDUSTRIAL ENGINEERS",
      subtitle:
        "The Organizing Committee of the XVII CAEI in Córdoba 2019 and the Argentine Association of Industrial Engineering and related careers, together with the National Technological University - Córdoba Regional Faculty and the National University of Córdoba",
      image: require("./assets/images/aareii.png"),
      imageAlt: "XVII Argentine Congress of Industrial Engineers",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1nHKalTVPkKliFSje6CMnALxRsj4TQ1A3/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Artistic Photos",
  subtitle:
    "I'm a passionate creator of artistic photos, sharing them with the world. I also devote the same dedication to video editing.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.instagram.com/minimalismforgeronico/",
      title: "Minimalism By Gero Nico",
      description:
        "After completing my journey through New York, Manhattan, I developed a strong attraction to video filming and the creation of highly artistic photographs."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Sports",
  subtitle: emoji(
    "A fan of soccer, mountain biking, and downhill biking! 🚲😅"
  ),

  talks: [
    {
      title: "Tuc. and Catamarca Championship",
      subtitle: "Downhill in La Merced and El Cadillal",
      slides_url: "https://youtu.be/UeRYc5Zjfb0?si=ArZy3SgZbdDWcbM2",
      event_url: "https://youtu.be/ZnJMRmD4JdU?si=yjxAa3qEpH61eo53"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("My Playlist 🎙️"),
  subtitle: "I love music, but I love it more when I share it!",

  // Please Provide with Your Podcast embedded Link
  podcast: [
    "https://open.spotify.com/playlist/1jkJSxsOO1TmwczZZW79JU?si=4669f66a280b4f6d"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle:
    "Do you want to contact me? No problem, you can do it with my phone number or email!",
  number: "+54 9 3815514974",
  email_address: "geronimonicolaspazpapa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "IngeEnPrograma", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be displayed as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
