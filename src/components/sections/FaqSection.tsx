import { MinusIcon, PlusIcon } from "components/svgs";
import { useState } from "react";

const QuestionBox = ({ className, title, content, collapse = true, handleCollapse }: { className?: string, title: string, content: string, collapse: boolean, handleCollapse: () => any }) => {
    return (
        <div className={"px-[63px] py-[40px] rounded-[20px] border-[3px] border-white font-primary text-white sm:px-6 sm:py-6 " + className || ""}>
            <div className="flex justify-between items-center">
                <p className="font-bold text-[35px] leading-[41px] sm:text-3xl xs:text-2xl ">{title}</p>
                <div className="cursor-pointer h-[31px] flex items-center" onClick={handleCollapse}>
                    {collapse ? <PlusIcon /> : <MinusIcon />}
                </div>
            </div>
            <p className={"text-[30px] leading-[36px] transition-height duration-1000 sm:text-2xl xs:text-xl " + (collapse ? "h-0 mt-0" : "mt-[40px] sm:mt-5")}>{!collapse && content}</p>
        </div>
    )
}

const FaqSection = () => {
    const questions = [
        {
            question: "WHEN MINT?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            question: "What is the supply?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            question: "How much is mint?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            question: "Another question?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
    ];
    const [collapses, setCollapses] = useState<boolean[]>([false, true, true, true]);
    return (
        <section className="section flex-col !justify-start items-center container" id='faq'>
            <p className="mt-[80px] font-title text-white font-extrabold text-[100px] leading-[115px] xs:text-6xl">{"// FAQ"}</p>
            <p className="w-[494px] text-[30px] leading-[35px] font-primary font-bold text-gradient text-center">Any Questions?</p>
            <div className="my-[46px] flex flex-col gap-[15px] max-w-[1043px] w-full">
                {questions.map((question, index) => (
                    <QuestionBox
                        key={question.question}
                        title={question.question}
                        content={question.answer}
                        collapse={collapses[index]}
                        handleCollapse={() => {
                            setCollapses(collapses.map((collapse, i) => {
                                return index === i ? !collapse : collapse;
                            }));
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

export default FaqSection;