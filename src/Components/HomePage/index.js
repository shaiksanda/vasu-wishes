// src/Components/HomePage.js
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Lottie from 'react-lottie';
import axios from 'axios';
import Confetti from 'react-confetti'; // Import react-confetti
import "./index.css";

class HomePage extends Component {
  state = {
    currentLine: 0,
    currentLetter: 0,
    displayedText: ["", "", "", "", ""], // Array to hold displayed lines
    redirectedBallonsPage: false,
    thirdData:null
  };

  lines = ["HAPPY", "BIRTH", "DAY", "SANDA", "ESWARI"];

  letterImageUrls = {
    n: "https://i.pinimg.com/originals/75/44/2e/75442ea429960c25d6d378ef3a93cb4a.jpg",
    h: "https://www.clipartmax.com/png/full/481-4813176_h-letter-transparent-background-gold-letter-h.png",
    a: "https://static.vecteezy.com/system/resources/previews/021/054/553/original/3d-gold-effect-letter-a-free-png.png",
    b: "https://www.pngall.com/wp-content/uploads/2/B-Letter-Transparent.png",
    y: "https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187644-2560-2560.jpg",
    s: "https://www.pngall.com/wp-content/uploads/2/S-Letter.png",
    e: "https://png.pngtree.com/png-clipart/20210119/ourmid/pngtree-golden-3d-e-letter-png-transparent-design-png-image_2764072.jpg",
    p: "https://png.pngtree.com/png-clipart/20210411/original/pngtree-fire-alphabet-letter-p-png-image_6222222.jpg",
    i: "https://pngimg.com/uploads/letter_i/letter_i_PNG29.png",
    r: "https://www.pngall.com/wp-content/uploads/2/R-Letter-PNG-Clipart.png",
    t: "https://pngteam.com/images/t-letter-png-1777x2400_fc69e1a9_transparent.png",
    d: "https://pixy.org/src/9/97444.png",
    w: "https://www.pngplay.com/wp-content/uploads/1/Letter-W-PNG-Stock-Images.png",
  };

  componentDidMount() {
    this.getThirdData()
    this.showNextLetter();
    this.redirectToBallonsPage();
  }
  getThirdData=async() => {
    const third = await axios.get("https://res.cloudinary.com/dq4yjeejc/raw/upload/v1723608655/happy-bd-cake_lcrqol.json");
    this.setState({ thirdData: third.data });
  }


  showNextLetter = () => {
    const { currentLine, currentLetter, displayedText } = this.state;

    if (currentLine < this.lines.length) {
      const newDisplayedText = [...displayedText];
      newDisplayedText[currentLine] += this.lines[currentLine][currentLetter];

      this.setState(
        {
          displayedText: newDisplayedText,
          currentLetter: currentLetter + 1,
        },
        () => {
          if (currentLetter + 1 >= this.lines[currentLine].length) {
            this.setState(
              { currentLine: currentLine + 1, currentLetter: 0 },
              () => {
                if (currentLine + 1 < this.lines.length) {
                  setTimeout(this.showNextLetter, 250);
                }
              }
            );
          } else {
            setTimeout(this.showNextLetter, 250);
          }
        }
      );
    }
  };

  redirectToBallonsPage = () => {
    setTimeout(() => {
      this.setState({ redirectedBallonsPage: true });
    }, 15000);
  };

  defaultOptions = (animationData) => ({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
});

  render() {
    const { displayedText, redirectedBallonsPage,thirdData } = this.state;
    if (redirectedBallonsPage) {
      return <Navigate to="/balloons" />;
    }

    const getImageUrl = (letter) => {
      return this.letterImageUrls[letter.toLowerCase()] || "";
    };

    


    return (
      <div className="home-container">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300} // Adjust number of pieces as needed
          gravity={0.3} // Adjust gravity to control the fall speed
        />
        <h1 className="main-heading">To my Special Person</h1>
        <div className="animation">
        <div className="animation-container additional-animation">
                    {thirdData ? (
                        <Lottie options={this.defaultOptions(thirdData)} height={300} width={300} />
                    ) : (
                        <p>Loading confetti animation...</p>
                    )}
                </div>
        
       <div className="text-container">
       
        {displayedText.map((line, lineIndex) => (
          <div className="line-container" key={lineIndex}>
            {line.split("").map((letter, letterIndex) => (
              <div className="letter-container" key={letterIndex}>
                <img src={getImageUrl(letter)} alt={letter} className="image-letter" />
              </div>
            ))}
          </div>
        ))}
       </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
