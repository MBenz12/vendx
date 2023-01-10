import { MinusIcon, PlusIcon } from "components/svgs";
import { useState } from "react";

const QuestionBox = ({ className, title, content, collapse = true, handleCollapse }: { className?: string, title: string, content: string, collapse: boolean, handleCollapse: () => any }) => {
    return (
        <div className={"px-[63px] py-[40px] rounded-[20px] border-[3px] border-white font-primary text-white transition-all duration-500 " + className || ""}>
            <div className="flex justify-between items-center">
                <p className="font-bold text-[35px] leading-[41px]">{title}</p>
                <div className="cursor-pointer h-[31px] flex items-center" onClick={handleCollapse}>
                    {collapse ? <PlusIcon /> : <MinusIcon />}
                </div>
            </div>
            {!collapse && <p className="mt-[40px] text-[30px] leading-[36px]">{content}</p>}
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
        <section className="section flex-col !justify-start items-center">
            <p className="mt-[80px] font-title text-white font-extrabold text-[100px] leading-[115px]">{"// FAQ"}</p>
            <p className="w-[494px] text-[30px] leading-[35px] font-primary font-bold text-gradient text-center">Any Questions?</p>
            <div className="my-[46px] flex flex-col gap-[15px] w-[1043px]">
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