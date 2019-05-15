import React from 'react';
import { withRouter } from 'react-router-dom';

// Import Components
import BaseContainer from './containers/BaseContainer';


const Routes = ({ location }) => {
    return (
        <BaseContainer>
            <div>
                <h1>Title</h1>
            </div>
        </BaseContainer>

    );
}


export default withRouter(Routes);