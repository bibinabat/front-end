import {useState} from "react";
import CheckoutForm from "@/components/modules/CheckoutForm";
import CheckoutAside from "@/components/modules/CheckoutAside";
import {useForm} from "react-hook-form";

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
            <div className="flex flex-col lg:flex-row gap-3 w-full">
                <div className="flex-1">
                    <CheckoutForm submitHandler={submitHandler} control={control} register={register} errors={errors}
                                  setFocus={setFocus} getValues={getValues} setValue={setValue}/>
                </div>
                <div>
                    <CheckoutAside handleSubmit={handleSubmit} submitHandler={submitHandler}/>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;