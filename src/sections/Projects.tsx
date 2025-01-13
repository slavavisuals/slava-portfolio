'use client';

import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from '@/components/SectionHeader';
import Card from '@/components/Card';
import { ProjectCarousel } from '@/components/Carousel';

const portfolioProjects = [
  {
    company: 'Boyne Mountain',
    year: '2024',
    title: 'Luxury Resort Web Portal Transformation',
    results: [
      { title: 'Streamlined DevOps pipelines for faster deployments' },
      { title: 'Reduced build times by 60% with optimized Azure pipelines' },
      { title: 'Integrated multi-brand systems seamlessly' },
      { title: 'Improved site performance by 45%' },
    ],
    link: 'https://www.boynemountain.com',
    screenshots: [
      { publicId: 'justslava/projects/bm/bm-slide-0' },
      { publicId: 'justslava/projects/bm/bm-slide-1' },
      { publicId: 'justslava/projects/bm/bm-slide-2' },
      { publicId: 'justslava/projects/bm/bm-slide-3' },
      { publicId: 'justslava/projects/bm/bm-slide-4' },
      { publicId: 'justslava/projects/bm/bm-slide-5' },
    ],
  },
  {
    company: 'Smart Voyage',
    year: '2024',
    title: 'Personal Travel Assistant',
    results: [
      { title: 'Utilizes the latest version of Next.js' },
      { title: 'Leverages TypeScript for type safety' },
      { title: 'Integrates OpenAI API' },
      { title: 'Tailwind CSS' },
      { title: 'Designed with mobile-first principles' },
      { title: 'Incorporates Clerk for secure authentication' },
    ],
    link: '#',
    screenshots: [
      { publicId: 'justslava/projects/sv/smart-voyage-0' },
      { publicId: 'justslava/projects/sv/smart-voyage-1' },
      { publicId: 'justslava/projects/sv/smart-voyage-2' },
      { publicId: 'justslava/projects/sv/smart-voyage-3' },
      { publicId: 'justslava/projects/sv/smart-voyage-4' },
      { publicId: 'justslava/projects/sv/smart-voyage-5' },
    ],
  },
  {
    company: 'JobStack',
    year: '2024',
    title: 'Personal Job Tracker Application',
    results: [
      { title: 'Nextjs 15 and React Hook forms' },
      { title: 'Tailwind CSS' },
      { title: 'Incorporates ChadCN UI' },
      { title: 'Prisma CRM' },
      { title: 'Build with PostgressSQL' },
      { title: 'Incorporates Clerk for secure authentication' },
    ],
    link: '#',
    screenshots: [
      { publicId: 'justslava/projects/job-stack/jobstack-0' },
      { publicId: 'justslava/projects/job-stack/jobstack-1' },
      { publicId: 'justslava/projects/job-stack/jobstack-2' },
      { publicId: 'justslava/projects/job-stack/jobstack-3' },
      { publicId: 'justslava/projects/job-stack/jobstack-4' },
      { publicId: 'justslava/projects/job-stack/jobstack-5' },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id='projects' className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description=' See how I transformed concepts into digital experiences'
        />

        <div className='mt-10 md:mt-20 flex flex-col  gap-20'>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className='md:grid md:grid-cols-2 lg:gap-16'>
                <div className='md:pb-8 md:pt-5 lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-2xl lg:text-4xl'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result, idx) => (
                      <li
                        key={idx}
                        className='flex gap-2 text-sm md:text-base text-white/50'
                      >
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>{' '}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target='_blank'>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                      <span>Visit Live site</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='flex flex-col items-center mt-5 lg:mt-0'>
                  <ProjectCarousel screenshots={project.screenshots} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
