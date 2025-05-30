import {useEffect, useState} from "react";
import CheckoutForm from "@/components/modules/checkout/CheckoutForm";
import CheckoutAside from "@/components/modules/checkout/CheckoutAside";
import {useForm} from "react-hook-form";
import CustomerInfo from "@/components/modules/checkout/CustomerInfo";
import useAuthState from "@/hooks/useAuth";
import {useRouter} from "next/router";
import {useCart} from "@/contexts/CartContext";
import {useAddresses} from "@/contexts/AddressesContext";

const CheckoutPage = () => {
    const {userData, isLoggedIn} = useAuthState()
    const router = useRouter()
    const {cart} = useCart()
    const {addresses} = useAddresses()

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
    const [infos, setInfos] = useState({})

    useEffect(() => {
        setInfos({
            "name": userData.first_name,
            "lastName": userData.last_name,
            "phoneNumber": userData.phone_number,
        })
    }, [userData]);

    useEffect(() => {
        if (!isLoggedIn) {
            router.replace("/")
        } else if (cart.cartInfo.orders && !cart.cartInfo.orders.length) {
            router.replace("/cart")
        }
    }, [isLoggedIn, cart]);

    const submitHandler = () => {
        console.log(getValues())
    }

    return (
        <div className="mt-36 md:mt-48 px-3 sm:px-7 xl:px-20">
            <div className="flex flex-col lg:flex-row gap-5 w-full">
                {addresses.addresses && addresses.status !== "loading" ? (
                    <div className="flex-1">
                        {addresses.addresses.length ? (
                            <CustomerInfo/>
                        ) : (
                            <CheckoutForm submitHandler={submitHandler} control={control} register={register}
                                          errors={errors}
                                          setFocus={setFocus} getValues={getValues} setValue={setValue}
                                          infos={infos}/>
                        )}
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
                ) : (
                    <div
                        className="h-[400px] text-3xl text-blue-500 flex flex-1 items-center justify-center">
                        <i className="fa-duotone fa-spinner-third fa-spin"></i>
                    </div>
                )}
                <div>
                    {
                        cart.cartInfo.orders ? (
                            <CheckoutAside handleSubmit={handleSubmit} submitHandler={submitHandler} data={cart}/>
                        ) : (
                            <div
                                className="h-[400px] w-[265px] text-3xl text-blue-500 flex items-center justify-center">
                                <i className="fa-duotone fa-spinner-third fa-spin"></i>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;