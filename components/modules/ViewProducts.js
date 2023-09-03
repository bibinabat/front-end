import OrderTracking from "@/components/modules/OrderTracking";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import HeaderCartItem from "@/components/modules/HeaderCartItem";

const ViewProducts = ({orderId, products}) => {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(router.asPath.split("#")[1] === `view_products_${orderId}`)

    useEffect(() => {
        const onHashChange = () => setIsOpen(window.location.hash === `#view_products_${orderId}`)
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleOpen = () => {
        window.location.hash = `#view_products_${orderId}`
    }

    const handleClose = () => {
        router.replace('/profile/orders')
            .then(() => {
                setIsOpen(false)
            })
    }

    return (
        <>
            <button
                onClick={handleOpen}
                className="bg-blue-dark text-white px-3 font-[500] py-2 rounded-lg col-span-2 lg:col-span-1">
                مشاهده محصولات
            </button>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                fullWidth={true}
                maxWidth="xs"
                PaperProps={{
                    sx: {
                        borderRadius: "15px"
                    }
                }}
                scroll="paper"
            >
                <DialogTitle>
                    <div className="w-full">
                        <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                           onClick={handleClose}></i>
                    </div>
                    <div className="w-full flex justify-center font-bold text-lg text-blue-dark">
                        <p>لیست محصولات</p>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className="flex flex-col gap-2">
                        {
                            products.map(product => (
                                <HeaderCartItem key={product.id} info={product}/>
                            ))
                        }
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ViewProducts;