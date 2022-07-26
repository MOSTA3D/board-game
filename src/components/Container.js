// Components
import Piece from "./Piece";

// dependencies
import { useState, useRef } from "react";

// helpers
import { genArr, shflArr } from "../utils/helper";


const nPieces = 16;
const gameArr = shflArr(genArr(nPieces));

console.log(gameArr);


function Container(){
    const emptyPieceIndexRef = useRef(gameArr.findIndex(num => num === 0));
    const [ myGameArr, setMyGameArr ] = useState(gameArr);
    console.log('rendered');

    return (
        <div className="container">
            {myGameArr.map((num, i) => <Piece key={i} index = {i} {...{setMyGameArr, myGameArr, num, emptyPieceIndexRef}} currentIndex = {i} /> )}
        </div>
    )
}

export default Container;