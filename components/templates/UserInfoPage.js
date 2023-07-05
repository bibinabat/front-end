import TextInput from "@/components/elements/TextInput";
import {useForm} from "react-hook-form";
import {useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import useAuthState from "@/hooks/useAuth";

const UserInfoPage = () => {
    // const fileInput = useRef(null)
    // const [images, setImages] = useState([])
    // const [count, setCount] = useState(0)
    const router = useRouter()
    const {isLoggedIn} = useAuthState()

    const isUserInfoPage = router.asPath === "/profile/user-info"

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        getValues,
        setValue
    } = useForm()

    useEffect(() => {
        fetch("https://backend-bibinabat.iran.liara.run/api/auth/data", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": Cookies.get("Authorization")
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.data.user) {
                    setValue('name', data.data.user.first_name)
                    setValue('lastName', data.data.user.last_name)
                    setValue('phoneNumber', data.data.user.phone_number)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [isLoggedIn])

    const submitHandler = (data) => {
        fetch("https://backend-bibinabat.iran.liara.run/api/auth/data", {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": Cookies.get("Authorization")
            },
            body: JSON.stringify({
                "first_name": data.name,
                "last_name": data.lastName,
                "phone_number": data.phoneNumber
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // const handleFileSelect = (e) => {
    //     const selectedFiles = e.target.files;
    //     for (let i = 0; i < selectedFiles.length; i++) {
    //         if (images.length + i > 1) {
    //             toast.info('تنها 1 عکس میتوانید انتخاب کنید', {
    //                 icon: false,
    //                 position: "top-center"
    //             })
    //             break;
    //         }
    //         const file = selectedFiles[i];
    //         if (!file.type.startsWith('image/')) {
    //             toast.info('فقط فایل های عکس مجاز هستند', {
    //                 icon: false,
    //                 position: "top-center"
    //             })
    //             continue
    //         }
    //         if (file.size > 5000000) {
    //             toast.info('حداکثر حجم عکس 5 مگابایت میتواند باشد', {
    //                 icon: false,
    //                 position: "top-center"
    //             })
    //             continue;
    //         }
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             setImages([
    //                 {id: count + i, src: reader.result},
    //             ]);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    //     setCount(count + selectedFiles.length);
    //     console.log(images)
    // };

    return (
        <div className={`p-10 ${isUserInfoPage ? "" : "hidden md:block"} rounded-3xl border-[1.5px] flex-1`}>
            <div className="flex md:gap-0 gap-3 items-center">
                <Link href="/profile">
                    <i className="fa-solid fa-circle-chevron-right text-2xl text-gray-300 md:hidden"></i>
                </Link>
                <h1 className="text-lg font-bold text-blue-dark">اطلاعات حساب کاربری</h1>
            </div>
            <div className="h-full flex items-center">
                <form onSubmit={handleSubmit(submitHandler)}
                      className="mx-auto grid lg:grid-cols-3 gap-3 w-full md:max-w-4xl">
                    {/*<div className="col-span-3 mx-auto relative mb-3">*/}
                    {/*    <div*/}
                    {/*        className="relative flex items-center justify-center bg-[#F3F2F2] h-20 w-20 rounded-full text-3xl text-blue-dark">*/}
                    {/*        {*/}
                    {/*            !images.length ? (*/}
                    {/*                <i className="fa-regular fa-camera"></i>*/}
                    {/*            ) : (*/}
                    {/*                <Image src={images[0].src} alt="preview" fill*/}
                    {/*                       className="object-center object-cover pointer-events-none rounded-full"/>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        onClick={() => fileInput.current.click()}*/}
                    {/*        className="bg-blue-dark w-5 h-5 text-xs cursor-pointer rounded-full text-white flex items-center justify-center absolute bottom-0 right-2">*/}
                    {/*        <i className="fa-solid fa-plus"></i>*/}
                    {/*    </div>*/}
                    {/*    <input type="file" className="hidden" accept="image/*" onChange={handleFileSelect} ref={fileInput}/>*/}
                    {/*</div>*/}
                    <TextInput
                        type="text"
                        errors={errors}
                        register={register}
                        name="name"
                        validationSchema={{
                            required: "وارد کردن نام الزامی است."
                        }}
                        label="نام"
                        addClasses="px-3 py-2"
                    />
                    <TextInput
                        type="text"
                        errors={errors}
                        register={register}
                        name="lastName"
                        validationSchema={{
                            required: "وارد کردن نام خانوادگی الزامی است."
                        }}
                        label="نام خانوادگی"
                        addClasses="px-3 py-2"
                    />
                    <TextInput
                        label="شماره موبایل"
                        name="phoneNumber"
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: "وارد کردن شماره موبایل الزامی است",
                            pattern: {
                                value: /09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/,
                                message: "شماره موبایل باید معتبر باشد"
                            }
                        }}
                        addClasses="px-3 py-2"
                        inputMode="numeric"
                    />
                    <div></div>
                    <div></div>
                    <button type="submit" className="bg-blue-dark w-32 text-white py-1 rounded-lg justify-self-end">
                        ثبت تغییرات
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserInfoPage;