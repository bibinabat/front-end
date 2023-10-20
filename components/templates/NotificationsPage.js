import Link from "next/link";
import Notification from "@/components/modules/profile/Notification";

const NotificationsPage = () => {
    return (
        <div className="overflow-hidden rounded-3xl border-[1.5px] flex-1">
            <div className={`p-5 sm:p-10 rounded-3xl h-full overflow-auto`}>
                <div className="flex gap-3 md:gap-0 items-center mb-5">
                    <Link href="/profile">
                        <i className="fa-solid fa-circle-chevron-right text-2xl text-gray-300 md:hidden"></i>
                    </Link>
                    <h1 className="text-lg font-bold text-blue-dark">اعلانات</h1>
                </div>
                <div className="rounded-2xl bg-[#F3F3F3] p-5 grid gap-3">
                    <Notification/>
                    <Notification/>
                    <Notification/>
                </div>
            </div>
        </div>
    );
};

export default NotificationsPage;