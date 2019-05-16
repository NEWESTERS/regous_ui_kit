import * as React from 'react';

import './index.css';

const Loader = () =>
    <div className="loader-backdrop">
        <div className="loader">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    </div>

export default Loader;