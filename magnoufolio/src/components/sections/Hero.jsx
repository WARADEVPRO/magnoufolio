import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link as LinkIcon, Github, Mail, MapPin, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function Hero() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Github, href: "https://github.com/waramagnou-tech", label: "GitHub" },
    { icon: LinkIcon, href: "#portfolio", label: "Portfolio" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge text={t('hero.available')} color="green" />
        </motion.div>

        {/* Greeting & Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t('hero.greeting')}</p>
          <h1 className="text-5xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Andrew Magnou
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mt-4">
            {t('hero.title')}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button variant="primary" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta_work')}
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open('/cv-parfait-wara.pdf', '_blank')}>
            {t('hero.cta_cv')}
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 mt-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
