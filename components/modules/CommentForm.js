import {DialogContent, DialogTitle, Rating} from "@mui/material";
import {useState} from "react";

const CommentForm = ({handleClose}) => {
    const [rate, setRate] = useState(1)
    const [rateHover, setRateHover] = useState(-1)

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
                    <span>امتیاز دهید!</span>
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
                <form>
                    <label htmlFor="commentText" className="font-bold text-[#4D4D4D]">متن نظر*</label>
                    <div>
                        {/*<textarea id="commentText" rows="5" className="w-full bg-[#EEEEEE] mt-2 rounded-xl"*/}
                        {/*          onInput={this.parentNode.dataset.replicatedValue = this.value}></textarea>*/}
                    </div>
                </form>
            </DialogContent>
        </>
    );
};

export default CommentForm;