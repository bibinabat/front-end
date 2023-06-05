import TextInput from "@/components/elements/TextInput";
import {useForm} from "react-hook-form";

const SubmittingComplaintPage = () => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        getValues
    } = useForm()

    const submitHandler = () => {
        console.log(getValues())
    }

    return (
        <div className="mt-36 md:mt-48 px-3 sm:px-7 max-w-6xl mx-auto">
            <h1 className="text-center font-bold text-xl text-blue-dark mb-5">ثبت شکایت</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                    <TextInput
                        errors={errors}
                        register={register}
                        name="name"
                        validationSchema={{
                            required: "وارد کردن نام و نام خانوادگی الزامی است."
                        }}
                        type="text"
                        label="نام و نام خانوادگی"
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
                </div>
                <TextInput
                    errors={errors}
                    register={register}
                    name="subject"
                    validationSchema={{
                        required: "وارد کردن موضوع شکایت الزامی است."
                    }}
                    type="text"
                    label="موضوع شکایت"
                    addClasses="px-3 py-2"
                />
                <div className="sm:col-span-3 text-sm mt-3">
                    <label htmlFor="complainText" className="font-bold text-blue-dark">متن شکایت</label>
                    <textarea id="complainText" rows="4"
                              className="w-full bg-[#EEEEEE] mt-2 rounded-xl p-3 font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark"
                              {...register('complainText', {
                                  required: 'وارد متن شکایت الزامی است.',
                                  maxLength: {
                                      value: 200,
                                      message: 'متن شکایت باید حداکثر 200 حرف باشد'
                                  }
                              })}
                    ></textarea>
                    {errors.complainText && (
                        <div className="text-xs text-red">{errors.complainText.message}</div>
                    )}
                </div>
                <button type="submit" className="font-bold bg-blue-dark text-white py-2 text-sm rounded-lg">ارسال پیام
                </button>
            </form>
        </div>
    );
};

export default SubmittingComplaintPage;