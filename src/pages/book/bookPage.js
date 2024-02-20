import React from 'react';
import './bookPage.css'; // CSS 파일 임포트

import TitleComponent from '../../components/common/title/title'; // TitleComponent 임포트
import Search from '../../components/book/serch/search';
import Books from '../../components/book/books/books';

// 타이틀 컴포넌트 정의
const BookPage = () => {

    const categoriesBooks = {
        인문: [{ imageUrl: "https://example.com/book1.jpg", title: "책제목 1" }, /* 기타 책 정보 */],
        과학: [{ imageUrl: "https://example.com/book2.jpg", title: "책제목 2" }, /* 기타 책 정보 */],
        역사: [{ imageUrl: "https://example.com/book3.jpg", title: "책제목 3" }, /* 기타 책 정보 */],
        문학: [{ imageUrl: "https://example.com/book4.jpg", title: "책제목 4" }, /* 기타 책 정보 */],
      };


  return (
    <div className="book-page">
      <h1>Book</h1>
      <Search />
      <TitleComponent title="Best Books" />
     <div className="books-page-container">
      {Object.entries(categoriesBooks).map(([category, books], index) => (
        <Books key={index} category={category} books={books} />
      ))}
    </div>
    </div>
  );
};

export default BookPage;
