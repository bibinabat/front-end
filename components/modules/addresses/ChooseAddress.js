import ChooseAddressCard from "@/components/modules/addresses/ChooseAddressCard";
import {useEffect, useState} from "react";
import {Dialog} from "@mui/material";
import {useRouter} from "next/router";
import AddAddress from "@/components/modules/addresses/AddAddress";
import useWindowSize from "@/hooks/useWindowSize";

const ChooseAddress = ({handleClose}) => {
    const {width} = useWindowSize()

    const [selectedValue, setSelectedValue] = useState("address1")

    const handleSelect = (e) => {
        setSelectedValue(e.target.value)
    }

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleSelect,
        value: item,
        inputProps: {'aria-label': item}
    })

    const [isAddAddressOpen, setIsAddAddressOpen] = useState(false)

    const handleAddAddressOpen = () => {
        setIsAddAddressOpen(true)
    }

    const handleAddAddressClose = () => {
        setIsAddAddressOpen(false)
    }

    return (
        <div className="p-5">
            <div className="w-full">
                <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                   onClick={handleClose}></i>
            </div>
            <div className="w-full flex justify-center font-bold text-lg text-blue-dark mb-8">
                <p>انتخاب آدرس</p>
            </div>
            <div
                onClick={handleAddAddressOpen}
                className="bg-[#EFEFEF] p-4 cursor-pointer transition hover:bg-[#E5E5E5] flex items-center justify-between rounded-lg mb-3">
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
            <div className="flex flex-col gap-3">
                <ChooseAddressCard selectedValue={selectedValue} setSelectedValue={setSelectedValue} name="address1"
                                   controlProps={controlProps}/>
                <ChooseAddressCard selectedValue={selectedValue} setSelectedValue={setSelectedValue} name="address2"
                                   controlProps={controlProps}/>
            </div>
        </div>
    );
};

export default ChooseAddress;