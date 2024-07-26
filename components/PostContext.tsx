'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FBPostProps } from '@/components/FacebookPost';
import leftPic from './images/cute1.jpg';
import rightPic from './images/cute2.jpg';

interface PostContextType {
  post: FBPostProps;
  setPost: (post: FBPostProps) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [post, setPost] = useState<FBPostProps>({
    authorName: 'Cute Couples',
    date: '1 d',
    profileEmoji: '❤️‍🩹',
    leftCaption: '😇',
    rightCaption: '🤗',
    reactionCount: '1.5K',
    commentCount: '157',
    shareCount: '279',
    leftImage: leftPic?.src, // Initialize with an empty string or default image URL
    rightImage: rightPic?.src, // Initialize with an empty string or default image URL
  });

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
};
