import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, title, subtitle, className }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {subtitle && (
              <p className="text-primary font-medium mb-2">{subtitle}</p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
