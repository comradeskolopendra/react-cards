import React, {useState} from "react";
import styles from "../styles/CardMedium.module.css";
import SwiperTypeZero from "../components 2/Swiper";
import SwiperTypeOne from "../components 2/SwiperOne";
import SwiperTypeTwo from "../components 2/SwiperTwo";

const CardMedium = (props) => {
    const [isRotate, setIsRotate] = useState(false);

    function handleChange() {
        setIsRotate(!isRotate)
    }

    if (props.props.type === 1) { // swiper со строчными единичными тиражами
        return (
                <div className={isRotate ? styles.reverseCard : styles.cardMeduim}>
                    <div className={isRotate ? styles.displayNone : styles.containerInnerContent}>
                        <div className={styles.containerHeader}>
                            <div className={styles.containerHeaderImageText}>
                                <div className={styles.containerImage}>
                                    <img src={props.props.image} alt="lottery" className={styles.imageLottery}/>
                                </div>
                                <div className={styles.containerText}>
                                    <h2 className={styles.cardTitle}>{props.props.title}</h2>
                                    <p className={styles.cardParagraph}>{props.props.bodyShadow}</p>
                                </div>
                            </div>
                            <div className={styles.containerItemsCirc}>
                                <div className={styles.borderRight}></div>
                                <div className={styles.containerShowButton}>
                                    <button className={styles.showButton} onClick={handleChange}>Стр</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.containerBtns}>
                            <button className={styles.getIn}>Участвовать</button>
                            <button className={styles.circulation} id="circulation" onClick={handleChange}>Последние тиражи</button>
                        </div>
                        <div className={styles.containerProgress}>
                            <progress className={styles.progress} value="100" max="100"></progress>
                        </div>
                    </div>
                    <div className={isRotate ? styles.containerReverseContent : styles.displayNone}>
                        <div className={styles.containerContentHeader}>
                            <div className={styles.cardLeftside}>
                                <button className={styles.backButton} onClick={handleChange}>
                                    <svg width="13" height="13" viewBox="0 0 49 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M48.5 1L2 26.5L48.5 52" stroke="white" strokeWidth="4"/>
                                    </svg>
                                </button>
                                <div className={styles.containerReverseImageText}>
                                    <img src={props.props.image} alt="lottery" className={styles.reverseImage}/>
                                    <div className={styles.containerReverseText}>
                                        <h2 className={styles.cardTitle}>{props.props.title}</h2>
                                        <p className={styles.cardParagraph}>Последние тиражи</p>
                                    </div>
                                    <div className={styles.containerItemsCirc}>
                                        <div className={isRotate ? styles.displayNone : styles.borderRight}></div>
                                        <div className={styles.containerShowButton}>
                                            <button className={styles.showButton} onClick={handleChange}>Стр</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardRightside}>
                                <button className={styles.downoladCirculationsDesktop}>Скачать все тиражи в PDF</button>
                            </div>
                        </div>
                        <hr className={styles.borderBottomReverse}/>
                        <SwiperTypeOne></SwiperTypeOne>
                        <div className={styles.cardRightside}>
                            <button className={styles.downoladCirculationsMobile}>Скачать все тиражи в PDF</button>
                        </div>
                    </div>
                </div>
        );
    }
    else if (props.props.type === 0) { // swiper с 10 столбцами и 7 строками тиражей
        return(
            <div className={isRotate ? styles.reverseCard : styles.cardMeduim}>
            <div className={isRotate ? styles.displayNone : styles.containerInnerContent}>
                    <div className={styles.containerHeader}>
                        <div className={styles.containerImage}>
                            <img src={props.props.image} alt="lottery" className={styles.imageLottery}/>
                        </div>
                        <div className={styles.containerText}>
                            <h2 className={styles.cardTitle}>{props.props.title}</h2>
                            <p className={styles.cardParagraph}>{props.props.bodyShadow}</p>
                        </div>
                    </div>
                    <div className={styles.containerBtns}>
                        <button className={styles.getIn}>Участвовать</button>
                        <button className={styles.circulation} id="circulation" onClick={handleChange}>Последние тиражи</button>
                    </div>
                    <div className={styles.containerProgress}>
                        <progress className={styles.progress} value="100" max="100"></progress>
                    </div>
                </div>
                <div className={isRotate ? styles.containerReverseContent : styles.displayNone}>
                    <div className={styles.containerContentHeader}>
                        <div className={styles.cardLeftside}>
                            <button className={styles.backButton} onClick={handleChange}>
                            <svg width="13" height="13" viewBox="0 0 49 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.5 1L2 26.5L48.5 52" stroke="white" strokeWidth="4"/>
                            </svg>
                            </button>
                            <div className={styles.containerReverseImageText}>
                                <img src={props.props.image} alt="lottery" className={styles.reverseImage}/>
                                <div className={styles.containerReverseText}>
                                    <h2 className={styles.cardTitleReverse}>{props.props.title}</h2>
                                    <p className={styles.cardParagraphReverse}>Последние тиражи</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardRightside}>
                            <button className={styles.downoladCirculations}>Скачать все тиражи в PDF</button>
                        </div>
                    </div>
                    <hr className={styles.borderBottomReverse}/>
                    <SwiperTypeZero></SwiperTypeZero>
                    <div className={styles.containerItemsCirc}>
                        <div className={styles.borderRight}></div>
                        <div className={styles.containerShowButton}>
                            <button className={styles.showButton} onClick={handleChange}>Стр</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.props.type === 2) { // swiper 10 столбцов 2 строки тиражей
        return (
            <div className={isRotate ? styles.reverseCard : styles.cardMeduim}>
                <div className={isRotate ? styles.displayNone : styles.containerInnerContent}>
                    <div className={styles.containerHeader}>
                        <div className={styles.containerHeaderImageText}>
                            <div className={styles.containerImage}>
                                <img src={props.props.image} alt="lottery" className={styles.imageLottery}/>
                            </div>
                            <div className={styles.containerText}>
                                <h2 className={styles.cardTitle}>{props.props.title}</h2>
                                <p className={styles.cardParagraph}>{props.props.bodyShadow}</p>
                            </div>
                        </div>
                        <div className={styles.containerItemsCirc}>
                            <div className={styles.borderRight}></div>
                            <div className={styles.containerShowButton}>
                                <button className={styles.showButton} onClick={handleChange}>Стр</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerBtns}>
                        <button className={styles.getIn}>Участвовать</button>
                        <button className={styles.circulation} id="circulation" onClick={handleChange}>Последние тиражи</button>
                    </div>
                    <div className={styles.containerProgress}>
                        <progress className={styles.progress} value="100" max="100"></progress>
                    </div>
                </div>
                <div className={isRotate ? styles.containerReverseContent : styles.displayNone}>
                    <div className={styles.containerContentHeader}>
                        <div className={styles.cardLeftside}>
                            <button className={styles.backButton} onClick={handleChange}>
                            <svg width="13" height="13" viewBox="0 0 49 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.5 1L2 26.5L48.5 52" stroke="white" strokeWidth="4"/>
                            </svg>
                            </button>
                            <div className={styles.containerReverseImageText}>
                                <img src={props.props.image} alt="lottery" className={styles.reverseImage}/>
                                <div className={styles.containerReverseText}>
                                    <h2 className={styles.cardTitle}>{props.props.title}</h2>
                                    <p className={styles.cardParagraph}>Последние тиражи</p>
                                </div>
                                <div className={styles.containerItemsCirc}>
                                    <div className={isRotate ? styles.displayNone : styles.borderRight}></div>
                                    <div className={styles.containerShowButton}>
                                        <button className={styles.showButton} onClick={handleChange}>Стр</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardRightside}>
                            <button className={styles.downoladCirculationsDesktop}>Скачать все тиражи в PDF</button>
                        </div>
                    </div>
                    <hr className={styles.borderBottomReverse}/>
                    <SwiperTypeTwo></SwiperTypeTwo>
                    <div className={styles.cardRightside}>
                        <button className={styles.downoladCirculationsMobile}>Скачать все тиражи в PDF</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default CardMedium;