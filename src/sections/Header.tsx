'use client';

import { menus } from '@/components/menus';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  console.log('active section:', activeSection);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        //console.log('Observed entry:', entry.target.id, entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    menus.forEach((menu: string) => {
      const element = document.getElementById(menu);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [menus]);

  return (
    <div className='hidden md:flex justify-center items-center fixed top-3 w-full z-10'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        {menus.map((menu: string, index: number) => {
          const isActive = activeSection === menu;
          return (
            <a
              key={index}
              className={twMerge('nav-item', isActive && 'active-nav-item')}
              href={`#${menu}`}
            >
              {menu}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
