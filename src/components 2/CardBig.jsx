import React from "react";
import styles from "../styles/CardBig.module.css"

const CardBig = (props) => {
    let reverseSideCard = () => {
        const btnReverseSide = document.querySelector('#circulation');
        const contentContainer = document.querySelector('#content')
        btnReverseSide.addEventListener('click', (event) => {
            event.preventDefault();
            contentContainer.classList.add("reverseCard")
            contentContainer.classList.remove("cardBig")
            console.log("working")
        })
    }
    return (
        <div className={styles.cardBig}>
            <div className={styles.containerInnerContent}>
                <div className={styles.containerHeader} id="content">
                    <div className={styles.containerImage}>
                        <img src={props.props.image} alt="lottery" className={styles.imageLottery}/>
                    </div>
                    <div className={styles.containerText}>
                        <h2 className={styles.cardTitle}>{props.props.title}</h2>
                        <p className={styles.cardParagraph}>{props.props.bodyShadow}</p>
                        <div className={styles.containerSumMobile}>
                            <h2 className={styles.textSum}>TEST DATA</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.containerBtns}>
                    <div className={styles.containerSum}>
                        <h2 className={styles.textSum}>TEST DATA</h2>
                    </div>
                    <div className={styles.containerInnerBtns}>
                        <button className={styles.getIn}>Участвовать</button>
                        <button className={styles.circulation} id="circulation" onClick={reverseSideCard}>Последние тиражы</button>
                    </div>
                </div>
                <div className={styles.containerProgress}>
                    <progress className={styles.progress} value="100"></progress>
                </div>
            </div>
            <div className={styles.borderRight}></div>
            <div className={styles.containerShowButton}>
                <button className={styles.showButton}>Стр</button>
            </div>
        </div>
    );
}


export default CardBig;