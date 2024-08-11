import React, { Component } from "react";
import "./index.css";

class HomePage extends Component {
  state = {
    currentLine: 0,
    currentLetter: 0,
    displayedText: ["", "", "", "",""], // Array to hold displayed lines
  };

  lines = ["HAPPY", "BIRTH","DAY", "SANDA", "ESWARI"];

  letterImageUrls = {
    n:
      "https://i.pinimg.com/originals/75/44/2e/75442ea429960c25d6d378ef3a93cb4a.jpg",
    h:
      "https://www.clipartmax.com/png/full/481-4813176_h-letter-transparent-background-gold-letter-h.png",
    a:
      "https://res.cloudinary.com/dq4yjeejc/image/upload/v1722683133/letter-a-icon-png-8861_abhwdb.jpg",
    b:
      "https://res.cloudinary.com/dq4yjeejc/image/upload/v1722679867/3d-rendering-letter-b_jxelbp.jpg",
    y:
      "https://res.cloudinary.com/dq4yjeejc/image/upload/v1722679636/letter-y__k3uqab.png",
    s: "https://www.pngall.com/wp-content/uploads/2/S-Letter.png",
    e:
      "https://png.pngtree.com/png-clipart/20210119/ourmid/pngtree-golden-3d-e-letter-png-transparent-design-png-image_2764072.jpg",
    p: "https://cdn-icons-png.flaticon.com/512/8437/8437857.png",
    i: "https://cdn-icons-png.flaticon.com/512/261/261911.png",
    r: "https://www.pngall.com/wp-content/uploads/2/R-Letter-PNG-Clipart.png",
    t:
      "https://pngteam.com/images/t-letter-png-1777x2400_fc69e1a9_transparent.png",
    d: "https://cdn-icons-png.flaticon.com/512/8913/8913723.png",
    w:
      "https://www.pngplay.com/wp-content/uploads/1/Letter-W-PNG-Stock-Images.png",
  };

  componentDidMount() {
    this.showNextLetter();
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

  render() {
    const { displayedText } = this.state;

    const getImageUrl = (letter) => {
      return this.letterImageUrls[letter.toLowerCase()] || "";
    };

    return (
      <div className="home-container">
        <h1 className="main-heading">To my Special Person</h1>
        {displayedText.map((line, lineIndex) => (
          <div className="line-container" key={lineIndex}>
            {line.split("").map((letter, letterIndex) => (
              <div className="letter-container" key={letterIndex}>
                <img src={getImageUrl(letter)} alt={letter} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;