import {Dialog, Rating} from "@mui/material";
import ProgressBar from "@/components/elements/ProgressBar";
import {useEffect, useState} from "react";
import CommentForm from "@/components/modules/CommentForm";
import {useRouter} from "next/router";
import useAuthState from "@/hooks/useAuth";

const CommentsAside = ({commentsCount, rate, surveys}) => {
    const router = useRouter()
    const {isLoggedIn} = useAuthState()

    const [isCommentFormOpen, setIsCommentFormOpen] = useState(router.asPath.split("#")[1] === "comment_form")
    const [productQuality, setProductQuality] = useState(0)
    const [packQuality, setPackQuality] = useState(0)

    useEffect(() => {
        let totalProduct = 0
        let totalPack = 0

        surveys.data.surveys.forEach((item) => {
            totalProduct += +item.products_quality
            totalPack += +item.pack_quality
        })

        setProductQuality(totalProduct / surveys.data.surveys.length)
        setPackQuality(totalPack / surveys.data.surveys.length)
    }, [surveys])

    useEffect(() => {
        const onHashChange = () => setIsCommentFormOpen(window.location.hash === "#comment_form")
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleCommentFormOpen = () => {
        window.location.hash = "#comment_form"
    }

    const handleCommentFormClose = () => {
        setIsCommentFormOpen(false)
        window.history.replaceState({}, document.title, router.asPath.split('#')[0]);
    }

    return (
        <div className="bg-[#f5f5f5] rounded-2xl p-6 whitespace-nowrap sticky top-40">
            {
                rate !== 0 ? (
                    <>
                        <div className="text-mustard font-bold text-center">
                            <span className="text-4xl ml-1">{rate}</span>
                            <span>از 5</span>
                        </div>
                        <div className="flex justify-center">
                            <Rating name="read-only" value={rate} readOnly
                                    icon={<i className="fa-solid fa-star text-base"></i>}
                                    emptyIcon={<i className="fa-duotone fa-star text-base"></i>}
                                    style={{
                                        gap: "3px"
                                    }}
                            />
                        </div>
                        <div className="text-center text-[#949494] font-[600] text-sm mt-2">
                            ({commentsCount} نظر)
                        </div>
                        <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
                    </>
                ) : null
            }
            {
                surveys.data.surveys.length ? (
                    <>
                        <div>
                            <span className="text-blue-dark font-bold">کیفیت محصول</span>
                            <div className="flex items-center justify-between gap-3">
                                <ProgressBar number={productQuality}/>
                                <span className="text-blue-dark font-[800]">{productQuality}</span>
                            </div>
                        </div>
                        <div className="mt-2">
                            <span className="text-blue-dark font-bold">کیفیت بسته بندی</span>
                            <div className="flex items-center justify-between gap-3">
                                <ProgressBar number={packQuality}/>
                                <span className="text-blue-dark font-[800]">{packQuality}</span>
                            </div>
                        </div>
                        <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
                    </>
                ) : null
            }
            <p className="text-sm font-bold text-blue-dark mx-6">شما هم درباره این کالا نظر ثبت کنید</p>
            <button className="w-full py-2 border-2 rounded-lg border-blue-dark mt-3 font-bold text-sm"
                    onClick={handleCommentFormOpen}>
                ثبت نظر جدید
            </button>
            <Dialog
                open={isCommentFormOpen}
                onClose={handleCommentFormClose}
                fullWidth={true}
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        borderRadius: "15px"
                    }
                }}
            >
                <CommentForm handleClose={handleCommentFormClose}/>
            </Dialog>
        </div>
    );
};

export default CommentsAside;