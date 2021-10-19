import { FC } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/Layout'
import imgSrcource from '../public/images/404.svg';
import styles from './404.module.scss';

interface Props {}

const Custom404: FC<Props> = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <div className={styles.notFoundContent}>
      <img src={imgSrcource.src} width='50%' height='50%' />
      <h1>404 - Page Not Found</h1>
    </div>
  </Layout>
);

export default Custom404;

export async function getStaticProps() {
  return {
    props: {
      imgSrcource,
    }
  }
}