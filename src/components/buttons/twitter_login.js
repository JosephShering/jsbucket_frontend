import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default () => {
    return (
        <button className="text-white bg-blue-500 rounded p-4">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <span className="pl-2">Register with Twitter</span>
        </button>
    )
}