import  React  from 'react';

const Square = (props) => {
    const { index, player, setPlayer, setSquares, squares, squareValue} = props;
    const handleClick = () => {
        console.log("I can handle my own click")
        if (!squareValue) {
            if (player) {
                squares.splice(index, 1, "X");
                setSquares(squares);
                setPlayer(!player);
            } else {
                squares.splice(index, 1, "O");
                setSquares(squares);
                setPlayer(!player);
            }
        }
    };
    
    return (
        <div className='square' onClick={handleClick}>
            {squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : squareValue}
        </div>
    )
} 

export default Square;