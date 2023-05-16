import {useEffect, useState} from "react";
import clsx from "clsx";
import {useRouter} from "next/router";
import {MenuItem, Select} from "@mui/material";
import PLPSelect from "@/components/elements/PLPSelect";

const Sorting = () => {
    const router = useRouter()

    const sortingOptions = [
        {key: "popular", value: "محبوبترین"},
        {key: "bestSell", value: "پرفروشترین"},
        {key: "newest", value: "جدیدترین"},
        {key: "expensive", value: "گران‌ترین"},
        {key: "cheapest", value: "ارزان‌ترین"},
    ];

    const [selectedSorting, setSelectedSorting] = useState(sortingOptions[0].key);
    const [query, setQuery] = useState('')

    const handleSort = (key) => {
        setSelectedSorting(key)
        setQuery(key)
    }

    useEffect(() => {
        const {sort} = router.query
        if (!sort) {
            setSelectedSorting('popular')
        }
        if (selectedSorting !== sort) {
            setSelectedSorting(sort)
        }
    }, [router.query])

    useEffect(() => {
        if (query !== '') {
            router.push({pathname: router.asPath.split('?')[0], query: {sort: query}})
        }
    }, [query])

    return (
        <div className="flex items-center gap-2 lg:gap-5 justify-end lg:justify-center">
            <div className="flex items-center gap-1 font-bold text-blue-dark text-sm lg:text-base">
                <i className="fa-solid fa-arrow-down-wide-short hidden lg:block"></i>
                <span>مرتب سازی بر اساس</span>
            </div>
            <ul className="tabs items-center font-[600] text-gray-400 relative hidden xl:flex">
                {sortingOptions.map((option) => (
                    <li
                        className={clsx(
                            "tabs-item cursor-pointer text-center min-w-[6rem] h-9 flex items-center justify-center transition duration-[0.25s]",
                            {
                                active: selectedSorting === option.key,
                                'text-blue-dark': selectedSorting === option.key,
                            }
                        )}
                        key={option.key}
                        onClick={() => handleSort(option.key)}
                    >
                        {option.value}
                    </li>
                ))}
                <span className="tab-item-animate bg-[#EDEDF1] rounded-lg"></span>
            </ul>
            <PLPSelect selected={selectedSorting} options={sortingOptions} handleSort={handleSort}/>
        </div>
    );
};

export default Sorting;
