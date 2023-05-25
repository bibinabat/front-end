import {useCallback, useEffect, useRef, useState} from "react";
import {useSpring, animated} from "@react-spring/web";
import {Controller} from "react-hook-form";

const CheckoutSelect = ({
                            label,
                            options,
                            name,
                            placeholder,
                            errors,
                            validationSchema,
                            control,
                            query,
                            setQuery,
                            handleOptionClick,
                            handleSelectKeyUp
                        }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [results, setResults] = useState([])
    const [focusedIndex, setFocusedIndex] = useState(-1)
    const resultContainer = useRef(null)
    const inputRef = useRef(null)

    const openAnimation = useSpring({
        from: {
            top: '2.75rem',
            opacity: '0',
            display: 'block'
        },
        to: [
            {
                top: isOpen ? '4.5rem' : '2.75rem',
                opacity: isOpen ? '1' : '0',
                display: 'block'
            },
            {
                display: isOpen ? 'block' : 'none'
            }
        ]
    })

    useEffect(() => {
        if (options) {
            setResults(
                options.filter(option => {
                    if (query === '') {
                        return option
                    } else if (option.name.includes(query)) {
                        return option
                    }
                })
            )
        }
    }, [options, query])

    useEffect(() => {
        if (!resultContainer.current) return

        resultContainer.current.scrollIntoView({
            block: "nearest"
        })
    }, [focusedIndex])

    const handleOpen = (open) => {
        setIsOpen(open)
    }

    const handleBtnOpen = () => {
        handleOpen(true)
        inputRef.current.focus()
    }

    const resetSearchComplete = useCallback((e) => {
        setFocusedIndex(-1)
        inputRef.current.blur()
        let form = e.target.form;
        let index = Array.prototype.indexOf.call(form, e.target);
        form.elements[index + 2].focus();
    }, [])

    const handleKeyDown = (e) => {
        const {key} = e
        let nextIndexCount = 0

        if (key === "ArrowDown") {
            nextIndexCount = (focusedIndex + 1) % results.length
        }

        if (key === "ArrowUp") {
            nextIndexCount = (focusedIndex + results.length - 1) % results.length
        }

        if (key === "Escape") {
            handleOpen(false)
            inputRef.current.blur()
        }

        if (key === "Enter") {
            e.preventDefault()
            const selectedItem = results[focusedIndex]
            if (!selectedItem) return resetSearchComplete(e)
            handleOptionClick(selectedItem.name)
            resetSearchComplete(e)
        }

        setFocusedIndex(nextIndexCount)
    }

    return (
        <div className="relative">
            <div>
                <label htmlFor={name} className="text-sm text-blue-dark font-bold">{label}</label>
                <div
                    tabIndex={1}
                    onKeyDown={handleKeyDown}
                    className="flex items-center justify-between bg-[#EEEEEE] mt-2 rounded-lg text-sm rounded-lg font-[500] transition border-2 outline-none border-transparent hover:border-2 hover:border-[#BABABA] focus-within:border-blue-dark">
                    <Controller
                        name={name}
                        control={control}
                        rules={validationSchema}
                        render={({field}) => (
                            <input
                                {...field}
                                type="text"
                                placeholder={placeholder}
                                autoComplete="new-password"
                                className="flex-1 w-[20px] bg-transparent outline-none px-3 py-2"
                                ref={(ref) => {
                                    inputRef.current = ref
                                }}
                                onFocus={() => handleOpen(true)}
                                onBlur={(e) => {
                                    setTimeout(() => {
                                        if (e.relatedTarget && e.relatedTarget.id === "closeBtn") {
                                            return
                                        }
                                        field.onBlur(e);
                                        handleOpen(false);
                                    }, 400)
                                }}
                                onChange={(e) => {
                                    field.onChange(e)
                                    setQuery(e.target.value)
                                }}
                                onKeyUp={handleSelectKeyUp}
                            />
                        )}
                    />
                    <div className="flex items-center pl-1">
                        {
                            isOpen ? (
                                <button type="button" tabIndex="-1" id="closeBtn">
                                    <i
                                        className="fa-solid rotate-180 fa-caret-down text-gray-700 hover:bg-gray-300 mr-0 rounded-full cursor-pointer flex items-center justify-center w-7 h-7"
                                        onClick={() => handleOpen(false)}></i>
                                </button>
                            ) : (
                                <i className="fa-solid fa-caret-down text-gray-700 hover:bg-gray-300 mr-0 rounded-full cursor-pointer flex items-center justify-center w-7 h-7"
                                   onClick={handleBtnOpen}></i>
                            )
                        }
                    </div>
                </div>
            </div>
            {errors[name] && (
                <span className="text-xs mt-2 text-red">{errors[name].message}</span>
            )}
            <animated.div
                style={openAnimation}
                className="absolute shadow-[0px_10px_71px_17px_rgba(0,0,0,0.1)] overflow-hidden z-50 bg-white w-full rounded-lg text-sm font-[600] text-[#494949] flex flex-col gap-3 mt-3">
                <ul className="overflow-auto max-h-48">
                    {
                        options ?
                            results.map((option, index) => (
                                <li
                                    key={option.id}
                                    ref={index === focusedIndex ? resultContainer : null}
                                    onClick={() => handleOptionClick(option.name)}
                                    className="py-2 cursor-pointer pr-5 hover:bg-gray-200"
                                    style={{
                                        background: index === focusedIndex ? "rgb(229 231 235)" : ""
                                    }}>
                                    {option.name}
                                </li>
                            )) : (
                                <li className="py-2 pr-5">ابتدا استان خود را انتخاب کنید</li>
                            )
                    }
                    {
                        options ?
                            options.filter(option => {
                                if (query === "") {
                                    return false
                                } else {
                                    return !option.name.includes(query)
                                }
                            }).length === options.length && query !== "" && (
                                <li className="py-2 pr-5">
                                    پیدا نشد
                                </li>
                            ) : null
                    }
                </ul>
            </animated.div>
        </div>
    )
};

export default CheckoutSelect;