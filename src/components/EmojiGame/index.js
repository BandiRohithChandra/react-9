import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import {v4 as uuidv4} from 'uuid'

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    gameResult: null,
    clickedEmojiTwice: false,
  }
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  handleClickEmoji = (emojiId) => {
  const { clickedEmojis, score, topScore } = this.state;
  if (!clickedEmojis.includes(emojiId)) {
    const newScore = score + 1;
    const newClickedEmojis = [...clickedEmojis, emojiId];
    if (newClickedEmojis.length === this.props.emojisList.length) {
      this.setState({ gameResult: 'You Won' });
      if (newScore > topScore) { // Compare with topScore before updating
        this.setState({ topScore: newScore });
      }
    }
    this.setState({ score: newScore, clickedEmojis: newClickedEmojis });
  } else {
    this.setState({ gameResult: 'You Lose', clickedEmojiTwice: true });
  }
}


resetgame = () => {
    const shuffledList = this.shuffledEmojisList().slice(0, 12)
    this.setState({
      score: 0,
      clickedEmojis: [],
      gameResult: null,
      shuffledList: shuffledList,
      clickedEmojiTwice: false,
    })
  }

  renderLoseHeading = () => {
    if (this.state.gameResult === 'You Lose') {
      return <h1>You Lose</h1>
    }
    return null
  }

  render() {
    const {score, topScore, gameResult, clickedEmojiTwice} = this.state
    const shuffledList =
      this.state.shuffledList || this.shuffledEmojisList().slice(0, 12)

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        <ul>
          <EmojiCard
            emojisList={shuffledList}
            handleClickEmoji={this.handleClickEmoji}
          />
        </ul>

        <div>
          <WinOrLoseCard
            gameResult={gameResult}
            score={score}
            resetgame={this.resetgame}
          />
        </div>
        {(gameResult === 'You Won' || gameResult === 'You Lose') && (
          <button onClick={this.resetGame}>Play Again</button>
        )}
        {clickedEmojiTwice && <h1>You Lose</h1>}
        {this.renderLoseHeading()}
      </div>
    )
  }
}

export default EmojiGame
