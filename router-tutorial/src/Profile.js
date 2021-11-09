import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    hong: {
        name: '이름1',
        description: '테스트1'
    },
    jang: {
        name: '이름2',
        description: '테스트2'
    }
};

const Profile = () => {
    //console.log("profile: match: " + match.params);
    const {username} = useParams();
    console.log("username", username);
    const profile = data[username];
    if(!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }

    return (
        <div>
            <h3>
                profile: {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;