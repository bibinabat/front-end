import {useEffect, useRef} from "react";

const TextInput = ({
                       placeholder,
                       addClasses,
                       name,
                       label,
                       register,
                       errors,
                       required,
                       validationSchema,
                       focused = false,
                       id,
                       value
                   }) => {
    useEffect(() => {
        if (focused) {
            document.getElementById(id).focus()
        }
    }, [])

    return (
        <>
            {
                label ? (
                    <div className="mb-3">
                        <label htmlFor={name} className="text-blue-dark font-[500]">
                            {label}
                        </label>
                    </div>
                ) : null
            }
            <div className="flex flex-col">
                <input
                    {...register(name, validationSchema)}
                    type="text"
                    placeholder={placeholder}
                    className={`${addClasses} bg-[#EEEEEE] rounded-lg text-sm font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark`}
                    id={id}
                    value={value}
                />
                {errors[name] && (
                    <span className="text-xs pt-2 text-red">{errors[name].message}</span>
                )}
            </div>
        </>
    );
};

export default TextInput;