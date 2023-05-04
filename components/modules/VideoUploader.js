import {useRef, useState} from "react";
import {toast} from "react-toastify";
import Image from "next/image";

const VideoUploader = () => {
    const fileInput = useRef(null)

    const [videos, setVideos] = useState([])
    const [count, setCount] = useState(0)
    const [dragActive, setDragActive] = useState(false)

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
            if (videos.length + i >= 2) {
                toast.info('تنها 2 ویدئو میتوانید انتخاب کنید', {
                    icon: false,
                    position: "top-center"
                })
                break;
            }
            const file = droppedFiles[i]
            const validTypes = ['video/quicktime', 'video/avi', 'video/mp4', 'video/webm', 'video/x-matroska']
            if (validTypes.indexOf(file.type) === -1) {
                toast.info('فقط فایل های ویدیو با فرمت های (mov, avi, mp4, webm, mkv) مجاز هستند', {
                    icon: false,
                    position: "top-center"
                })
                continue
            }
            if (file.size > 50 * 1024 * 1024) {
                toast.info('حداکثر حجم هر ویدئو 50 مگابایت میتواند باشد', {
                    icon: false,
                    position: "top-center"
                })
                continue
            }

            const render = new FileReader()
            render.onload = () => {
                setVideos((prevState) => [
                    ...prevState,
                    {id: count + i, src: render.result}
                ])
            }
            render.readAsDataURL(file)
        }
        setCount(count + droppedFiles.length)
    }

    const handleFileSelect = (e) => {
        const selectedFiles = e.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
            if (videos.length + i >= 2) {
                toast.info('تنها 2 ویدئو میتوانید انتخاب کنید', {
                    icon: false,
                    position: "top-center"
                })
                break;
            }
            const file = selectedFiles[i];
            const validTypes = ['video/quicktime', 'video/avi', 'video/mp4', 'video/webm', 'video/x-matroska']
            if (validTypes.indexOf(file.type) === -1) {
                toast.info('فقط فایل های ویدیو با فرمت های (mov, avi, mp4, webm, mkv) مجاز هستند', {
                    icon: false,
                    position: "top-center"
                })
                continue
            }
            if (file.size > 50 * 1024 * 1024) {
                toast.info('حداکثر حجم هر ویدئو 50 مگابایت میتواند باشد', {
                    icon: false,
                    position: "top-center"
                })
                continue;
            }
            const reader = new FileReader();
            reader.onload = () => {
                setVideos((prevState) => [
                    ...prevState,
                    {id: count + i, src: reader.result},
                ]);
            };
            reader.readAsDataURL(file);
        }
        setCount(count + selectedFiles.length);
    };

    const handleDelete = (id) => {
        setVideos((prevState) => prevState.filter((video) => video.id !== id))
    }

    return (
        <>
            {
                !videos.length ? (
                    <div
                        onDrop={handleFileDrop}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onClick={() => fileInput.current.click()}
                        className="flex items-center justify-center py-8 flex-col bg-[#f5f5f5] rounded-xl gap-2 cursor-pointer mt-2"
                        style={dragActive ? {border: "3px dashed rgba(31,26,80,0.38"} : {}}
                    >
                        <input type="file" accept="video/mp4, video/avi, video/quicktime, video/webm, video/x-matroska"
                               onChange={handleFileSelect}
                               multiple
                               className="hidden"
                               ref={fileInput}/>
                        <div className="flex items-center text-[#B8B8B8] font-bold gap-2">
                            <span>انتخاب ویدئو</span>
                            <i className="fa-solid fa-video"></i>
                        </div>
                        <p className="text-[#8A8A8A]">کلیک کنید یا ویدئو های خود را به اینجا بکشید و رها کنید.</p>
                    </div>
                ) : (
                    <div className="mt-2 flex flex-wrap w-full gap-5">
                        {
                            videos.map(video => (
                                <div key={video.id} className="bg-gray-100 p-2 rounded-lg">
                                    <div className="relative h-[70px] w-[100px] overflow-hidden rounded-lg">
                                        <video width="100" height="70"
                                               className="rounded-lg">
                                            <source src={video.src}/>
                                        </video>
                                    </div>
                                    <div className="mt-2">
                                        <div className="text-xs font-bold flex items-center gap-1">
                                            <i className="fa-solid fa-circle-check text-[#46B715]"></i>
                                            <span className="text-gray-500">بارگذاری شده</span>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(video.id)}
                                            className="text-gray-400 text-xs font-bold flex items-center gap-1 w-full justify-center mt-2 rounded">
                                            <i className="fa-solid fa-trash"></i>
                                            <span>حذف</span>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            videos.length >= 2 ? null : (
                                <div
                                    onDrop={handleFileDrop}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onClick={() => fileInput.current.click()}
                                    className="flex items-center justify-center py-8 flex-col bg-[#f5f5f5] rounded-xl gap-2 cursor-pointer mt-2 text-[#B8B8B8] font-bold gap-2 w-[120px]"
                                    style={dragActive ? {border: "3px dashed rgba(31,26,80,0.38"} : {}}
                                >
                                    <input type="file"
                                           accept="video/mp4, video/avi, video/quicktime, video/webm, video/x-matroska"
                                           onChange={handleFileSelect} multiple
                                           className="hidden"
                                           ref={fileInput}/>
                                    <i className="fa-solid fa-circle-plus "></i>
                                    <span className="text-sm">افزودن ویدنو</span>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </>
    )
};

export default VideoUploader;