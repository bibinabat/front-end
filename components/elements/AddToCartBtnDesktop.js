import ProductTypes from "@/components/modules/product/ProductTypes";
import {Dialog} from "@mui/material";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const AddToCartBtnDesktop = ({productId, weights}) => {
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
                className="text-white bg-blue-dark flex items-center justify-center gap-2 rounded-lg w-full text-sm font-[500]">
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

export default AddToCartBtnDesktop;