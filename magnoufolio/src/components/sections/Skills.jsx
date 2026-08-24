import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import ProgressBar from '../ui/ProgressBar';
import Card from '../ui/Card';

const technicalSkills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Java", level: 75 }
];

const tools = ["Figma", "Git", "Supabase", "Firebase"];

export default function Skills() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0] || 'fr';

  return (
    <SectionWrapper id="skills" title={t('skills.title')} subtitle={t('skills.subtitle')}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                {currentLang === 'en' ? 'Technical Skills' : 'Compétences Techniques'}
              </h3>
              <div className="space-y-5">
                {technicalSkills.map((skill, index) => (
                  <ProgressBar 
                    key={skill.name} 
                    label={skill.name} 
                    value={skill.level} 
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                {t('skills.tools')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
