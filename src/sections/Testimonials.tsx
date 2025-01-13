'use client';

import { SectionHeader } from '@/components/SectionHeader';
import Card from '@/components/Card';
import { Fragment } from 'react';
import { CldImage } from 'next-cloudinary';

const testimonials = [
  {
    name: 'Jady Sit',
    position: 'Director & Principal @ Le Premier School of Ballet',
    text: "Slava is a top-notch web developer. I hired him to build up a commercial website to be user-friendly, admin-friendly, and social-media-friendly. & I'm highly satisfied with his work and expertise. I recommend Viacheslav to everyone looking for a high-end web developer.",
    imagePublicId: 'justslava/characters/character-8',
  },
  {
    name: 'Dan Eng',
    position: 'CTO @ Catalyst',
    text: "Slava was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    imagePublicId: 'justslava/characters/character-4',
  },
  {
    name: 'Nathan Das',
    position: 'CEO @ Hallicra Inc.',
    text: 'Working with Slava was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    imagePublicId: 'justslava/characters/character-9',
  },
  {
    name: 'Jacob Pat',
    position: 'CIO @ Canada Goose',
    text: 'Working with Slava was seamless and enjoyable. His technical skills and ability to meet tight deadlines make him a standout developer.',
    imagePublicId: 'justslava/characters/character-5',
  },
  {
    name: 'Paul Thomas',
    position: 'Director of IT @ Glentel',
    text: "Slava's expertise with Sanity CMS revolutionized how we manage content across Glentel's group of sites. He streamlined our workflows, improved scalability, and delivered a user-friendly solution that empowers our team. The results have been outstanding!",
    imagePublicId: 'justslava/characters/character-11',
  },
  {
    name: 'Vince Piotrowsky',
    position: 'Technology Director @ EvansHunt',
    text: 'Slava played a pivotal role in optimizing our Azure pipelines and organizing DevOps integrations. His contributions to the Boyne Resorts multi-brand project were instrumental in delivering a seamless web experience for thousands of customers.',
    imagePublicId: 'justslava/characters/character-6',
  },
];

export const TestimonialsSection = () => {
  return (
    <div className='py-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Happy Clients'
          title='What Clients Say about me'
          description="Don't just take my word for it."
        />

        <div className='mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4'>
          <div className='flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]'>
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className='max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300'
                  >
                    <div className='flex gap-4 items-center'>
                      <div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
                        <CldImage
                          width='80'
                          height='80'
                          src={testimonial.imagePublicId}
                          alt='character image'
                          className='w-auto rounded-full'
                        />
                      </div>
                      <div>
                        <div className='font-semibold'>{testimonial.name}</div>
                        <div className='text-sm text-white/40'>
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className='mt-4 md:mt-6 text-sm md:text-base'>
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
