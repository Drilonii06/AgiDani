import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, backgroundImage }) => {
  return (
    <header 
      className="relative py-24 md:py-32"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black-900 opacity-30"></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-stone-200 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default PageHeader;