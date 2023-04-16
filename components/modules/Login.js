import {useState} from "react";
import LoginPhoneForm from "@/components/modules/LoginPhoneForm";
import LoginVerCodeForm from "@/components/modules/LoginVerCodeForm";

const Login = ({handleClose}) => {

    const [enterCode, setEnterCode] = useState(false)
    const [phoneNum, setPhoneNum] = useState("")

    const handleLoginFormSubmit = (data) => {
        setPhoneNum(data.phoneNumber)
        setEnterCode(true)
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
                enterCode ? <LoginVerCodeForm phoneNum={phoneNum} handleEditNum={handleEditNum}/> :
                    <LoginPhoneForm handleFormSubmit={handleLoginFormSubmit} phoneNum={phoneNum}
                                    setPhoneNum={setPhoneNum}/>
            }
        </div>
    );
};

export default Login;