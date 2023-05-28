import CustomerInfoCard from "@/components/modules/CustomerInfoCard";
import {useForm} from "react-hook-form";

const CustomerInfo = () => {
    const {
        register,
        formState: {
            errors
        }
    } = useForm()

    return (
        <div>
            <CustomerInfoCard/>
            <div className="text-sm mt-3 px-20">
                <label htmlFor="description" className="font-bold text-blue-dark">توضیحات</label>
                <textarea id="description" rows="5"
                          placeholder="اگر توضیحی دارید اینجا بنویسید..."
                          className="w-full bg-[#EEEEEE] mt-2 rounded-xl p-3 font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark"
                          {...register('description', {
                              maxLength: {
                                  value: 200,
                                  message: 'متن توضیحات باید حداکثر 200 حرف باشد'
                              }
                          })}
                ></textarea>
                {errors.description && (
                    <div className="text-xs text-red font-[600]">{errors.description.message}</div>
                )}
            </div>
        </div>
    );
};

export default CustomerInfo;