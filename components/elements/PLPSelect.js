import {useEffect, useRef, useState} from 'react';
import clsx from "clsx";
import {useSpring, animated} from "@react-spring/web";

const PlpSelect = ({selected, options, handleSort}) => {
    const ref = useRef(null)

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])

    const changeHandler = (key) => {
        handleSort(key)
        handleToggle()
    }

    const openAnimation = useSpring({
        from: {
            top: '1.75rem',
            opacity: '0',
            display: 'block'
        },
        to: [
            {
                top: isOpen ? '2.75rem' : '1.75rem',
                opacity: isOpen ? '1' : '0',
                display: 'block'
            },
            {
                display: isOpen ? 'block' : 'none'
            }
        ]
    })

    return (
        <div className="text-blue-dark relative text-sm xl:hidden">
            <div onClick={handleToggle}
                 className="cursor-pointer bg-[#EDEDF1] h-[36px] w-28 flex items-center justify-center font-[600] rounded-lg">
                {
                    options.map(option => {
                        if (option.key === selected) {
                            return (option.value)
                        }
                    })
                }
                <i className="fa-solid fa-chevron-down text-xs mr-1"></i>
            </div>
            <animated.ul ref={ref} style={openAnimation}
                         className="z-50 absolute flex flex-col items-center bg-white w-full rounded-lg shadow-[0px_0px_56px_5px_rgba(0,0,0,0.1)] top-11 overflow-hidden">
                {
                    options.map(option => (
                        <li key={option.key} className={clsx(
                            "cursor-pointer h-8 w-full flex items-center justify-center",
                            {
                                'bg-[#EDEDF1]': selected === option.key
                            }
                        )} onClick={() => changeHandler(option.key)}>{option.value}</li>
                    ))
                }
            </animated.ul>
        </div>
    );
};

export default PlpSelect;