import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Nav from '@/components/Nav';
import { cn } from '@/lib/utils';
import { PostProvider } from '@/components/PostContext';
import { ModeToggle } from '@/components/ui/toggle-mode';
import { Rocket } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FB Post Maker',
  description: 'Make Cute FB Post and Download as PNG',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system'>
          <PostProvider>
            <div className='grid min-h-screen grid-cols-1 overflow-x-hidden py-3 lg:grid-cols-12'>
              <main className='col-span-1 flex h-full flex-col items-center gap-6 p-3 lg:col-span-8'>
                <div className='flex w-full items-center justify-between lg:mt-10 lg:p-3 lg:px-52'>
                  <div className='flex gap-2'>
                    <Rocket /> <div>Post Maker</div>
                  </div>
                  <ModeToggle />
                </div>
                {children}
              </main>
              <div className='col-span-1 lg:col-span-4'>
                <Nav />
              </div>
            </div>
          </PostProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
