import React, {useState} from "react";
import {motion} from "framer-motion";
import "./styles.scss";
import QuestionLogo from "../../images/customer.png";
import {ArrowUpQuestions_2} from "../../images/icons/ArrowUpQuestions_2";
import {useInView} from "react-intersection-observer";
import {useTranslation} from "react-i18next";

export const Questions = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const [arrowRotatedIndexes, setArrowRotatedIndexes] = useState<number[]>([]);
    const {t} = useTranslation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [ref_2, inView_2] = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });
    const [ref_3, inView_3] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const toggleQuestion = (index: number) => {
        const isOpen = openIndexes.includes(index);
        setOpenIndexes(isOpen ? openIndexes.filter(i => i !== index) : [...openIndexes, index]);
        setArrowRotatedIndexes(
            isOpen ? arrowRotatedIndexes.filter(i => i !== index) : [...arrowRotatedIndexes, index]
        );
    };

    return (
        <div className='faq' id="Questions">
            <div className = 'faq_media'>
                <motion.div
                    ref={ref}
                    className='heading'
                    animate={{opacity: inView ? 1 : 0, x: inView ? 0 : -200}}
                    transition={{duration: 0.5}}>
                    <h4>{t('heading.heading1')}</h4>
                    <h1> {t('heading.heading2')}</h1>
                    <p>
                        {t('heading.heading3')}
                    </p>
                </motion.div>
                <div className="questions">
                    <div className="left_content">
                        <motion.img
                            ref={ref_2}
                            src={QuestionLogo}
                            alt=""
                            className="logo_faq"
                            animate={{opacity: inView_2 ? 1 : 0, y: inView_2 ? 0 : -100}}
                            transition={{duration: 0.5}}
                        />
                    </div>
                    <div className="right_content">
                        <div className='box' ref={ref_3}>
                            {[
                                t('questions.question1'),
                                t('questions.question2'),
                                t('questions.question3'),
                                t('questions.question4')
                            ].map((question, index) => (
                                <motion.div
                                    key={index}
                                    className="question_content"
                                    style={{
                                        maxHeight: openIndexes.includes(index) ? "150px" : "90px",
                                    }}
                                    onClick={() => toggleQuestion(index)}
                                    initial={{opacity: 0, y: 300}}
                                    animate={{opacity: inView_3 ? 1 : 0, y: inView_3 ? 0 : 300}}
                                    transition={{duration: 0.5, delay: index * 0.3}}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {duration: 0.5},
                                        },
                                        hidden: {
                                            opacity: 0,
                                            y: -20,
                                            transition: {duration: 0.5},
                                        },
                                    }}
                                    //whileHover={{scale: 1.05}}
                                    //whileTap={{scale: 0.95}}
                                >
                                    <motion.div
                                        className="question"
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.3}}
                                    >
                                        <p>{question}</p>
                                        <motion.div
                                            className="question_svg"
                                            animate={{
                                                rotate: arrowRotatedIndexes.includes(index) ? 180 : 0,
                                                transition: {duration: 0.3},
                                            }}
                                        >
                                            <ArrowUpQuestions_2/>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div
                                        className="answer"
                                        initial={{opacity: 0, y: -20}}
                                        animate={{
                                            opacity: openIndexes.includes(index) ? 1 : 0,
                                            y: openIndexes.includes(index) ? 0 : -20,
                                            transition: {duration: 0.3},
                                        }}
                                    >
                                        {openIndexes.includes(index) && (
                                            <p>
                                                {index === 0 && t('answer.answer1')}
                                                {index === 1 && t('answer.answer2')}
                                                {index === 2 && t('answer.answer3')}
                                                {index === 3 && t('answer.answer4')}
                                            </p>
                                        )}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
