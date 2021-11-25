import React from 'react';
import { Route } from 'react-router';
import UsersContainer from '../containers/UsersContainer';

const UsersPage = () => {
    // return <UsersContainer />
    return (
        <>
            <UsersContainer />
            <Route
                path="/users/:id"
                render={({ match }) => <UsersContainer id={match.params.id} />}
            />
        </>
    )
};

export default UsersPage;