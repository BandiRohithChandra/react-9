// Write your code here.

import './index.css'

const EmojiCard = ({emojisList, handleClickEmoji}) => {
  return (
    <ul className="game-container">
      {emojisList.map(eachEmoji => (
        <li className="emojis-container">
          <button
            type="button"
            className="button-emoji"
            onClick={() => handleClickEmoji(eachEmoji.id)}
          >
            <img
              src={eachEmoji.emojiUrl}
              alt={eachEmoji.emojiName}
              key={eachEmoji.id}
              className="emojis"
            />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default EmojiCard
