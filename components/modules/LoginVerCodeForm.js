import ReactInputVerificationCode from "react-input-verification-code";

const LoginVerCodeForm = ({phoneNum, handleEditNum}) => {
    return (
        <div className="mt-6 relative">
            <div className="flex flex-row-reverse gap-1 justify-center">
                <span>{phoneNum.slice(0, 4)}</span>
                <span>{phoneNum.slice(4, 7)}</span>
                <span>{phoneNum.slice(7, 11)}</span>
            </div>
            <p className="font-[600] text-center mt-2 text-[#7F7F7F]">کد تایید</p>
            <div className="flex justify-center items-center overflow-hidden mt-2">
                <ReactInputVerificationCode length={4} autoFocus={true} placeholder=""/>
            </div>
            <div className="flex flex-col w-full items-center mt-3">
                <button className="text-sm bg-[#E6E3FF] text-blue-dark px-2 py-1 rounded">ارسال مجدد</button>
                <button
                    className="mt-3 text-center bg-blue-dark font-[600] text-white w-full py-2 rounded-lg transition hover:bg-[#2D2671] disabled:bg-[#EEEEEE] disabled:text-gray-500">
                    ورود
                </button>
                <button
                    onClick={handleEditNum}
                    className="mt-3 text-center bg-white font-[600] text-[#5F53D5] w-full py-2 rounded-lg transition hover:bg-[#E6E3FF]">ویرایش
                    شماره موبایل
                </button>
            </div>
        </div>
    );
};

export default LoginVerCodeForm;