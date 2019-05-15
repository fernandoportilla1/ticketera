import React from 'react';
import { withRouter, Route } from 'react-router-dom';

// Import Components
import BaseContainer from './containers/BaseContainer';
import Home from './containers/HomeContainer';
import Login from './containers/LoginContainer';


const Routes = ({ location }) => {
    return (
        <BaseContainer>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
        </BaseContainer>

    );
}


export default withRouter(Routes);