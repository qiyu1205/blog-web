import Head from 'next/head'
import Link from 'next/link'
import { PureComponent } from 'react'

import Layout, { siteTitle } from '../components/Layout/Layout'
import { getSortedPostsData } from '../lib/posts'
import styles from './index.module.scss'
import PostCard from '../components/PostCard/PostCard'
interface Props{
  allPostsData: Array<any>,
}
interface State{}

export default class Home extends PureComponent<Props, State> {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className={styles.mainTitleWrap}>
          <h1 className={styles.mainTitle}>所有文章</h1>
        </div>
        <section className={styles.row}>
          {this.props.allPostsData.map(({
            id, date, quote, title, titlePic
          }) => (
            <div key={id} className={styles.postSmall}>
              <Link  href={`/posts/${id}`}>
                <a>
                  <PostCard
                    source={titlePic}
                    title={title}
                    content={quote}
                    time={date}
                  />
                </a>
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