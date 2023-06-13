import Link from "next/link";

const OrdersPage = () => {
    return (
        <div className="overflow-hidden rounded-3xl border-[1.5px] flex-1">
            <div className={`p-5 sm:p-10 rounded-3xl h-full overflow-auto`}>
                <div className="flex gap-3 md:gap-0 items-center">
                    <Link href="/profile">
                        <i className="fa-solid fa-circle-chevron-right text-2xl text-gray-300 md:hidden"></i>
                    </Link>
                    <h1 className="text-lg font-bold text-blue-dark">سفارشات</h1>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                    <OrderCard orderCode="5454654" orderSituation="2" isReturned={false}/>
                    <OrderCard orderCode="5454653" orderSituation="3" isReturned={false}/>
                    <OrderCard orderCode="5454652" orderSituation="4" isReturned={true}/>
                    <OrderCard orderCode="5454651" orderSituation="4" isReturned={false}/>
                    <OrderCard orderCode="5454650" orderSituation="4" isReturned={false}/>
                </div>
            </div>
        </div>
    );
};

import OrderCard from "@/components/modules/OrderCard";

export default OrdersPage;