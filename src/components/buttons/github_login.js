import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default () => {
    return (
        <button className="text-white bg-gray-700 rounded p-4">
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span className="pl-2">Register with Github</span>
        </button>
    )
}