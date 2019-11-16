import React from 'react';
import SEO from '../components/seo';

import Signup from '../components/forms/signup';
import TwitterLogin from '../components/buttons/twitter_login';
import GithubLogin from '../components/buttons/github_login';

export default () => {
    return (
        <div>
            <SEO title="Dead Simple JSON Backend" />
            <div className="page mt-8">
                <div className="content">
                    <h2>Dead Simple JSON Backend.</h2>

                    <p className="py-4">
                    &emsp;You are just moments away from having a RESTful / GraphQL api.
                        If you need to rapidly prototype a frontend application we provide you
                        with a zero configuration API server based around your uploaded JSON data.
                    </p>

                    <h3 className="mt-8 mb-2">Sign up with existing account</h3>
                    <div className="flex justify-around">
                        <GithubLogin />
                        <TwitterLogin />
                    </div>
                    <Signup />
                </div>
            </div>
        </div>
    );
};