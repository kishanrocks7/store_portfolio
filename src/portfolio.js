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
  username: "Kishan Pandey",
  title: "Hi all, I'm Kishan",
  subTitle: emoji(
    "Learning about containers, Kubernetes, and Google Cloud. Picture me as a tech conductor orchestrating services and exploring the coding jungle. I'm also diving into automation with Git and CI/CD pipelines 🚀✨"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fyW7IwSsIoY40bXh4RAcdRBe6UPbaiaa/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kishanrocks7",
  linkedin: "https://www.linkedin.com/in/kishanpandey/",
  gmail: "kishanpandey5034@gmail.com",
  medium: "https://medium.com/@kishanpandey5034",
  instagram : "https://www.instagram.com/wingardium_leviiiosa/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Cloud/DevOps ENTHUSIAST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ I leverage Google BigQuery to extract valuable insights from vast datasets,for informed decision-making."
    ),
    emoji("⚡ , I specialize in crafting scalable and efficient applications, orchestrating their deployment seamlessly on Google Cloud Platform."),
    emoji(
      "⚡ With a focus on automation, I streamline workflows within GCP,"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fa fa-cube"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Shell Scripting",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Cloud Storage",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Google Kubernetes Engine",
      fontAwesomeClassname: "fa fa-cube"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Data-Studio",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Google-BigQuery",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Data-Structures",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vellore Institute of Technology , Vellore",
      logo: require("./assets/images/harvardLogo.jpg"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "2018 - 2022",
      desc: "",
      // descBullets: [
      //   ""
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Docker",
      progressPercentage: "70%"
    },
    {
      Stack: "Kubernetes",
      progressPercentage: "50%"
    },
    {
      Stack: "Jenkins",
      progressPercentage: "30%"
    },
    {
      Stack: "Terraform",
      progressPercentage: "0%"
    },
    {
      Stack: "Python",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Advanced Application Engineering Analyst",
      company: "Accenture",
      companylogo: require("./assets/images/accentureLogo.png"),
      date: "July 2022 – Present",
      desc: "Worked on automating manual monitoring tasks on GCP, improving operational efficiency",
      descBullets: [
          "Detail-oriented Technical Support Professional skilled in precise issue resolution. Engineered an Accenture dashboard, cutting manual efforts by 80%. Automated daily health checks on Google Cloud Platform, achieving an 80% reduction in manual workload."
        ]
    },
    {
      role: "Project Intern",
      company: "RedPositive",
      companylogo: require("./assets/images/redpositive.png"),
      date: "Mar 2020 – June 2020",
      desc: "Developed products in accordance with client requirements.",
      descBullets: [
        "Developed and deployed two websites (online learning platform and warehouse/stock management) and implemented a versatile website-agnostic chatbot using Dialogueflow."
      ]
    },
    {
      role: "Coordinator",
      company: "C.S.E.D",
      companylogo: require("./assets/images/csed.jpg"),
      date: "Feb 2019 – Nov 2020",
      desc: "Conducted two Successfull events",
      descBullets: [
        "Secured sponsorship from reputable brands, successfully raising funds for two entrepreneurship events. Implemented strategies to boost event registrations, contributing to increased participation."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  // showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  // display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/accenture.png"),
      projectName: "Data-studio Dashboard",
      projectDesc: "Engineered a Client Critical Product Dashboard using Python, Airflow, BigQuery, and Google Data Studio to derive valuable insights on processes. This initiative facilitated the identification of key areas for monitoring, optimization, and enhanced support across the platform, resulting in an 80% reduction in manual efforts.",
      // footerLink: [
      //   {
      //     // name: "Visit Website",
      //     // url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/accenture.png"),
      projectName: "Platform Health Scanner",
      projectDesc: "Engineered a Python script using Kubernetes, Terraform, and Jenkins for automated health checks on 50+ Google Cloud Platform products. This reduced manual efforts by 90%, providing a precise health check report. The solution, emphasizing scalability and consistency, seamlessly deploys to production through a Jenkins CI/CD pipeline.",
      // footerLink: [
      //   {
      //     // name: "Visit Website",
      //     // url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Accenture Achievement",
      subtitle:
        "Received an award from the director at Accenture for developing an innovative business product.",
      image: require("./assets/images/award.jpg"),
      imageAlt: "Award img",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // }
      ]
    },
    {
      title: "Google Cloud Associate Cloud Engineer",
      subtitle: "Completed Certifcation from Google for Associate Cloud Engineer",
      image: require("./assets/images/gcpace.png"),
      imageAlt: "ACE Logo",
      footerLink: [
        {name: "Certification", url: "https://google.accredible.com/d69a4bf1-bb5f-4adb-8b7b-96a00f55df21"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7905196832",
  email_address: "kishanpandey5034@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "pandey_kishan__", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
