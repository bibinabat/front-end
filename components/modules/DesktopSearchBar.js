import {useEffect, useRef} from "react";

const DesktopSearchBar = ({handleClose}) => {
    const input = useRef(null)

    useEffect(() => {
        input.current.focus()
    }, [])

    return (
        <div className="w-full">
            <div className="flex items-center py-3 px-5 border-b-2">
                <div className="flex w-full">
                    <i className="fa-solid fa-magnifying-glass text-2xl text-[#9A9A9A]"></i>
                    <input type="text" placeholder="جستوجو در بی بی نبات ..."
                           className="mr-5 outline-0 font-[600] flex-1" ref={input}/>
                </div>
                <i className="fa-solid fa-circle-xmark text-xl text-[#9A9A9A] cursor-pointer" onClick={handleClose}></i>
            </div>
            <div className="p-3">
                <div
                    className="bg-[#E1E1E1] flex items-center justify-between px-5 py-3 rounded-lg hover:bg-[#D7D7D7] mb-2">
                    <p>پرده نبات زعفرانی درجه یک</p>
                    <i className="fa-solid fa-chevron-left text-sm"></i>
                </div>
                <div
                    className="bg-[#E1E1E1] flex items-center justify-between px-5 py-3 rounded-lg hover:bg-[#D7D7D7] mb-2">
                    <p>پرده نبات زعفرانی درجه یک</p>
                    <i className="fa-solid fa-chevron-left text-sm"></i>
                </div>
                <div
                    className="bg-[#E1E1E1] flex items-center justify-between px-5 py-3 rounded-lg hover:bg-[#D7D7D7] mb-2">
                    <p>پرده نبات زعفرانی درجه یک</p>
                    <i className="fa-solid fa-chevron-left text-sm"></i>
                </div>
            </div>
        </div>
    );
};

export default DesktopSearchBar;