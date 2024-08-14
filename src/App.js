import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import BallonsPage from './Components/BallonsPage';
import FireworksPage from './Components/FireworksPage';
import BirthdayPage from './Components/BirthdayPage';
import MessagePage from './Components/MessagePage';
import './App.css';

function App() {
  // Function to play or pause the music

  function handlePlayMusic() {
    const audioElement = document.getElementById('bgm');
    const playButton = document.getElementById('playButton');

    if (audioElement.paused) {
      audioElement.play();
      playButton.style.display = 'none';  // Hide the button after music starts
    }
  }
  
  return (
    <div className="App">
      {/* Background Music */}
      <audio id="bgm" src="https://res.cloudinary.com/dq4yjeejc/video/upload/v1723596706/bhasaha_bd_1_p_fnbl_jshfkv.mp3" loop />
      
      {/* Play Music Button */}
      <button className='play-button' id="playButton"  onClick={handlePlayMusic}>
        Play Music
      </button>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/balloons" element={<BallonsPage />} />
          <Route exact path="/fireworks" element={<FireworksPage />} />
          <Route exact path="/birthday" element={<BirthdayPage />} />
          <Route exact path="/message" element={<MessagePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
