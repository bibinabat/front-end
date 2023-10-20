import {Dialog} from "@mui/material";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import ChooseAddress from "@/components/modules/addresses/ChooseAddress";

const CustomerInfoCard = () => {
    const router = useRouter()

    const [isChooseAddressOpen, setIsChooseAddressOpen] = useState(router.asPath.split("#")[1] === "choose_address")

    useEffect(() => {
        const onHashChange = () => setIsChooseAddressOpen(window.location.hash === "#choose_address")
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleChooseAddressOpen = () => {
        window.location.hash = "#choose_address"
    }

    const handleChooseAddressClose = () => {
        window.history.back()
    }

    return (
        <div
            className="flex flex-col lg:flex-row lg:items-center justify-between border-[1.5px] border-gray-400 rounded-xl px-9 py-6">
            <div className="flex flex-col gap-7">
                <p className="text-blue-dark font-bold text-xl">آدرس تحویل سفارش</p>
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-xl text-gray-400"></i>
                    <p className="font-[500] text-gray-600 text-sm sm:text-base text-justify">بلوار فردوسی، نرسیده به م.
                        امام موسی
                        صدر، خ.
                        نگارستان، بن.
                        نگارستان7، اولین خانه سمت چپ</p>
                </div>
                <div className="flex flex-col flex-wrap sm:flex-row font-[600] gap-4 sm:gap-10 text-sm">
                    <div>
                        <span className="text-gray-400 ml-2">کد پستی:</span>
                        <span className="text-gray-600">8915164576</span>
                    </div>
                    <div>
                        <span className="text-gray-400 ml-2">گیرنده:</span>
                        <span className="text-gray-600">امیرمحمد خلیلی میبدی</span>
                    </div>
                    <div>
                        <span className="text-gray-400 ml-2">شماره موبایل:</span>
                        <span className="text-gray-600">09134423596</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <button
                    className="flex gap-1.5 items-center text-sm font-bold text-[#655CBF] transition py-1.5 px-2 rounded hover:bg-[#EEEDF8]"
                    onClick={handleChooseAddressOpen}>
                    تغییر آدرس
                    <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <Dialog
                    open={isChooseAddressOpen}
                    onClose={handleChooseAddressClose}
                    fullWidth={true}
                    maxWidth="md"
                    PaperProps={{
                        sx: {
                            borderRadius: "15px"
                        }
                    }}
                    scroll="body"
                >
                    <ChooseAddress handleClose={handleChooseAddressClose}/>
                </Dialog>
            </div>
        </div>
    );
};

export default CustomerInfoCard;