import {useState} from "react";
import {useCart} from "@/contexts/CartContext";
import DiscountForm from "@/components/modules/checkout/discountForm";

const CheckoutAside = ({submitHandler, handleSubmit, data}) => {
    return (
        <div className="bg-[#f5f5f5] rounded-xl p-3 sticky top-40">
            <p className="text-center text-gray-500 font-bold text-sm mb-4">اطلاعات پرداخت</p>
            <div className="flex flex-col gap-5 text-sm">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <span className="text-blue-dark font-[600]">مبلغ کالاها</span>
                            <span
                                className="bg-blue-dark text-xs text-white rounded-full font-bold h-4 min-w-[16px] flex justify-center px-1 pt-[1px]">{data.cartInfo.orders.length}</span>
                        </div>
                        <div className="flex items-center gap-1 font-bold text-blue-dark">
                            <span>{data.cartInfo.balances.real.toLocaleString()}</span>
                            <span className="text-xs">تومان</span>
                        </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex flex-col gap-2 text-xs">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <span className="text-blue-dark font-[600]">پرده نبات ساده درجه یک</span>
                                <span
                                    className="bg-blue-dark text-[10px] text-white rounded-full font-bold h-4 min-w-[16px] flex justify-center px-1 pt-[1px]">1</span>
                            </div>
                            <div className="flex gap-1 text-[#2B2B2B]">
                                <span className="font-bold">94,000</span>
                                <span className="font-[600]">تومان</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <span className="text-blue-dark font-[600]">پرده نبات ساده درجه یک</span>
                                <span
                                    className="bg-blue-dark text-[10px] text-white rounded-full font-bold h-4 min-w-[16px] flex justify-center px-1 pt-[1px]">1</span>
                            </div>
                            <div className="flex gap-1 text-[#2B2B2B]">
                                <span className="font-bold">94,000</span>
                                <span className="font-[600]">تومان</span>
                            </div>
                        </div>
                    </div>
                    <DiscountForm/>
                </div>
                <div className="flex text-red items-center justify-between">
                    <span className="font-[600]">تخفیف</span>
                    <div className="flex items-center gap-1 font-bold">
                        <span>{(data.cartInfo.balances.real - data.cartInfo.balances.discount_tax_code_wallet_order_return).toLocaleString()}</span>
                        <span className="text-xs">تومان</span>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-14">
                    <span className="font-[600] text-blue-dark">هزینه ارسال</span>
                    <div className="text-blue-dark flex items-center gap-1 font-bold">
                        <span>{(data.cartInfo.balances.included_costs.shipping + data.cartInfo.balances.included_costs.weight).toLocaleString()}</span>
                        <span className="text-xs">تومان</span>
                    </div>
                </div>
            </div>
            <hr className="border-[1px] border-gray-400 my-4"/>
            <div className='text-sm flex items-center justify-between'>
                <span className="font-[600] text-blue-dark">مبلغ قابل پرداخت</span>
                <div className="font-bold flex items-center gap-1">
                    <span>{data.cartInfo.balances.final.toLocaleString()}</span>
                    <span className="text-xs">تومان</span>
                </div>
            </div>
            <button className="text-center bg-blue-dark rounded-lg text-white w-full mt-3 font-[500] py-1.5"
                    onClick={handleSubmit(submitHandler)}>ثبت سفارش و پرداخت
            </button>
        </div>
    );
};

export default CheckoutAside;