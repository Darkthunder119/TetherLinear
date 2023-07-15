import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const ERROR_TEXT_MAP = {
    404: "Sorry, that page doesn't exist!",
    ERROR: 'An error occured!',
};

interface ErrorProps {
    type?: 'ERROR' | '404';
}

const Error = ({ type = 'ERROR' }: ErrorProps) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (type === 'ERROR') {
            setDisplayText(ERROR_TEXT_MAP.ERROR);
        } else {
            setDisplayText(ERROR_TEXT_MAP[404]);
        }
    }, []);

    if (!displayText) {
        return null;
    }

    return (
        <div className="text-offWhite text-xl text-center">
            <div>{displayText}</div>
            <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default Error;
