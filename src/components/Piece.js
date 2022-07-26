import { useState } from "react";

function Piece(props){
    const { num, currentIndex, index, myGameArr, setMyGameArr, emptyPieceIndexRef } = props;
    
    // states

    // variables
    const emptyIndex = emptyPieceIndexRef.current;

    // handlers
    const handlePieceClick = _e => {
        if((emptyIndex === (currentIndex - 1) && currentIndex % 4 !== 0 ) || (emptyIndex === (currentIndex + 1) && (currentIndex + 1) % 4 !== 0)  || (currentIndex - 4) === emptyIndex || (currentIndex + 4) === emptyIndex){
            const gameArrCopy = [...myGameArr];
            let temp = gameArrCopy[currentIndex];
            gameArrCopy[currentIndex] = gameArrCopy[emptyIndex];
            gameArrCopy[emptyIndex] = temp;
            emptyPieceIndexRef.current = currentIndex;
            setMyGameArr(gameArrCopy);
        }else{
            console.log("not a7la misa");
            return;
        }
    };

    return (
        <div className={"piece" + (num === 0 ? " empty" : "")} onClick = {handlePieceClick}>
            {num === 0 ? "" : num}
        </div>
    )
}

export default Piece;