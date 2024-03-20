import React, {useState} from "react";
import "./styles.scss";
import QuestionLogo from "../../images/customer.png";
import {ArrowUpQuestions_2} from "../../images/icons/ArrowUpQuestions_2";

export const Questions = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const [arrowRotatedIndexes, setArrowRotatedIndexes] = useState<number[]>([]);

    const toggleQuestion = (index: number) => {
        const isArrowRotated = arrowRotatedIndexes.includes(index);
        const isOpen = openIndexes.includes(index);
        if (isOpen) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
            setArrowRotatedIndexes(arrowRotatedIndexes.filter((i) => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
            setArrowRotatedIndexes([...arrowRotatedIndexes, index]);
        }
    };

    return (
        <div className = 'faq'>
            <div className = 'heading'>
                <h4>FAQ</h4>
                <h1>Frequently Asked Questions</h1>
                <p>
                    As A Matter Of Fact The Unification Of The Coherent Software Provides A Strict Control Over
                    The Accomplishment Of Intended Estimation
                </p>
            </div>
            <div className="questions">
                <div className="left_content">
                    <img src={QuestionLogo} alt="" className="logo_faq"/>
                </div>
                <div className="right_content">
                    <div className="box">
                        {[
                            "Какие способы оплаты?",
                            "Если я не смогу заплатить вовремя, потеряю ли я данные?",
                            "Какие ваши преимущества в сравнении с конкурентами?",
                            "Есть ли какие-то ограничения в использовании?"
                        ].map((question, index) => (
                            <div
                                key={index} className="question_content"
                                style={
                                    arrowRotatedIndexes.includes(index) ?
                                        {maxHeight: "150px", transition: "max-height 0.3s"} :
                                        {maxHeight: "90px"}
                                }
                                onClick={() => toggleQuestion(index)}
                            >
                                <div className="question">
                                    <p>{question}</p>
                                    <div className = 'question_svg'
                                         style={arrowRotatedIndexes.includes(index) ?
                                             { transform: "rotate(180deg)", transition: " transform 0.3s ease" } :
                                             {transform: "rotate(0deg)", transition: " transform 0.3s ease"}}>
                                        <ArrowUpQuestions_2 />
                                    </div>
                                </div>
                                <div className="answer" >
                                    {openIndexes.includes(index) && (
                                        <p>
                                            {index === 0 && "Для общего удобства используется USDT."}
                                            {index === 1 && "Нет, Вам будет выделен буферный период, для этого свяжитесь с Вашим менеджером."}
                                            {index === 2 && "Мы знаем на практике и с какими проблемами сталкиваются арбитражные команды и партнёрские программы и решили их с помощью нашего продукта."}
                                            {index === 3 && "Нет. Ответственность за использование за Вами."}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};