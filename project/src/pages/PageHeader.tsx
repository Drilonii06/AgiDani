import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, backgroundImage }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-stone-100 flex items-center justify-center overflow-hidden">
      {/* This div gives the "small background image" effect */}
      {backgroundImage && (
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[250px] -translate-x-1/2 -translate-y-1/2 opacity-50 bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900">{title}</h1>
        <p className="text-lg md:text-xl mt-2 text-stone-700">{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
