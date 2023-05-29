import {useState} from "react";
import CheckoutForm from "@/components/modules/CheckoutForm";
import CheckoutAside from "@/components/modules/CheckoutAside";
import {useForm} from "react-hook-form";
import CustomerInfo from "@/components/modules/CustomerInfo";

const CheckoutPage = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        control,
        setFocus,
        getValues,
        setValue
    } = useForm()

    const [isInfoRecorded, setIsInfoRecorded] = useState()

    const submitHandler = () => {
        console.log(getValues())
    }

    return (
        <div className="mt-36 md:mt-48 px-3 sm:px-7 xl:px-20">
            <div className="flex flex-col lg:flex-row gap-5 w-full">
                <div className="flex-1">
                    {/*<CheckoutForm submitHandler={submitHandler} control={control} register={register} errors={errors}*/}
                    {/*              setFocus={setFocus} getValues={getValues} setValue={setValue}/>*/}
                    <CustomerInfo/>
                    <div className="text-sm mt-3 px-5 xl:px-20">
                        <label htmlFor="description" className="font-bold text-blue-dark">توضیحات</label>
                        <textarea id="description" rows="5"
                                  placeholder="اگر توضیحی دارید اینجا بنویسید..."
                                  className="w-full bg-[#EEEEEE] mt-2 rounded-xl p-3 font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark"
                                  {...register('description', {
                                      maxLength: {
                                          value: 200,
                                          message: 'متن توضیحات باید حداکثر 200 حرف باشد'
                                      }
                                  })}
                        ></textarea>
                        {errors.description && (
                            <div className="text-xs text-red font-[600]">{errors.description.message}</div>
                        )}
                    </div>
                </div>
                <div>
                    <CheckoutAside handleSubmit={handleSubmit} submitHandler={submitHandler}/>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;