import React from 'react';

type TechStackItemProps = {
  title: string;
  iconType: React.ReactNode;
};

type TechStackItemsProps = {
  stack: TechStackItemProps[];
};

export function TechStackItems({ stack }: TechStackItemsProps) {
  return (
    <div className='flex flex-wrap gap-6'>
      {stack.map((tech, index) => (
        <div
          key={index}
          className='inline-flex items-center gap-4 text-white py-3 px-3 outline outline-2 outline-white/10 rounded-lg'
        >
          {tech.iconType}
          <span className='font-semibold'>{tech.title}</span>
        </div>
      ))}
    </div>
  );
}
