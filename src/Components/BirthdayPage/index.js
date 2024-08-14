import { Component } from "react";
import { Navigate } from "react-router-dom";
import Lottie from 'react-lottie';
import axios from 'axios';
import Confetti from 'react-confetti';
import "./index.css";

class BirthdayPage extends Component {
    state = {
        rendered: false,
        cakeAnimationData: null,
        confettiAnimationData: null,
        
        fourthData:null,
    };

    async componentDidMount() {
        try {
            // Fetch the Lottie JSON data for the cake animation
            const cakeResponse = await axios.get("https://res.cloudinary.com/dq4yjeejc/raw/upload/v1723604764/Animation_-_1723604345177_pcg8ok.json");
            this.setState({ cakeAnimationData: cakeResponse.data });

            // Fetch the Lottie JSON data for the confetti animation
            const confettiResponse = await axios.get("https://res.cloudinary.com/dq4yjeejc/raw/upload/v1723607987/cone-cake_sijk5o.json");
            console.log('Confetti Animation Data:', confettiResponse.data);
            this.setState({ confettiAnimationData: confettiResponse.data });

            const third = await axios.get("https://res.cloudinary.com/dq4yjeejc/raw/upload/v1723608655/happy-bd-cake_lcrqol.json");
            console.log('Confetti Animation Data:', confettiResponse.data);
            this.setState({ thirdData: third.data });

            const fourthData = await axios.get("https://res.cloudinary.com/dq4yjeejc/raw/upload/v1723608863/cake_qeltqi.json")
            this.setState({fourthData: fourthData.data})
            this.renderedMessagePage();
        } catch (error) {
            console.error("Error fetching Lottie animation:", error);
        }
    }

    renderedMessagePage() {
        setTimeout(() => {
            this.setState({ rendered: true });
        }, 12000); // Transition to the next page after 10 seconds
    }

    render() {
        const { rendered, cakeAnimationData, confettiAnimationData,fourthData } = this.state;

        if (rendered) {
            return <Navigate to="/message" />;
        }

        const defaultOptions = (animationData) => ({
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        });

        return (
            <div className="birthday">
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={300}
                    gravity={0.3}
                />
                <div className="animation-container">
                    {cakeAnimationData ? (
                        <Lottie options={defaultOptions(cakeAnimationData)} height={400} width={400} />
                    ) : (
                        <p>Loading cake animation...</p>
                    )}
                </div>
                
                
                <div className="animation-container additional-animation">
                    {confettiAnimationData ? (
                        <Lottie options={defaultOptions(confettiAnimationData)} height={300} width={300} />
                    ) : (
                        <p>Loading confetti animation...</p>
                    )}
                </div>
                <div className="animation-container additional-animation">
                    {fourthData ? (
                        <Lottie options={defaultOptions(fourthData)} height={300} width={300} />
                    ) : (
                        <p>Loading confetti animation...</p>
                    )}
                </div>
            </div>
            
        );
    }
}

export default BirthdayPage;
