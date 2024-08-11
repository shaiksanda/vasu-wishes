import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage  from './Components/HomePage';
import BallonsPage from './Components/BallonsPage';
import FireworksPage from './Components/FireworksPage';
import BirthdayPage from './Components/BirthdayPage';
import MessagePage from './Components/MessagePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/balloons" element={<BallonsPage/>} />
        <Route exact path="/fireworks" element={<FireworksPage/>} />
        <Route exact path="/birthday" element={<BirthdayPage />}/>
        <Route exact path="/message" element={<MessagePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
