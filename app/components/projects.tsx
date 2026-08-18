import { Projs } from "../page" 
const projects: Projs[] = [
  {
    "name": "meditatr",
    "img": "/img/medi2.png",
    "tech": ["Flutter", "Dart", "Swift", "Riverpod", "Firebase"],
    "icons": {
      "https://github.com/yzFrankli/meditatr": "/assets/github.png"
    },
    "description": "A fully functional application for iOS that is designed to help people focus and meditate. It consists of a focus Pomodoro timer, an animation for guided breathing, and many meditation courses to learn from. The project is initially written in Swift/SwiftUI, and later in Flutter and dart. It also uses Firebase connected with Apple's native authentification. From this project, I have learned how to build application from ground up, from the planning stage to implementation and finally deploying it."
  },

  {
    "name": "taskboard",
    "img": "/img/taskboard.png",
    "tech": ["React", "Vercel", "Supabase", "TailwindCSS", "Typescript"],
    "icons": {
      "https://github.com/yzFrankli/taskboard": "/assets/github.png",
      "https://taskboard-beryl-xi.vercel.app/": "/assets/website.png"
    },
    "description":"TaskBoard is a task management application designed to make organizing and tracking projects simple and intuitive. I built the application from the ground up, focusing not only on its functionality but also on creating an interface that feels clean, responsive, and easy to navigate with an overarching sport theme. Users can create, organize, and manage tasks while keeping track of their progress through a visual and structured workspace. This project uses Supabase to track each task's status and each guest's tasks that they have created."
  },

  {
    "name": "portfolio",
    "img": "/img/portfolio.jpeg",
    "tech": ["React", "Vercel", "TailwindCSS", "Typescript"],
    "icons": {
      "https://github.com/yzFrankli/personal-portfolio" : "/assets/github.png",
      "https://yzfrankli.vercel.app" : "/assets/website.png"
    },
    "description":"I built a personal portfolio website to showcase my projects, technical skills, and experience as a developer. The site was developed using Next.js, React, TypeScript, and Tailwind CSS, with a responsive layout designed to provide a clean and accessible user experience across different screen sizes. It features sections highlighting my background, technology stack, and selected projects, with reusable components and data-driven project cards to make the site easier to maintain and expand. The portfolio serves as a central place to demonstrate both my technical abilities and the projects I have built throughout my academic and personal development."
  },

  {
    "name": "spaceshooter",
    "img": "/img/spaceshooters.png",
    "tech": ["Unity", "C#"],
    "icons": {
      "https://github.com/yzFrankli/taskboard" : "/assets/github.png",
      "https://spaceshootersg1.itch.io/space-shooters" : "/assets/game.png",
      "https://spaceshooterwin.wixsite.com/space-shooter" : "/assets/website.png"
    },    
    "description":"SpaceShooter is an interactive game project where players control a spaceship and navigate through a space-themed environment while engaging with enemies and avoiding obstacles. The project demonstrates core game development concepts, including player movement, collision detection, game state management, and interactive gameplay mechanics."
  },
  
  {
    "name": "dillar",
    "img": "/img/jumbocode.png",
    "tech": ["React", "Vercel", "MongoDB", "i18next", "TailwindCSS"],
    "icons": {
      "https://github.com/yzFrankli/onboarding-ticket" : "/assets/github.png",
      "https://www.dillaracademy.org/" : "/assets/website.png"
    },
    
    "description":"Dillar Academy is an educational website developed for Dillar Academy to provide students with an accessible and engaging online platform. Built using React and Tailwind CSS, the website features a responsive and modern interface designed to clearly present information about the organization, its programs, and available resources. This project allowed me to apply my frontend development skills in a real-world team environment while focusing on responsive design, reusable components, and user experience."
  },

  {
    "name": "endtoendim",
    "img": "/img/encryptedim.png",
    "tech": ["Python"],
    "icons": {
       "https://github.com/yzFrankli/projects/tree/main/python/encrypted-im" : "/assets/github.png"
    },
    "description":"This project is a Python-based instant messaging application that focuses on secure communication through end-to-end encryption. The application enables users to exchange messages while ensuring that message content is encrypted before transmission and can only be decrypted by the intended recipient. Through this project, I explored concepts in networking, cryptography, and secure client-server communication while building a functional messaging system."
  },

  {
    "name":"spusic",
    "img": "/img/spusic.png",
    "tech": ["HTML", "CSS", "MongoDB"],
    "icons": {
      "https://github.com/yzFrankli/my-Spusic" : "/assets/github.png"
    },
    "description":"Spusic is a collaborative web-based music guessing game inspired by the challenge of recognizing songs from short audio clips. Players listen to a portion of a song and attempt to correctly identify it, with music data and playback powered by the Spotify API. The project was built using HTML, MongoDB, and external API integration, allowing our team to combine frontend development, database management, and third-party services to create an interactive multiplayer-style gaming experience."
  },

  {
    "name": "producthon",
    "img": "/img/producthon.png",
    "tech": ["Figma"],
    "icons": {
      "https://www.figma.com/proto/TBHHhR0F6687q6bG904JFP/Disability-Map?node-id=68-396&t=ZpVM9us4dsBgKI0r-1&starting-point-node-id=68%3A396" : "/assets/figma.png"
    },
    "description":"Disability Map is a product concept designed during a hackathon to help people with disabilities more easily access support, resources, and information relevant to their needs. I designed the project in Figma, focusing on creating an intuitive and accessible user experience that connects users with helpful services. The project allowed me to explore the product design process, from identifying user needs and developing potential solutions to creating an interactive prototype that demonstrates the application's core features and user flow."
  }

]

export default projects;