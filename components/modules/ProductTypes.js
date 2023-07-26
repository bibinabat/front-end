import SingleProductType from "@/components/modules/SingleProductType";

const ProductTypes = ({handleClose, weights}) => {
    return (
        <div className="p-3">
            <div className="w-full mb-3">
                <i className="fa-solid fa-circle-xmark text-2xl text-[#D9D9D9] cursor-pointer"
                   onClick={handleClose}></i>
            </div>
            <div className="flex flex-col gap-3">
                {
                    weights.map(weight => {
                        if (weight.exists) {
                            return (<SingleProductType key={weight.id} weight={weight}/>)
                        }
                    })
                }
            </div>
        </div>
    );
};

export default ProductTypes;