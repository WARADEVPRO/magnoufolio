export const projects = [
  {
    id: 1,
    name: { fr: "Gestion de Soutenance", en: "Defense Management" },
    description: {
      fr: "Une plateforme web interactive qui facilite la gestion de soutenance d'une école pour les étudiants, les professeurs et les visiteurs.",
      en: "An interactive web platform that facilitates defense management for students, teachers and visitors."
    },
    stack: ["Python", "Django"],
    category: { fr: "Application Web", en: "Web App" },
    image: "/images/projects/soutenance.png",
    links: {
      github: "https://github.com/waramagnou-tech/SOUTAPP-Web",
      demo: null
    }
  },
  {
    id: 2,
    name: { fr: "Eventia", en: "Eventia" },
    description: {
      fr: "Plateforme événementielle digitale dédiée à la création, la gestion et la diffusion d'événements (concerts, conférences, spectacles, etc.).",
      en: "Digital event platform dedicated to the creation, management and broadcasting of events (concerts, conferences, shows, etc.)."
    },
    stack: ["React.js", "Next.js", "API REST", "Yeria (mobile)"],
    category: { fr: "Application Web & Mobile", en: "Web & Mobile App" },
    image: "/images/projects/eventia.png",
    links: {
      github: "https://github.com/Numerum-dev-center/Eventia-web",
      demo: "https://eventia-beige.vercel.app"
    }
  }
];
