import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { removeEmbededTag } from './utils'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/Layout/Layout'
import Date from '../../components/date'
import {
  TableWrapper,
  Content,
  Menu,
  PostTag,
} from './styled'
import tocbot from 'tocbot'
import { PureComponent } from 'react';

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
      <TableWrapper>
        <table {...props}>{children}</table>
      </TableWrapper>
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
        <Menu className="postMenu" />
        <Content>
          <h1 className="postTitle">{postData.title}</h1>
          <div className="tagsWrap">
            <Date dateString={postData.date} />
            { postData.tags.split(',').map(tag => <PostTag key={tag}>{tag}</PostTag>) }
          </div>
          <ReactMarkdown
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
            components={customMarkdownComponents}
            className="postDetailContent"
          >
            {removeEmbededTag(postData.contentHtml)}
          </ReactMarkdown>
        </Content>
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