import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, register } from '../../modules/auth';

const RegisterForm = ({ history }) => {
    const dispatch = useDispatch();
    const {form, auth, authError, user } = useSelector(({auth, user}) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));
    const onChange = e => {
        const {name, value} = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        if (password !== passwordConfirm) {
            // TODO: 오류 처리
            return;
        }
        dispatch(register({ username, password }));
    };

    // 회원가입 성공 / 실패 처리
    useEffect(() => {
        if (authError) {
            console.log('오류 발생');
            console.log(authError);
            return;
        }
        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);
        }
        // dispatch(initializeForm('register'));
    }, [auth, authError, dispatch]);

    // user 값이 잘 설정되었는지 확인
    useEffect(() => {
        if (user) {
            console.log("check api success");
            console.log(user);
            history.push('/');
        }
    }, [history ,user])

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(RegisterForm);