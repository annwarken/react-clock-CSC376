import { useState, useEffect } from 'react';
import Button from '../Button';
import '../styles/Stopwatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const startStopwatch = () => setIsRunning(true);
    const stopStopwatch = () => setIsRunning(false);
    const resetStopwatch = () => {
        setIsRunning(false);
        setTime(0);
    };

    useEffect(() => {
        let timer: number | null = null;
        if (isRunning) {
            timer = window.setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => {
            if (timer !== null) clearInterval(timer);
        };
    }, [isRunning]);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <h1>{formatTime(time)}</h1>
            <Button label="Start" onClick={startStopwatch} className={isRunning ? 'disabled' : ''} />
            <Button label="Stop" onClick={stopStopwatch} className={!isRunning ? 'disabled' : ''} />
            <Button label="Reset" onClick={resetStopwatch} />
        </div>
    );
};

export default Stopwatch;