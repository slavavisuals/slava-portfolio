'use client';

import { IoMdPaperPlane } from 'react-icons/io';
import { formSchema } from '@/lib/schemas';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';

import { z } from 'zod';
import { send } from '@/lib/email';
import { SectionHeader } from '@/components/SectionHeader';

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      honeypot: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.honeypot) {
      // Do nothing if honeypot field is filled
      return;
    }
    try {
      await send(values);
      toast.success('Thank you for your message. I will contact you shortly!');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  }

  return (
    <div id='contact' className='py-20 lg:py-32'>
      <div className='container'>
        <SectionHeader
          eyebrow='Contact Me'
          title="Let's bring your vision to life."
          description="Drop me a message, and let's get started."
        />
        <div className='mt-20 flex flex-col gap-8'>
          <div className='bg-gradient-to-r mx-auto from-emerald-300 to-sky-400 text-gray-900 py-5 px-5 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
            <Card className='mx-auto max-w-md'>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>
                  Fill out the form, and I'll get back to you before you know
                  it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8'
                  >
                    <input
                      type='text'
                      {...form.register('honeypot')}
                      style={{ display: 'none' }}
                    />
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='space-y-2'>
                        <FormField
                          name='firstName'
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder='First name' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className='space-y-2'>
                        <FormField
                          name='lastName'
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder='Last name' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className='space-y-2'>
                      <FormField
                        name='email'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder='Your Email' {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className='space-y-2'>
                      <FormField
                        name='message'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                id='message'
                                placeholder='Your message could be the start of something amazing.'
                                className='min-h-[190px]'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type='submit'
                      className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'
                    >
                      <span className='font-semibold'>Send message</span>
                      <IoMdPaperPlane size={20} />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
