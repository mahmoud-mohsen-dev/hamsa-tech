import type { Metadata } from 'next';
import '../styles/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import React, { Suspense } from 'react';
import Header from '@/components/AppLayout/Header';
import Main from '@/components/AppLayout/Main';
import Footer from '@/components/AppLayout/Footer';

import ConfigAntThemes from '@/components/Theme/ConfigAntThemes';

import { Open_Sans, Inter } from 'next/font/google';
import Loading from './loading';
import { StoreContextProvider } from './context/store';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans'
});

//👇 Configure the object for our second font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Hamsa Tech',
  description: 'Generated by create next app'
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html
      lang='en'
      className={`${openSans.variable} ${inter.variable}`}
    >
      <body className='bg-white font-inter text-black-light'>
        <StoreContextProvider>
          <AntdRegistry>
            <ConfigAntThemes>
              <div
                className={`content grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] bg-white text-gray-normal`}
              >
                <Header />
                <Suspense fallback={<Loading />}>
                  <Main>{children}</Main>
                </Suspense>
                <Footer />
              </div>
            </ConfigAntThemes>
          </AntdRegistry>
        </StoreContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
