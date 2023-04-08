const TextInput = ({placeholder, addClasses, name, label, register, errors, required, type, validationSchema}) => {
    return (
        <div className="flex flex-col">
            <input
                {...register(name, validationSchema)}
                type="text"
                placeholder={placeholder}
                className={`${addClasses} bg-[#EEEEEE] rounded-lg text-sm font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus:border-blue-dark`}/>
            {errors[name] && (
                <span className="text-xs pt-2 text-red">{errors[name].message}</span>
                )}
        </div>
    );
};

export default TextInput;