import SingleProductType from "@/components/modules/SingleProductType";

const ProductTypes = ({handleClose}) => {
    return (
        <div className="p-3">
            <div className="w-full mb-3">
                <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                   onClick={handleClose}></i>
            </div>
            <div className="flex flex-col gap-3">
                <SingleProductType weight="1"/>
                <SingleProductType weight="3"/>
            </div>
        </div>
    );
};

export default ProductTypes;