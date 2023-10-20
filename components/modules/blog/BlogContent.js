import {Rating} from "@mui/material";
import React from "react";

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
            <div>

            </div>
        </div>
    );
};

export default BlogContent;