import React from 'react';
//import style from './myPage.css';

import TitleComponent from '../../components/common/title/title'; // TitleComponent 임포트
import Facility from '../../components/facility/facility_content/faciltiy'

// 타이틀 컴포넌트 정의
const FacilityPage = () => { // 함수 컴포넌트로 정의
  return (
    <div>
      <TitleComponent title="FACILITY" />

      <div className="content-container">

          <Facility 
          title="CLASS 101"
          imageUrl="https://example.com/library.jpg"
          isAvailable={true}
          />
          <Facility 
          title="CLASS 201"
          imageUrl="https://example.com/pool.jpg"
          isAvailable={false}
          />


          <Facility 
          title="CLASS 301"
          imageUrl="https://example.com/pool.jpg"
          isAvailable={false}
          />



      </div>


    </div>





  );
};

export default FacilityPage;
