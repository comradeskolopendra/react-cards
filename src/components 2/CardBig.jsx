import React from "react";
import "../styles/CardBig.css"

const CardBig = (props) => {
    return (
        <div className="cardBig">
            <div className="containerImage">
                <img src={props.props.image} alt="lottery" className="imageLottery"/>
            </div>
            <h2 className="cardTitle">{props.props.title}</h2>
            <p className="cardParagraph">{props.props.bodyShadow}</p>
            <div className="containerBtns">
                <button className="getIn">Участвовать</button>
                <button className="circulation">Последние тиражы</button>
            </div>
            <div className="containerProgress">
                <progress value="100"></progress>
            </div>
        </div>
    );
}


export default CardBig;