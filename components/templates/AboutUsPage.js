import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {Suspense, useEffect, useState} from "react";
import {Skeleton} from "@mui/material";
import {toast} from "react-toastify";

const AboutUsPage = ({data, error}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [componentContent, setComponentContent] = useState(null);
    const [communicationWays, setCommunicationWays] = useState("loading")

    useEffect(() => {
        if (data && data.data.communication_ways && !error) {
            setCommunicationWays(data.data.communication_ways)
        } else {
            toast.error("مشکلی در گرفتن اطلاعات رخ داده است", {
                icon: false,
                closeButton: false
            })
        }
    }, [communicationWays, data, error])

    useEffect(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (data) {
            if (this.readyState === 4 && this.status === 200) {
                setIsLoading(false)
                if (document.querySelectorAll("#ienebox6-container")[0]) {
                    setComponentContent(this.response);
                }
            }
        };
        xhttp.open("GET", "https://iene.ir/iene-box/6/6248cdc5-f653-4a80-9c3b-e77cd8601527/", true);
        xhttp.send();
    }, [])

    return (
        <div className="mt-36 md:mt-48 px-3 sm:px-7 lg:px-0 max-w-4xl mx-auto flex flex-col md:flex-row gap-5">
            <div>
                <h1 className="text-2xl font-bold text-blue-dark text-center md:text-start">درباره بی بی نبات</h1>
                <div className="flex gap-6 justify-center mt-5">
                    <Link href="https://trustseal.enamad.ir/?id=249865&Code=n7XI910ux5rZG6SjyEa7" target="_blank">
                        <Image src="/images/footerImages/enamad.png" className="h-auto" alt="enamad" width={90}
                               height={150}/>
                    </Link>
                    <Link href="https://gateway.zibal.ir/trustMe/bibinabat.com" target="_blank">
                        <Image src="/images/footerImages/zibal.png" className="h-auto" alt="zibal" width={80}
                               height={150}/>
                    </Link>
                </div>
                <div className="flex md:flex-col justify-center gap-5 mb-5 mt-5 flex-wrap">
                    <div className="flex flex-col gap-3 ">
                        <span className="text-[#4A4A4A] font-[600] whitespace-nowrap">ما را در شبکه های اجتماعی دنبال کنید</span>
                        <div className="w-full flex gap-6 text-[#C4C4C4] text-3xl">
                            {
                                communicationWays !== "loading" ? (
                                    communicationWays.map(way => {
                                        if (way.is_social) {
                                            return (
                                                <Link key={way.id} href={way.link} target="_blank"
                                                      className="hover:text-blue-dark">
                                                    <i className={way.icon_name}></i>
                                                </Link>
                                            )
                                        }
                                    })
                                ) : (null)
                            }
                        </div>
                    </div>
                    {/*{*/}
                    {/*    isLoading ? (*/}
                    {/*        <Skeleton animation="wave" variant="rounded" width={210} height={60}/>*/}
                    {/*    ) : (*/}
                    {/*        <div id="ienebox6-container" dangerouslySetInnerHTML={{__html: componentContent}}/>*/}
                    {/*    )*/}
                    {/*}*/}
                    <div id="ienebox6-container" dangerouslySetInnerHTML={{__html: componentContent}}/>
                </div>
                <div className="mt-5 flex gap-2 items-center justify-center md:justify-start">
                    <i className="fa-solid fa-location-dot text-xl text-gray-500"></i>
                    <span className="font-[600] text-gray-700">
                        ایران ، یزد
                    </span>
                </div>
            </div>
            <div>
                <div
                    className="flex flex-col gap-10 p-5 leading-8 border-[1.7px] border-gray-400 rounded-xl text-justify text-gray-900 font-[500]">
                    <p>
                        فروشگاه بی بی نبات، از بزرگترین و بهترین فروشگاه های عرضه کننده انواع محصولات یزدی از قبیل نبات
                        و قند به شمار آمده و شرایط آسان و بسیار خوبی را برای خرید این محصولات، در اختیار شما عزیزان قرار
                        خواهد داد.
                    </p>
                    <p>
                        حال اگر شما عزیزان هم تصمیم دارید تا به خرید نبات یزدی بپردازید و آن را با بهترین شرایط تهیه
                        نمایید، می توانید از فروشگاه بی بی نبات که انواع نبات یزدی اصل و تازه را ارائه نموده، اقدام کرده
                        و در سریع ترین زمان به تهیه این محصول بپردازید.
                    </p>
                    <div>
                        در هر کجای این کشور که باشید، با مراجعه به سایت بی بی نبات می توانید خرید غیر حضوری خود را خیلی
                        سریع و با صرف کمترین هزینه انجام دهید. حتی از این طریق، موفق به خرید پرده نبات زعفرانی یزدی هم
                        خواهید شد؛ این محصول طرفداران زیادی داشته و در نهایت تازگی و کیفیت، تقدیم حضورتان خواهد گشت.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;