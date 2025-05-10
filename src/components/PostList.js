import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'React 시작하기', excerpt: 'React의 기본 개념을 소개합니다.' },
  { id: 2, title: 'useState란?', excerpt: 'useState 훅을 사용하는 방법을 배워봅니다.' },
];

const PostList = () => (
  <div>
    {posts.map(post => (
      <div key={post.id}>
        <h2>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <hr />
      </div>
    ))}
  </div>
);

export default PostList;