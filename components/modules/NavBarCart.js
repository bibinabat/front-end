const NavBarCart = () => {
    return (
        <div>
            <div className="mt-2 flex items-center justify-center flex-col border-b border-blue-dark">
                <hr className="border-[3px] border-[#939393] w-8 rounded-full"/>
                <span className="font-bold mt-3 mb-2 text-blue-dark">سبد خرید</span>
            </div>
            <div className="flex justify-center items-center py-20">
                سبد خرید شما خالی است.
            </div>
        </div>
    );
};

export default NavBarCart;