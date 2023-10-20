import Link from "next/link";

const OrdersPage = ({data}) => {
    return (
        <div className="overflow-hidden rounded-3xl border-[1.5px] flex-1">
            <div className={`p-5 sm:p-10 rounded-3xl h-full overflow-auto`}>
                <div className="flex gap-3 md:gap-0 items-center">
                    <Link href="/profile">
                        <i className="fa-solid fa-circle-chevron-right text-2xl text-gray-300 md:hidden"></i>
                    </Link>
                    <h1 className="text-lg font-bold text-blue-dark">سفارشات</h1>
                </div>
                {
                    data === "loading" ? (
                        <div className="h-[400px] text-4xl text-blue-500 w-full flex items-center justify-center">
                            <i className="fa-duotone fa-spinner-third fa-spin"></i>
                        </div>
                    ) : (
                        <div className="mt-5 flex flex-col gap-3">
                            {
                                data.map(order => (
                                    <OrderCard key={order.id} data={order} orderSituation={+order.status}
                                               isReturned={false}/>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

import OrderCard from "@/components/modules/profile/OrderCard";
import {useEffect} from "react";

export default OrdersPage;