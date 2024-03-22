import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles.scss";
import QuestionLogo from "../../images/customer.png";
import { ArrowUpQuestions_2 } from "../../images/icons/ArrowUpQuestions_2";
import { useInView } from "react-intersection-observer";

export const Questions = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const [arrowRotatedIndexes, setArrowRotatedIndexes] = useState<number[]>([]);

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

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
        <motion.div
            className="faq"
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.5 }}
        >
            <div className="heading">
                <h4>FAQ</h4>
                <h1>Frequently Asked Questions</h1>
                <p>
                    As A Matter Of Fact The Unification Of The Coherent Software Provides
                    A Strict Control Over The Accomplishment Of Intended Estimation
                </p>
            </div>
            <div className="questions">
                <div className="left_content">
                    <motion.img
                        src={QuestionLogo}
                        alt=""
                        className="logo_faq"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="right_content">
                    <div className="box" ref={ref}>
                        {[
                            "Какие способы оплаты?",
                            "Если я не смогу заплатить вовремя, потеряю ли я данные?",
                            "Какие ваши преимущества в сравнении с конкурентами?",
                            "Есть ли какие-то ограничения в использовании?",
                        ].map((question, index) => (
                            <motion.div
                                key={index}
                                className="question_content"
                                style={{
                                    maxHeight: openIndexes.includes(index) ? "150px" : "90px",
                                }}
                                onClick={() => toggleQuestion(index)}
                                initial="hidden"
                                animate={controls}
                                variants={{
                                    visible: { opacity: 1, y: 0 },
                                    hidden: { opacity: 0, y: -20 },
                                }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <motion.div
                                    className="question"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p>{question}</p>
                                    <motion.div
                                        className="question_svg"
                                        animate={{
                                            rotate: arrowRotatedIndexes.includes(index) ? 180 : 0,
                                        }}
                                    >
                                        <ArrowUpQuestions_2 />
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="answer"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {openIndexes.includes(index) && (
                                        <p>
                                            {index === 0 && "Для общего удобства используется USDT."}
                                            {index === 1 &&
                                                "Нет, Вам будет выделен буферный период, для этого свяжитесь с Вашим менеджером."}
                                            {index === 2 &&
                                                "Мы знаем на практике и с какими проблемами сталкиваются арбитражные команды и партнёрские программы и решили их с помощью нашего продукта."}
                                            {index === 3 && "Нет. Ответственность за использование за Вами."}
                                        </p>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
