import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoHeader from './components/common/coheader/coheader'
import Cofooter from './components/common/cofooter/cofooter';
import style from "./styles/global.css";
import FacilityPage from './pages/facility/facilityPage';
import MyPage from './pages/my/myPage';
import HomePage from './pages/home/homePage';
import BookPage from './pages/book/bookPage';

function App() {


    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CoHeader />
                <div className="route-container"> {/* route-container 클래스 적용 */}
                    <Routes>
                        <Route path="/"element={<HomePage />} />
                        <Route path="/book"element={<BookPage />} />
                        <Route path="/facility/"element={<FacilityPage />} />
                        <Route path="/my/" element={<MyPage />} />
                    </Routes>
                </div>
                <Cofooter />
            </div>
        </Router>
    );
}

export default App;