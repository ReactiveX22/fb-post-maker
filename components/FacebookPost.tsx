'use client';
import { usePost } from '@/components/PostContext';

import { toPng } from 'html-to-image';
import { Ellipsis, ImageDown } from 'lucide-react';
import Image from 'next/image';
import { FC, useCallback, useRef } from 'react';
import leftPic from './images/cute1.jpg';
import rightPic from './images/cute2.jpg';
import { Button } from './ui/button';
import HeartSVG from './ui/HeartSVG';
import LikeSVG from './ui/LikeSVG';
import WorldSVG from './ui/WorldSVG';

export interface FBPostProps {
  authorName: string;
  date: string;
  profileEmoji: string;
  leftCaption: string;
  rightCaption: string;
  reactionCount: string;
  commentCount: string;
  shareCount: string;
  leftImage?: string;
  rightImage?: string;
}

export type FBPostComponentProps = {
  post: FBPostProps;
};

// const defaultProp: FBPostProps = {
//   authorName: 'Nisha Babu 😘',
//   date: '1 d',
//   profileEmoji: '❤️‍🩹',
//   leftCaption: '😇',
//   rightCaption: '🤗',
//   reactionCount: '1.5',
//   commentCount: '157',
//   shareCount: '279',
// };

const FacebookPost: FC = () => {
  const { post } = usePost();
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    const pngSettings = {
      backgroundColor: '#242526',
      pixelRatio: 3,
    };

    toPng(ref.current, pngSettings)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'cute-fb-post.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <div className='flex flex-col items-center gap-4 leading-none'>
      <div ref={ref}>
        <div className='bg-bg-fb px-4 py-8 font-fb-font'>
          <div className='flex w-[360px] flex-col items-center rounded-lg bg-bg-post drop-shadow-lg lg:w-[590px]'>
            {/* Author */}
            <div className='mt-3 flex h-12 w-full items-center justify-between gap-4 px-3'>
              <div className='flex items-center gap-2'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#3E5641] text-2xl'>
                  {post.profileEmoji}
                </div>
                <div className='flex h-full flex-col justify-between gap-[6px]'>
                  <div className='text-sm font-semibold text-zinc-100'>
                    {post.authorName}
                  </div>
                  <div className='flex w-full items-center gap-2 text-xs font-thin text-zinc-400'>
                    <span className='inline-flex items-center gap-1 leading-none'>
                      {post.date}
                      <span className='inline-flex items-center justify-center font-thin'>
                        ·
                      </span>
                      <WorldSVG />
                    </span>
                  </div>
                </div>
              </div>
              <div className='p-3'>
                <Ellipsis className='w-5 text-zinc-400 lg:w-6' />
              </div>
            </div>
            {/* Caption and Photo */}
            <div className='w-full'>
              <div className='my-3 flex w-full justify-between text-xs font-normal lg:text-sm'>
                <div className='w-full px-3'>{post.leftCaption}</div>
                <p className='w-full px-3'>{post.rightCaption}</p>
              </div>
              <div className='flex h-[180px] w-full justify-between gap-[1px] overflow-clip lg:h-[294px]'>
                <div className='w-[180px] lg:w-[294px]'>
                  <Image
                    src={post.leftImage ?? leftPic.src}
                    width={294}
                    height={294}
                    alt='left pic'
                    className='w-[180px] lg:w-[294px]'
                  />
                </div>
                <div className='w-[180px] lg:w-[294px]'>
                  <Image
                    src={post.rightImage ?? rightPic.src}
                    width={294}
                    height={294}
                    className='w-[180px] lg:w-[294px]'
                    alt='right pic'
                  />
                </div>
              </div>
            </div>
            {/* Reactions */}
            <div className='flex w-full justify-between px-4 py-[10px]'>
              <div className='flex w-full items-center'>
                <div className='flex items-center py-1'>
                  <div className='relative flex items-center'>
                    <div className='z-20 rounded-full ring-2 ring-bg-post'>
                      <HeartSVG />
                    </div>
                    <div className='absolute z-10 translate-x-[18px]'>
                      <LikeSVG />
                    </div>
                  </div>
                </div>
                <div className='ml-6 text-xs text-zinc-400 lg:text-sm'>
                  {post.reactionCount}
                </div>
              </div>
              <div className='flex w-fit items-center gap-2 text-nowrap text-xs text-zinc-400 lg:text-sm'>
                <span>{post.commentCount} comments</span>
                <div>{post.shareCount} shares</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={onButtonClick} className='flex w-fit gap-1'>
        <ImageDown strokeWidth={1.25} />
        Download
      </Button>
    </div>
  );
};

export default FacebookPost;
