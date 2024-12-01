import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import Card from '@/components/Card';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const workExperience = [
  {
    company: 'Evans Hunt',
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
    link: 'https://www.evanshunt.com',
    image: darkSaasLandingPage,
  },
  {
    company: 'Wellington-Altus',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/wellington-altus.png',
    year: 'May 2023 - Feb 2024',
    title: 'Senior Front End Developer',
    results: [
      {
        title:
          'Led the development and maintenance of a React.js and Next.js application with a strong focus on integrating Strapi CMS, enhancing content management workflows, and enabling smooth product launches.',
      },
      {
        title:
          'Integrated Strapi CMS with AWS services to ensure scalable, secure, and reliable content management and application performance.',
      },
      {
        title:
          'Collaborated with cross-functional teams to build and optimize Next.js components, improving user experience and efficiency in content delivery.',
      },
    ],
    link: 'https://www.wellington-altus.ca',
    image: lightSaasLandingPage,
  },
  {
    company: 'Costco Mobility',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/costco.png',
    year: 'Dec 2020 - May 2023',
    title: 'AI Startup Landing Page',
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
    link: 'https://mobility.costco.ca',
    image: aiStartupLandingPage,
  },
  {
    company: 'WirelessWave',
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
    link: 'https://wirelesswave.ca',
    image: aiStartupLandingPage,
  },
  {
    company: 'Canada Goose',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/canada-goose.png',
    year: 'Apr 2017 - Dec 2020',
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
    link: 'https://www.canadagoose.com',
    image: aiStartupLandingPage,
  },
  {
    company: 'Intelex',
    logo: 'https://res.cloudinary.com/slavavisuals/image/upload/c_limit,w_320/experience/intelex.png',
    year: 'Apr 2017 - Dec 2020',
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
    link: 'https://www.intelex.com',
    image: aiStartupLandingPage,
  },
];

const Experience = () => {
  return (
    <section className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world experience'
          title='Experience'
          description='List of companies I worked for'
        />

        <div className='mt-10 md:mt-20 flex flex-col  gap-20'>
          {workExperience.map((workplace, workplaceIndex) => (
            <Card
              key={workplace.title}
              className='px-8 pt-8 pb-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
              style={{
                top: `calc(64px + ${workplaceIndex * 40}px)`,
              }}
            >
              <div className='md:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='pb-4 text-white/50 items-center justify-center flex font-bold uppercase tracking-widest text-sm text-transparent'>
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

                  <h3 className='font-serif text-center text-2xl mt-2 md:mt-5 md:text-4xl'>
                    {workplace.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {workplace.results.map((result) => (
                      <li className='flex gap-2 text-sm md:text-base text-white/50'>
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>{' '}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className='relative'>
                  <Image
                    src={workplace.image}
                    alt={workplace.title}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
