import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../ui/Card';

export default function Services() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0] || 'fr';

  const servicesData = [
    {
      id: 1,
      title: "Développement Web",
      titleEn: "Web Development",
      icon: "Code2",
      description: "Conception d'applications web modernes, performantes et responsive avec React, Next.js et Node.js. Je m'attache à produire un code propre, maintenable et évolutif.",
      descriptionEn: "Design of modern, high-performance and responsive web applications with React, Next.js and Node.js. I focus on producing clean, maintainable and scalable code."
    },
    {
      id: 2,
      title: "Applications Mobiles",
      titleEn: "Mobile Applications",
      icon: "Smartphone",
      description: "Développement d'applications mobiles hybrides et cross-platform qui offrent une expérience utilisateur fluide et native sur iOS et Android.",
      descriptionEn: "Development of hybrid and cross-platform mobile applications that offer a smooth and native user experience on iOS and Android."
    }
  ];

  return (
    <SectionWrapper id="services" title={t('services.title')} subtitle={t('services.subtitle')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {servicesData.map((service, index) => {
          const IconComponent = Icons[service.icon];
          const isEnglish = currentLang === 'en';
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {isEnglish ? service.titleEn : service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {isEnglish ? service.descriptionEn : service.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
