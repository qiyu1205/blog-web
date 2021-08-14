import styled from 'styled-components';

const PostCardStyle = styled.div`
  width: 420px;
  margin: 0 10px 50px;
  font-size: 0;
  img {
    width: 100%;
    height: 315px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .PreviewContent {
    background-color: #eee;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0 10px;
    .previewLink {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-weight: 600;
      color: #555;
    }
    .previewText {
      height: 80px;
      font-size: 14px;
      line-height: 1.4;
    }
    .timeTags {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
        font-weight: 500;
        height: 35px;
      .tags span{
        margin-right: 5px;
      }
    }
  }
`;

export default PostCardStyle;