import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../ui/Card';
import Button from '../ui/Button';

const projects = [
  {
    id: 1,
    nameFr: "Gestion de Soutenance",
    nameEn: "Defense Management",
    descriptionFr: "Une plateforme web interactive qui facilite la gestion de soutenance d'une école pour les étudiants, les professeurs et les visiteurs.",
    descriptionEn: "An interactive web platform that facilitates defense management for students, teachers and visitors.",
    stack: ["Python", "Django"],
    categoryFr: "Application Web",
    categoryEn: "Web App",
    image: "/images/projects/soutenance.png",
    links: {
      github: "https://github.com/waramagnou-tech/SOUTAPP-Web",
      demo: null
    }
  },
  {
    id: 2,
    nameFr: "Eventia",
    nameEn: "Eventia",
    descriptionFr: "Plateforme événementielle digitale dédiée à la création, la gestion et la diffusion d'événements (concerts, conférences, spectacles, etc.).",
    descriptionEn: "Digital event platform dedicated to the creation, management and broadcasting of events (concerts, conferences, shows, etc.).",
    stack: ["React.js", "Next.js", "API REST", "Yeria (mobile)"],
    categoryFr: "Application Web & Mobile",
    categoryEn: "Web & Mobile App",
    image: "/images/projects/eventia.png",
    links: {
      github: "https://github.com/Numerum-dev-center/Eventia-web",
      demo: "https://eventia-beige.vercel.app"
    }
  }
];

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0] || 'fr';
  const isEnglish = currentLang === 'en';
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => isEnglish ? p.categoryEn : p.categoryFr))];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => (isEnglish ? p.categoryEn : p.categoryFr) === selectedCategory);

  return (
    <SectionWrapper id="portfolio" title={t('portfolio.title')} subtitle={t('portfolio.subtitle')}>
      <div className="max-w-6xl mx-auto">
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? (isEnglish ? 'All' : 'Tous') : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                {/* Project Image */}
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={isEnglish ? project.nameEn : project.nameFr}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect fill="%23e5e7eb" width="400" height="225"/%3E%3Ctext fill="%239ca3af" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {isEnglish ? project.nameEn : project.nameFr}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {isEnglish ? project.descriptionEn : project.descriptionFr}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.links.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  {project.links.demo && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(project.links.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
