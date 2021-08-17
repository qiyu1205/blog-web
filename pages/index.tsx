import { ConsoleSqlOutlined } from '@ant-design/icons'
import Head from 'next/head'
import Link from 'next/link'
import { PureComponent } from 'react'

import Layout, { siteTitle } from '../components/Layout/Layout'
import { getSortedPostsData } from '../lib/posts'
import IndexStyled from './indexStyled'

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
        <IndexStyled>
          <div className="c">
          <div className="drop drop1"></div>
          <div className="drop drop2"></div>
          <div className="text-c">
            <h1>DROPMORPHISM</h1>
            <p>Both the drops are created using CSS</p>
          </div>
        </div>
        </IndexStyled>
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