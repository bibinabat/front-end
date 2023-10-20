import {useState} from "react";

const DiscountForm = () => {
    const [discountCode, setDiscountCode] = useState('')
    const [isSubBtnDisable, setIsSubBtnDisable] = useState(true)

    const handleDiscountInput = (e) => {
        setDiscountCode(e.target.value)
        if (e.target.value !== "") {
            setIsSubBtnDisable(false)
        } else {
            setIsSubBtnDisable(true)
        }
    }

    return (
        <div className="w-full bg-gray-200 flex overflow-hidden rounded font-[600]">
            <input className="flex-1 bg-transparent outline-none py-2 pr-3"
                   placeholder="کد تخفیف دارید اینجا وارد کنید..." value={discountCode}
                   onChange={handleDiscountInput}/>
            <button
                className={`transition duration-400 px-5 text-blue-dark ${isSubBtnDisable ? 'opacity-50' : 'hover:bg-gray-300'}`}
                disabled={isSubBtnDisable}>ثبت
            </button>
        </div>
    );
};

export default DiscountForm;