'use client';
import Card from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import ReactIcon from '@/assets/icons/react.svg';
import GraphQLIcon from '@/assets/icons/graphql.svg';
import SanityIcon from '@/assets/icons/sanity.svg';
import NodeIcon from '@/assets/icons/nodejs.svg';
import AWSIcon from '@/assets/icons/awsblack.svg';
import NextjsIcon from '@/assets/icons/nextjs.svg';
import AstroIcon from '@/assets/icons/astro.svg';
import AzureIcon from '@/assets/icons/azure-smooth.svg';
import TypeScriptIcon from '@/assets/icons/ts.svg';
import JavaScriptIcon from '@/assets/icons/js.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import StrapiIcon from '@/assets/icons/strapi.svg';
import CloudinaryIcon from '@/assets/icons/cloudinary-colored.svg';
import DockerIcon from '@/assets/icons/docker.svg';
import PostgresIcon from '@/assets/icons/postgres.svg';

import CardHeader from '@/components/CardHeader';
import ToolboxItems from '@/components/ToolboxItems';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { CldImage } from 'next-cloudinary';

const toolboxItems = [
  {
    title: 'AWS',
    iconType: AWSIcon,
  },
  {
    title: 'Azure',
    iconType: AzureIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    title: 'NodeJS',
    iconType: NodeIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Next.js',
    iconType: NextjsIcon,
  },
  {
    title: 'Astro',
    iconType: AstroIcon,
  },
  {
    title: 'GraphQL',
    iconType: GraphQLIcon,
  },
  {
    title: 'Sanity',
    iconType: SanityIcon,
  },
  {
    title: 'GitHub',
    iconType: GitHubIcon,
  },
  {
    title: 'Strapi',
    iconType: StrapiIcon,
  },
  {
    title: 'Cloudinary',
    iconType: CloudinaryIcon,
  },
  {
    title: 'Docker',
    iconType: DockerIcon,
  },
  {
    title: 'Postgres',
    iconType: PostgresIcon,
  },
];

const hobbies = [
  {
    title: 'Video Editing',
    emoji: '🎞️',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Running',
    emoji: '🏃🏿',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%',
  },

  {
    title: 'Hiking',
    emoji: '🥾',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Traveling',
    emoji: '🧳',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Cycling',
    emoji: '🚲',
    left: '80%',
    top: '5%',
  },
  {
    title: 'Roller Skating',
    emoji: '🛼',
    left: '70%',
    top: '45%',
  },

  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div id='about' className='py-20 lg:py-32'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A glimps into My World'
          description='Learn more who I am, what I do, and what inspires me.'
        />
        <div className='mt-20 flex flex-col gap-8'>
          {/* 1st bento-grid */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My reads'
                description='Explore my books shaping my perspectives'
              />
              <div className='w-32 mx-auto mt-2 md:-mt-7'>
                <CldImage
                  width='324'
                  height='500'
                  src='justslava/cant-hurt-me'
                  alt='Cant hurt me book'
                  className='h-full w-full object-cover '
                />
              </div>
            </Card>
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='My Toolbox'
                description='Explore my tech stack I use every day'
                className=''
              />
              <ToolboxItems
                items={toolboxItems}
                className=''
                itemsWrapperClassName='animate-move-left [animation-duration:30s]'
              />
              <ToolboxItems
                items={toolboxItems}
                className='mt-6'
                itemsWrapperClassName='animate-move-right [animation-duration:20s]'
              />
            </Card>
          </div>
          {/* 2nd bento-grid */}
          <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8'>
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Beyond the code'
                description='Explore my interests and hobbies beyond web dev'
                className='px-6 py-6'
              />
              <div className='relative flex-1' ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className='font-medium text-gray-950'>
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <CldImage
                width='800'
                height='800'
                src='justslava/map1'
                alt='map'
                className='h-full w-full object-cover'
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                <CldImage
                  width='120'
                  height='120'
                  src='justslava/characters/character-3'
                  alt='slava on the map'
                  className='h-full w-full object-cover rounded-full'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
