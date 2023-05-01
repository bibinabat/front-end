import React from 'react';

const BuyersComment = () => {
    const poQNumber = 4
    const paQNumber = 3

    const colors = {
        1: "red",
        2: "red",
        3: "#FFA200",
        4: "#57D91F",
        5: "#13A89E",
        0: "transparent"
    }

    const poQColor = colors[poQNumber] || ""
    const paQColor = colors[paQNumber] || ""

    return (
        <div className="bg-[#f5f5f5] h-[22rem] rounded-xl p-5 relative h-96 flex flex-col">
            <div className="flex items-center justify-between whitespace-nowrap text-blue-dark mb-2">
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-user text-lg"></i>
                    <span className="font-[600]">امیرمحمد خلیلی</span>
                </div>
                <span className="text-[#8A8A8A] text-sm font-[500]">14 اسفند 1401</span>
            </div>
            <p className="max-h-32 overflow-hidden line-clamp-5 font-[500] text-[#2D2D2D] text-sm leading-6 text-justify grow">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف ب ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="flex my-1 gap-5">
                <div className="flex items-start gap-1">
                    <span className="text-sm text-[#B5B5B8] font-bold">کیفیت محصول</span>
                    <span className={`text-lg font-[800]`} style={{color: poQColor}}>{poQNumber}</span>
                </div>
                <div className="flex items-start gap-1">
                    <span className="text-sm text-[#B5B5B8] font-bold">کیفیت بسته بندی</span>
                    <span className={`text-lg font-[800] text-[${paQColor}]`}
                          style={{color: paQColor}}>{paQNumber}</span>
                </div>
            </div>
            <div className="bg-white rounded-lg p-1 flex flex-col items-center grow">
                <div className="text-sm font-bold text-[#555555]">لیست محصولات خریداری شده</div>
                <div className="text-xs font-[600] text-blue-dark flex flex-col items-center gap-1 mt-1">
                    <span>پرده نبات ساده درجه یک</span>
                    <span>نبات دو آتیشه ممتاز</span>
                    <span>پرده نبات زعفرانی درجه یک</span>
                </div>
                <div className="text-cyan text-xs font-extrabold mt-1">و 3 محصول دیگر</div>
            </div>
        </div>
    );
};

export default BuyersComment;