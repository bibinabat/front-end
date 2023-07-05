import Link from "next/link";
import Cookies from "js-cookie";
import {toast} from "react-toastify";
import useAuthState from "@/hooks/useAuth";

const HeaderUserMenu = ({isOpen, setIsOpen, userData}) => {
    const {setIsLoggedIn} = useAuthState()

    const handleUserLogout = () => {
        fetch("https://backend-bibinabat.iran.liara.run/api/auth/logout/", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": Cookies.get("Authorization")
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.data.messages.success) {
                    Cookies.remove("Authorization")
                    setIsLoggedIn(false)
                    toast.info(data.data.messages.success[0], {
                        icon: false,
                        closeButton: false
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div onMouseEnter={() => setIsOpen(true)}
             onMouseLeave={() => setIsOpen(false)}
             className={`text-center text-blue-dark p-3 absolute z-[9999] bg-white shadow-[0px_20px_58px_0px_rgba(0,0,0,0.2)] left-60 top-[86px] transition rounded-2xl ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <Link href="/profile"
                  className="flex items-center justify-between transition hover:bg-[#F3F2F2] rounded-xl">
                <div className="flex items-center">
                    <div className="flex justify-center items-center rounded-full bg-[#F3F2F2] p-6 text-xl"><i
                        className="fa-solid fa-user"></i></div>
                    <div className="flex gap-2 flex-col items-start mr-3 min-w-[160px]">
                        <span className="font-bold">
                            {
                                userData.first_name === "" || userData.last_name === "" ? (
                                    userData.phone_number
                                ) : (
                                    userData.first_name + " " + userData.last_name
                                )
                            }
                        </span>
                        <span className="font-bold text-xs text-[#9B9B9B]">خوش آمدید</span>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-left text-sm pl-4"></i>
            </Link>
            <hr className="my-2 border-[1.25px] border-[#DCDCDC]"/>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="bg-[#CFCEDA] ml-1 p-2 rounded flex items-center justify-center">
                        <i className="fa-regular fa-wallet"></i>
                    </div>
                    <span className="font-[600] text-sm text-[#A0A0A0] ml-2">موجودی کیف پول شما:</span>
                </div>
                <span className="text-sm font-[600]">0 تومان</span>
            </div>
            <hr className="my-2 border-[1.25px] border-[#DCDCDC]"/>
            <div className="text-sm">
                <Link href="/profile/orders"
                      className="flex items-center justify-start gap-2 font-[600] px-2 py-1 transition hover:bg-[#F3F2F2] rounded-lg">
                    <i className="fa-regular fa-box text-xl"></i>
                    <span>سفارشات</span>
                </Link>
                <Link href="/profile/favorites"
                      className="flex items-center justify-start gap-2 font-[600] px-2 py-1 transition hover:bg-[#F3F2F2] rounded-lg">
                    <i className="fa-regular fa-bookmark text-xl"></i>
                    <span>لیست علاقه مندی ها</span>
                </Link>
                <button
                    onClick={handleUserLogout}
                    className="w-full text-red flex items-center justify-start gap-2 font-[600] px-2 py-1 transition hover:bg-[#FFEFEF] rounded-lg">
                    <i className="fa-solid fa-arrow-right-from-bracket text-xl"></i>
                    <span>خروج از حساب کاربری</span>
                </button>
            </div>
        </div>
    );
};

export default HeaderUserMenu;