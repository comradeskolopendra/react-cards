import React, {useState} from "react";
// import PostList from "./components/PostList";
import ContainerCards from "./components 2/CardContainer";
import './styles/App.css'
import LotteryBingo37 from './assets/bingo37.svg';
import LotteryBingo38 from './assets/bingo38.svg';
import LotteryBingoClub from './assets/bingo-club.png';
import LotteryKeno from './assets/keno.png';
import LotteryNaval from './assets/naval-battle.png';

const imageArray = [
  LotteryBingo37,
  LotteryKeno,
  LotteryBingo38,
  LotteryNaval,
  LotteryBingoClub 
]

function App() {
  const [cardData, setCardData] = useState([
    {id: 1, title: "Bingo Club 37", bodyShadow: "Ставка от 100 ₸", image: imageArray[0]},
    {id: 2, title: "Keno Club", bodyShadow: "Ставка от 250 ₸ или 250 Б", image: imageArray[1]},
    {id: 3, title: "Bingo Club 38", bodyShadow: "Ставка от 100 ₸", image: imageArray[2]},
    {id: 4, title: "Naval Battle", bodyShadow: "Ставка от 200 ₸ или 200 Б", image: imageArray[3]},
    {id: 5, title: "Bingo Club", bodyShadow: "Ставка от 200 ₸ или 200 Б", image: imageArray[4]}
  ]);

  return (
    <div className="App">
      <ContainerCards props={cardData}/>
    </div>
  );
}

export default App;
