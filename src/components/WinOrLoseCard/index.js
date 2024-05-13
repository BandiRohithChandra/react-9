// Write your code here.
import './index.css'

const WinOrLoseCard = ({gameResult, score, resetgame}) => {
  const handlePlayAgain = () => {
    resetgame()
  }

  return (
    <div className="card-container">
      <h1>{gameResult}</h1>
      {gameResult === 'You Won' && (
        <div className="content">
          <p>Best Score</p>
          <p>{score}/12</p>
          <button type="button" onClick={handlePlayAgain} className="button">
            play Again
          </button>
        </div>
      )}

      <div>
        <img
          src={
            gameResult === 'You Won'
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          className="winOrLose"
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
