import React, { useEffect } from 'react';
import Hero from './Hero';
import Features from './Features';
import { features } from './Data';
import debug from 'sabio-debug';
import PropTypes from 'prop-types';
import NewsletterSubscriptions from '../../components/newsletter/SubscriptionView';

const _logger = debug.extend('index');

_logger('logger firing');
const Landing = (props) => {
    _logger('landing page props ->', props);
    useEffect(() => {
        if (document.body) document.body.classList.remove('authentication-bg');
    }, []);
    return (
        <>
            <Hero />
            <Features features={features} />
            <NewsletterSubscriptions />
        </>
    );
};
Landing.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number,
        roles: PropTypes.arrayOf(PropTypes.string),
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool,
    }),
};
export default Landing;
