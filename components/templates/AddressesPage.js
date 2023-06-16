import Link from "next/link";
import AddressCard from "@/components/modules/AddressCard";
import AddAddress from "@/components/modules/AddAddress";
import {Dialog} from "@mui/material";
import {useState} from "react";
import useWindowSize from "@/hooks/useWindowSize";

const AddressesPage = () => {
    const {width} = useWindowSize()

    const [isAddAddressOpen, setIsAddAddressOpen] = useState(false)

    const handleAddAddressOpen = () => {
        setIsAddAddressOpen(true)
    }

    const handleAddAddressClose = () => {
        setIsAddAddressOpen(false)
    }

    return (
        <div className="overflow-hidden rounded-3xl border-[1.5px] flex-1">
            <div className={`p-5 sm:p-10 rounded-3xl h-full overflow-auto`}>
                <div className="flex gap-3 md:gap-0 items-center mb-5">
                    <Link href="/profile">
                        <i className="fa-solid fa-circle-chevron-right text-2xl text-gray-300 md:hidden"></i>
                    </Link>
                    <h1 className="text-lg font-bold text-blue-dark">آدرس ها</h1>
                </div>
                <div
                    onClick={handleAddAddressOpen}
                    className="bg-[#EFEFEF] p-4 cursor-pointer transition hover:bg-[#E5E5E5] flex items-center justify-between rounded-lg mb-2">
                    <span className="font-bold text-blue-dark ">افزودن آدرس جدید</span>
                    <i className="fa-regular fa-circle-plus text-blue-dark text-2xl"></i>
                </div>
                <Dialog
                    open={isAddAddressOpen}
                    onClose={handleAddAddressClose}
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
                    <AddAddress handleClose={handleAddAddressClose}/>
                </Dialog>
                <div className="grid xl:grid-cols-2 gap-2">
                    <AddressCard/>
                    <AddressCard/>
                </div>
            </div>
        </div>
    );
};

export default AddressesPage;