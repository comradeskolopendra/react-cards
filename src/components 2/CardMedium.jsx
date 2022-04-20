import React from "react";
import styles from "../styles/CardMedium.module.css";

const CardMedium = (props) => {
    return(
        <div className={styles.cardMeduim}>
            <div className={styles.containerInnerContent}>
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
                    <button className={styles.circulation}>Последние тиражы</button>
                </div>
                <div className={styles.containerProgress}>
                    <progress className={styles.progress} value="100" max="100"></progress>
                </div>
            </div>
            <div className={styles.borderRight}></div>
            <div className={styles.containerShowButton}>
                <button className={styles.showButton}>Стр</button>
            </div>
        </div>
    );
}


export default CardMedium;