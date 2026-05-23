export interface Project {
  id: number
  title: string
  category: string
  categories: string[]
  image: string
  additionalImages?: string[]
  role: string
  subRoles: string[]
  description: string
  sector: string
  year: string
  challenge: string
  process: {
    title: string
    description: string
  }[]
  outcome: string
  link: string
  duration?: string
  collaboration?: string
  specialMentions?: string
  videoLink?: string
}

export const projects: Project[] = [
  // 2025 Projects
  {
    id: 11,
    title: "ECHO",
    category: "featured",
    categories: ["immersive-experience", "interactive", "development"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SWPv3kVPGiU9jrqSkKdZ6i5xS5LP8T.png",
    additionalImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gE1sxnCLn6lfE0i3Kns9idsRz1nuBC.png",
    ],
    role: "Interaction Designer and Developer",
    subRoles: ["MediaPipe", "TouchDesigner", "Gesture", "Generative Media"],
    description:
      "A live hand-gesture interactive experience built with MediaPipe and TouchDesigner. Visitors triggered generative visuals that traced key works and moments from my poly years through live hand tracking.",
    sector: "Interactive Installation & Generative Media",
    year: "2025",
    duration: "3 months",
    collaboration: "NYP School of Design and Media · Grad Show 2025",
    challenge:
      "Create an engaging interactive installation that allows visitors to explore and interact with a retrospective of my polytechnic journey through intuitive hand gestures and generative visuals.",
    process: [
      {
        title: "Concept Development",
        description:
          "Developed the concept of using hand gestures as a natural interface to navigate through memories and key project moments from my poly years.",
      },
      {
        title: "Technical Research",
        description:
          "Researched and tested MediaPipe for accurate hand tracking and TouchDesigner for real-time generative visual processing.",
      },
      {
        title: "Visual Design",
        description:
          "Designed generative visual systems that responded dynamically to hand movements, creating unique visual trails and effects.",
      },
      {
        title: "Integration & Testing",
        description:
          "Integrated MediaPipe hand tracking with TouchDesigner, conducting extensive testing to ensure responsive and reliable interactions.",
      },
      {
        title: "Exhibition Setup",
        description:
          "Set up the installation at the Grad Show, calibrating the system for the venue lighting and ensuring optimal visitor experience.",
      },
    ],
    outcome:
      "Successfully created an immersive interactive experience that engaged hundreds of visitors at the NYP Grad Show 2025, allowing them to explore my design journey through intuitive hand gestures and beautiful generative visuals.",
    link: "/projects/echo",
  },
  // 2024 Projects
  {
    id: 10,
    title: "Precinct of Good",
    category: "collaboration",
    categories: ["immersive-experience", "interactive", "cultural"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/POG1-fvbEEc2QulvTEs4U6cOdqPSTceXMmO.png",
    additionalImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Info-j7SKcVzXOJ8mcBwd4163KBfd4QNP9c.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/POG2-K0jjhFxnrXprXZBXpQELPgxBVZhvtD.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/POG3-0jSBpxZPxVlXZLxVPxkBXpQELPgxBVZ.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/POG4-K0jjhFxnrXprXZBXpQELPgxBVZhvtD.png",
    ],
    role: "Interactive Experience Designer",
    subRoles: ["UI/UX Design", "Cultural Research", "Interactive Design"],
    description:
      "An immersive, interactive adventure developed in collaboration between NYP and GAFA, where participants explore landmarks, uncover clues, and restore harmony in the city.",
    sector: "Interactive Installation & Cultural Experience",
    year: "2024",
    duration: "3 months",
    collaboration: "Guangzhou Academy of Fine Arts (GAFA) · Featured in Singapore Art Week 2025",
    challenge:
      "Create an engaging interactive experience that bridges cultural understanding between Singapore and Guangzhou while promoting themes of goodness, future, and friendship.",
    process: [
      {
        title: "Cultural Research & Concept Development",
        description:
          "Conducted extensive research on both cities' landmarks and cultural significance to create meaningful interactive touchpoints.",
      },
      {
        title: "Story & Experience Design",
        description:
          "Developed a narrative framework that incorporates three core themes: Goodness, Future, and Friendship, each tied to specific landmarks and interactions.",
      },
      {
        title: "Interactive Elements Design",
        description:
          "Created engaging interactive elements that allow participants to discover and 'restore' the flickering cores through meaningful actions and discoveries.",
      },
      {
        title: "Cross-Cultural Collaboration",
        description:
          "Worked closely with GAFA students to ensure authentic representation of both cultures and seamless integration of different design perspectives.",
      },
      {
        title: "Implementation & Testing",
        description:
          "Developed and refined the experience through multiple iterations, incorporating feedback from both Singaporean and Chinese test participants.",
      },
    ],
    outcome:
      "Successfully created an immersive experience that meaningfully connects participants with both cities' cultural landmarks while promoting cross-cultural understanding and cooperation.",
    link: "/projects/precinct-of-good",
    specialMentions: "Showcased at Singapore Art Week 2025",
    videoLink: "https://youtu.be/sqWvjSTnKBE",
  },
  {
    id: 9,
    title: "Moments of 間",
    category: "featured",
    categories: ["kansei-design", "ux", "interactive", "research"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moments%20of%20Ma%20Thumbnail-PH07NMpIAOePGIYeaeZMwiwA0sQvyL.png",
    role: "Kansei & UX Designer",
    subRoles: ["Kansei Design", "UX Research", "Interactive Installations"],
    description:
      "An immersive storytelling experience exploring Kansei Design—where users shape emotions through movement, interaction, and space. This prototype tested how playful engagement and sensory-driven storytelling could deepen emotional connections.",
    sector: "Kansei Design & Interactive Storytelling",
    year: "2024",
    challenge:
      "Create an immersive experience that explores and demonstrates the principles of Kansei Design, allowing users to interact with and shape their emotional journey through various sensory inputs.",
    process: [
      {
        title: "Kansei Design Research",
        description:
          "Conducted extensive research into Kansei Design principles and their application in interactive experiences.",
      },
      {
        title: "Concept Development",
        description:
          "Developed the concept of 'Moments of 間', focusing on the Japanese concept of 'ma' (間) to create meaningful pauses and spaces in the user journey.",
      },
      {
        title: "Interaction Design",
        description:
          "Designed a series of interactive installations that respond to user movements, gestures, and other sensory inputs to create an evolving emotional narrative.",
      },
      {
        title: "Prototype Development",
        description:
          "Built working prototypes of the interactive installations to test the effectiveness of the sensory-driven storytelling approach.",
      },
      {
        title: "User Testing and Iteration",
        description:
          "Conducted multiple rounds of user testing, gathering qualitative feedback on the emotional impact and engagement levels of the experience.",
      },
    ],
    outcome:
      "Created a unique and emotionally resonant interactive experience that successfully demonstrated the power of Kansei Design in storytelling. The project received positive feedback for its innovative approach to user engagement and its ability to create meaningful, personalized emotional journeys for participants.",
    link: "https://youtu.be/79zCfRSITQY",
  },
  {
    id: 8,
    title: "Roots to Results",
    category: "featured",
    categories: ["ux", "ui", "redesign", "service-design"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/celestengmingyan-607h-portfolio-1-1-ez4MSLKkVLbEVXErqLlVQSUzjf7RCq.png",
    role: "UX/UI Designer",
    subRoles: ["UX Research", "UI Design", "Service Design"],
    description:
      "A UX/UI transformation project for Bee Choo Origin, integrating a Table Ordering System, Website Redesign, and Personalized Hair Quiz to improve customer experience while staying true to the brand's heritage.",
    sector: "UX/UI & Experience Design",
    year: "2024",
    challenge:
      "Modernize the digital presence of a traditional wellness brand while maintaining its core values and improving the overall customer experience across multiple touchpoints.",
    process: [
      {
        title: "UX Research",
        description:
          "Conducted in-depth user research to understand customer needs, pain points, and expectations when interacting with the brand.",
      },
      {
        title: "Service Design Mapping",
        description:
          "Created comprehensive service blueprints to identify key touchpoints and opportunities for improvement in the customer journey.",
      },
      {
        title: "UI Design",
        description:
          "Developed a modern, user-friendly interface for the website and table ordering system that aligns with the brand's traditional values.",
      },
      {
        title: "Personalized Hair Quiz Development",
        description:
          "Designed and implemented an interactive hair quiz to provide personalized product recommendations to customers.",
      },
      {
        title: "Usability Testing",
        description:
          "Conducted multiple rounds of usability testing to refine the designs and ensure optimal user experience across all digital touchpoints.",
      },
    ],
    outcome:
      "Successfully modernized Bee Choo Origin's digital presence while preserving its traditional appeal. The new website, table ordering system, and personalized hair quiz resulted in increased online engagement, improved customer satisfaction, and a seamless integration of digital experiences with the brand's physical locations.",
    link: "/projects/bee-choo",
  },
  {
    id: 7,
    title: "Take a Shot!",
    category: "featured",
    categories: ["immersive-experience", "interactive", "3d"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Take%20a%20Shot!%20v3-AhLyx50fvJuDaOa6FkbQlFd1QWewn3.png",
    role: "UX Designer",
    subRoles: ["Interactive Installation", "3D Prototyping"],
    description:
      "A proposed interactive installation for the School of Design & Media's GradShow 2024, designed to create a simple yet impactful way to bring graduates together through a hologram display showcasing memories and project explorations.",
    sector: "Interactive Installation",
    year: "2024",
    challenge:
      "Create an engaging and memorable interactive installation that showcases graduates' work and fosters connection among attendees at GradShow 2024.",
    process: [
      {
        title: "Concept Development",
        description:
          "Brainstormed ideas for an interactive installation that would capture the essence of the graduates' journey and create a shared experience for visitors.",
      },
      {
        title: "UX Design",
        description:
          "Developed user flows and interaction models to ensure an intuitive and engaging experience for all users.",
      },
      {
        title: "3D Prototyping",
        description:
          "Created 3D models and prototypes of the installation to visualize the concept and test its feasibility.",
      },
      {
        title: "User Testing",
        description:
          "Conducted user testing sessions with prototypes to gather feedback and refine the interaction design.",
      },
      {
        title: "Proposal Preparation",
        description:
          "Compiled all research, designs, and prototypes into a comprehensive proposal for the GradShow 2024 committee.",
      },
    ],
    outcome:
      "Developed a compelling proposal for an innovative interactive installation that received positive feedback from peers and faculty. The project demonstrated the potential to create a memorable and unifying experience for GradShow 2024 attendees.",
    link: "/projects/take-a-shot",
  },
  {
    id: 6,
    title: "Nandos App Redesigned",
    category: "featured",
    categories: ["ui", "ux", "app-design", "research"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kg42iAsqAmXxoF2kwYPsI4C6npeIEy.png",
    role: "UX Designer",
    subRoles: ["App Design", "Design System"],
    description: "Redesigned the Nandos app to improve user experience and engagement.",
    sector: "UI Design",
    year: "2024",
    challenge:
      "Improve the user experience and functionality of the Nandos app to increase customer engagement and satisfaction.",
    process: [
      {
        title: "User Research",
        description: "Conducted user interviews and surveys to understand pain points and preferences.",
      },
      {
        title: "Competitive Analysis",
        description: "Analyzed competitor apps to identify best practices and opportunities for improvement.",
      },
      {
        title: "Design System Creation",
        description: "Developed a comprehensive design system to ensure consistency across the app.",
      },
      {
        title: "Prototyping",
        description: "Created interactive prototypes to test and refine the new design.",
      },
      {
        title: "User Testing",
        description: "Conducted usability tests with target users to gather feedback and make necessary adjustments.",
      },
    ],
    outcome:
      "Created a more intuitive and visually appealing app design that improved user satisfaction and increased engagement with Nandos' digital offerings.",
    link: "https://www.behance.net/gallery/198512147/Nandos-User-Experience-Redesign",
  },
  // 2023 Projects
  {
    id: 1,
    title: "Wander's Enigma",
    category: "featured",
    categories: ["immersive-experience", "interactive", "ux"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wander%20enigna-BMbz8iyKZ78k130edzBBoYdUxG1Ii6.png",
    role: "Project Lead",
    subRoles: ["UX Design", "UI Design", "Interactive Design"],
    description:
      "An interactive, storytelling-based installation that guided visitors through various activities, including AR interactions and problem-solving.",
    sector: "Interactive Installation",
    year: "2023",
    challenge:
      "Create an engaging and educational experience that showcased the skillsets & technology learned in the course and its offerings, in an experiential and memorable way.",
    process: [
      {
        title: "Ideation and Concept Development",
        description:
          "Brainstormed ideas and developed the Alice in Wonderland theme, focusing on a light-hearted, engaging storyline.",
      },
      {
        title: "Story Mapping",
        description: "Created a detailed storyline map, outlining the user journey from entry to exit.",
      },
      {
        title: "Prototyping and Testing",
        description:
          "Developed prototypes of the interactive elements, conducting user tests to gather feedback and make necessary adjustments.",
      },
      {
        title: "Development and Implementation",
        description:
          "Coordinated with team members to build and integrate various components, including AR interactions, physical installations, and guided pathways.",
      },
      {
        title: "Execution and Feedback",
        description:
          "Managed the installation during the Open House, collecting feedback from visitors and making real-time adjustments.",
      },
    ],
    outcome:
      "Developed an Alice in Wonderland-themed installation with a guided storyline, interactive AR elements, and problem-solving activities. Received positive feedback from over 250 visitors, with an average rating of 5 out of 5 for overall experience.",
    link: "/projects/wanders-enigma",
  },
  {
    id: 2,
    title: "Video Production",
    category: "featured",
    categories: ["video-production", "marketing"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/awwa%20competition.jpg-8AFfbhDuobtaoMIKBjJT5RolrRGG6y.jpeg",
    role: "Director & Project Lead",
    subRoles: ["Video Production", "Content Strategy", "Marketing"],
    description:
      "Created a promotional video to effectively communicate with seniors and highlight the new active ageing centre's key features.",
    sector: "Video Production",
    year: "2023",
    challenge:
      "Create a promotional video that effectively communicated to seniors, making it engaging and easy to understand.",
    process: [
      {
        title: "Research and Ideation",
        description: "Conducted thorough research to gather insights and brainstormed ideas for the promotional video.",
      },
      {
        title: "Storyboarding",
        description: "Created detailed storyboards to plan the video's structure and content.",
      },
      {
        title: "Prototyping and Testing",
        description:
          "Developed prototypes of the video content, conducting user tests with the target audience to gather feedback.",
      },
      {
        title: "Production",
        description: "Filmed and edited the video, incorporating feedback from testing.",
      },
      {
        title: "Evaluation and Iteration",
        description: "Collected feedback after the video launch and made necessary adjustments.",
      },
    ],
    outcome:
      "Developed a clear and engaging video focusing on the centre's key features, ensuring the content was accessible and appealing to the senior audience. The project won an award for its clarity, feasibility, and detail-oriented design.",
    link: "https://youtube.com/shorts/800sduAfVQc",
  },
  {
    id: 3,
    title: "Path of Familiarity",
    category: "featured",
    categories: ["ux", "wayfinding"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lm8Eqzdc6IvQ4G4Milftbrgeh0HBFQ.png",
    role: "Lead Designer",
    subRoles: ["Project Planning", "User Research"],
    description:
      "Created a user-friendly and intuitive navigation system for dementia patients through thematic murals and animal guides.",
    sector: "Wayfinding",
    year: "2023",
    challenge:
      "Design a wayfinding system that aided dementia patients in navigating the space, making it intuitive and easily recognizable.",
    process: [
      {
        title: "Research and Ideation",
        description: "Conducted thorough research to gather insights and brainstormed ideas for the murals.",
      },
      {
        title: "Sketching and Prototyping",
        description: "Created sketches and prototypes of the mural designs.",
      },
      {
        title: "Testing and Feedback",
        description:
          "Conducted usability tests with dementia patients and caregivers to gather feedback and make necessary adjustments.",
      },
      {
        title: "Implementation",
        description: "Painted the murals at the centre, ensuring they were placed strategically for maximum impact.",
      },
      {
        title: "Evaluation and Iteration",
        description: "Collected feedback after implementation and made necessary adjustments.",
      },
    ],
    outcome:
      "Developed thematic murals that were visually engaging and easily recognizable, helping dementia patients navigate the space with ease. The project won 2nd place for its clarity, feasibility, and detail-oriented design.",
    link: "/projects/wayfinding-system",
  },
  {
    id: 4,
    title: "Synapse",
    category: "development",
    categories: ["development", "ui", "ux"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Synapse%20thumbnail-4eK1Iwaq3vrm88tTDrOdbe6TTjopev.png",
    role: "Web Designer",
    subRoles: ["UX Research", "UI Design", "Front-End Development"],
    description: "Created an intuitive and engaging user interface that simplified event planning.",
    sector: "Website Design & Development",
    year: "2023",
    challenge:
      "Develop a user-friendly platform that caters to both novice and experienced event planners, addressing the complexities and stress of organising events.",
    process: [
      {
        title: "Research and Analysis",
        description: "Conducted extensive research to gather user insights and understand the competitive landscape.",
      },
      {
        title: "Concept Ideation",
        description: "Brainstormed ideas and planned the design system, creating wireframes and mockups.",
      },
      {
        title: "Design System and Style Guide",
        description: "Developed a consistent design system and style guide to ensure uniformity across the platform.",
      },
      {
        title: "Development",
        description:
          "Built the website using HTML and CSS for structure and styling, incorporating animations and interactive elements to enhance user experience.",
      },
      {
        title: "Testing and Iteration",
        description: "Conducted usability tests and made iterative improvements based on user feedback.",
      },
    ],
    outcome:
      "Developed a responsive web design that includes features such as a user-friendly dashboard, automated scheduling, vendor management, and real-time updates. The website saw a significant increase in user engagement due to its intuitive design and efficient workflow.",
    link: "https://youtu.be/lK9vCyffKPU?si=pnOoItphr_gLtVWk",
  },
  {
    id: 5,
    title: "Giordano Redesigned",
    category: "featured",
    categories: ["ui", "ux", "redesign", "research"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scene_2.png-54QmDsQNT5Nj276DJbsN1nMyl88dO0.jpeg",
    role: "UI/UX Designer",
    subRoles: ["Business Analysis", "UX Mapping"],
    description:
      "Redesigned the Giordano website to create a seamless and engaging online shopping experience that mirrored the in-store experience.",
    sector: "Retail",
    year: "2023",
    challenge: "Address the disparity between online and in-store experiences and improve Giordano's online exposure.",
    process: [
      {
        title: "Research and Analysis",
        description: "Conducted thorough business and user research to gather insights and identify key issues.",
      },
      {
        title: "Concept Ideation",
        description:
          "Developed ideas for improving the user experience, focusing on aligning online and in-store experiences.",
      },
      {
        title: "Wireframing and Prototyping",
        description: "Created wireframes and prototypes to visualize the proposed solutions.",
      },
      {
        title: "Development and Testing",
        description:
          "Built the redesigned website, integrating new features and conducting usability tests to gather feedback.",
      },
      {
        title: "Iteration and Refinement",
        description:
          "Made iterative improvements based on user feedback to ensure the final design met user and business goals.",
      },
    ],
    outcome:
      "Redesigned the website, added features like AR try-on and a chatbot, and ensured alignment with Giordano's brand vision. Saw a significant increase in user engagement and online sales.",
    link: "/projects/giordano-redesigned",
  },
]

// Update the link property for each project
projects.forEach((project) => {
  project.link = `/projects/${project.id}`
})
