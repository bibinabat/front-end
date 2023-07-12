import Link from "next/link";
import TextInput from "@/components/elements/TextInput";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

const ContactUsPage = ({data, error}) => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        getValues
    } = useForm()

    const [communicationWays, setCommunicationWays] = useState("loading")

    useEffect(() => {
        if (data && data.data.communication_ways && !error) {
            setCommunicationWays(data.data.communication_ways)
        } else {
            toast.error("مشکلی در گرفتن اطلاعات رخ داده است", {
                icon: false,
                closeButton: false
            })
        }
    }, [communicationWays, data, error])

    const submitHandler = () => {
        console.log(getValues())
    }

    return (
        <div className="mt-36 md:mt-48 px-3 sm:px-7 lg:px-0 max-w-6xl mx-auto">
            <h1 className="text-xl font-bold text-blue-dark mb-10">تماس با ما</h1>
            <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2">
                <div className="lg:pl-14 lg:border-l-[1.5px] border-gray-400">
                    <div className="flex gap-3 items-center text-blue-dark">
                        <i className="fa-regular fa-location-dot h-10 w-10 flex items-center justify-center bg-[#E6E5EC] rounded-lg text-xl"></i>
                        <span className="font-bold">آدرس</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 font-[500]"
                       dangerouslySetInnerHTML={{__html: communicationWays !== "loading" ? communicationWays.find(way => way.title === "آدرس").description : null}}>
                    </p>
                    <div className="my-4">
                        <iframe
                            className="w-full h-64 rounded-xl"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+(%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87%20%D8%A8%DB%8C%20%D8%A8%DB%8C%20%D9%86%D8%A8%D8%A7%D8%AA)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-y-5">
                        <div className="flex flex-col items-start">
                            <div className="flex gap-3 items-center text-blue-dark">
                                <i className="fa-regular fa-phone h-10 w-10 flex items-center justify-center bg-[#E6E5EC] rounded-lg text-xl"></i>
                                <span className="font-bold">شماره تماس</span>
                            </div>
                            {
                                communicationWays !== "loading" ? (
                                    <a href={communicationWays.find(way => way.title === "شماره تماس").link} dir="ltr"
                                       className="mt-2 text-sm text-gray-500 font-[500]"
                                       dangerouslySetInnerHTML={{__html: communicationWays.find(way => way.title === "شماره تماس").value}}></a>
                                ) : null
                            }
                        </div>
                        <div>
                            <div className="flex gap-3 items-center text-blue-dark">
                                <i className="fa-regular fa-envelope h-10 w-10 flex items-center justify-center bg-[#E6E5EC] rounded-lg text-xl"></i>
                                <span className="font-bold">آدرس ایمیل</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 font-[500]">bibinabat.ir@gmail.com</p>
                        </div>
                        <div>
                            <div className="flex gap-3 items-center text-blue-dark">
                                <i className="fa-regular fa-clock h-10 w-10 flex items-center justify-center bg-[#E6E5EC] rounded-lg text-xl"></i>
                                <span className="font-bold">ساعت کاری</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 font-[500]">هر روز هفته</p>
                        </div>
                        <div className="w-full flex gap-6 text-[#C4C4C4] text-3xl">
                            {
                                communicationWays !== "loading" ? (
                                    communicationWays.map(way => {
                                        if (way.is_social) {
                                            return (
                                                <Link key={way.id} href={way.link} target="_blank"
                                                      className="hover:text-blue-dark">
                                                    <i className={way.icon_name}></i>
                                                </Link>
                                            )
                                        }
                                    })
                                ) : (null)
                            }
                        </div>
                    </div>
                </div>
                <div className="lg:mr-14">
                    <div className="px-5 md:px-10 pt-10 pb-5 border-[1.5px] border-gray-400 rounded-2xl h-full">
                        <h2 className="font-bold text-lg text-center mb-10 text-blue-dark">ارسال سریع پیام</h2>
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <div className="grid grid-cols-2 gap-3">
                                <TextInput
                                    type="text"
                                    label="نام و نام خانوادگی"
                                    register={register}
                                    errors={errors}
                                    name="name"
                                    validationSchema={{
                                        required: "وارد کردن نام و نام خانوادگی الزامی است."
                                    }}
                                    addClasses="px-3 py-2"
                                />
                                <TextInput
                                    type="text"
                                    label="شماره موبایل"
                                    register={register}
                                    errors={errors}
                                    name="phoneNum"
                                    validationSchema={{
                                        required: "وارد کردن شماره موبایل الزامی است."
                                    }}
                                    addClasses="px-3 py-2"
                                    inputMode="numeric"
                                />
                            </div>
                            <div className="sm:col-span-3 text-sm mt-3">
                                <label htmlFor="messageText" className="font-bold text-blue-dark">متن پیام</label>
                                <textarea id="messageText" rows="11"
                                          className="w-full bg-[#EEEEEE] mt-2 rounded-xl p-3 font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark"
                                          placeholder="متن خود را وارد کنید..."
                                          {...register('messageText', {
                                              required: 'وارد کردن متن پیام الزامی است.',
                                              maxLength: {
                                                  value: 200,
                                                  message: 'متن پیام باید حداکثر 200 حرف باشد'
                                              }
                                          })}
                                ></textarea>
                                {errors.messageText && (
                                    <div className="text-xs text-red">{errors.messageText.message}</div>
                                )}
                            </div>
                            <button type="submit" className="w-full bg-blue-dark text-white py-2 rounded-lg mt-2">ارسال
                                پیام
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;