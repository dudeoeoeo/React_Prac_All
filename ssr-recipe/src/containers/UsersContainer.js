import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
// import Users from '../components/Users';
// import PreloadContext from '../lib/PreloadContext';
import { Preloader, usePreloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';
import User from '../components/User';

const UsersContainer = ({ id }) => {
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();

    usePreloader(() => dispatch(getUser(id))); // 서버 사이드 렌더링을 할 때 API 호출하기
    useEffect(() => {
        if (user && user.id === parseInt(id, 10)) return; // 사용자가 존재하고, id가 일치한다면 요청하지 않음
        dispatch(getUser(id));
    }, [dispatch, id, user]); // id가 바뀔 때 새로 요청해야 함

    // 컨테이너 유효성 검사 후 return null을 해야 하는 경우에
    // null 대신 Preloader 반환
    // if(!user) {
    //     return <Preloader resolve={() => dispatch(getUser(id))} />;
    // }
    if (!user) return null;
    return <User user={user} />;
};

export default UsersContainer;

// const UsersContainer = ({ users, getUsers }) => {
//     // 컴포넌트가 마운트되고 나서 호출
//     useEffect(() => {
//         if (users) return; // users가 이미 유효하다면 요청하지 않음
//         getUsers();
//     }, [getUsers, users]);
//     return (
//         <>
//             <Users users={users} />
//             <PreloadContext resolve={getUsers}/>
//         </>
//     );
// };

// export default connect(
//     state => ({
//         users: state.users.users
//     }),
//     {
//         // eslint-disable-next-line no-undef
//         getUsers
//     }
// )(UsersContainer);