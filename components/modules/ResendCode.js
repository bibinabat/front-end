import {useEffect, useState} from "react";
import {toast} from "react-toastify";

const ResendCode = ({phoneNum}) => {
    const [isDataSend, setIsDataSend] = useState(true)

    const initialTime = 2 * 60 * 1000 // 2 minutes
    const [remainingTime, setRemainingTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let timer;

        if (isRunning) {
            const targetTime = new Date().getTime() + remainingTime
            timer = setInterval(() => {
                const currentTime = new Date().getTime();
                const newRemainingTime = targetTime - currentTime;
                if (newRemainingTime <= 0) {
                    setIsRunning(false);
                    setRemainingTime(0);
                    clearInterval(timer);
                } else {
                    setRemainingTime(newRemainingTime);
                }
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [remainingTime, isRunning]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleCodeResend = () => {
        setIsDataSend(false)

        const formData = {
            "phone_number": phoneNum
        }

        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/auth/login/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(json => {
                setIsDataSend(true)
                if (json.data.messages) {
                    setIsRunning(true)
                    toast.info(json.data.messages.success[0])
                } else if (json.data.errors) {
                    const errors = json.data.errors
                    for (const error in errors) {
                        toast.error(errors[error][0], {
                            icon: false,
                            closeButton: false
                        })
                    }
                }
            })
            .catch(error => {
                setIsDataSend(true)
                console.log(error)
                toast.error("یک ارور رخ داده است", {
                    icon: false,
                    closeButton: false
                })
            })
    }

    return (
        <>
            {
                isDataSend ? (
                    <button className="text-sm font-[500] bg-[#E6E3FF] text-blue-dark px-2 py-1 rounded"
                            onClick={handleCodeResend}
                            disabled={isRunning}>
                        {isRunning ? formatTime(remainingTime) : "ارسال مجدد"}
                    </button>
                ) : (
                    <button className="text-sm bg-[#E6E3FF] text-blue-dark px-2 py-1 rounded" disabled>
                        <img src="/loading.svg" width={25}/>
                    </button>
                )
            }
        </>
    );
};

export default ResendCode;