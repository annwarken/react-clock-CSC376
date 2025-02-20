import { useState, useEffect } from 'react';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    
    return (
        <div className="container">
            <h1>Current Time:</h1>
            <h1>{currentTime}</h1>
        </div>
    );
};

export default Clock;