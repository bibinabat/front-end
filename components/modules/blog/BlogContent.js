import {Rating} from "@mui/material";
import React from "react";
import Image from "next/image";

const BlogContent = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-blue-dark text-2xl font-bold">نبات چیست؟</h1>
                <span className="text-sm font-[700] text-gray-400">14 اسفند 1402</span>
                <Rating name="read-only" value={4} readOnly
                        icon={<i className="fa-solid fa-star text-base"></i>}
                        emptyIcon={<i className="fa-duotone fa-star text-base"></i>}
                        style={{
                            gap: "3px"
                        }}
                />
            </div>
            <div className="mt-5">
                <Image src="/testImages/khz3.jpg" alt="blogImage" width={500} height={500}/>
            </div>
        </div>
    );
};

export default BlogContent;