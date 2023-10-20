import Image from "next/image";
import {Dialog} from "@mui/material";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const CommentImage = ({src, name}) => {
    const router = useRouter()

    const [isPreviewOpen, setIsPreviewOpen] = useState(router.asPath.split("#")[1] === `${name}Preview`)

    useEffect(() => {
        const onHashChange = () => setIsPreviewOpen(window.location.hash === `#${name}Preview`)
        window.addEventListener("hashchange", onHashChange)
        return () => window.removeEventListener("hashchange", onHashChange)
    }, [])

    const handlePreviewOpen = () => {
        window.location.hash = `#${name}Preview`
    }

    const handlePreviewClose = () => {
        window.history.back()
    }

    return (
        <>
            <div className="h-16 w-16 relative rounded-lg overflow-hidden cursor-pointer" onClick={handlePreviewOpen}>
                <Image src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${src}`} alt="product name" fill
                       className="object-center object-cover pointer-events-none"/>
            </div>
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
                <Image src={`${process.env.NEXT_PUBLIC_API_DOMAIN}${src}`} alt="product name" width={500} height={500}
                       className="rounded-lg"/>
            </Dialog>
        </>
    );
};

export default CommentImage;