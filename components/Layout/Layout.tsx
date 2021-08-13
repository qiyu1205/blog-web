import { FC } from 'react'
import Head from 'next/head'
import LayoutStyle from './styled'

import Nav from '../Nav/Nav';

export const siteTitle = 'SeveNyU\'blog'
interface Props {}

const Layout: FC<Props> = ({ children }) => {
  const avatar: string = 'http://blog-images.fiveseven.top/avatar.JPG';
  const user: string = 'SeveNyU';
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
        user={user}
      />
      <main>{children}</main>
    </LayoutStyle>
  )
}

export default Layout