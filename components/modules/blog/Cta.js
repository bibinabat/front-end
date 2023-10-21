import Image from "next/image";

const Cta = () => {
    return (
        <div className="flex items-center bg-blue-dark p-5 mt-5 rounded-2xl">
            <Image src="/testImages/khz3.jpg" alt="ctaImage" width={150} height={150} className="rounded-xl"/>
            <div className="w-full flex flex-col items-center gap-5">
                <span className="font-bold text-white text-lg">طرز تهیه نبات یزدی</span>
                <button className="bg-cyan text-white h-10 px-2.5 rounded-md text-sm font-[600]">
                    طرز تهیه نبات
                </button>
            </div>
        </div>
    );
};

export default Cta;