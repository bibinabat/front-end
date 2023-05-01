const ProgressBar = ({number}) => {
    const colors = {
        1: "red",
        2: "red",
        3: "#FFA200",
        4: "#57D91F",
        5: "#13A89E",
        0: "transparent"
    }

    const color = colors[number] || ""

    return (
        <div className="bg-[#DFDFDF] w-full h-2 rounded-full">
            <div className={`h-full rounded-full transition`}
                 style={{width: `${number * 20}%`, backgroundColor: color}}></div>
        </div>
    );
};

export default ProgressBar;