import { FC } from 'react';
import Layout from '../components/Layout/Layout'
import PostCard from '../components/PostCard/PostCard';
import { postCardDataList } from '../models/index';

interface Props {}


const Blog: FC<Props> = () => (
  <Layout>
    {
      postCardDataList.map(({
        source,
        title,
        content,
        time,
        tags,
      }, idx) => <PostCard key={idx} source={source} title={title} content={content} time={time} tags={tags} />)
    }
  </Layout>
);

export default Blog;