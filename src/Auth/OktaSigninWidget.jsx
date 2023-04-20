import React, { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { OktaConfig } from '../lib/OktaConfig';

const OktaSignInWidget = ({ onSuccess, onError }) => {
  const widgetRef = useRef();
  useEffect(() => {
    if (!widgetRef.current) {
      return false;
    }

    const widget = new OktaSignIn(OktaConfig);

   // Search for URL Parameters to see if a user is being routed to the application to recover password
   widget.showSignInToGetTokens({
      el: widgetRef.current,
    }).then(onSuccess).catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  return (
  <div className='container mt-5 mb-5'>
    <div ref={widgetRef} />
  </div>
  );
};

export default OktaSignInWidget;

