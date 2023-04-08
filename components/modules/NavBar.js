const NavBar = () => {
    return (
        <nav>
             <div className="grid items-center justify-around grid-cols-4 bottom-0 right-0 fixed z-[9999] bg-white w-full text-[#9F9F9F] py-3 shadow-[0px_-20px_62px_9px_rgba(0,0,0,0.1)] lg:hidden">
                 <div className="flex flex-col items-center justify-center gap-1">
                     <i className="fa-solid fa-house text-lg"></i>
                     <span className="text-sm">صفحه اصلی</span>
                 </div>
                 <div className="flex flex-col items-center justify-center gap-1">
                     <i className="fa-solid fa-magnifying-glass text-lg"></i>
                     <span className="text-sm">جست و جو</span>
                 </div>
                 <div className="flex flex-col items-center justify-center gap-1">
                     <i className="fa-solid fa-cart-shopping text-lg"></i>
                     <span className="text-sm">سبد خرید</span>
                 </div>
                 <div className="flex flex-col items-center justify-center gap-1">
                     <i className="fa-solid fa-user text-lg"></i>
                     <span className="text-sm">ورود</span>
                 </div>
             </div>
        </nav>
    );
};

export default NavBar;