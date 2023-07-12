import ReactInputVerificationCode from "react-input-verification-code";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Cookies from 'js-cookie'
import {useRouter} from "next/router";
import useAuthState from "@/hooks/useAuth";

const LoginVerCodeForm = ({phoneNum, handleEditNum, handleClose}) => {
    const router = useRouter()

    const [verCode, setVerCode] = useState("")
    const [isDataSend, setIsDataSend] = useState(true)
    const {setIsLoggedIn} = useAuthState()

    const handleLogin = async () => {
        setIsDataSend(false)

        const formData = {
            "phone_number": phoneNum,
            "user_verification_code": verCode
        }

        fetch("https://backend-bibinabat.iran.liara.run/api/auth/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": `sessionid=${Cookies.get('sessionid')}`
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setIsDataSend(true)
                if (json.data.messages) {
                    handleClose()
                    Cookies.set('Authorization', `Token ${json.data.user.token}`)
                    setIsLoggedIn(true)
                    toast.info(json.data.messages.success[0], {
                        icon: false,
                        closeButton: false
                    })
                } else if (json.data.errors) {
                    setVerCode("")
                    const errors = json.data.errors
                    for (const error in errors) {
                        toast.error(errors[error], {
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

    const handleLoginClick = () => {
        if (verCode !== "") {
            handleLogin()
        }
    }

    useEffect(() => {
        if (verCode.length === 4) {
            handleLogin()
        }
    }, [verCode])

    return (
        <div className="mt-6 relative">
            <div className="flex flex-row-reverse gap-1 justify-center">
                <span>{phoneNum.slice(0, 4)}</span>
                <span>{phoneNum.slice(4, 7)}</span>
                <span>{phoneNum.slice(7, 11)}</span>
            </div>
            <p className="font-[600] text-center mt-2 text-[#7F7F7F]">کد تایید</p>
            <div className="flex justify-center items-center overflow-hidden mt-2">
                <ReactInputVerificationCode length={4} autoFocus={true} placeholder="" value={verCode}
                                            onChange={setVerCode}/>
            </div>
            <div className="flex flex-col w-full items-center mt-3">
                <button className="text-sm bg-[#E6E3FF] text-blue-dark px-2 py-1 rounded">ارسال مجدد</button>
                {
                    isDataSend ? (
                        <button
                            onClick={handleLoginClick}
                            disabled={verCode.length < 4}
                            className="mt-3 text-center flex items-center justify-center bg-blue-dark h-10 font-[600] text-white w-full rounded-lg transition hover:bg-[#2D2671] disabled:bg-[#EEEEEE] disabled:text-gray-500">
                            ورود
                        </button>
                    ) : (
                        <button
                            disabled
                            className="mt-3 text-center flex items-center justify-center bg-blue-dark h-10 font-[600] text-white w-full rounded-lg transition hover:bg-[#2D2671]">
                            <img src="/loading.svg" width={40}/>
                        </button>
                    )
                }
                <button
                    onClick={handleEditNum}
                    className="mt-3 text-center bg-white font-[600] text-blue-dark w-full py-2 rounded-lg transition hover:bg-[#E6E3FF]">ویرایش
                    شماره موبایل
                </button>
            </div>
        </div>
    );
};

export default LoginVerCodeForm;