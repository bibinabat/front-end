import {DialogActions, DialogContent, DialogTitle, Radio, Rating, Tooltip} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import ImageUploader from "@/components/modules/ImageUploader";
import VideoUploader from "@/components/modules/VideoUploader";
import {useForm} from "react-hook-form";

const CommentForm = ({handleClose}) => {
    const [rate, setRate] = useState(1)
    const [rateHover, setRateHover] = useState(-1)
    const [commentText, setCommentText] = useState("")
    const [selectedValue, setSelectedValue] = useState('suggested');

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm()

    // const textAreaRef = useRef(null)
    //
    // const resizeTextArea = () => {
    //     textAreaRef.current.style.height = "auto"
    //     textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    // }
    //
    // useEffect(resizeTextArea, [commentText])
    //
    // const onChange = e => {
    //     setCommentText(e.target.value)
    // }

    const handleSuggestion = (e) => {
        setSelectedValue(e.target.value)
    }

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleSuggestion,
        value: item,
        inputProps: {'aria-label': item}
    })

    const handleFormSubmit = () => {
        handleClose()
    }

    return (
        <>
            <DialogTitle>
                <div className="w-full flex items-center justify-between bg-white">
                    <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                       onClick={handleClose}></i>
                    <div className="w-full flex justify-center font-bold text-lg">
                        <p>نظر جدید</p>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent dividers={true}>
                <div className="flex flex-col items-center gap-3 mb-5">
                    <span className="font-bold text-[#4D4D4D]">امتیاز دهید!</span>
                    <Rating
                        value={rate}
                        onChange={(event, newValue) => {
                            setRate(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setRateHover(newHover);
                        }}
                        icon={<i className="fa-solid fa-star"></i>}
                        emptyIcon={<i className="fa-duotone fa-star"></i>}
                        style={{
                            gap: "5px"
                        }}
                    />
                    <div className="text-mustard font-bold text-center">
                        <span className="text-4xl ml-1">{rateHover !== -1 ? rateHover : rate !== null ? rate : 0}</span>
                        <span>از 5</span>
                    </div>
                </div>
                <label htmlFor="commentText" className="font-bold text-[#4D4D4D]">متن نظر*</label>
                <textarea id="commentText" rows="3"
                          className="w-full bg-[#EEEEEE] mt-2 rounded-xl p-3 font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark"
                    // ref={textAreaRef} value={commentText} onChange={onChange}
                          placeholder="متن نظر خود را وارد کنید..."
                          {...register('commentText', {
                              required: 'وارد کردن متن نظر الزامی میباشد.',
                              maxLength: {
                                  value: 100,
                                  message: 'متن نظر باید حداکثر 200 حرف باشد'
                              }
                          })}
                ></textarea>
                {
                    errors.commentText && (
                        <div className="text-xs text-red font-[600]">{errors.commentText.message}</div>
                    )
                }
                <div className="mt-5">
                    <span className="font-bold text-[#4D4D4D]">خرید این محصول را:*</span>
                    <div
                        className="bg-[#f5f5f5] w-full py-1 px-2 mt-2 rounded-lg flex gap-3 justify-around flex-wrap">
                        <div>
                            <label htmlFor="suggested" className="cursor-pointer text-[#46B715] font-bold">
                                پیشنهاد می‌کنم
                            </label>
                            <Radio {...controlProps("suggested")} id="suggested"
                                   sx={{
                                       color: '#46B715',
                                       '&.Mui-checked': {
                                           color: '#46B715'
                                       }
                                   }}
                            />
                        </div>
                        <div>
                            <label htmlFor="notSure" className="cursor-pointer text-[#FFA200] font-bold">مطمئن
                                نیستم</label>
                            <Radio {...controlProps("notSure")} id="notSure"
                                   sx={{
                                       color: '#FFA200',
                                       '&.Mui-checked': {
                                           color: '#FFA200'
                                       }
                                   }}
                            />
                        </div>
                        <div>
                            <label htmlFor="notSuggested" className="cursor-pointer text-red font-bold">پیشنهاد
                                نمی‌کنم</label>
                            <Radio {...controlProps("notSuggested")} id="notSuggested"
                                   sx={{
                                       color: '#FF5050',
                                       '&.Mui-checked': {
                                           color: '#FF5050'
                                       }
                                   }}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="font-bold text-[#4D4D4D] flex items-center gap-1">
                        <span>عکس یا ویدئو از محصول</span>
                        <Tooltip title={
                            <ul className="text-sm font-light">
                                <li className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                                    حداکثر 5 عکس با حجم 5 مگابایت
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                                    حداکثر 2 ویدئو با حجم 50 مگابایت
                                </li>
                            </ul>
                        } placement="top" arrow>
                            <i className="fa-regular fa-circle-info text-lg cursor-pointer"></i>
                        </Tooltip>
                    </div>
                    <ImageUploader/>
                    <VideoUploader/>
                </div>
            </DialogContent>
            <DialogActions>
                <button className="w-full bg-blue-dark text-white font bold py-2 rounded-xl"
                        onClick={handleSubmit(handleFormSubmit)}>
                    ثبت نظر
                </button>
            </DialogActions>
        </>
    );
};

export default CommentForm;