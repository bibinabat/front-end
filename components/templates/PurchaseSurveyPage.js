import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {trim} from "stylis";

const PurchaseSurveyPage = ({cart}) => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        getValues
    } = useForm()

    const [productQuality, setProductQuality] = useState("")
    const [packagingQuality, setPackagingQuality] = useState("")
    const [productError, setProductError] = useState(null)
    const [packagingError, setPackagingError] = useState(null)

    const handleProductChange = (e) => {
        setProductQuality(e.target.value)
        setProductError(null)
    }

    const handlePackagingChange = (e) => {
        setPackagingQuality(e.target.value)
        setPackagingError(null)
    }

    const selectHandler = () => {
        if (productQuality === "" || packagingQuality === "") {
            setProductError("لطفا یکی از گزینه های بالا را انتخاب کنید.")
            setPackagingError("لطفا یکی از گزینه های بالا را انتخاب کنید.")
        }
    }

    const submitHandler = () => {
        console.log(getValues())
    }

    return (
        <div className="mt-36 md:mt-48 px-3 sm:px-7 max-w-6xl mx-auto">
            <h1 className="text-center text-blue-dark font-bold text-xl sm:text-2xl mb-5 sm:mb-10">فرم نظرسنجی</h1>
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-[#EEEEEE] rounded-3xl pt-7 px-5 pb-5">
                    <h2 className="text-center font-bold text-gray-500 text-lg mb-5">لیست محصولات خریداری شده</h2>
                    <ul className="bg-white rounded-2xl p-5 flex flex-col gap-2">
                        {
                            cart.orders.map(order => (
                                <li key={order.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="font-[600] text-blue-dark text-sm">{order.product_weight.product.title}</span>
                                        <span
                                            className="text-[12px] font-bold text-white bg-blue-dark rounded-full h-4 min-w-[16px] flex justify-center px-1">{order.count}</span>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <span
                                            className="font-[600] text-gray-600">{order.prices.price_after_discount?.toLocaleString() ?? order.prices.real.toLocaleString()}</span>
                                        <span className="text-xs font-bold text-blue-dark">تومان</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                            <span className="whitespace-nowrap font-bold text-blue-dark">کیفیت محصولات</span>
                            <div className="w-full">
                                <div
                                    className="grid grid-cols-5 whitespace-nowrap justify-items-center text-sm text-gray-400 font-[600] mb-3">
                                    <span>خیلی خوب</span>
                                    <span>خوب</span>
                                    <span>معمولی</span>
                                    <span>بد</span>
                                    <span>خیلی بد</span>
                                </div>
                                <RadioGroup
                                    row
                                    sx={{
                                        width: "100%",
                                        background: "#EEEEEE",
                                        justifyContent: "space-around",
                                        paddingY: "5px",
                                        borderRadius: "8px"
                                    }}
                                    value={productQuality}
                                    onChange={handleProductChange}
                                >
                                    <Radio value="veryGood"/>
                                    <Radio value="good"/>
                                    <Radio value="normal"/>
                                    <Radio value="bad"/>
                                    <Radio value="veryBad"/>
                                </RadioGroup>
                            </div>
                        </div>
                        {productError && (
                            <div className="text-xs text-red">{productError}</div>
                        )}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <span className="whitespace-nowrap font-bold text-blue-dark">کیفیت بسته بندی</span>
                            <div className="w-full">
                                <div
                                    className="grid grid-cols-5 whitespace-nowrap justify-items-center text-sm text-gray-400 font-[600] mb-3 sm:hidden">
                                    <span>خیلی خوب</span>
                                    <span>خوب</span>
                                    <span>معمولی</span>
                                    <span>بد</span>
                                    <span>خیلی بد</span>
                                </div>
                                <RadioGroup
                                    row
                                    sx={{
                                        width: "100%",
                                        background: "#EEEEEE",
                                        justifyContent: "space-around",
                                        paddingY: "5px",
                                        borderRadius: "8px"
                                    }}
                                    value={packagingQuality}
                                    onChange={handlePackagingChange}
                                >
                                    <Radio value="veryGood"/>
                                    <Radio value="good"/>
                                    <Radio value="normal"/>
                                    <Radio value="bad"/>
                                    <Radio value="veryBad"/>
                                </RadioGroup>
                            </div>
                        </div>
                        {packagingError && (
                            <div className="text-xs text-red">{packagingError}</div>
                        )}
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
                    <button type="submit" onClick={selectHandler}
                            className="w-full bg-blue-dark text-white py-2 rounded-lg mt-2">
                        ارسال پیام
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PurchaseSurveyPage;