'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CldImage } from 'next-cloudinary';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface ProjectCarouselProps {
  screenshots: { publicId: string }[];
}

export function ProjectCarousel({ screenshots }: ProjectCarouselProps) {
  return (
    <Carousel className='w-full max-w-md'>
      <CarouselContent>
        {screenshots.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className='flex aspect-square items-center justify-center'>
                <CldImage
                  key={index}
                  width='600'
                  height='600'
                  src={image.publicId}
                  alt={image.publicId}
                  className='w-full'
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
