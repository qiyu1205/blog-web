import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { removeEmbededTag } from '../../utils'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/Layout/Layout'
import Date from '../../components/date'
import styles from './posts.module.scss'
import tocbot from 'tocbot'
import { PureComponent } from 'react'

interface Props {
  postData?: any,
}
interface State {}
const customMarkdownComponents = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomOneDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {children.toString().replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children.toString()}
      </code>
    )
  },
  table({ node, inline, className, children, ...props }: any) {
    return (
      <p className={styles.tableWrapper}>
        <table {...props}>{children}</table>
      </p>
    )
  },
  h2({ node, inline, className, children, ...props }: any) {
    return (
      <h2 {...props} id={children ? children[0] : ''}>
        {children}
      </h2>
    )
  },
  h3({ node, inline, className, children, ...props }: any) {
    return (
      <h3 {...props} id={children ? children[0] : ''}>
        {children}
      </h3>
    )
  },
}
export default class Post extends PureComponent<Props, State> {

  componentDidMount() {
    // init tocbot
    tocbot.init({
      tocSelector: '.postMenu',
      contentSelector: '.postDetailContent',
      headingSelector: 'h1, h2, h3',
      hasInnerContainers: true,
    })
  }

  render() {
    const { postData } = this.props;
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <aside className={`${styles.menu} postMenu`} />
        <article className={`${styles.content}`} >
          <h1 className={styles.postTitle}>{postData.title}</h1>
          <div className={styles.tagsWrap}>
            <Date dateString={postData.date} />
            { postData.tags?.split(',').map(tag => <span className={styles.postTag} key={tag}>{tag}</span>) }
          </div>
          <ReactMarkdown
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
            components={customMarkdownComponents}
            className="postDetailContent"
          >
            {removeEmbededTag(postData.contentHtml)}
          </ReactMarkdown>
        </article>
      </Layout>
    )
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}