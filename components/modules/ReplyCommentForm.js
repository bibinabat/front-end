import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useForm} from "react-hook-form";

const ReplyCommentForm = ({text, commentId}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        resetField
    } = useForm()

    const router = useRouter()

    const [isReplyFormOpen, setIsReplyFormOpen] = useState(router.asPath.split("#")[1] === `${commentId}_reply`)

    useEffect(() => {
        const onHashChange = () => setIsReplyFormOpen(window.location.hash === `#${commentId}_reply`)
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleReplyFormOpen = () => {
        window.location.hash = `#${commentId}_reply`
    }

    const handleReplyFormClose = () => {
        resetField('replyText')
        window.history.back()
    }

    const handleReplySubmit = () => {
        resetField('replyText')
        handleReplyFormClose()
    }

    return (
        <>
            <button
                onClick={handleReplyFormOpen}
                className="px-3 py-2 bg-[#CECDD7] text-blue-dark rounded-full flex items-center text-xs gap-1 font-bold">
                <i className="fa-solid fa-reply"></i>
                <span>پاسخ</span>
            </button>
            <Dialog
                open={isReplyFormOpen}
                onClose={handleReplyFormClose}
                fullWidth={true}
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        borderRadius: "15px"
                    }
                }}
            >
                <DialogTitle>
                    <div className="w-full flex items-center justify-between bg-white">
                        <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                           onClick={handleReplyFormClose}></i>
                        <div className="w-full flex justify-center font-bold text-lg">
                            <p>پاسخ</p>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <div className="bg-[#f5f5f5] rounded-xl px-4 py-3 mb-5">
                        <div className="text-sm text-[#2D2D2D]">
                            <p dangerouslySetInnerHTML={{__html: text}}></p>
                        </div>
                        <div className="text-sm font-[600] text-[#B8B8B8] flex items-center justify-end">
                            <span>کاربر بی بی نبات</span>
                            <span className="h-1 w-1 bg-[#B8B8B8] block rounded-full mx-2"></span>
                            <span>14 اسفند 1401</span>
                        </div>
                    </div>
                    <label htmlFor="replyText" className="font-bold text-[#4D4D4D]">متن پاسخ*</label>
                    <textarea id="replyText" rows="3"
                              className="w-full bg-[#EEEEEE] mt-2 rounded-xl p-3 font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark"
                        //  value={commentText} onChange={onChange}
                              placeholder="متن نظر خود را وارد کنید..."
                              {...register('replyText', {
                                  required: 'وارد کردن متن پاسخ الزامی میباشد.',
                                  maxLength: {
                                      value: 100,
                                      message: 'متن پاسخ باید حداکثر 200 حرف باشد'
                                  }
                              })}
                    ></textarea>
                    {
                        errors.replyText && (
                            <div className="text-xs text-red font-[600]">{errors.replyText.message}</div>
                        )
                    }
                </DialogContent>
                <DialogActions>
                    <button className="w-full bg-blue-dark text-white font bold py-2 rounded-xl"
                            onClick={handleSubmit(handleReplySubmit)}>
                        ثبت نظر
                    </button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ReplyCommentForm;