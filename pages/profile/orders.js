import OrdersPage from "@/components/templates/OrdersPage";
import {NextSeo} from "next-seo";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {toast} from "react-toastify";

const Orders = () => {
    const [orders, setOrders] = useState("loading")

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/carts/`, {
            method: "GET",
            headers: {
                "Authorization": Cookies.get("Authorization")
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.data && data.data.carts) {
                    setOrders(data.data.carts.filter(cart => +cart.status > 2))
                } else {
                    toast.error("مشکلی در گرفتن اطلاعات رخ داده است.")
                }
            })
            .catch(err => {
                console.log(err)
                toast.error("مشکلی در گرفتن اطلاعات رخ داده است.")
            })
    }, []);

    return (
        <>
            <NextSeo
                title="سفارشات"
                noindex={true}
                nofollow={true}
            />
            <OrdersPage data={orders}/>
        </>
    );
};

export default Orders;