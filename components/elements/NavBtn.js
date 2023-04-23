import Image from "next/image";

const NavBtnR = ({prevRef, classes}) => {
    return (
        <button
            className={`transition active:scale-90 p-4 rounded-full shadow-[0px_10px_82px_11px_rgba(0,0,0,0.3)] bg-white flex top-[45%] z-20 item-center justify-center absolute ${classes}`}
            ref={prevRef}>
            <div
                className="">
                <Image src="/customIcons/NavIcon.svg" alt="nav icon" width={10} height={10}/>
            </div>
        </button>
    );
};

const NavBtnL = ({nextRef, classes}) => {
    return (
        <button
            className={`transition active:scale-90 p-4 rounded-full shadow-[0px_10px_82px_11px_rgba(0,0,0,0.3)] bg-white flex top-[45%] z-20 item-center justify-center absolute ${classes}`}
            ref={nextRef}>
            <div
                className="">
                <Image src="/customIcons/NavIcon.svg" alt="nav icon" width={10} height={10} className="-scale-x-100"/>
            </div>
        </button>
    );
};

export {NavBtnR, NavBtnL};