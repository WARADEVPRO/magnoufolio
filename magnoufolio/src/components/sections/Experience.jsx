import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';

const workExperience = [
  {
    id: 1,
    dateFr: "mai 2026 - aujourd'hui",
    dateEn: "May 2026 - Present",
    positionFr: "Développeur Web Frontend",
    positionEn: "Frontend Web Developer",
    company: "Numerum Dev Center",
    descriptionFr: "Formation de 3 mois sur les compétences et outils de développement utilisés en entreprise. Accompagnement d'une équipe de développeurs sur la partie frontend d'une plateforme événementielle.",
    descriptionEn: "3-month training on enterprise development skills and tools. Supported a team of developers on the frontend part of an event platform."
  }
];

const education = [
  {
    id: 1,
    date: "2023 - 2025",
    degreeFr: "Licence en Technologies Informatiques",
    degreeEn: "Bachelor's in IT",
    schoolFr: "École d'Administration et de Gestion Notre Dame de l'Église",
    schoolEn: "School of Administration and Management Notre Dame de l'Église",
    descriptionFr: "Diplômé avec mention. Membre du club d'informatique.",
    descriptionEn: "Graduated with honors. Member of the computer science club."
  }
];

export default function Experience() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0] || 'fr';
  const isEnglish = currentLang === 'en';

  return (
    <SectionWrapper id="experience" title={t('experience.title')} subtitle={t('experience.subtitle')}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {isEnglish ? 'Work Experience' : 'Expérience Professionnelle'}
              </h3>
            </div>
            <div className="space-y-6">
              {workExperience.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <p className="text-sm text-primary font-medium">
                    {isEnglish ? exp.dateEn : exp.dateFr}
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                    {isEnglish ? exp.positionEn : exp.positionFr}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    {isEnglish ? exp.descriptionEn : exp.descriptionFr}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {isEnglish ? 'Education' : 'Formation'}
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-6 border-l-2 border-accent">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full" />
                  <p className="text-sm text-accent font-medium">{edu.date}</p>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                    {isEnglish ? edu.degreeEn : edu.degreeFr}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {isEnglish ? edu.schoolEn : edu.schoolFr}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    {isEnglish ? edu.descriptionEn : edu.descriptionFr}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
