import {Dialog} from "@mui/material";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import OrderTracking from "@/components/modules/OrderTracking";

const OrderCard = ({orderCode, orderSituation, isReturned}) => {
    const router = useRouter()

    const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(router.asPath.split("#")[1] === `order_tracking_${orderCode}`)

    useEffect(() => {
        const onHashChange = () => setIsOrderTrackingOpen(window.location.hash === `#order_tracking_${orderCode}`)
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleOrderTrackingOpen = () => {
        window.location.hash = `#order_tracking_${orderCode}`
    }

    const handleOrderTrackingClose = () => {
        router.replace('/profile/orders')
            .then(() => {
                setIsOrderTrackingOpen(false)
            })
    }

    const [situationIcon, setSituationIcon] = useState("")
    const [situationName, setSituationName] = useState("")

    useEffect(() => {
        if (isReturned) {
            setSituationIcon("fa-solid fa-circle-xmark text-red")
            setSituationName("مرجوع شده")
        } else if (orderSituation === "4") {
            setSituationIcon("fa-solid fa-circle-check text-cyan")
            setSituationName("ارسال شده")
        } else {
            setSituationIcon("fa-duotone fa-gears text-blue-dark    ")
            setSituationName("در حال پردازش")
        }
    }, [orderSituation, isReturned])

    return (
        <div className="bg-[#F3F3F3] px-4 sm:px-6 py-5 rounded-lg">
            <div className="flex gap-2 items-center mb-2">
                <i className={situationIcon}></i>
                <span className="text-blue-dark font-[500]">{situationName}</span>
            </div>
            <div className="flex flex-col min-[1400px]:flex-row gap-3 items-center justify-between whitespace-nowrap">
                <div className="text-sm grid grid-cols-2 lg:flex items-center lg:gap-7 w-full gap-y-2">
                    <span className="text-gray-400 font-[500] col-span-2">4 اسفند 1401</span>
                    <div className="flex items-center gap-1">
                        <span className="text-xs font-[600] text-gray-400">کد سفارش</span>
                        <span className="text-blue-dark font-[500]">5454654</span>
                    </div>
                    <div className="flex items-center gap-1 justify-self-end">
                        <span className="text-xs font-[600] text-gray-400">مبلغ</span>
                        <div className="flex items-center gap-1">
                            <span className="text-blue-dark font-[500]">45,000</span>
                            <span className="text-xs text-blue-dark font-[500]">تومان</span>
                        </div>
                    </div>
                </div>
                <div
                    className="grid grid-cols-2 lg:grid-cols-3 gap-2 min-[1400px]:flex min-[1400px]:items-center w-full min-[1400px]:w-fit text-sm">
                    <button
                        className="bg-blue-dark text-white px-3 font-[500] py-2 rounded-lg col-span-2 lg:col-span-1">مشاهده
                        فاکتور
                    </button>
                    <button className="bg-blue-dark text-white px-3 font-[500] py-2 rounded-lg"
                            onClick={handleOrderTrackingOpen}>پیگیری سفارش
                    </button>
                    <Dialog
                        open={isOrderTrackingOpen}
                        onClose={handleOrderTrackingClose}
                        fullWidth={true}
                        maxWidth="md"
                        PaperProps={{
                            sx: {
                                borderRadius: "15px"
                            }
                        }}
                        scroll="paper"
                    >
                        <OrderTracking handleClose={handleOrderTrackingClose} orderSituation={orderSituation}/>
                    </Dialog>
                    <button className="bg-red text-white px-3 font-[500] py-2 rounded-lg">درخواست مرجوعی</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;