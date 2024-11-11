import React from 'react';

const SectionTitle = ({
  title, 
  subtitle, 
  description, 
  titleClassName = '', 
  descriptionClassName = '', 
  containerClassName = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center mt-20 mb-10 ${containerClassName}`}>
      <h6 className={`mb-4 text-3xl font-extrabold text-gray-900 dark:text-primaryDark md:text-5xl lg:text-4xl ${titleClassName}`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c3493] to-[#f5c500]">
          {title}
        </span> 
        {subtitle && <span> {subtitle}</span>}
      </h6>

      <p className={`text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
