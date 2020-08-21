import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'English | Spanish | JS', // e.g: en, es, fr, jp
  description: 'So lovely you could stop by!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'comingsoon.jpeg',
    title: 'NatureRX',
    info:
      'Due to the increasing burden on our healthcare system, we need a way to take back control and keep track of our health without leaning so heavily on pharmaceuticals. Gone are the days when you could drop into a day clinic without having to consider how public health can affect your well-being. Hippocrates was the first to say, “Let food be thy medicine and medicine be thy food” - it is time to revisit that notion.',
    info2:
      'NatureRX is designed to help you keep track of any physical discomforts or ailments and makes it easy to explore holistic remedies through whole, minimally-processed, food choices and natural supplements.',
    url: '',
    repo: 'https://github.com/Mar009/Project_3.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpeg',
    title: 'Dungeon Master Manager',
    info:
      'Dungeons and Dragons is a massively popular fantasy role playing game, where a dungeon master guides players on a quest, and the success and enjoyment of everyone is largely dependent on the person guiding the gameplay. That person is the Dungeon Master. Dungeon Masters set the scene, creating characters to help bring the world alive for the other players.',
    info2:
      "This app is designed to allow users to manage non playable characters, and keep track of the worlds they've built. Users can sign up, log in, and create campaigns and characters.",
    url: 'http://serene-lowlands-40117.herokuapp.com/',
    repo: 'https://github.com/danielalexvega/Project-2-Dungeons-and-Dragons.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Date Night Generator',
    info:
      'The dating scene has shifted from crowded bars and pretentious restaurants to virtual hangouts at responsible distances. Making a video call special is difficult enough, and Netflix and chill cannot not suffice any longer. Everyone needs some help taking the guesswork out of evening plans to focus on improving odds of the ever-so-coveted second "date."',
    info2:
      'This app allows the user to select the a new and excting cocktail with meal pairing. A playlist to set the mood can be chosen at random, searched for by song name, or provided to you by Spotify.',
    url: ' https://andrealejandra.github.io/Project_1/',
    repo: 'https://github.com/andrealejandra/Project_1.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'andreaavir@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andrea-virgen-598249b3/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/andrealejandra',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
