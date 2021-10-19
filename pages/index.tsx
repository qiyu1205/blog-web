import Head from 'next/head'
import Link from 'next/link'
import { PureComponent } from 'react'

import Layout, { siteTitle } from '../components/Layout/Layout'
import { getSortedPostsData } from '../lib/posts'
import styles from './index.module.scss'
import bannerPic1 from '../public/images/banner1.svg'
import bannerPic2 from '../public/images/banner2.svg'
interface Props{
  allPostsData: Array<any>,
}
interface State{}

export default class Home extends PureComponent<Props, State> {
  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className={styles.banner}>
          <h1>Hi, QiyU</h1>
          <img className={styles.bannerPic1} src={bannerPic1.src} width='40%' height='40%' />
          <img className={styles.bannerPic2} src={bannerPic2.src} width='50%' height='50%' />
        </div>
        <section>
          {this.props.allPostsData.map(({ id, title }) => (
            <div key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </div>
          ))}
        </section>
      </Layout>
    )
  }
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}