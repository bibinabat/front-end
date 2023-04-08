const HeaderCart = ({isOpen, setIsOpen}) => {
    return (
        <div onMouseEnter={() => setIsOpen(true)}
             onMouseLeave={() => setIsOpen(false)}
             className={`text-center p-5 absolute z-[9999] bg-white shadow-[0px_20px_58px_0px_rgba(0,0,0,0.2)] left-14 top-[86px] transition rounded-2xl ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <h1 className="font-bold text-blue-dark">سبد خرید</h1>
            <div className="p-10">
                سبد خرید شما خالی است.
            </div>
        </div>
    );
};

export default HeaderCart;