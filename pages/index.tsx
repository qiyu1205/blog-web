import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/Layout/Layout'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        {allPostsData.map(({ id, title }) => (
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}