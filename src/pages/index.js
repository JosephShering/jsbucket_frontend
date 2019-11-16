import React from 'react';
import SEO from '../components/seo';

import Signup from '../components/forms/signup';

import '../css/global.scss';

export default () => {
    return (
        <div>
            <SEO title="Dead Simple JSON Backend" />

            <div className="page">
                <div className="content">
                    <h2>
                        Dead Simple JSON Backend.
                    </h2>

                    <p>
                        Setup a minimal JSON powered backend API.
                    </p>
                    <p>
                        Great for rapid prototyping
                    </p>

                    <br />
                    <br />

                    <Signup />
                </div>
            </div>
        </div>
    );
};