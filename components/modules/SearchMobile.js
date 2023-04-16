import {useEffect, useRef} from "react";

const SearchMobile = ({handleClose}) => {
    const input = useRef(null)

    useEffect(() => {
        input.current.focus()
    }, [])

    const handleClearInput = () => {
        input.current.value = ""
        input.current.focus()
    }

    return (
        <div className="relative pb-20">
            <button
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center transition focus:bg-[#F1F1F1] absolute left-5 top-3"
                onClick={handleClose}>
                <i className="fa-solid fa-chevron-left text-lg text-[#AFAFAF]"></i>
            </button>
            <div className="w-full py-5 px-5 ">
                <div className="text-center text-blue-dark font-bold">جستجو</div>
            </div>
            <div className="flex items-center mx-5 bg-[#EBEBEB] px-3 py-2 rounded search-container">
                <div className="flex w-full">
                    <i className="fa-solid fa-magnifying-glass text-xl text-[#9A9A9A]"></i>
                    <input type="text" placeholder="جستوجو در بی بی نبات ..."
                           className="mr-2 outline-0 font-[600] flex-1 bg-transparent search-input" ref={input}/>
                </div>
                <i className="fa-solid fa-circle-xmark text-md text-[#9A9A9A] cursor-pointer"
                   onClick={handleClearInput}></i>
            </div>
            <div className="py-3 px-5">
                <div
                    className="bg-[#E1E1E1] flex items-center justify-between px-5 py-3 rounded hover:bg-[#D7D7D7] mb-2">
                    <p>پرده نبات زعفرانی درجه یک</p>
                    <i className="fa-solid fa-chevron-left text-sm"></i>
                </div>
                <div
                    className="bg-[#E1E1E1] flex items-center justify-between px-5 py-3 rounded hover:bg-[#D7D7D7] mb-2">
                    <p>پرده نبات زعفرانی درجه یک</p>
                    <i className="fa-solid fa-chevron-left text-sm"></i>
                </div>
            </div>
        </div>
    );
};

export default SearchMobile;