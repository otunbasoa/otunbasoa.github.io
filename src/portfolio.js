/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  username: "otunba",
  title: "Hi, I'm Tosin",
  subTitle: emoji(
    `My name is Anjorin Samson Oluwatosin. I’m a DevOps and Cloud Engineer with over three years of experience building secure, automated, and scalable cloud infrastructure. Before transitioning into DevOps, I worked in sales, business operations, and co-founded an e-commerce startup. Running a business taught me firsthand that technology decisions directly impact operations, customer satisfaction, and the bottom line. Today, I use that business mindset to design infrastructure that helps engineering teams ship software faster while keeping costs down and systems reliable. I hold a B.Sc. in Computer Science and a Diploma in Cloud Engineering, and I'm always building new projects to keep pushing the boundaries of what cloud automation can do.`
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/otunbasoa",
  linkedin: "https://www.linkedin.com/in/oluwatosinanjorin/",
  gmail: "anjorinolu.samson@gmail.com",
  gitlab: "https://gitlab.com/otunba_soa",
  substack: "https://substack.com/@cloudwithotunba",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "LEVERAGING CLOUD NATIVE STRATEGIES TO BUILD SECURE, SCALABLE & COST-EFFECTIVE SYSTEMS",
  skills: [
    emoji(
      "⚡ Architecting resilient Cloud Infrastructure and Distributed Systems on AWS"
    ),
    emoji(
      "⚡ Implementing end-to-end DevSecOps pipelines with a Security-First mindset to harden SDLC"
    ),
    emoji(
      "⚡ Optimizing Cloud spend and system performance to drive organizational growth and ROI"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra" // This is the official steering wheel icon for K8s
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME INTERESTING PROJECTS I HAVE BUILT",
  projects: [
    {
      projectName: "Cloud-Native EKS Infrastructure & GitOps Deployment",
      projectDesc:
        "I designed and deployed a production-ready Amazon EKS cluster using Terraform, ensuring highly available infrastructure within a custom AWS VPC. I implemented a GitOps workflow using ArgoCD to automate the deployment of Google Online Boutique microservices.",
      footerLink: [
        {
          name: "View Code",
          url: "https://gitlab.com/otunba_soa/infra-automation-eks/-/tree/feature/7-istio"
        }
      ]
    },
    {
      projectName: "End-to-End DevSecOps Pipeline & Vulnerability Management",
      projectDesc:
        "I engineered a comprehensive DevSecOps pipeline for OWASP Juice Shop, automating security via a 'Shift-Left' approach. This includes Gitleaks for secrets, Semgrep/ZAP for SAST/DAST, Trivy for container scanning, tfsec for infrastructure auditing, and DefectDojo for centralized vulnerability management.",
      footerLink: [
        {
          name: "View Code",
          url: "https://gitlab.com/otunba_soa/juice-shop/-/blob/master/README.md"
        }
      ]
    },
    // Add 5 more projects here to reach a total of 7
    {
      projectName: "Linux/Shell Scripting Automation",
      projectDesc:
        "Developed a comprehensive automation framework to manage the full lifecycle of AWS cloud infrastructure and Linux system administration. This project bridges the gap between Infrastructure as Code (IaC) and proactive system monitoring using advanced Bash scripting and the AWS CLI.",
      footerLink: [
        {
          name: "View Code",
          url: "https://gitlab.com/otunba_soa/portfolio-projects/-/tree/main"
        }
      ]
    },
    {
      projectName: "Serverless Image Optimization Pipeline on AWS",
      projectDesc:
        "Built a serverless image optimization pipeline for Conaj using AWS S3, Lambda, CloudFront, IAM, and Terraform. The system automatically processes property images when they are uploaded to S3, resizes large images, compresses them into web-friendly JPEG files, stores the optimized versions in a private S3 bucket, and serves them through CloudFront for faster delivery. This reduced manual image handling, improved media delivery performance, and helped lower storage and hosting overhead.",
      footerLink: [
        {
          name: "View Code",
          url: "https://gitlab.com/otunba_soa/terraform-image-optimizer.git"
        }
      ]
    }
    //    { projectName: "Project 4", projectDesc: "Description...", footerLink: [] },
    //    { projectName: "Project 5", projectDesc: "Description...", footerLink: [] },
    //    { projectName: "Project 6", projectDesc: "Description...", footerLink: [] },
    //    { projectName: "Project 7", projectDesc: "Description...", footerLink: [] },
  ],
  display: true
};

/*const bigProjects = {
  title: "Projects",
  subtitle: "SOME INTERESTING PROJECTS I HAVE BUILT",
  projects: [
    {
      projectName: "Cloud-Native EKS Infrastructure & GitOps Deployment",
      projectDesc:
        "I designed and deployed a production-ready Amazon EKS cluster using Terraform, ensuring highly available infrastructure within a custom AWS VPC. I implemented a GitOps workflow using ArgoCD to automate the deployment of Google Online Boutique microservices.",
      footerLink: [
        {
          name: "View Code",
          url: "https://gitlab.com/otunba_soa/infra-automation-eks/-/tree/feature/7-istio"
        }
      ]
    },
    {
      projectName: "End-to-End DevSecOps Pipeline & Vulnerability Management",
      projectDesc:
        "I engineered a comprehensive DevSecOps pipeline for OWASP Juice Shop, automating security via a 'Shift-Left' approach. This includes Gitleaks for secrets, Semgrep/ZAP for SAST/DAST, Trivy for container scanning, tfsec for infrastructure auditing, and DefectDojo for centralized vulnerability management.",
      footerLink: [
        {
          name: "View Code",
          url: "https://gitlab.com/otunba_soa/juice-shop/-/blob/master/README.md"
        }
      ]
    }
  ],
  display: true
};*/

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // CHANGED TO FALSE to stop the build error
  blogs: [
    {
      url: "https://cloudwithotunba.substack.com/p/how-to-learn-any-new-skill-and-finally?r=31wc2n", // Replace with your Substack link
      title: "How to learn any new skill and finally stay productive.",
      description:
        "How to stay motivated, manage your time and master new skills even with a busy schedule."
    },
    {
      url: "https://cloudwithotunba.substack.com/p/the-beginners-guide-to-learning-aws?r=31wc2n", // Your main Substack home
      title:
        "The Beginner’s Guide to Learning AWS (What I Wish I Had 3 Years Ago).",
      description:
        "AWS for Beginners: The Guide I Wish I Had When Starting My Cloud Journey."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+2347048811107",
  email_address: "anjorinolu.samson@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "otunbasoa", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
