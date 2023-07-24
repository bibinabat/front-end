import Link from "next/link";
import {useRouter} from "next/router";
import {toast} from "react-toastify";

const Share = ({handleClose, categorySlug, productSlug}) => {
    const productPath = `/product/${categorySlug}/${productSlug}`

    const handleLinkCopy = () => {
        navigator.clipboard.writeText(`https://bibinabat.com${productPath}`)
            .then(() => {
                toast.info("با موفقیت کپی شد!", {
                    position: "top-center",
                    icon: false,
                    closeButton: false
                })
            })
    }

    return (
        <div className="p-5">
            <div className="w-full">
                <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                   onClick={handleClose}></i>
            </div>
            <div className="w-full flex justify-center font-bold text-lg mb-2">
                <p>اشتراک گذاری</p>
            </div>
            <div className="text-[#B8B8B8] font-bold text-sm my-5 text-center">
                <p>این کالا را با دیگران به اشتراک بگذارید!</p>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 gap-3">
                <Link
                    href={`https://telegram.me/share/url?url=https://bibinabat.com${productPath}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 text-[#4c9ae1] bg-[#D2E6F8] rounded-xl py-5 cursor-pointer">
                    <i className="fa-brands fa-telegram text-lg"></i>
                    <span>تلگرام</span>
                </Link>
                <Link
                    href={`https://api.whatsapp.com/send/?text=https://bibinabat.com${productPath}&type=custom_url&app_absent=0`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 text-[#25d366] bg-[#D3F6E0] rounded-xl py-5 cursor-pointer">
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <span>واتس اپ</span>
                </Link>
                <Link
                    href={`https://twitter.com/intent/tweet?url=https://bibinabat.com${productPath}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 text-[#1d9bf0] bg-[#CDE9FC] rounded-xl py-5 cursor-pointer">
                    <i className="fa-brands fa-twitter text-lg"></i>
                    <span>توییتر</span>
                </Link>
                <div
                    onClick={handleLinkCopy}
                    className="flex items-center justify-center gap-2 text-gray-700 bg-gray-200 rounded-xl py-5 cursor-pointer">
                    <i className="fa-solid fa-copy"></i>
                    <span>کپی لینک</span>
                </div>
            </div>
        </div>
    );
};

export default Share;