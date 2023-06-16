import Link from "next/link";
import Image from "next/image";
import Transaction from "@/components/modules/Transaction";

const WalletPage = () => {
    return (
        <div className="overflow-hidden rounded-3xl border-[1.5px] flex-1">
            <div className={`p-5 sm:p-10 rounded-3xl h-full overflow-auto`}>
                <div className="flex gap-3 md:gap-0 items-center mb-5">
                    <Link href="/profile">
                        <i className="fa-solid fa-circle-chevron-right text-2xl text-gray-300 md:hidden"></i>
                    </Link>
                    <h1 className="text-lg font-bold text-blue-dark">کیف پول</h1>
                </div>
                <div className="bg-[#F3F3F3] rounded-2xl mt-32 pt-32 relative">
                    <div
                        className="absolute -top-24 right-1/2 translate-x-1/2 flex items-center justify-center flex-col px-16 sm:px-24 py-14 bg-blue-dark gap-10 rounded-3xl shadow-[0px_0px_54px_-12px_rgba(31,26,80,0.8)]">
                        <span className="text-[#ABA4EF] font-[500]">موجودی کیف پول</span>
                        <div className="text-white font-bold">
                            <span className="text-2xl">23,547,000</span>
                            <span>تومان</span>
                        </div>
                        <Image
                            src="/images/square-mustard-pattern.png"
                            alt="mustard pattern"
                            fill
                            className="opacity-10 object-center object-cover pointer-events-none"
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 70vw"
                        />
                    </div>
                    <div className="p-6">
                        <h2 className="font-bold text-blue-dark mb-4">لیست تراکنش ها</h2>
                        <div className="grid gap-3">
                            <Transaction type="decrease" name="خرید نبات" date="14 فروردین 1402" amount="500,000"
                                         successful={true}/>
                            <Transaction type="increase" name="شب یلدا" successful={false}
                                         expireDate="22:00:00 1402/03/12" amount="500,000"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletPage;