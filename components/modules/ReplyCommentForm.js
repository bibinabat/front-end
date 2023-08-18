import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useForm} from "react-hook-form";
import Cookies from "js-cookie";
import {toast} from "react-toastify";
import {months} from "@/public/months";
import useAuthState from "@/hooks/useAuth";

const ReplyCommentForm = ({commentData, commentId, productSlug}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        resetField
    } = useForm()

    const router = useRouter()
    const {isLoggedIn} = useAuthState()

    const [isReplyFormOpen, setIsReplyFormOpen] = useState(router.asPath.split("#")[1] === `${commentId}_reply`)
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        const onHashChange = () => setIsReplyFormOpen(window.location.hash === `#${commentId}_reply`)
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handleReplyFormOpen = () => {
        if (isLoggedIn) {
            window.location.hash = `#${commentId}_reply`
        } else {
            window.location.hash = "#login"
        }
    }

    const handleReplyFormClose = () => {
        resetField('replyText')
        window.history.back()
    }

    const handleReplySubmit = (data) => {
        setIsSending(true)

        const formData = {
            "product_slug": productSlug,
            "text": data.replyText,
            "rate": 5,
            "author_offer": 1,
            "reply_id": commentId
        }

        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/comment/`, {
            method: "PUT",
            body: JSON.stringify(formData),
            credentials: "include",
            headers: {
                "Authorization": Cookies.get("Authorization"),
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setIsSending(false)
                if (json.data && json.data.messages && json.data.messages.success) {
                    toast.info("کاربر گرامی نظر شما با موفقیت ثبت شد و پس از تایید توسط ادمین به نمایش در خواهد آمد")
                    handleReplyFormClose()
                    resetField("replyText")
                } else if (json.data && json.data.errors) {
                    if (json.data.errors.database) {
                        toast.info("شما 5 نظر ثبت کرده اید ولی هنوز توسط ادمین بررسی نشده اند. لطفا تا بررسی شدن حداقل یکی از نظرات قبلی خود منتظر بمانید")
                    } else if (json.data.errors.text) {
                        toast.info(json.data.errors.text[0])
                    } else {
                        toast.error("مشکلی در انجام عملیات رخ داده است")
                    }
                }
            })
            .catch(err => {
                setIsSending(false)
                console.log(err)
                toast.error("مشکلی در انجام عملیات رخ داده است")
            })
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
                            <p dangerouslySetInnerHTML={{__html: commentData.text}}></p>
                        </div>
                        <div className="text-sm font-[600] text-[#B8B8B8] flex items-center justify-end">
                            {
                                commentData.author.is_staff ? (
                                    <span className="text-cyan">
                                        ادمین بی بی نبات
                                    </span>
                                ) : (
                                    <span dir="ltr">
                                        {
                                            commentData.author.display_name ? (
                                                commentData.author.display_name
                                            ) : (
                                                "کاربر بی بی نبات"
                                            )
                                        }
                                    </span>
                                )
                            }
                            <span className="h-1 w-1 bg-[#B8B8B8] block rounded-full mx-2"></span>
                            <span className="flex gap-1">
                                <span>{commentData.created_date.split(" ")[0].split("/")[2]}</span>
                                <span>{months[+commentData.created_date.split(" ")[0].split("/")[1]]}</span>
                                <span>{commentData.created_date.split(" ")[0].split("/")[0]}</span>
                            </span>
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
                    {
                        isSending ? (
                            <button
                                className="w-full bg-blue-dark text-white font bold flex items-center justify-center rounded-lg h-10"
                                disabled>
                                <img src="/loading.svg" width={40}/>
                            </button>
                        ) : (
                            <button
                                className="w-full bg-blue-dark text-white font bold flex items-center justify-center rounded-lg h-10"
                                onClick={handleSubmit(handleReplySubmit)}>
                                ثبت نظر
                            </button>
                        )
                    }
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ReplyCommentForm;