import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, User } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../ui/Button';

export default function About() {
  const { t } = useTranslation();

  const personalInfo = [
    { icon: User, label: t('about.personal_info.name'), value: 'Andrew Magnou' },
    { icon: Mail, label: t('about.personal_info.email'), value: 'contact@example.com' },
    { icon: MapPin, label: t('about.personal_info.location'), value: 'Paris, France' },
    { icon: Calendar, label: t('about.personal_info.availability'), value: 'Immédiate' }
  ];

  return (
    <SectionWrapper id="about" title={t('about.title')} subtitle={t('about.subtitle')}>
      <div className="max-w-4xl mx-auto">
        <motion.p 
          className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('about.description')}
        </motion.p>

        {/* Personal Info Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {personalInfo.map((info, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <info.icon className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => window.open('/cv-parfait-wara.pdf', '_blank')}
          >
            {t('hero.cta_cv')}
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
