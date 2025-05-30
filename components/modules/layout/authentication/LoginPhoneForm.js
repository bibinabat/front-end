import TextInput from "@/components/elements/TextInput";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {useEffect, useRef} from "react";

const LoginPhoneForm = ({handleFormSubmit, setPhoneNum, phoneNum, isDataSend}) => {
    const {
        register,
        handleSubmit,
        formState,
        setValue,
    } = useForm({
        mode: "onChange"
    })

    const submitBtn = useRef(null)

    useEffect(() => {
        if (phoneNum) {
            // document.getElementById("loginNumInput").value = phoneNum
            setValue("phoneNumber", phoneNum, {shouldValidate: true})
        }
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <TextInput
                    label="شماره موبایل"
                    placeholder="شماره موبایل خود را وارد کنید"
                    name="phoneNumber"
                    register={register}
                    validationSchema={{
                        required: "وارد کردن شماره موبایل الزامی است",
                        pattern: {
                            value: /09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/,
                            message: "شماره موبایل باید معتبر باشد"
                        }
                    }}
                    addClasses="px-3 py-2"
                    focused={true}
                    id="loginNumInput"
                    inputMode="numeric"
                    autoComplete="new-password"
                />
                <p className="text-sm my-3">
                    با ورود به بی بی نبات،
                    <Link href="/" className="text-mustard"> شرایط و قوانین حریم خصوصی </Link>
                    آن را می پذیرم.
                </p>
                {
                    isDataSend ? (
                        <button
                            ref={submitBtn}
                            disabled={!formState.isValid}
                            className="text-center flex items-center justify-center bg-blue-dark h-10 font-[600] text-white w-full rounded-lg transition hover:bg-[#2D2671] disabled:bg-[#EEEEEE] disabled:text-gray-500">
                            ارسال کد
                        </button>
                    ) : (
                        <button
                            disabled
                            className="text-center flex items-center justify-center bg-blue-dark h-10 font-[600] text-white w-full rounded-lg transition hover:bg-[#2D2671]">
                            <img src="/loading.svg" width={40}/>
                        </button>
                    )
                }
            </form>
        </div>
    );
};

export default LoginPhoneForm;