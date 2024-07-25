'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import leftPic from './images/cute1.jpg';
import rightPic from './images/cute2.jpg';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { usePost } from '@/components/PostContext';
import { useEffect, useRef } from 'react';
import { FBPostProps } from './FacebookPost';

const formSchema = z.object({
  authorName: z
    .string()
    .min(2, { message: 'Author name must be at least 2 characters.' }),
  date: z.string().min(2, { message: 'Date must be at least 2 characters.' }),
  profileEmoji: z
    .string()
    .min(1, { message: 'Profile emoji is required.' })
    .max(1, { message: 'Max 1 character' }),
  reactionCount: z.string().min(1, { message: 'Reaction count is required.' }),
  leftCaption: z.string().min(1, { message: 'Left caption is required.' }),
  rightCaption: z.string().min(1, { message: 'Right caption is required.' }),
  commentCount: z.string().min(1, { message: 'Comment count is required.' }),
  shareCount: z.string().min(1, { message: 'Share count is required.' }),

  // ???
  leftImage: z.string().optional(), // Change to string for data URL
  rightImage: z.string().optional(), // Change to string for data URL
});

interface PostFormProps {
  onChange: (post: FBPostProps) => void;
}

export function PostForm({ onChange }: PostFormProps) {
  const { post, setPost } = usePost();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: post,
  });

  const leftImageInputRef = useRef<HTMLInputElement>(null);
  const rightImageInputRef = useRef<HTMLInputElement>(null);

  // Update post values on form change
  useEffect(() => {
    const subscription = form.watch((values) => {
      setPost(values as FBPostProps);
    });

    return () => subscription.unsubscribe();
  }, [form, setPost]);

  const handleFileChange = async (
    fileInput: HTMLInputElement | null,
    field: 'leftImage' | 'rightImage'
  ) => {
    if (fileInput && fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const fileURL = reader.result as string;
        form.setValue(field, fileURL);
      };

      reader.readAsDataURL(file);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid max-h-screen grid-cols-1 gap-6 lg:grid-cols-2'
      >
        {/* Author Name Field */}
        <FormField
          control={form.control}
          name='authorName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author Name</FormLabel>
              <FormControl>
                <Input placeholder='Author Name' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date Field */}
        <FormField
          control={form.control}
          name='date'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input placeholder='Date' {...field} />
              </FormControl>
              <FormDescription>Enter the date of the post.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Profile Emoji Field */}
        <FormField
          control={form.control}
          name='profileEmoji'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Emoji</FormLabel>
              <FormControl>
                <Input placeholder='Profile Emoji' {...field} />
              </FormControl>
              <FormDescription>
                Choose an emoji to represent your profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Reaction Count Field */}
        <FormField
          control={form.control}
          name='reactionCount'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reaction Count</FormLabel>
              <FormControl>
                <Input placeholder='Reaction Count' {...field} />
              </FormControl>
              <FormDescription>Enter the number of reactions.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Left Caption Field */}
        <FormField
          control={form.control}
          name='leftCaption'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Left Caption</FormLabel>
              <FormControl>
                <Input placeholder='Left Caption' {...field} />
              </FormControl>
              <FormDescription>
                Add a caption for the left side of the post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Right Caption Field */}
        <FormField
          control={form.control}
          name='rightCaption'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Right Caption</FormLabel>
              <FormControl>
                <Input placeholder='Right Caption' {...field} />
              </FormControl>
              <FormDescription>
                Add a caption for the right side of the post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ??? */}

        {/* Left Image Field */}
        <FormField
          control={form.control}
          name='leftImage'
          render={() => (
            <FormItem>
              <FormLabel>Left Image</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  accept='image/*'
                  ref={leftImageInputRef}
                  onChange={() =>
                    handleFileChange(leftImageInputRef.current, 'leftImage')
                  }
                />
              </FormControl>
              <FormDescription>
                Upload an image for the left side of the post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Right Image Field */}
        <FormField
          control={form.control}
          name='rightImage'
          render={() => (
            <FormItem>
              <FormLabel>Right Image</FormLabel>
              <FormControl>
                <Input
                  type='file'
                  accept='image/*'
                  ref={rightImageInputRef}
                  onChange={() =>
                    handleFileChange(rightImageInputRef.current, 'rightImage')
                  }
                />
              </FormControl>
              <FormDescription>
                Upload an image for the right side of the post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Comment Count Field */}
        <FormField
          control={form.control}
          name='commentCount'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment Count</FormLabel>
              <FormControl>
                <Input placeholder='Comment Count' {...field} />
              </FormControl>
              <FormDescription>Enter the number of comments.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Share Count Field */}
        <FormField
          control={form.control}
          name='shareCount'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Share Count</FormLabel>
              <FormControl>
                <Input placeholder='Share Count' {...field} />
              </FormControl>
              <FormDescription>Enter the number of shares.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
