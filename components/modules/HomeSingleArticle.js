import Image from "next/image";

const HomeSingleArticle = () => {
    return (
        <div className={`relative`}>
            <div className={`before:content-[''] before:bg-gradient-to-t before:from-[rgba(0,0,0,0.6)] before:w-full before:h-full before:block before:absolute before:rounded-3xl`}>
                <div className="absolute bottom-0 p-5 w-full flex justify-center flex-col gap-2">
                    <h3 className="font-[600] text-white text-xl ">نبات چیست؟</h3>
                    <div className="flex justify-center">
                        <span className="bg-blue-dark text-white w-3/5 text-center py-2 rounded-3xl text-sm relative font-bold relative overflow-hidden">
                            <div className="z-50 relative">
                                21 آذر
                            </div>
                            <Image src="/images/square-mustard-pattern-small.png" alt="" width={100} height={100} className="absolute top-0 w-full opacity-20"/>
                        </span>
                    </div>
                </div>
                <Image src="/testImages/pm4.jpg" alt="عنوان مقاله" width={300} height={300} className="rounded-3xl max-w-[260px]"/>
            </div>
        </div>
);
};

export default HomeSingleArticle;