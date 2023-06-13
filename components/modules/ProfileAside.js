import Link from "next/link";
import {useRouter} from "next/router";
import {Tooltip} from "@mui/material";

const ProfileAside = () => {
    const router = useRouter()

    const isProfilePage = router.asPath === "/profile"

    const profileList = [
        {
            name: "اطلاعات حساب کاربری",
            icon: "fa-regular fa-user",
            link: "/profile/user-info"
        },
        {
            name: "سفارشات",
            icon: "fa-regular fa-box",
            link: "/profile/orders"
        },
        {
            name: "آدرس ها",
            icon: "fa-regular fa-location-dot",
            link: "/profile/addresses"
        },
        {
            name: "لیست علاقه‌مندی‌ ها",
            icon: "fa-regular fa-bookmark",
            link: "/profile/favorites"
        },
        {
            name: "اعلانات",
            icon: "fa-regular fa-bell",
            link: "/profile/notifications"
        }
    ]

    return (
        <div
            className={`${isProfilePage ? "" : "hidden md:block"} border-[1.5px] w-full md:w-80 overflow-hidden rounded-3xl`}>
            <div className="p-5 rounded-3xl h-full overflow-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            className="text-blue-dark flex items-center justify-center text-2xl rounded-full bg-[#F3F2F2] h-20 w-20">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="flex flex-col text-sm gap-1">
                        <span
                            className="font-[600] text-blue-dark whitespace-nowrap w-36 sm:w-full md:w-36 overflow-hidden text-ellipsis">امیرحسین منصوری زاده گاوافشادی</span>
                            <span className="text-gray-400 text-xs font-bold">خوش آمدید</span>
                        </div>
                    </div>
                    <Tooltip title="خروج" arrow placement="top">
                        <i className="fa-solid fa-arrow-right-from-bracket text-red text-lg cursor-pointer"></i>
                    </Tooltip>
                </div>
                <div className="rounded-lg flex items-center justify-between bg-[#F3F2F2] my-3">
                    <div className="flex items-center">
                        <i className="fa-regular fa-wallet flex items-center justify-center h-14 w-14 m-2 rounded text-2xl text-blue-dark bg-[#C6C5D1]"></i>
                        <div className="text-sm font-[600]">
                            <span className="text-blue-dark">کیف پول و تراکنشها</span>
                            <div className="text-xs text-gray-500 mt-1 flex gap-1">
                                <span>موجودی:</span>
                                <span>32,547,000</span>
                            </div>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-left ml-3 text-gray-400 text-sm"></i>
                </div>
                <ul className="flex flex-col gap-3">
                    {
                        profileList.map((item, index) => (
                            <li key={index}
                                className={`cursor-pointer overflow-hidden rounded-xl ${router.asPath === item.link ? "bg-gray-100" : ""} hover:bg-gray-100`}>
                                <Link href={item.link} className="flex gap-3 items-center">
                                    <i className={`${item.icon} flex items-center justify-center bg-[#CFCEDA] h-12 w-12 rounded-xl text-blue-dark text-xl`}></i>
                                    <span className="text-sm font-[600] text-blue-dark">{item.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default ProfileAside;