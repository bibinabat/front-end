const CartAside = () => {
    return (
        <div className="bg-[#f5f5f5] rounded-xl p-3 sticky top-40">
            <p className="text-center text-gray-500 font-bold text-sm mb-4">اطلاعات پرداخت</p>
            <div className="flex flex-col gap-5 text-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className="text-blue-dark font-[600]">مبلغ کالاها</span>
                        <span
                            className="bg-blue-dark pt-0.5 px-2 text-xs text-white rounded-full font-bold">2</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-blue-dark">
                        <span>118,000</span>
                        <span className="text-xs">تومان</span>
                    </div>
                </div>
                <div className="flex text-red items-center justify-between">
                    <span className="font-[600]">تخفیف</span>
                    <div className="flex items-center gap-1 font-bold">
                        <span>37,600</span>
                        <span className="text-xs">تومان</span>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-14">
                    <span className="font-[600] text-blue-dark">هزینه ارسال</span>
                    <span className="text-xs font-bold text-gray-400">در مرحله بعد مشخص میشود</span>
                </div>
            </div>
            <hr className="border-[1px] border-gray-400 my-4"/>
            <div className='text-sm flex items-center justify-between'>
                <span className="font-[600] text-blue-dark">مبلغ قابل پرداخت</span>
                <div className="font-bold flex items-center gap-1">
                    <span>150,400</span>
                    <span className="text-xs">تومان</span>
                </div>
            </div>
            <button className="text-center bg-blue-dark rounded-lg text-white w-full mt-3 font-bold py-1.5">ادامه
            </button>
        </div>
    );
};

export default CartAside;