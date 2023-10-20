const Notification = () => {
    return (
        <div className="bg-white rounded-lg p-3 flex flex-col md:flex-row gap-3 justify-between items-center">
            <div className="flex gap-2 items-center">
                <i className="fa-solid fa-circle-exclamation text-mustard bg-blue-dark min-w-[32px] h-8 flex items-center justify-center rounded-lg"></i>
                <p className="text-blue-dark font-bold text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ و با
                    استفاده از طراحان گرافیک است.</p>
            </div>
            <span className="text-sm text-[#AAAAAA] font-bold whitespace-nowrap">5 اسفند 1401</span>
        </div>
    );
};

export default Notification;