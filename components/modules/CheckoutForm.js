import TextInput from "@/components/elements/TextInput";
import {Checkbox, FormControlLabel} from "@mui/material";
import {provinces} from "@/public/provinces";
import {cities} from "@/public/cities";
import CheckoutSelect from "@/components/elements/CheckoutSelect";
import {useEffect, useState} from "react";
import {useSpring, animated} from "@react-spring/web";
import useWindowSize from "@/hooks/useWindowSize";

const CheckoutForm = ({errors, register, control, setFocus, getValues, setValue, infos}) => {
    const [filteredCities, setFilteredCities] = useState([])
    const [provinceQuery, setProvinceQuery] = useState('')
    const [cityQuery, setCityQuery] = useState('')
    const [selfReceiver, setSelfReceiver] = useState(true)
    const {width} = useWindowSize()

    useEffect(() => {
        if (infos) {
            for (const key in infos) {
                setValue(`${key}`, infos[key])
            }
            if (infos.self_receiver === false) {
                setSelfReceiver(false)
            }
        }
    }, [])

    const handleProvinceSelect = (optionName) => {
        setValue('province', optionName)
        let selectedProvince = provinces.filter(province => {
            return province.name === optionName
        })
        setFilteredCities(cities.filter(city => {
            return city.province_id === selectedProvince[0].id
        }))
        setProvinceQuery("")
    }

    const handleCitySelect = (optionName) => {
        setValue('city', optionName)
        setCityQuery("")
    }

    const handleSelectKeyUp = () => {
        if (getValues("province") === "") {
            setFilteredCities([])
        }
    }

    const openAnimation = useSpring({
        from: {
            maxHeight: "49px",
            paddingTop: "1px",
            paddingBottom: "1px"
        },
        to: {
            maxHeight: !selfReceiver ? width > 640 ? "150px" : "350px" : "49px",
            paddingTop: !selfReceiver ? "12px" : "1px",
            paddingBottom: !selfReceiver ? "12px" : "1px"
        },
        config: {duration: "300"}
    })

    return (
        <div className="p-5 xl:px-20">
            <h1 className="font-bold text-xl text-blue-dark mb-5">اطلاعات سفارش</h1>
            <form className="flex flex-col sm:grid sm:grid-cols-3 gap-y-3 sm:gap-y-0 sm:gap-x-3">
                <div className="grid grid-cols-2 gap-3 sm:col-span-2">
                    <TextInput
                        type="text"
                        label="نام"
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: "وارد کردن نام الزامی است.",
                            maxLength: {
                                value: 40,
                                message: "نام میتواند حداکثر 40 حرف باشد."
                            }
                        }}
                        name="name"
                        addClasses="px-3 py-2"/>
                    <TextInput
                        type="text"
                        label="نام خانوادگی"
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: "وارد کردن نام خانوادگی الزامی است.",
                            maxLength: {
                                value: 40,
                                message: "نام خانوادگی میتواند حداکثر 40 حرف باشد."
                            }
                        }}
                        name="lastName"
                        addClasses="px-3 py-2"/>
                </div>
                <TextInput
                    type="text"
                    label="شماره موبایل"
                    errors={errors}
                    register={register}
                    validationSchema={{
                        required: "وارد کردن شماره موبایل الزامی است",
                        pattern: {
                            value: /09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/,
                            message: "شماره موبایل باید معتبر باشد"
                        }
                    }}
                    name="phoneNumber"
                    addClasses="px-3 py-2"
                    inputMode="numeric"/>
                <animated.div
                    style={openAnimation}
                    className="flex flex-col sm:grid sm:grid-cols-3 col-span-3 gap-y-3 sm:gap-y-0 sm:gap-x-3 border-y-2 my-3 overflow-hidden">
                    <FormControlLabel className="col-span-3"
                                      control={
                                          <Checkbox checked={selfReceiver}
                                                    onChange={() => setSelfReceiver(!selfReceiver)}/>
                                      }
                                      label="گیرنده سفارش خودم هستم."/>
                    <TextInput
                        type="text"
                        label="نام گیرنده"
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: !selfReceiver ? "وارد کردن نام گیرنده الزامی است." : false,
                            maxLength: {
                                value: 40,
                                message: "نام گیرنده میتواند حداکثر 40 حرف باشد."
                            }
                        }}
                        name="receiverName"
                        addClasses="px-3 py-2"
                        disabled={selfReceiver}
                    />
                    <TextInput
                        type="text"
                        label="نام خانوادگی گیرنده"
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: !selfReceiver ? "وارد کردن نام خانوادگی گیرنده الزامی است." : false,
                            maxLength: {
                                value: 40,
                                message: "نام خانوادگی گیرنده میتواند حداکثر 40 حرف باشد."
                            }
                        }}
                        name="receiverLastName"
                        addClasses="px-3 py-2"
                        disabled={selfReceiver}
                    />
                    <TextInput
                        type="text"
                        label="شماره موبایل گیرنده"
                        errors={errors}
                        register={register}
                        validationSchema={{
                            required: !selfReceiver ? "وارد کردن شماره موبایل گیرنده الزامی است." : false,
                            pattern: {
                                value: /09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/,
                                message: "شماره موبایل گیرنده باید معتبر باشد"
                            }
                        }}
                        name="receiverPhoneNumber"
                        addClasses="px-3 py-2"
                        disabled={selfReceiver}
                        inputMode="numeric"
                    />
                </animated.div>
                <div className="grid grid-cols-2 gap-3 sm:col-span-2">
                    <CheckoutSelect register={register} errors={errors} name="province" label="استان"
                                    options={provinces}
                                    validationSchema={{
                                        required: "وارد کردن استان الزامی است."
                                    }}
                                    control={control}
                                    setFocus={setFocus}
                                    getValues={getValues}
                                    setValue={setValue}
                                    query={provinceQuery}
                                    setQuery={setProvinceQuery}
                                    handleOptionClick={handleProvinceSelect}
                                    handleSelectKeyUp={handleSelectKeyUp}
                    />
                    <CheckoutSelect register={register} errors={errors} name="city" label="شهر"
                                    options={filteredCities.length > 0 ? filteredCities : null}
                                    validationSchema={{
                                        required: "وارد کردن شهر الزامی است."
                                    }}
                                    control={control}
                                    setFocus={setFocus}
                                    getValues={getValues}
                                    setValue={setValue}
                                    query={cityQuery}
                                    setQuery={setCityQuery}
                                    handleOptionClick={handleCitySelect}
                                    handleSelectKeyUp={handleSelectKeyUp}
                    />
                </div>
                <TextInput
                    type="text"
                    label="کد پستی"
                    errors={errors}
                    register={register}
                    validationSchema={{
                        required: "وارد کردن کد پستی الزامی است.",
                        length: {
                            value: 10,
                            message: "کد پستی باید 10 رقم باشد."
                        }
                    }}
                    name="postalCode"
                    addClasses="px-3 py-2"
                    inputMode="numeric"/>
                <div className="sm:col-span-3 text-sm mt-3">
                    <label htmlFor="address" className="font-bold text-blue-dark">آدرس</label>
                    <textarea id="address" rows="2"
                              className="w-full bg-[#EEEEEE] mt-2 rounded-xl p-3 font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark"
                              placeholder="آدرس خود را وارد کنید..."
                              {...register('address', {
                                  required: 'وارد کردن آدرس الزامی است.',
                                  maxLength: {
                                      value: 200,
                                      message: 'متن آدرس باید حداکثر 200 حرف باشد'
                                  }
                              })}
                    ></textarea>
                    {errors.address && (
                        <div className="text-xs text-red">{errors.address.message}</div>
                    )}
                </div>
                <div className="sm:col-span-3 text-sm mt-3">
                    <label htmlFor="description" className="font-bold text-blue-dark">توضیحات</label>
                    <textarea id="description" rows="3"
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
            </form>
        </div>
    );
};

export default CheckoutForm;