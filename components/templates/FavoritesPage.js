import Link from "next/link";
import FavoriteProductCard from "@/components/modules/FavoriteProductCard";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Cookies from "js-cookie";

const FavoritesPage = () => {
    const [products, setProducts] = useState("loading")

    const getData = () => {
        setProducts("loading")

        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/?watch_list=true&paginate=false`, {
            headers: {
                "Authorization": Cookies.get("Authorization")
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.data && data.data.products) {
                    setProducts(data.data.products)
                } else {
                    toast.error("مشکلی در گرفتن اطلاعات رخ داده است.")
                }
            })
            .catch(err => {
                console.log(err)
                toast.error("مشکلی در گرفتن اطلاعات رخ داده است.")
            })
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="overflow-hidden rounded-3xl border-[1.5px] flex-1">
            <div className={`p-5 sm:p-10 rounded-3xl h-full overflow-auto`}>
                <div className="flex gap-3 md:gap-0 items-center mb-5">
                    <Link href="/profile">
                        <i className="fa-solid fa-circle-chevron-right text-2xl text-gray-300 md:hidden"></i>
                    </Link>
                    <h1 className="text-lg font-bold text-blue-dark">لیست علاقه مندی ها</h1>
                </div>
                <div className="flex justify-center mb-5">
                    <div
                        className="shadow-[0px_3px_15px_-3px_rgba(0,0,0,0.1)] flex gap-5 px-5 py-4 rounded-full font-bold">
                        <span className="text-mustard">
                            محصولات
                        </span>
                        {/*<span className="text-blue-dark">*/}
                        {/*    مقالات*/}
                        {/*</span>*/}
                    </div>
                </div>
                {
                    products === "loading" ? (
                        <div className="pt-16 text-blue-500 text-2xl flex items-center justify-center">
                            <i className="fa-duotone fa-spinner-third fa-spin"></i>
                        </div>
                    ) : products.length === 0 ? (
                        <div className="text-center mt-16 text-gray-600 font-[600] text-sm">
                            لیست علاقمندی های شما خالی است.
                        </div>
                    ) : (
                        <div className="grid min-[1420px]:grid-cols-2 gap-3">
                            {
                                products.map(product => (
                                    <FavoriteProductCard key={product.id} data={product} getData={getData}/>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FavoritesPage;