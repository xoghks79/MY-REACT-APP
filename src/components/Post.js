import React from 'react';
import { useParams } from 'react-router-dom';

const postData = {
  1: { title: 'React 시작하기', content: '이 글은 React의 기본을 설명합니다.' },
  2: { title: 'useState란?', content: '이 글은 useState 훅을 다룹니다.' },
};

const Post = () => {
  const { id } = useParams();
  const post = postData[id];

  if (!post) return <p>존재하지 않는 글입니다.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;