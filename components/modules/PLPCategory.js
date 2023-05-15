import PLPAccordion from "@/components/elements/PLPAccordion";

const PlpCategory = () => {
    return (
        <div className="bg-[#f5f5f5] w-fit rounded-xl p-4 w-full">
            <span className="font-bold text-blue-dark">دسته بندی</span>
            <div className="flex flex-col gap-2 mt-3">
                <PLPAccordion title="نبات"
                              items={[
                                  {text: "خرده نبات", url: "/"},
                                  {text: "کاسه نبات", url: "/"},
                                  {text: "پرده نبات", url: "/"}
                              ]}
                              isOpen={true}/>
                <PLPAccordion title="قند"
                              items={[
                                  {text: "خرده نبات", url: "/"},
                                  {text: "کاسه نبات", url: "/"},
                                  {text: "پرده نبات", url: "/"}
                              ]}
                              isOpen={false}/>
                <PLPAccordion title="شیرینی"
                              items={[
                                  {text: "خرده نبات", url: "/"},
                                  {text: "کاسه نبات", url: "/"},
                                  {text: "پرده نبات", url: "/"}
                              ]}
                              isOpen={false}/>
            </div>
        </div>
    );
};

export default PlpCategory;