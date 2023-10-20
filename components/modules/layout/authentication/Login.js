import {useEffect, useState} from "react";
import LoginPhoneForm from "@/components/modules/layout/authentication/LoginPhoneForm";
import LoginVerCodeForm from "@/components/modules/layout/authentication/LoginVerCodeForm";
import {toast} from "react-toastify";
import useAuthState from "@/hooks/useAuth";
import {p2e} from "@/utils/replaceNumber";

const Login = ({handleClose}) => {
    const [enterCode, setEnterCode] = useState(false)
    const [phoneNum, setPhoneNum] = useState("")
    const [isDataSend, setIsDataSend] = useState(true)
    const {isLoggedIn} = useAuthState()

    useEffect(() => {
        if (isLoggedIn) {
            handleClose()
        }
    }, [isLoggedIn])

    const handleLoginFormSubmit = (data) => {
        setIsDataSend(false)

        const formData = {
            "phone_number": p2e(data.phoneNumber)
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
                    setPhoneNum(data.phoneNumber)
                    setEnterCode(true)
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

    const handleEditNum = () => {
        setEnterCode(false)
    }

    return (
        <div className="p-5">
            <div className="w-full">
                <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                   onClick={handleClose}></i>
            </div>
            <div className="w-full flex justify-center font-bold text-lg mb-2">
                <p>ورود به بی بی نبات</p>
            </div>
            {
                enterCode ?
                    <LoginVerCodeForm phoneNum={phoneNum} handleEditNum={handleEditNum} handleClose={handleClose}/> :
                    <LoginPhoneForm handleFormSubmit={handleLoginFormSubmit} phoneNum={phoneNum}
                                    setPhoneNum={setPhoneNum} isDataSend={isDataSend}/>
            }
        </div>
    );
};

export default Login;