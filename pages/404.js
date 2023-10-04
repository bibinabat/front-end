import Link from "next/link";
import {NextSeo} from "next-seo";

const NotFound = () => {
    return (
        <>
            <NextSeo
                title="صفحه پیدا نشد - بی بی نبات"
                nofollow={true}
                noindex={true}
            />
            <div className="w-full flex flex-col items-center py-80">
                <h1 className="text-blue-dark text-xl font-bold">صفحه ای که دنبال آن بودید پیدا نشد!</h1>
                <Link href="/" className="bg-cyan text-white px-3 py-2 rounded mt-5 transition hover:bg-[#18CEC2]">صفحه
                    اصلی</Link>
            </div>
        </>
    );
};

export default NotFound;