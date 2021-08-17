import { FC } from 'react';
import Head from 'next/head';

import { userInfo } from '../../models';
import Nav from '../Nav/Nav';
import LayoutStyle from './styled';

export const siteTitle = 'SeveNyU\'blog'
interface Props {}

const Layout: FC<Props> = ({ children }) => {
  const { avatar, userName } = userInfo;
  return (
    <LayoutStyle>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav
        avatar={avatar}
        user={userName}
      />
      <main>{children}</main>
    </LayoutStyle>
  )
}

export default Layout