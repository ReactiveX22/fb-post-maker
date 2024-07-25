'use client';
import React, { useState } from 'react';
import { ModeToggle } from './ui/toggle-mode';
import { PostForm } from './PostForm';
import { FBPostProps } from './FacebookPost';

const Nav = () => {
  const [post, setPost] = useState<FBPostProps>();

  return (
    <div className='z-50 flex h-full flex-col justify-center gap-1 overflow-auto p-3'>
      <PostForm onChange={setPost} />
    </div>
  );
};

export default Nav;
