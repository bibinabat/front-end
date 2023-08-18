import {useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import Image from "next/image";
import Cookies from "js-cookie";

const ImageUploader = ({setIsImagesComplete, isCommentSend, newCommentId}) => {
    const fileInput = useRef(null)

    const [images, setImages] = useState([])
    const [count, setCount] = useState(0)
    const [dragActive, setDragActive] = useState(false)
    const [currentFileIndex, setCurrentFileIndex] = useState(0)

    const handleUploadSuccess = (index) => {
        setImages(prevImages =>
            prevImages.map((image, i) => i === index ? {...image, status: "uploaded"} : image)
        )
        setCurrentFileIndex((prevIndex) => prevIndex + 1)
    }

    const handleUploadError = (index) => {
        setImages(prevImages =>
            prevImages.map((image, i) => i === index ? {...image, status: "error"} : image)
        )
        setCurrentFileIndex((prevIndex) => prevIndex + 1)
    }

    const uploadImage = (index) => {
        const formData = new FormData()
        formData.append("image", images[index].image)
        formData.append("product_comment_id", newCommentId)

        images[index].status = "uploading"

        fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/comment/image/`, {
            method: "PUT",
            headers: {
                "Authorization": Cookies.get("Authorization")
            },
            body: formData,
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.messages && data.data.messages.success) {
                    handleUploadSuccess(index)
                } else {
                    handleUploadError(index)
                }
            })
            .catch(error => {
                console.log(error)
                handleUploadError(index)
            })
    }

    useEffect(() => {
        if (!isCommentSend) return;

        const isAllImagesUploaded = images.every(image => image.status === "uploaded");

        if (images.length) {
            if (currentFileIndex < images.length) {
                setIsImagesComplete(false);
                uploadImage(currentFileIndex);
            } else if (isAllImagesUploaded) {
                setIsImagesComplete(true);
            }
        } else {
            setIsImagesComplete(true);
        }
    }, [isCommentSend, currentFileIndex, images]);

    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleFileDrop = e => {
        e.preventDefault()
        setDragActive(false)

        const droppedFiles = e.dataTransfer.files

        for (let i = 0; i < droppedFiles.length; i++) {
            if (images.length + i >= 5) {
                toast.info('تنها 5 عکس میتوانید انتخاب کنید', {
                    icon: false,
                    position: "top-center"
                })
                break;
            }
            const file = droppedFiles[i]
            if (!file.type.startsWith('image/')) {
                toast.info('فقط فایل های عکس مجاز هستند', {
                    icon: false,
                    position: "top-center"
                })
                continue
            }
            if (file.size > 5 * 1024 * 1024) {
                toast.info('حداکثر حجم هر عکس 5 مگابایت میتواند باشد', {
                    icon: false,
                    position: "top-center"
                })
                continue
            }

            const render = new FileReader()
            render.onload = () => {
                setImages((prevState) => [
                    ...prevState,
                    {id: count + i, src: render.result, status: "pending", image: file}
                ])
            }
            render.readAsDataURL(file)
        }
        setCount(count + droppedFiles.length)
    }

    const handleFileSelect = (e) => {
        const selectedFiles = e.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
            if (images.length + i >= 5) {
                toast.info('تنها 5 عکس میتوانید انتخاب کنید', {
                    icon: false,
                    position: "top-center"
                })
                break;
            }
            const file = selectedFiles[i];
            if (!file.type.startsWith('image/')) {
                toast.info('فقط فایل های عکس مجاز هستند', {
                    icon: false,
                    position: "top-center"
                })
                continue
            }
            if (file.size > 5000000) {
                toast.info('حداکثر حجم هر عکس 5 مگابایت میتواند باشد', {
                    icon: false,
                    position: "top-center"
                })
                continue;
            }
            const reader = new FileReader();
            reader.onload = () => {
                setImages((prevState) => [
                    ...prevState,
                    {id: count + i, src: reader.result, status: "pending", image: file},
                ]);
            };
            reader.readAsDataURL(file);
        }
        setCount(count + selectedFiles.length);
    };

    const handleDelete = (id) => {
        setImages((prevState) => prevState.filter((image) => image.id !== id))
    }

    return (
        <>
            {
                images.length === 0 ? (
                    <div
                        onDrop={handleFileDrop}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onClick={() => fileInput.current.click()}
                        className="flex items-center justify-center py-8 flex-col bg-[#f5f5f5] rounded-xl gap-2 cursor-pointer mt-2"
                        style={dragActive ? {border: "3px dashed rgba(31,26,80,0.38"} : {}}
                    >
                        <input type="file" accept="image/*" onChange={handleFileSelect} multiple className="hidden"
                               ref={fileInput}/>
                        <div className="flex items-center text-[#B8B8B8] font-bold gap-2">
                            <span>انتخاب عکس</span>
                            <i className="fa-solid fa-image"></i>
                        </div>
                        <p className="text-[#8A8A8A] text-center hidden md:block text-sm font-[600]">کلیک کنید یا عکس
                            های خود را به اینجا
                            بکشید و رها
                            کنید.</p>
                    </div>
                ) : (
                    <div className="mt-2 flex flex-wrap w-full gap-5">
                        {
                            images.map(image => (
                                <div key={image.id} className="bg-gray-100 p-2 rounded-lg">
                                    <div className="relative h-[70px] w-[100px]">
                                        <Image src={image.src} alt="Preview" fill
                                               className="object-center object-cover pointer-events-none rounded"/>
                                    </div>
                                    <div className="mt-2">
                                        <div className="text-xs font-bold flex items-center gap-1">
                                            {
                                                image.status === "pending" ? (
                                                    <>
                                                        <i className="fa-duotone fa-spinner-third fa-spin text-gray-500"></i>
                                                        <span className="text-gray-500">در انتظار</span>
                                                    </>
                                                ) : image.status === "uploading" ? (
                                                    <>
                                                        <i className="fa-duotone fa-spinner-third fa-spin text-blue-500"></i>
                                                        <span className="text-gray-500">در حال بارگزاری</span>
                                                    </>
                                                ) : image.status === "uploaded" ? (
                                                    <>
                                                        <i className="fa-solid fa-circle-check text-[#46B715]"></i>
                                                        <span className="text-gray-500">بارگذاری شده</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fa-solid fa-circle-xmark text-red"></i>
                                                        <span className="text-gray-500">خطا</span>
                                                    </>
                                                )
                                            }
                                        </div>
                                        {image.status === "pending" && (
                                            <button
                                                onClick={() => handleDelete(image.id)}
                                                className="text-gray-400 text-xs font-bold flex items-center gap-1 w-full justify-center mt-2 rounded">
                                                <i className="fa-solid fa-trash"></i>
                                                <span>حذف</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))
                        }
                        {
                            images.length >= 5 ? null : (
                                <div
                                    onDrop={handleFileDrop}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onClick={() => fileInput.current.click()}
                                    className="flex items-center justify-center py-8 flex-col bg-[#f5f5f5] rounded-xl gap-2 cursor-pointer mt-2 text-[#B8B8B8] font-bold gap-2 w-[120px]"
                                    style={dragActive ? {border: "3px dashed rgba(31,26,80,0.38"} : {}}
                                >
                                    <input type="file" accept="image/*" onChange={handleFileSelect} multiple
                                           className="hidden"
                                           ref={fileInput}/>
                                    <i className="fa-solid fa-circle-plus "></i>
                                    <span className="text-sm">افزودن عکس</span>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </>
    )
};

export default ImageUploader;