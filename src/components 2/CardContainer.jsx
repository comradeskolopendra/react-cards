import React from "react";
import CardBig from "./CardBig";
import CardMedium from "./CardMedium";
import styles from "../styles/CardContainer.module.css";


const ContainerCards = (props) => {
    return(
        <div className={styles.cardContainerAll}>
            <div className={styles.cardContainerMedium}>
                <CardMedium props={props.props[0]}/>
                <CardMedium props={props.props[1]}/>
                <CardMedium props={props.props[2]}/>
            </div>
            <div className={styles.cardContainerBig}>
                <CardBig props={props.props[3]}/>
                <CardBig props={props.props[4]}/>
            </div>
        </div>
    );
}

export default ContainerCards;