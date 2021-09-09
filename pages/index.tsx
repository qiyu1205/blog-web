import { ConsoleSqlOutlined } from '@ant-design/icons'
import Head from 'next/head'
import Link from 'next/link'
import { PureComponent } from 'react'

import Layout, { siteTitle } from '../components/Layout/Layout'
import { getSortedPostsData } from '../lib/posts'
import styles from './index.module.scss';
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
        <div className={styles.banner}></div>
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