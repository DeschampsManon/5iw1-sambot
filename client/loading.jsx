/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import ReactDOM from 'react-dom';
import {Toast} from 'react-weui';

// Simple loading spinner
const Loading = function({text = 'Loading...'}) {
    return <Toast show icon='loading'>{text}</Toast>;
};

Loading.propsTypes = {
    text: React.PropTypes.string,
};

export default Loading;