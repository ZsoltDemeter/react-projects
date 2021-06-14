import hiking from "../images/image1.jpg";
import travelling from "../images/image2.jpg";
import archery from "../images/image3.jpg";
import archery2 from "../images/image3.1.jpg";
import chess from "../images/image4.PNG";
// import chess2 from "../images/image4.1.PNG";

export const PagesData = [
  {
    title: "Home",
    path: "home",
    className: "nav-links",
    offset: -70,
  },
  {
    title: "About me",
    path: "about",
    className: "nav-links",
    offset: -70,
  },
  {
    title: "Hobbies",
    path: "hobbies",
    className: "nav-links",
    offset: -70,
  },
  {
    title: "Education",
    path: "education",
    className: "nav-links",
    offset: -70,
  },
  {
    title: "Contact me",
    path: "contact",
    className: "nav-links",
    offset: -70,
  },
];

export const EducationData = [
  {
    institution: "The Informal School of IT",
    date: "2021 Jan. - 2021 May",
    field: "Front-end Web Development",
    href: "https://scoalainformala.ro/",
  },
  {
    institution: "Udemy Learning Platform",
    date: "2020 Feb. - 2021 Jan.",
    field: "Java Programming Masterclass by Tim Buchalka",
    href: "https://www.udemy.com/course/java-the-complete-java-developer-course/",
  },
  {
    institution: "Babes Bolyai University of Business",
    date: "2017 Oct. - 2020 June",
    field: "Business Administration",
    href: "https://tbs.ubbcluj.ro/",
  },
];

export const SliderData = [
  {
    image: hiking,
    alt: "Hiking image",
  },
  {
    image: travelling,
    alt: "Travelling image",
  },
  {
    image: archery,
    alt: "Archery image",
  },
  {
    image: archery2,
    alt: "Archery image",
  },
  {
    image: chess,
    alt: "Chess image",
  },
  // {
  //   image: chess2,
  //   alt: "Chess image",
  // },
];

export const DefaultParticles = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      // value: "#ffffff",
      value: "#000000",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        // color: "#000000",
        color: "#ffffff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      // color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
