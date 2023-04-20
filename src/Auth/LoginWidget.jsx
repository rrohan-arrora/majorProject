import { Redirect } from 'react-router-dom';
import OktaSignInWidget from './OktaSigninWidget';
import { useOktaAuth } from '@okta/okta-react';

const LoginWidget = ({ config }) => {
    const { oktaAuth, authState } = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleWidgetRedirect(tokens);
    };

    const onError = (err) => {
        console.log('Sign in error:', err);
    };

    if (!authState) {
        return <div>Loading ... </div>;
    }

    return authState.isAuthenticated ?
        <Redirect to={{ pathname: '/' }} /> :
        <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />;
};

export default LoginWidget;
