import React, { Component } from "react";
import Lottie from 'react-lottie';
import axios from 'axios';
import Confetti from 'react-confetti';
import "./index.css";

class MessagePage extends Component {
    state = { flagData: null, flagData2: null }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const confettiResponse = await axios.get("https://res.cloudinary.com/dq4yjeejc/raw/upload/v1723633255/Indian_FLag_animation_nor6na.json");
        this.setState({ flagData: confettiResponse.data });

        const confettiResponse2 = await axios.get("https://res.cloudinary.com/dq4yjeejc/raw/upload/v1723634399/indian_flag_animation-2_h6l580.json");
        this.setState({ flagData2: confettiResponse2.data });
    }

    defaultOptions = (animationData) => ({
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    });

    render() {
        const { flagData, flagData2 } = this.state;
        return (
            <div className="message-container">
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={300}
                    gravity={0.2}
                />
                <div className="indian-flag">
                    <div className="animation-container">
                        {flagData ? (
                            <Lottie options={this.defaultOptions(flagData)} height={500} width={400} />
                        ) : (
                            <p>Loading flag animation...</p>
                        )}
                    </div>
                    <div className="animation-container">
                        {flagData2 ? (
                            <Lottie options={this.defaultOptions(flagData2)} height={500} width={400} />
                        ) : (
                            <p>Loading flag animation...</p>
                        )}
                    </div>
                </div>
                
                <div className="messages">
                    
                        <h1 className="message-1">
                            Today is incredibly special to both of us, but honestly, every day with you is a gift. Your radiant smile and vibrant energy make you shine brighter than anyone else. I hope you stay cool, healthy, and full of joy. Celebrate this day with all your heart because not only is it your birthday, but it also marks a powerful day of independence. Here’s to a day as extraordinary and amazing as you are!
                        </h1>
                
                    
                        <h1 className="message-1">
                            On this special day, I want you to know how profoundly you impact everyone around you. Your strength, kindness, and unwavering spirit inspire me every day. As we celebrate not just your birthday but also a day of great freedom and significance, remember how truly extraordinary you are. May your day be filled with moments of joy, love, and celebration, reflecting the incredible person you are. Here’s to you, to your achievements, and to all the amazing things yet to come.
                        </h1>
                   
                </div>
                <img src="https://www.mymentorbiz.com/wp-content/uploads/2014/01/impact.jpg" alt="lot-of-impact" className="impact-image" />
            </div>
        );
    }
}

export default MessagePage;
