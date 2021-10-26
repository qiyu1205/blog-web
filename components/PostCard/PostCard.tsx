import React from 'react';
import styles from './postCard.module.scss'

interface Props {
  source: string,
  title: string,
  content: string,
  time: string,
  tags?: Array<string>,
}

const PostCard = ({
  source,
  title,
  content,
  time,
}: Props) =>  (
  <div className={styles.cardContainer}>
    <div style={{ backgroundImage: `url(${source})` }} className={styles.postCover}></div>
    <div className={styles.postContent}>
      <h2 className={styles.postTitle}>{title}</h2>
      <div className={styles.postIntro}>{content}</div>
      <div className={styles.postTime}>{time}</div>
    </div>
  </div>
);

export default PostCard;