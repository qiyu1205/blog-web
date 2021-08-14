import React from 'react';
import { ClockCircleOutlined, TagsOutlined } from '@ant-design/icons';
import PostCardStyle from './styled';

interface Props {
  source: string,
  title: string,
  content: string,
  time: string,
  tags: Array<string>,
}

const PostCard = ({
  source,
  title,
  content,
  time,
  tags,
}: Props) =>  (
  <PostCardStyle>
    <img src={source} alt='' />
    <div className='PreviewContent'>
    <div className='previewLink'>{title}</div>
    <div className='previewText'>{content}</div>
    <div className='timeTags'>
      <div className='previewDate'><ClockCircleOutlined /> {time}</div>
      <div className='tags'>
        <TagsOutlined />
        {tags.map((tag, idx) => (
          <span key={idx}>
            {tag}
          </span>
        ))}
      </div>
    </div>
    </div>
  </PostCardStyle>
);

export default PostCard;