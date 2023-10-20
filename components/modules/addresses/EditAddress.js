import CheckoutForm from "@/components/modules/checkout/CheckoutForm";
import {useForm} from "react-hook-form";

const EditAddress = ({handleClose}) => {
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

    const infos = {
        "address": "یزد",
        "description": "توضیحات",
        "name": "امیرمحمد",
        "lastName": "خلیلی میبدی",
        "phoneNumber": "09134423596",
        "receiverName": "امیرحسین",
        "receiverLastName": "منصوری زاده",
        "receiverPhoneNumber": "09134425578",
        "province": "یزد",
        "city": "یزد",
        "postalCode": "8915164576",
        "self_receiver": false
    }

    const submitHandler = () => {
        console.log(getValues())
    }

    return (
        <div>
            <div className="w-full pt-5 px-5">
                <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                   onClick={handleClose}></i>
            </div>
            <div className="w-full flex justify-center font-bold text-lg text-blue-dark">
                <p>ویرایش آدرس</p>
            </div>
            <div>
                <CheckoutForm errors={errors} control={control} register={register} setValue={setValue}
                              getValues={getValues} infos={infos}/>
                <div className="grid grid-cols-2 gap-3 pb-5 px-5 xl:px-20 mt-3">
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

export default EditAddress;