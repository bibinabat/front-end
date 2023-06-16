import {useEffect, useState} from "react";
import moment from "moment-jalaali";

const CountdownTimer = ({expirationDate}) => {
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() => {
        const now = moment();
        const expiration = moment(expirationDate, 'HH:mm:ss jYYYY/jM/jD');
        const duration = moment.duration(expiration.diff(now));
        const initialRemainingTime = formatDuration(duration);

        setRemainingTime(initialRemainingTime);

        const intervalId = setInterval(() => {
            const current = moment();
            const duration = moment.duration(expiration.diff(current));
            const formattedTime = formatDuration(duration);
            setRemainingTime(formattedTime);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [expirationDate]);

    const formatDuration = (duration) => {
        const hours = Math.floor(duration.asHours());
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    };

    const padZero = (value) => {
        return value.toString().padStart(2, '0');
    };

    return (
        <div className="flex flex-row-reverse items-center gap-1">
            {
                +remainingTime.split(":")[0] < 0 && +remainingTime.split(":")[1] < 0 && +remainingTime.split(":")[2] < 0 ? (
                    <span className="font-[600] text-gray-400">
                        منقضی شده
                    </span>
                ) : (
                    <>
                    <span
                        className="font-bold text-white bg-blue-dark rounded h-7 min-w-[28px] flex items-center justify-center">
                        {remainingTime.split(":")[0]}
                    </span>
                        <span className="font-black text-xl text-mustard">:</span>
                        <span
                            className="font-bold text-white bg-blue-dark rounded h-7 min-w-[28px] flex items-center justify-center">
                        {remainingTime.split(":")[1]}
                    </span>
                        <span className="font-black text-xl text-mustard">:</span>
                        <span
                            className="font-bold text-white bg-blue-dark rounded h-7 min-w-[28px] flex items-center justify-center">
                        {remainingTime.split(":")[2]}
                    </span>
                    </>
                )
            }
        </div>
    );
};

export default CountdownTimer;