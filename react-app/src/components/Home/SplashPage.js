import "./SplashPage.css"

export default function SplashPage({ films, people }) {
  return (
    <div id="splash-page-container">
      
      <div id="splash-bottom-half">
        <div id="splash-welcome-text">
          <h1>Welcome to Vidi!</h1>
          <h2>See anything good lately?</h2>
        </div>
        <button>GET STARTED — IT'S FREE</button>
        <p>The social network for film lovers.</p>
      </div>
    </div>
  )
}
