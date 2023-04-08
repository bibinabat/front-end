const AdBar = () => {
    return (
        <div
            className="w-full bg-blue-dark p-2 px-10 flex items-center justify-center lg:justify-between text-white font-bold border-b border-slate-400">
            <span>خرید خاطره انگیز با بی بی نبات ...</span>
            <span className="hidden lg:inline">
                <span className="text-mustard">20% </span>
                تخفیف برای اولین خرید
            </span>
            <span className="hidden lg:inline">
                <span>09131598619 </span>
                <i className="fa-solid fa-phone"></i>
            </span>
        </div>
    );
};

export default AdBar;