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
                       value,
                       inputMode,
                       type,
                       autoComplete,
                       disabled
                   }) => {
    useEffect(() => {
        if (focused) {
            document.getElementById(id).focus()
        }
    }, [])

    return (
        <div className={`${disabled ? 'opacity-50' : ''}`}>
            {
                label ? (
                    <div className="mb-2">
                        <label htmlFor={name} className="text-sm text-blue-dark font-bold">
                            {label}
                        </label>
                    </div>
                ) : null
            }
            <div className="flex flex-col">
                <input
                    {...register(name, validationSchema)}
                    type={type}
                    placeholder={placeholder}
                    className={`${addClasses} rounded-lg text-sm font-[500] transition border-2 outline-none border-transparent focus:border-blue-dark bg-[#EEEEEE] ${disabled ? '' : ' hover:border-2 hover:border-[#BABABA]'}`}
                    id={id}
                    value={value}
                    inputMode={inputMode}
                    autoComplete={autoComplete}
                    disabled={disabled}
                />
                {
                    errors ?
                    errors[name] && (
                    <span className="text-xs pt-2 text-red">{errors[name].message}</span>
                ) : null
                }
            </div>
        </div>
    );
};

export default TextInput;