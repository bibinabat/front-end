import Image from "next/image";
import Link from "next/link";
import SidebarAccordion from "@/components/elements/SidebarAccordion";
import {useEffect, useState} from "react";

const Sidebar = ({toggleSidebar}) => {
    const [categories, setCategories] = useState("loading")

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/products/main_categories/`)
            .then(res => res.json())
            .then(data => {
                if (data.data && data.data.main_categories) {
                    setCategories(data.data.main_categories)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

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
                {
                    categories === "loading" ? (
                        <span>loading</span>
                    ) : (
                        categories.map(category => (
                            <SidebarAccordion key={category.id} title={category.title} slug={category.slug}
                                              items={category.sub_categories.map(subCategory => (
                                                  {
                                                      text: subCategory.title,
                                                      url: `/product-category/${category.slug}/${subCategory.slug}`
                                                  }
                                              ))}
                                              toggleSidebar={toggleSidebar}
                            />
                        ))
                    )
                }
                <Link href="https://bibinabat.com/blog/" target="_blank"
                      className="block bg-white px-3 py-2 rounded-lg mb-2">
                    وبلاگ
                </Link>
                <Link href="/contact-us" className="block bg-white px-3 py-2 rounded-lg mb-2">
                    تماس با ما
                </Link>
                <Link href="/about-us" className="block bg-white px-3 py-2 rounded-lg mb-2">
                    درباره ما
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;