/* eslint-disable react/react-in-jsx-scope */

/* ----------  External Libraries  ---------- */

import React from 'react';

/*
 * MessengerExtensions are only available on iOS and Android,
 * so show an error page if MessengerExtensions was unable to start
 */
const Oops = function() {
    return (
        <div className='static-page'>
            <div className='static-page-body'>
                <h1>Please Try in Messenger App</h1>
                <div className='static-page-subtitle'>
                    <p>This experience has been designed to work within the Messenger app on iOS or Android. Please try again there (rather than in a browser).</p>
                </div>
            </div>
        </div>
    );
};

export default Oops;