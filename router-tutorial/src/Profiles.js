import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>        
            <ul>
                <li>
                    <Link to="/profiles/hong">hong</Link>
                </li>
                <li>
                    <Link to="/profiles/jang">jang</Link>
                </li>
            </ul>
            <div> 사용자를 선택해주세요. </div>
        <Routes>
            <Route path=":username" element={<Profile />} />
        </Routes>
        <WithRouterSample />
        </div>
    );
};

export default Profiles;