import {animated, useSpring} from "@react-spring/web";
import {Dialog} from "@mui/material";
import EditAddress from "@/components/modules/addresses/EditAddress";
import {useEffect, useRef, useState} from "react";
import useWindowSize from "@/hooks/useWindowSize";

const AddressCard = () => {
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuRef])

    const [isMenuOpen, setIMenuOpen] = useState(false)

    const handleToggle = (e) => {
        e.stopPropagation()
        setIMenuOpen(!isMenuOpen)
    }

    const openAnimation = useSpring({
        from: {
            top: '-1.75rem',
            opacity: '0',
            display: 'block'
        },
        to: [
            {
                top: isMenuOpen ? '0' : '-1.75rem',
                opacity: isMenuOpen ? '1' : '0',
                display: 'block'
            },
            {
                display: isMenuOpen ? 'block' : 'none'
            }
        ]
    })

    const {width} = useWindowSize()

    const [isEditAddressOpen, setIsEditAddressOpen] = useState(false)

    const handleEditAddressOpen = () => {
        setIsEditAddressOpen(true)
    }

    const handleEditAddressClose = () => {
        setIsEditAddressOpen(false)
    }

    return (
        <div
            className={`bg-[#EFEFEF] rounded-lg transition`}>
            <div className="flex justify-between pb-3 pr-5">
                <div className="flex flex-col gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 pt-3 max-w-sm">
                        <i className="fa-solid fa-location-dot text-xl text-gray-400"></i>
                        <p className="font-[500] text-gray-600 text-justify text-sm">بلوار فردوسی، نرسیده
                            به م. امام
                            موسی صدر، خ.
                            نگارستان،
                            بن.
                            نگارستان7، اولین خانه سمت چپ</p>
                    </div>
                    <div className="flex flex-wrap flex-col sm:flex-row font-[600] gap-3 sm:gap-x-10 text-sm">
                        <div>
                            <span className="text-gray-400 ml-2">کد پستی:</span>
                            <span className="text-gray-600">8915164576</span>
                        </div>
                        <div>
                            <span className="text-gray-400 ml-2">گیرنده:</span>
                            <span className="text-gray-600">امیرمحمد خلیلی میبدی</span>
                        </div>
                        <div>
                            <span className="text-gray-400 ml-2">شماره موبایل:</span>
                            <span className="text-gray-600">09134423596</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end relative mt-1">
                    <animated.div
                        ref={menuRef}
                        style={openAnimation}
                        className="absolute text-sm bg-white rounded shadow-[0px_5px_10px_5px_rgba(0,0,0,0.1)] overflow-hidden">
                        <div
                            onClick={handleEditAddressOpen}
                            className="flex items-center gap-1.5 text-blue-dark font-[500] px-5 py-1 cursor-pointer transition hover:bg-gray-100 border-b-[1.3px] border-gray-400">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <span>ویرایش</span>
                        </div>
                        <Dialog
                            open={isEditAddressOpen}
                            onClose={handleEditAddressClose}
                            fullWidth={true}
                            fullScreen={width < 640 ? true : false}
                            maxWidth="md"
                            PaperProps={{
                                sx: {
                                    borderRadius: "15px"
                                }
                            }}
                            scroll="body"
                        >
                            <EditAddress handleClose={handleEditAddressClose}/>
                        </Dialog>
                        <div
                            className="flex items-center justify-center gap-1.5 text-red font-[500] px-5 py-1 cursor-pointer transition hover:bg-gray-100">
                            <i className="fa-solid fa-trash"></i>
                            <span>حذف</span>
                        </div>
                    </animated.div>
                    <i className="fa-solid fa-ellipsis-vertical text-gray-400 text-2xl rounded-full cursor-pointer w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300"
                       onClick={handleToggle}></i>
                </div>
            </div>
        </div>
    );
};

export default AddressCard;