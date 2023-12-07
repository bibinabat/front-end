import Link from "next/link";
import {Skeleton} from "@mui/material";

const Social = ({communicationWays}) => {
    return (
        <div className='flex flex-col gap-5'>
            <span className="text-[#4A4A4A] font-[600]">ما را در شبکه های اجتماعی دنبال کنید</span>
            <div className="w-full flex gap-10 text-[#C4C4C4] text-3xl">
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
                    ) : (
                        <>
                            <Skeleton variant="circular" animation="wave" width={35} height={35}/>
                            <Skeleton variant="circular" animation="wave" width={35} height={35}/>
                            <Skeleton variant="circular" animation="wave" width={35} height={35}/>
                            <Skeleton variant="circular" animation="wave" width={35} height={35}/>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Social;