import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {Dialog} from "@mui/material";
import ProductTypes from "@/components/modules/ProductTypes";

const AddToCartBtnMobile = ({productId, weights}) => {
    const router = useRouter()

    const [isTypesOpen, setIsTypesOpen] = useState(router.asPath.split("#")[1] === `product_types_${productId}`)

    useEffect(() => {
        const onHashChange = () => setIsTypesOpen(window.location.hash === `#product_types_${productId}`)
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleTypesOpen = () => {
        window.location.hash = `#product_types_${productId}`
    }

    const handleTypesClose = () => {
        window.history.back()
    }

    return (
        <>
            <button
                onClick={handleTypesOpen}
                className="text-white bg-blue-dark flex items-center gap-2  px-3 rounded-lg w-full justify-center text-sm">
                افزودن به سبد خرید
            </button>
            <Dialog
                open={isTypesOpen}
                onClose={handleTypesClose}
                fullWidth={true}
                maxWidth="xs"
                PaperProps={{
                    sx: {
                        borderRadius: "15px"
                    }
                }}
            >
                <ProductTypes handleClose={handleTypesClose} weights={weights}/>
            </Dialog>
        </>
    );
};

export default AddToCartBtnMobile;