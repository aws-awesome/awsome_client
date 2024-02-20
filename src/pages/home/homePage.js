import React from 'react';
import './homePage.css'; // CSS 파일 임포트

import TitleComponent from '../../components/common/title/title'; // TitleComponent 임포트
import BestBook from '../../components/home/bestBook/bestBook';
// 함수 컴포넌트 정의
const HomePage = () => {
  return (
    <div>
      <h1>AWSome University Library</h1>
      <TitleComponent title="Best Books" />
      <div className="best-books-container">
        <BestBook imageUrl="https://example.com/book1.jpg" title="책제목 1" author="작가 1" />
        <BestBook imageUrl="https://example.com/book2.jpg" title="책제목 2" author="작가 2" />
        <BestBook imageUrl="https://example.com/book3.jpg" title="책제목 3" author="작가 3" />
        <BestBook imageUrl="https://example.com/book4.jpg" title="책제목 4" author="작가 4" />
      </div>
    </div>
  );
};

export default HomePage;
