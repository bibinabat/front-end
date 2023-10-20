import CountdownTimer from "@/components/modules/profile/CountdownTimer";

const Transaction = ({type, name, expireDate, date, amount, successful}) => {
    return (
        <div
            className="flex flex-col gap-3 min-[1216px]:flex-row justify-between bg-white py-3 px-7 rounded-lg items-center">
            <div className="flex items-center gap-3">
                {
                    type === "decrease" ? (
                        <i className="fa-solid fa-up-from-line text-red text-2xl"></i>
                    ) : (
                        <i className="fa-solid fa-down-to-line text-[#28B100] text-2xl"></i>
                    )
                }
                <div className="flex items-center text-blue-dark gap-1">
                    <span className="font-[600]">{amount}</span>
                    <span className="text-[10px] leading-none font-black">
                    تــــو <br/> مان
                    </span>
                </div>
            </div>
            <span className="font-[600] text-blue-dark flex gap-1 whitespace-nowrap text-sm">
                    <span>
                        {
                            type === "decrease" ? "کاهش موجودی" : "افزایش موجودی"
                        }
                    </span>
                    -
                    <span>
                        {name}
                    </span>
            </span>
            {
                type === "decrease" ? (
                    <span className="font-[600] text-gray-400 whitespace-nowrap text-sm">
                        {date}
                    </span>
                ) : (
                    <CountdownTimer expirationDate="23:00:00 1402/03/26"/>
                )
            }
            {
                successful ? (
                    <span
                        className="text-[#008512] bg-[#B8EEBF] font-bold text-sm h-8 min-[1216px]:h-full w-16 justify-center flex items-center rounded">موفق</span>
                ) : (
                    <span
                        className="text-red bg-[#FFCFCF] font-bold text-sm h-8 min-[1216px]:h-full w-16 justify-center flex items-center rounded">ناموفق</span>
                )
            }
        </div>
    );
};

export default Transaction;