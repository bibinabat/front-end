import React, {useContext, useEffect, useState} from "react";
import Cookies from "js-cookie";
import {toast} from "react-toastify";

const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({
        cartInfo: {},
        status: "loading"
    })

    const getCart = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/carts/active/`, {
            method: "GET",
            headers: {
                "Authorization": Cookies.get("Authorization")
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.data && data.data.cart) {
                    setCart({
                        cartInfo: data.data.cart,
                        status: "loaded"
                    })
                } else {
                    setCart({status: "error"})
                }
            })
            .catch(err => {
                console.log(err)
                setCart({status: "error"})
            })
    }

    useEffect(() => {
        getCart()
    }, []);

    const addToCart = async (weightId, count) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/carts/order/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Cookies.get("Authorization")
            },
            body: JSON.stringify({
                "product_weight_id": weightId,
                "count": count
            }),
            credentials: "include"
        })

        const data = await res.json()

        if (data.data && data.data.messages && data.data.messages.success) {
            await getCart()
            toast.info("محصول به سبد خرید اضافه شد.")
        } else {
            toast.error("مشکلی در انجام عملیات رخ داد.")
        }
    }

    const removeFromCart = async (orderId) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/carts/order/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Cookies.get("Authorization")
            },
            body: JSON.stringify({
                "cart_order_id": orderId
            }),
            credentials: "include"
        })

        const data = await res.json()

        if (data.data && data.data.messages && data.data.messages.success) {
            await getCart()
            toast.info("محصول از سبد خرید حذف شد.")
        } else {
            toast.error("مشکلی در انجام عملیات رخ داد.")
        }
    }

    const updateCart = async (orderId, count) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/carts/order/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Cookies.get("Authorization")
            },
            body: JSON.stringify({
                "cart_order_id": orderId,
                "count": count
            }),
            credentials: "include"
        })

        const data = await res.json()
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, getCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}