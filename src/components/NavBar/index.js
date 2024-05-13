// Write your code here.

const NavBar = ({score, topScore, gameResult}) => {
  return (
    <div>
      <nav className="nav-element">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1>Emoji Game</h1>
        <div>
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
