import {
  app,
  frontend,
  database,
  iot,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  cpp,
  csharp,
  firebase,
  bootstrap,
  mysql,
  todolist,
  animation,
  catsearch,
  chatroom,
  selfdiscipline,
  portfolio,
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
];

const services = [
  {
    title: "Web Developer",
    icon: frontend,
  },
  {
    title: "Mobile APP Developer ",
    icon: app,
  },
  {
    title: "Database",
    icon: database,
  },
  // {
  //   title: "IoT",
  //   icon: iot,
  // },
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
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "APP",
    icon: app,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "FireBase",
    icon: firebase,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const projects = [
  {
    name: "ChatRoom",
    description:
      "A web chatroom that integrates with the Google Firebase database using JavaScript. It utilizes Authentication for account verification and Cloud Firestore to store chatroom data.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: chatroom,
    source_code_link: "https://wjw-chat-room.netlify.app/",
  },
  {
    name: "SelfDiscipline",
    description:
      "This project is our university graduation project, where we utilized Android Studio to integrate Google Firebase services. Our application aims to cultivate self-discipline through gamification.",
    tags: [
      {
        name: "AndroidStudio",
        color: "blue-text-gradient",
      },
      {
        name: "FireBase",
        color: "green-text-gradient",
      },
      {
        name: "APP",
        color: "pink-text-gradient",
      },
    ],
    image: selfdiscipline,
    source_code_link: "https://github.com/TheStanOrz/MyProject",
  },
  {
    name: "ToDoList",
    description:
      "Here is a simple project developed with React, utilizing json-server to simulate API integration. And uuid used to generate unique key values. (json-server needs to be running)",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JSON-Server",
        color: "green-text-gradient",
      },
      {
        name: "uuid",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://wjw-todolist-with-react.netlify.app/",
  },
  // {
  //   name: "3D-Portfolio",
  //   description:
  //     "This website is developed using React and Three.js, incorporating tailwindcss and emailjs. It offers a unique user experience, allowing you to explore 3D space while contacting me through emailjs.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Three.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolio,
  // },
  {
    name: "Animation",
    description:
      "A simple animation project. Capturing user interactions by listening to mouse down, mouse up, and mouse move events using JavaScript.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Animation",
        color: "green-text-gradient",
      },
    ],
    image: animation,
    source_code_link: "https://wjw-animation.netlify.app/",
  },
  {
    name: "CatSearch",
    description:
      "A simple project for practicing API integration, fetching various adorable cat images through the Cat API, bringing forth a highly entertaining feast of cats.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: catsearch,
    source_code_link: "https://wjw-cat-search.netlify.app/",
  },
];

export { services, technologies, projects };
