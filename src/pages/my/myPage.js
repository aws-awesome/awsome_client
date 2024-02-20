import React from 'react';
import './myPage.css'; // CSS 파일 임포트 (경로 확인 필요)

import TitleComponent from '../../components/common/title/title'; // TitleComponent 임포트
import MyFacilityContent from '../../components/my/MyFacilityContent/MyFacilityContent'; // MyFacilityContent 임포트
import MyBookContent from '../../components/my/MybookContent/MyBookContent';
// 타이틀 컴포넌트 정의
const MyPage = () => { // 함수 컴포넌트로 정의
  return (
    <div>
      <TitleComponent title="MY BOOKS" />

      <div className="content-container">
        <MyBookContent
          bookImageUrl="https://example.com/book-cover.jpg"
          returnDeadline="2024-02-28"
          isOverdue={false}
        />

        <MyBookContent
          bookImageUrl="https://example.com/book-cover.jpg"
          returnDeadline="2024-02-28"
          isOverdue={false}
        />

        <MyBookContent
          bookImageUrl="https://example.com/book-cover.jpg"
          returnDeadline="2024-02-28"
          isOverdue={false}
        />

        
        
        {/* 추가 MyBookContent 인스턴스 */}
      </div>

      
      <TitleComponent title="MY RESERVATIONS" />
      <div className="content-container">
        <MyFacilityContent
          facilityImageUrl="https://example.com/facility-image.jpg"
          facilityName="Conference Room"
          reservationDate="2024-03-01"
          reservationTime="10:00 AM - 11:00 AM"
          isCompleted={false}
        />


       <MyFacilityContent
          facilityImageUrl="https://example.com/facility-image.jpg"
          facilityName="Conference Room"
          reservationDate="2024-03-01"
          reservationTime="10:00 AM - 11:00 AM"
          isCompleted={false}
        />


        <MyFacilityContent
          facilityImageUrl="https://example.com/facility-image.jpg"
          facilityName="Conference Room"
          reservationDate="2024-03-01"
          reservationTime="10:00 AM - 11:00 AM"
          isCompleted={false}
        />
        {/* 추가 MyFacilityContent 인스턴스 */}
      </div>
    </div>
  );
};

export default MyPage;
