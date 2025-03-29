import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react';
import CardFood from './CardFood';

const CarouselCardFood = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className='grid gap-6 md:grid-cols-2'>
          <CardFood
            name='Tod Mun Pla'
            price={9000}
            description='Thai fish cakes with red curry paste, kaffir lime leaves, and green beans'
            isSpicy={true}
          />
          <CardFood
            name='Tod Mun Pla'
            price={9000}
            description='Thai fish cakes with red curry paste, kaffir lime leaves, and green beans'
            isSpicy={true}
          />
          <CardFood
            name='Tod Mun Pla'
            price={9000}
            description='Thai fish cakes with red curry paste, kaffir lime leaves, and green beans'
            isSpicy={true}
          />
          <CardFood
            name='Tod Mun Pla'
            price={9000}
            description='Thai fish cakes with red curry paste, kaffir lime leaves, and green beans'
            isSpicy={true}
          />
        </CarouselItem>
        <CarouselItem className='grid gap-6 md:grid-cols-2'>
          <CardFood
            name='Tod Mun Pla'
            price={9000}
            description='Thai fish cakes with red curry paste, kaffir lime leaves, and green beans'
            isSpicy={true}
          />
          <CardFood
            name='Tod Mun Pla'
            price={9000}
            description='Thai fish cakes with red curry paste, kaffir lime leaves, and green beans'
            isSpicy={true}
          />
          <CardFood
            name='Tod Mun Pla'
            price={9000}
            description='Thai fish cakes with red curry paste, kaffir lime leaves, and green beans'
            isSpicy={true}
          />
          <CardFood
            name='Tod Mun Pla'
            price={9000}
            description='Thai fish cakes with red curry paste, kaffir lime leaves, and green beans'
            isSpicy={true}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselCardFood;
