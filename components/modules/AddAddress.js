import CheckoutForm from "@/components/modules/CheckoutForm";
import {useForm} from "react-hook-form";

const AddAddress = ({handleClose}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        control,
        getValues,
        setValue
    } = useForm()

    const submitHandler = () => {
        console.log(getValues())
    }

    return (
        <div className="">
            <div className="w-full pt-5 px-5">
                <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                   onClick={handleClose}></i>
            </div>
            <div className="w-full flex justify-center font-bold text-lg text-blue-dark">
                <p>افزودن آدرس</p>
            </div>
            <div>
                <CheckoutForm errors={errors} control={control} register={register} setValue={setValue}
                              getValues={getValues}/>
                <div className="grid grid-cols-2 gap-3 pb-5 px-5 xl:px-20">
                    <button className="bg-blue-dark text-white font-[600] py-2 rounded-lg"
                            onClick={handleSubmit(submitHandler)}>ثبت
                    </button>
                    <button className="bg-gray-300 text-gray-700 font-[600] py-2 rounded-lg"
                            onClick={handleClose}>انصراف
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddAddress;