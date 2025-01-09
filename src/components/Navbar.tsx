'use client';
import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { menus } from '@/components/menus';
import Link from 'next/link';
import grainImage from '@/assets/images/grain.jpg';

function MobileNavbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    console.log('click');
    setMobileNav(!mobileNav);
  };

  const handleLinkClick = () => {
    setMobileNav(false);
  };

  return (
    <header className='sticky w-full top-0  inset-x-0 p-6 z-30 md:hidden bg-gray-800/95'>
      <nav className='container mx-auto'>
        <motion.button
          initial='hide'
          animate={mobileNav ? 'show' : 'hide'}
          onClick={toggleMobileNav}
          className='flex flex-col space-y-1 relative z-30'
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 5,
              },
            }}
            className='w-6 bg-white h-px block'
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className='w-6 bg-white h-px block'
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -5,
              },
            }}
            className='w-6 bg-white h-px block'
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.div
                key='mobile-nav'
                variants={{
                  hide: {
                    x: '-100%',
                    transition: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      when: 'afterChildren',
                      staggerChildren: 0.1,
                    },
                  },
                  show: {
                    x: '0%',
                    transition: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      when: 'beforeChildren',
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial='hide'
                animate='show'
                exit='hide'
                className='fixed inset-0 bg-gray-900  p-6 flex flex-col justify-center space-y-10 lg:hidden
                '
              >
                <motion.div
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                      },
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                      transition: {
                        duration: 0.2,
                      },
                    },
                  }}
                  className='flex flex-col items-center gap-3 '
                >
                  {menus.map((menu: string, index: number) => (
                    <Link
                      key={index}
                      href={`#${menu}`}
                      passHref
                      onClick={handleLinkClick}
                      className='nav-item text-lg  uppercase'
                    >
                      {menu}
                    </Link>
                  ))}
                </motion.div>
                {/* <motion.div
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                  }}
                  className='w-full h-px bg-white/30'
                ></motion.div> */}
                {/* <motion.ul
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                  }}
                  className='list-none flex justify-center gap-x-4'
                >
                  <li>
                    <div className='bg-white rounded-lg w-8 h-8'></div>
                  </li>
                  <li>
                    <div className='bg-white rounded-lg w-8 h-8'></div>
                  </li>
                  <li>
                    <div className='bg-white rounded-lg w-8 h-8'></div>
                  </li>
                </motion.ul> */}
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
export default MobileNavbar;
