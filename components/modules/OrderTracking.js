import Image from "next/image";
import {useEffect, useState} from "react";
import {DialogActions, DialogContent, DialogTitle} from "@mui/material";

const OrderTracking = ({handleClose, orderSituation}) => {
    const [helperText, setHelperText] = useState("");
    const [situations, setSituations] = useState({
        successRegister: {
            isActive: false,
            style: "bg-[#D9D9D9] text-[#7B7B7B] flex items-center justify-center h-20 w-20 rounded-2xl text-4xl",
            betweenLineStyle: "bg-[#D9D9D9]"
        },
        preparation: {
            isActive: false,
            style: "bg-[#D9D9D9] text-[#7B7B7B] flex items-center justify-center h-20 w-20 rounded-2xl text-4xl",
            betweenLineStyle: "bg-[#D9D9D9]"
        },
        packing: {
            isActive: false,
            style: "bg-[#D9D9D9] text-[#7B7B7B] flex items-center justify-center h-20 w-20 rounded-2xl text-4xl",
            betweenLineStyle: "bg-[#D9D9D9]"
        },
        sendOrder: {
            isActive: false,
            style: "bg-[#D9D9D9] text-[#7B7B7B] flex items-center justify-center h-20 w-20 rounded-2xl text-4xl",
            betweenLineStyle: "bg-[#D9D9D9]"
        }
    });

    useEffect(() => {
        const situationStyles = {
            active: "bg-blue-dark text-mustard flex items-center justify-center h-20 w-20 rounded-2xl text-4xl",
            inactive: "bg-[#D9D9D9] text-[#7B7B7B] flex items-center justify-center h-20 w-20 rounded-2xl text-4xl"
        };

        const betweenLineStyles = {
            active: "bg-cyan",
            inactive: "bg-[#D9D9D9]"
        };

        const updatedSituations = {
            successRegister: {
                isActive: true,
                style: situationStyles.active,
                betweenLineStyle: betweenLineStyles.inactive
            },
            preparation: {
                isActive: orderSituation >= 2,
                style: orderSituation >= 2 ? situationStyles.active : situationStyles.inactive,
                betweenLineStyle: orderSituation >= 2 ? betweenLineStyles.active : betweenLineStyles.inactive
            },
            packing: {
                isActive: orderSituation >= 3,
                style: orderSituation >= 3 ? situationStyles.active : situationStyles.inactive,
                betweenLineStyle: orderSituation >= 3 ? betweenLineStyles.active : betweenLineStyles.inactive
            },
            sendOrder: {
                isActive: orderSituation >= 4,
                style: orderSituation >= 4 ? situationStyles.active : situationStyles.inactive,
                betweenLineStyle: orderSituation >= 4 ? betweenLineStyles.active : betweenLineStyles.inactive
            }
        };

        setSituations(updatedSituations);

        switch (orderSituation) {
            case "1":
                setHelperText("سفارش شما با موفقیت ثبت شد");
                setTimeout(() => {
                    document.getElementById("sit1").scrollIntoView({
                        block: "center",
                        behavior: "smooth"
                    });
                }, 0);
                break;
            case "2":
                setHelperText("سفارش شما در حال آماده سازی می‌باشد");
                setTimeout(() => {
                    document.getElementById("sit2").scrollIntoView({
                        block: "center",
                        behavior: "smooth"
                    });
                }, 0);
                break;
            case "3":
                setHelperText("سفارش شما بسته بندی شده و تحویل واحد ارسال گردیده است");
                setTimeout(() => {
                    document.getElementById("sit3").scrollIntoView({
                        block: "center",
                        behavior: "smooth"
                    });
                }, 0);
                break;
            case "4":
                setHelperText("سفارش شما با موفقیت ارسال شد و میتوانید آن را از طریق پست رهگیری کنید");
                setTimeout(() => {
                    document.getElementById("sit4").scrollIntoView({
                        block: "center",
                        behavior: "smooth"
                    });
                }, 0);
                break;
            default:
                setHelperText("");
                break;
        }
    }, [orderSituation]);

    return (
        <>
            <DialogTitle
                sx={{
                    zIndex: "20"
                }}
            >
                <div className="w-full">
                    <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                       onClick={handleClose}></i>
                </div>
                <div className="w-full flex justify-center font-bold text-lg text-blue-dark mb-5">
                    <p>پیگیری سفارش</p>
                </div>
                <div className="flex justify-center">
                    <p className="text-blue-dark font-[600] bg-[#E6E5EC] rounded-lg px-3 py-2 text-sm text-center">{helperText}</p>
                </div>
            </DialogTitle>
            <DialogContent
                sx={{
                    zIndex: "20"
                }}
            >
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-1">
                    <div id="sit1" className="flex flex-col items-center gap-3">
                        <div className={situations.successRegister.style}>
                            <i className="fa-duotone fa-memo-circle-check"></i>
                        </div>
                        <span className="text-blue-dark font-bold text-sm">ثبت موفق</span>
                    </div>
                    <div
                        className={`${situations.preparation.betweenLineStyle} w-2 h-28 sm:w-32 sm:h-2 sm:mt-9 relative`}>
                        <i className={`${situations.preparation.betweenLineStyle} fa-solid fa-check text-white h-7 w-7 flex items-center justify-center rounded-full text-xs absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 border-2 border-white`}></i>
                    </div>
                    <div id="sit2" className="flex flex-col items-center gap-3">
                        <div className={situations.preparation.style}>
                            <i className="fa-duotone fa-gears"></i>
                        </div>
                        <span className="text-blue-dark font-bold text-sm">آماده سازی</span>
                    </div>
                    <div
                        className={`${situations.packing.betweenLineStyle} w-2 h-28 sm:w-32 sm:h-2 sm:mt-9 relative`}>
                        <i className={`${situations.packing.betweenLineStyle} fa-solid fa-check text-white h-7 w-7 flex items-center justify-center rounded-full text-xs absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 border-2 border-white`}></i>
                    </div>
                    <div id="sit3" className="flex flex-col items-center gap-3">
                        <div className={situations.packing.style}>
                            <i className="fa-duotone fa-box-open"></i>
                        </div>
                        <span className="text-blue-dark font-bold text-sm">بسته بندی</span>
                    </div>
                    <div
                        className={`${situations.sendOrder.betweenLineStyle} w-2 h-28 sm:w-32 sm:h-2 sm:mt-9 relative`}>
                        <i className={`${situations.sendOrder.betweenLineStyle} fa-solid fa-check text-white h-7 w-7 flex items-center justify-center rounded-full text-xs absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 border-2 border-white`}></i>
                    </div>
                    <div id="sit4" className="flex flex-col items-center gap-3">
                        <div className={situations.sendOrder.style}>
                            <i className="fa-duotone fa-truck-fast"></i>
                        </div>
                        <span className="text-blue-dark font-bold text-sm">ارسال سفارش</span>
                    </div>
                </div>
            </DialogContent>
            <DialogActions
                sx={{
                    zIndex: "20",
                    paddingX: "24px",
                    paddingBottom: "16px"
                }}
            >
                <div className="text-center w-full">
                    <button disabled={orderSituation !== "4"}
                            className={`text-white ${orderSituation !== "4" ? "bg-gray-400" : "bg-blue-dark"} font-[600] py-2 px-3 rounded-lg text-sm`}>رهگیری
                        مرسوله ارسال شده توسط پست
                    </button>
                </div>
            </DialogActions>
            <Image
                src="/images/square-mustard-pattern.png"
                alt="mustard pattern"
                fill
                className="opacity-10 object-center object-cover pointer-events-none"
                sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 70vw"
            />
        </>
    );
};

export default OrderTracking;
