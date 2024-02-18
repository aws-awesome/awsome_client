import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoHeader from './components/common/coheader/coheader'
import Cofooter from './components/common/cofooter/cofooter';
import "./styles/global.css";


function App() {


    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CoHeader />
                <h1>test</h1>
                {/* <Routes>
                    <Route path="/detail/:stock_number" element={<DetailPage />} />
                    <Route path="/guide" element={<GuidePage />} />
                    <Route path="/filter" element={<FilterPage />} />
                    <Route path='/main' element={<MainPage />} />
                    <Route path='/' element={<MainPage />} />
                    <Route path='/feedback' element={<FeedbackPage />} />
                    <Route path="/login" element={<LoginPage onLogin={handleLogin}  />} />
                </Routes> */}
                <Cofooter />
            </div>
        </Router>
    );
}

export default App;