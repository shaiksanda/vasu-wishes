import { Component } from "react";
import { Navigate } from "react-router-dom";
import Confetti from 'react-confetti';
import "./index.css";

class BallonsPage extends Component {
  state = { redirected: false };

  componentDidMount() {
    this.redirectToFireWorksPage();
  }

  redirectToFireWorksPage = () => {
    setTimeout(() => {
      this.setState({ redirected: true });
    }, 22000); // Redirect after 10 seconds
  };

  render() {
    const { redirected } = this.state;
    if (redirected) {
      return <Navigate to="/fireworks" />;
    }
    return (
      <div className="balloons-container">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300} // Adjust number of pieces as needed
          gravity={0.2} // Adjust gravity to control the fall speed
        />
        <img
          src="https://www.pngarts.com/files/4/Colorful-Balloons-PNG-Transparent-Image.png"
          className="balloon balloon1"
          alt="balloon1"
        />
        <img
          src="https://pngimg.com/uploads/balloon/balloon_PNG3384.png"
          className="balloon balloon2"
          alt="balloon2"
        />
        <img
          src="https://m.media-amazon.com/images/I/71EUSwM0x7S.jpg"
          className="balloon balloon3"
          alt="balloon3"
        />
        <img
          src="https://cdn.wallpapersafari.com/43/91/vHcA4h.jpg"
          className="balloon balloon4"
          alt="balloon4"
        />
        <img
          src="https://clipground.com/images/clip-art-red-balloon-7.png"
          className="balloon balloon5"
          alt="balloon5"
        />
        <img
          src="https://cliparts.co/cliparts/rcL/o9B/rcLo9Bgni.jpg"
          className="balloon balloon6"
          alt="balloon6"
        />
        <img
          src="https://i.pinimg.com/originals/63/18/76/631876ba0ae265c340167d8658250b1d.png"
          className="balloon balloon7"
          alt="balloon7"
        />
       
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/522/293/original/balloons-balloons-happy-birthday-balloons-transparent-background-ai-generative-free-png.png"
          className="balloon balloon8"
          alt="balloon8"
        />
      </div>
    );
  }
}

export default BallonsPage;
