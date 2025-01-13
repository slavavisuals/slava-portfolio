'use client';

import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaBluesky } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/slava1/',
    icon: <FaLinkedin size={20} />,
  },
  {
    title: 'Github',
    href: 'https://github.com/slavavisuals',
    icon: <FaGithub size={20} />,
  },
  {
    title: 'BlueSky',
    href: '#',
    icon: <FaBluesky size={20} />,
  },
  {
    title: 'X',
    href: '#',
    icon: <FaXTwitter size={20} />,
  },
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@slavavisuals',
    icon: <FaYoutube size={20} />,
  },
  {
    title: 'Instagram',
    href: '#',
    icon: <FaInstagram size={20} />,
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>
            &copy; 2025 JustSlava | Crafted with care
          </div>
          <nav className='flex items-center gap-8'>
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                className='inline-flex gap-1.5'
                href={link.href}
                target='_blank'
                title={link.title}
              >
                {link.icon}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
