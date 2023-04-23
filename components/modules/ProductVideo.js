import Image from "next/image";

const ProductVideo = () => {
    return (
        <div className="mt-5">
            <div
                className="bg-[#D2EFED] text-blue-dark flex gap-2 items-center px-5 py-2 rounded relative overflow-hidden mb-3">
                <i className="fa-regular fa-play text-lg"></i>
                <span className="text-lg font-[600]">ویدئو</span>
                <Image src="/images/cyan-line.png" alt="darkblue line" fill
                       className="opacity-20 object-center object-cover pointer-events-none"/>
            </div>
            <div className="bg-[#f5f5f5] px-5 lg:px-20 xl:px-44 py-5 rounded-3xl overflow-hidden">
                <video controls className="rounded-3xl">
                    <source src="/testImages/test-video.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    );
};

export default ProductVideo;