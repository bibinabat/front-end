import Image from "next/image";
import Link from "next/link";
import SidebarAccordion from "@/components/elements/SidebarAccordion";

const Sidebar = ({toggleSidebar}) => {
    return (
        <div className="">
            <div className="px-14 py-7 bg-white rounded-b-2xl">
                <Link href="/" onClick={toggleSidebar(false)}>
                    <Image className="w-32 h-32" src="/logo/bibinabat-logo.png" alt="بی بی نبات"
                           width={100}
                           height={100}/>
                </Link>
            </div>
            <div className="py-5 px-3 font-[600] text-blue-dark">
                <Link href="/" className="block bg-white px-3 py-2 rounded-lg mb-2" onClick={toggleSidebar(false)}>
                    صفحه اصلی
                </Link>
                <SidebarAccordion title="خرید نبات"
                                  items={[
                                      {text: "نبات", url: "/"},
                                      {text: "خرده نبات", url: "/"},
                                      {text: "کاسه نبات", url: "/"},
                                      {text: "پرده نبات", url: "/test"}
                                  ]}
                                  toggleSidebar={toggleSidebar}
                />
                <SidebarAccordion title="قند" items={[]}/>
                <div className="bg-white px-3 py-2 rounded-lg mb-2">
                    وبلاگ
                </div>
                <div className="bg-white px-3 py-2 rounded-lg mb-2">
                    تماس با ما
                </div>
                <div className="bg-white px-3 py-2 rounded-lg mb-2">
                    درباره ما
                </div>
            </div>
        </div>
    );
};

export default Sidebar;