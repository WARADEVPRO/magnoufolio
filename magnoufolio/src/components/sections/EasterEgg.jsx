import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

export default function EasterEgg() {
  const { t } = useTranslation();

  const codeLines = [
    'const developer = {',
    '  name: "Andrew",',
    '  skills: ["React", "Node"],',
    '  passion: ∞',
    '}'
  ];

  return (
    <SectionWrapper id="easter-egg" title="" subtitle="">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-2xl"
        >
          {/* Code Block */}
          <div className="font-mono text-sm mb-6">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-green-400"
              >
                <span className="text-gray-500 mr-4">{String(index + 1).padStart(2, '0')}</span>
                {line}
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-300 italic text-lg">
              {t('easterEgg.quote')}
            </p>
            <div className="mt-4 flex justify-center gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5, 
                    delay: i * 0.2 
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
