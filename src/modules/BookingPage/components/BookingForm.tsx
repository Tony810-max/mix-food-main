'use client';

import { Icons } from '@/assets/icons';
import InputLabel from '@/components/InputLabel';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';
import { type BookingFormValues, bookingSchema } from '../schema';

export const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    mode: 'onChange',
  });

  const selectedDateTime = watch('datetime');

  const onSubmit = (data: BookingFormValues) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div className='grid gap-4'>
        <div className='grid gap-2'>
          <InputLabel
            type='text'
            IconStart={Icons?.User}
            label='Full Name'
            placeHolder='Enter your full name'
            {...register('name')}
            errorMessage={errors.name?.message as string}
          />
        </div>

        <div className='grid gap-2'>
          <InputLabel
            type='mail'
            IconStart={Icons?.MailIcon}
            label='Email'
            placeHolder='Enter your email'
            {...register('email')}
            errorMessage={errors.email?.message as string}
          />
        </div>

        <div className='grid gap-2'>
          <InputLabel
            type='text'
            IconStart={Icons?.Phone}
            label='Phone Number'
            placeHolder='Enter your phone number'
            {...register('phone')}
            errorMessage={errors.phone?.message as string}
          />
        </div>

        <div className='grid gap-2'>
          <Label htmlFor='datetime' className='font-bold'>
            Date and Time<span className='text-[#f31064]'>*</span>
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !selectedDateTime && 'text-muted-foreground'
                )}
              >
                {selectedDateTime ? format(new Date(selectedDateTime), 'PPP p') : <span>Pick a date and time</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <div className='flex flex-col gap-2 p-2'>
                <Calendar
                  mode='single'
                  selected={selectedDateTime ? new Date(selectedDateTime) : undefined}
                  onSelect={(date: Date | undefined) => {
                    if (!date) return;
                    const time = selectedDateTime ? format(new Date(selectedDateTime), 'HH:mm') : '12:00';
                    const [timeHours, timeMinutes] = time.split(':').map(Number);
                    const newDate = new Date(date);
                    newDate.setHours(timeHours, timeMinutes);
                    setValue('datetime', newDate.toISOString());
                  }}
                  startMonth={new Date()}
                  required
                />
                <Input
                  type='time'
                  value={selectedDateTime ? format(new Date(selectedDateTime), 'HH:mm') : ''}
                  onChange={(e) => {
                    if (!selectedDateTime) return;
                    const date = new Date(selectedDateTime);
                    const [hours, minutes] = e.target.value.split(':').map(Number);
                    date.setHours(hours, minutes);
                    setValue('datetime', date.toISOString());
                  }}
                />
              </div>
            </PopoverContent>
          </Popover>
          {errors.datetime && <p className='text-red-500 text-sm'>{errors.datetime.message}</p>}
        </div>

        <div className='grid gap-2'>
          <Label htmlFor='guests' className='font-bold'>
            Number of Guests<span className='text-[#f31064]'>*</span>{' '}
          </Label>
          <Select onValueChange={(value) => setValue('guests', parseInt(value))}>
            <SelectTrigger>
              <SelectValue placeholder='Select number of guests' />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} guests
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.guests && <p className='text-red-500 text-sm'>{errors.guests.message}</p>}
        </div>

        <div className='grid gap-2'>
          <Label htmlFor='specialRequests' className='font-bold'>
            Special Requests<span className='text-[#f31064]'>*</span>
          </Label>
          <Textarea
            id='specialRequests'
            placeholder='Any special requests or dietary preferences...'
            className='resize-none'
            {...register('specialRequests')}
          />
          {errors.specialRequests && <p className='text-red-500 text-sm'>{errors.specialRequests.message}</p>}
        </div>
      </div>

      <Button type='submit' className='w-full'>
        Book Table
      </Button>
    </form>
  );
};
