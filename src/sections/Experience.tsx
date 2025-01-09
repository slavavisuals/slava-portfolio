'use client';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import Card from '@/components/Card';

import { TechStackItems } from '@/components/TechStackItems';
//stack icons
import JavaScript from '@/assets/icons/square-js.svg';

import { BiSolidCheckboxChecked } from 'react-icons/bi';

import { MdLinearScale } from 'react-icons/md';
import { TbSeparator } from 'react-icons/tb';

import { RiJavascriptFill } from 'react-icons/ri';
import { RiNextjsFill } from 'react-icons/ri';
import { SiSanity } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { IoLogoNodejs } from 'react-icons/io';
import { FiFramer } from 'react-icons/fi';

import { FaAws } from 'react-icons/fa';
import { SiAmazonredshift } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiStrapi } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';

import { SiSalesforce } from 'react-icons/si';
import { TbBrandCucumber } from 'react-icons/tb';
import { TbBrandCypress } from 'react-icons/tb';

import { FaDrupal } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';

const workExperience = [
  {
    company: 'Evans Hunt',
    textSnapshot:
      'EvansHunt is a digital web agency specializing in innovative web solutions, marketing strategies, and creative design. The agency has worked with high-profile clients such as WestJet, Shaw Communications, Calgary Stampede, Boyne Resorts and many others delivering impactful digital experiences that elevate brand presence.',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/evans-hunt.png',
    year: 'Feb 2024 - Current',
    title: 'Senior Front End Developer',
    results: [
      {
        title:
          'Led front-end development for a client project in the hotel and resort management industry, catering to thousands of customers.',
      },
      {
        title:
          'Implemented and integrated a Headless CMS using Sanity IO and NextJS, enhancing content delivery and management.',
      },
      {
        title:
          'Configured and maintained Azure Pipelines for continuous integration and deployment (CI/CD), improving development workflows',
      },
    ],
    stack: [
      {
        title: 'JavaScript',
        iconType: <RiJavascriptFill size={30} />,
      },
      {
        title: 'Next.js',
        iconType: <RiNextjsFill size={30} />,
      },
      {
        title: 'Sanity',
        iconType: <SiSanity size={25} />,
      },
      {
        title: 'Azure',
        iconType: <VscAzure size={30} />,
      },
      {
        title: 'Node.js',
        iconType: <IoLogoNodejs size={30} />,
      },
      {
        title: 'Framer',
        iconType: <FiFramer size={30} />,
      },
    ],
    link: 'https://www.evanshunt.com',
    image: darkSaasLandingPage,
  },
  {
    company: 'Wellington-Altus',
    textSnapshot:
      'Wellington-Altus is a leading Canadian wealth management firm specializing in personalized investment solutions and financial planning. Known for its client-focused approach, the company serves high-net-worth individuals, families, and businesses across Canada. Wellington-Altus has earned a reputation for delivering innovative and tailored financial strategies that drive long-term success.',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/wellington-altus.png',
    year: 'May 2023 - Feb 2024',
    title: 'Senior Front End Engineer',
    results: [
      {
        title:
          'Led the development and maintenance of a React.js application enhancing content management workflows, and enabling smooth product launches.',
      },
      {
        title:
          'Integrated Strapi CMS with AWS services to ensure scalable, secure, and reliable content management and application performance.',
      },
      {
        title:
          'Collaborated with cross-functional teams to build and optimize React.js components, improving user experience and efficiency in content delivery.',
      },
    ],
    stack: [
      {
        title: 'AWS',
        iconType: <FaAws size={30} />,
      },
      {
        title: 'Redshift',
        iconType: <SiAmazonredshift size={30} />,
      },
      {
        title: 'React.js',
        iconType: <FaReact size={30} />,
      },
      {
        title: 'TypeScript',
        iconType: <BiLogoTypescript size={30} />,
      },
      {
        title: 'Strapi',
        iconType: <SiStrapi size={30} />,
      },
      {
        title: 'Tailwind',
        iconType: <RiTailwindCssFill size={30} />,
      },
    ],
    link: 'https://www.wellington-altus.ca',
    image: lightSaasLandingPage,
  },
  {
    company: 'Costco Mobility',
    textSnapshot:
      'Costco is a global leader in retail, specializing in membership-based wholesale shopping. Known for its vast selection of high-quality products at competitive prices, the company serves millions of members worldwide. With a focus on exceptional customer service and value, Costco has become a trusted destination for everything from groceries and electronics to home goods and more.',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/costco.png',
    year: 'Dec 2020 - May 2023',
    title: 'Senior Front End Developer',
    results: [
      {
        title:
          'Designed and implemented new features and functionalities for the eCommerce site using React.js/Next.js and Sanity CMS',
      },
      {
        title:
          'Architected and built scalable custom CMS templates for marketing campaigns, promotions, and web banners',
      },
      {
        title:
          'Assessed technical feasibility and prototyped software solutions using cutting-edge front-end technologies',
      },
    ],

    stack: [
      {
        title: 'JavaScript',
        iconType: <RiJavascriptFill size={30} />,
      },
      {
        title: 'Next.js',
        iconType: <RiNextjsFill size={30} />,
      },
      {
        title: 'Sanity',
        iconType: <SiSanity size={25} />,
      },
      {
        title: 'Cypress',
        iconType: <TbBrandCypress size={30} />,
      },
      {
        title: 'Azure',
        iconType: <VscAzure size={30} />,
      },
      {
        title: 'Node.js',
        iconType: <IoLogoNodejs size={30} />,
      },
    ],
    link: 'https://mobility.costco.ca',
    image: aiStartupLandingPage,
  },
  {
    company: 'WirelessWave',
    textSnapshot:
      'WirelessWave is a Canadian retail brand specializing in mobile devices and services, operating as part of Glentel, a company jointly owned by Bell and Rogers. With a vast network of stores across Canada, WirelessWave connects customers with the latest smartphones, plans, and accessories from leading carriers. Leveraging the ownership of Bell and Rogers, WirelessWave offers a wide range of options, making it a trusted choice for mobile solutions nationwide.',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/wirelesswave.png',
    year: 'Dec 2020 - May 2023',
    title: 'Senior Front End Developer',
    results: [
      {
        title:
          'Developed and maintained the eCommerce site, improving user experience and online sales',
      },
      {
        title:
          'Integrated CMS with GraphQL APIs and backend technologies, such as Node.js and Express.JS',
      },
      {
        title:
          'Designed and developed mobile-first and responsive web pages using HTML5, CSS3, and JavaScript frameworks such as React.js and Next.JS',
      },
    ],
    stack: [
      {
        title: 'Azure',
        iconType: <VscAzure size={30} />,
      },
      {
        title: 'Next.js',
        iconType: <RiNextjsFill size={30} />,
      },
      {
        title: 'Sanity',
        iconType: <SiSanity size={25} />,
      },
      {
        title: 'Cypress',
        iconType: <TbBrandCypress size={30} />,
      },
      {
        title: 'GraphQl',
        iconType: <GrGraphQl size={30} />,
      },
      {
        title: 'Node.js',
        iconType: <IoLogoNodejs size={30} />,
      },
    ],
    link: 'https://wirelesswave.ca',
    image: aiStartupLandingPage,
  },
  {
    company: 'Canada Goose',
    textSnapshot:
      'Canada Goose is a globally recognized luxury outerwear brand, celebrated for its high-performance jackets, parkas, and apparel designed to withstand extreme weather conditions. Proudly Canadian, the company combines timeless design with innovative craftsmanship and has expanded its presence with a vast network of retail stores across the world. With a focus on sustainability and ethical practices, Canada Goose is a leader in the premium outdoor apparel industry.',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/canada-goose.png',
    year: 'Mar 2017 - Dec 2020',
    title: 'Front End Developer',
    results: [
      {
        title:
          'Designed and built scalable and secure user experiences for high-traffic websites with a global footprint across 13+ countries',
      },
      {
        title:
          'Ensured platform-agnostic design implementations for maximum compatibility and user accessibility',
      },
      {
        title:
          'Led an international team of cross-functional collaborators, including software engineers, UX designers, product managers, and partners',
      },
    ],
    stack: [
      {
        title: 'SalesForce',
        iconType: <SiSalesforce size={30} />,
      },
      {
        title: 'JavaScript',
        iconType: <RiJavascriptFill size={30} />,
      },
      {
        title: 'Node',
        iconType: <IoLogoNodejs size={30} />,
      },
      {
        title: 'Cucumber',
        iconType: <TbBrandCucumber size={30} />,
      },
      {
        title: 'Azure',
        iconType: <VscAzure size={30} />,
      },
    ],
    link: 'https://www.canadagoose.com',
    image: aiStartupLandingPage,
  },
  {
    company: 'Intelex',
    textSnapshot:
      'Intelex is a Canadian software company specializing in environmental, health, safety, and quality (EHSQ) management solutions. Known for its innovative cloud-based platform, Intelex empowers organizations to streamline compliance, improve operational performance, and drive sustainability initiatives. Trusted by world-renowned clients such as Unilever, Virgin, Honeywell, and Nestle, Intelex is a global leader in the enterprise software industry.',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/intelex.png',
    year: 'Apr 2015 - Feb 2017',
    title: 'Drupal Web Developer',
    results: [
      {
        title:
          'Designed and built scalable and secure user experiences for high-traffic websites with a global footprint across 13+ countries',
      },
      {
        title:
          'Ensured platform-agnostic design implementations for maximum compatibility and user accessibility',
      },
      {
        title:
          'Led an international team of cross-functional collaborators, including software engineers, UX designers, product managers, and partners',
      },
    ],
    stack: [
      {
        title: 'Drupal',
        iconType: <FaDrupal size={30} />,
      },
      {
        title: 'PHP',
        iconType: <FaPhp size={30} />,
      },
      {
        title: 'Bootstrap',
        iconType: <FaBootstrap size={30} />,
      },
      {
        title: 'Node',
        iconType: <IoLogoNodejs size={30} />,
      },
      {
        title: 'Azure',
        iconType: <VscAzure size={30} />,
      },
      {
        title: 'Cypress',
        iconType: <TbBrandCypress size={30} />,
      },
    ],
    link: 'https://www.intelex.com',
    image: aiStartupLandingPage,
  },
];

const Experience = () => {
  return (
    <section id='experience' className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world experience'
          title='Experience'
          description='Recent companies I worked for'
        />

        <div className='mt-10 md:mt-10 flex flex-col  gap-20'>
          {workExperience.map((workplace, workplaceIndex) => (
            <Card
              key={workplaceIndex}
              className='px-8 pt-8  md:px-10 lg:pt-10 lg:px-20 sticky'
              style={{
                top: `calc(64px + ${workplaceIndex * 40}px)`,
              }}
            >
              <div className='gap-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='pb-5 lg:pb-8 text-white/50 items-center justify-center flex font-bold uppercase tracking-widest text-sm'>
                    <span>{workplace.year}</span>
                  </div>

                  <div className='bg-white rounded-2xl p-2 flex items-center justify-center'>
                    <a
                      href={workplace.link || '#'}
                      title={workplace.link && `visit ${workplace.company}`}
                      target='_blank'
                    >
                      <Image
                        src={workplace.logo}
                        alt={workplace.title}
                        width={320}
                        height={80}
                        className='w-auto'
                      />
                    </a>
                  </div>

                  <h3 className='font-serif text-center text-2xl mt-5 md:text-4xl'>
                    {workplace.title}
                  </h3>
                  <hr className='hidden md:block border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-3 mt-4 md:mt-5'>
                    {workplace.results.map((result, idx) => (
                      <li
                        key={idx}
                        className='flex flex-col items-center md:items-start md:flex-row '
                      >
                        <TbSeparator size={30} className='md:hidden' />
                        <span className='hidden md:block mt-1 lg:mt-1 flex-shrink-0 h-10 w-10'>
                          <BiSolidCheckboxChecked size={30} className='' />
                        </span>
                        <article className='text-center md:text-left text-base text-white leading-loose'>
                          {result.title}
                        </article>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='flex flex-col justify-evenly lg:h-full lg:w-full lg:max-w-none'>
                  <p className='hidden md:block leading-loose text-white/70 mb-3'>
                    {workplace.textSnapshot}
                  </p>

                  <div className='flex flex-col justify-between'>
                    <p className=' text-center items-center font-bold uppercase tracking-widest text-sm mb-6 border-b-2 border-white/5 pb-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent'>
                      Tech stack:
                    </p>
                    <TechStackItems stack={workplace.stack} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
