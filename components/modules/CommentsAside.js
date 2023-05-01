import {Dialog, Rating} from "@mui/material";
import ProgressBar from "@/components/elements/ProgressBar";
import {useEffect, useState} from "react";
import CommentForm from "@/components/modules/CommentForm";
import {useRouter} from "next/router";

const CommentsAside = () => {
    const router = useRouter()

    const [isCommentFormOpen, setIsCommentFormOpen] = useState(router.asPath.split("#")[1] === "comment_form")

    useEffect(() => {
        const onHashChange = () => setIsCommentFormOpen(window.location.hash === "#comment_form")
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleCommentFormOpen = () => {
        window.location.hash = "#comment_form"
    }

    const handleCommentFormClose = () => {
        window.history.back()
    }

    return (
        <div className="bg-[#f5f5f5] rounded-2xl p-6 whitespace-nowrap sticky top-40">
            <div className="text-mustard font-bold text-center">
                <span className="text-4xl ml-1">4</span>
                <span>از 5</span>
            </div>
            <div className="flex justify-center">
                <Rating name="read-only" value={4} readOnly/>
            </div>
            <div className="text-center text-[#949494] font-[600] text-sm mt-2">
                (5 نظر)
            </div>
            <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
            <div>
                <span className="text-blue-dark font-bold">کیفیت محصول</span>
                <div className="flex items-center justify-between gap-3">
                    <ProgressBar number={4}/>
                    <span className="text-blue-dark font-[800]">4</span>
                </div>
            </div>
            <div className="mt-2">
                <span className="text-blue-dark font-bold">کیفیت بسته بندی</span>
                <div className="flex items-center justify-between gap-3">
                    <ProgressBar number={3}/>
                    <span className="text-blue-dark font-[800]">3</span>
                </div>
            </div>
            <hr className="my-4 border-[1.5px] border-[#DFDFDF]"/>
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