import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Image from "next/image";
import {Dialog} from "@mui/material";

const CommentVideo = ({src, name}) => {
    const router = useRouter()

    const [isPreviewOpen, setIsPreviewOpen] = useState(router.asPath.split("#")[1] === `${name}VideoPreview`)

    useEffect(() => {
        const onHashChange = () => setIsPreviewOpen(window.location.hash === `#${name}VideoPreview`)
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handlePreviewOpen = () => {
        window.location.hash = `#${name}VideoPreview`
    }

    const handlePreviewClose = () => {
        window.history.back()
    }

    return (
        <div
            onClick={handlePreviewOpen}
            className="w-16 h-16 rounded-lg overflow-hidden relative before:content-[''] before:bg-black before:opacity-50 before:w-full before:h-full before:block before:absolute cursor-pointer">
            <i className="fa-solid fa-play absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white"></i>
            <video controls={false} className="w-full h-full object-cover object-center">
                <source src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${src}`} type="video/mp4"/>
            </video>
            <Dialog
                open={isPreviewOpen}
                onClose={handlePreviewClose}
                PaperProps={{
                    sx: {
                        borderRadius: "15px",
                        padding: "20px"
                    }
                }}
            >
                <div className="w-full mb-4">
                    <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                       onClick={handlePreviewClose}></i>
                </div>
                <video controls width="500px" height="500px" className="rounded-xl">
                    <source src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${src}`} type="video/mp4"/>
                </video>
            </Dialog>
        </div>
    );
};

export default CommentVideo;