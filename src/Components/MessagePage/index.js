import React, { Component } from "react";
import { Navigate} from "react-router-dom";
import Confetti from 'react-confetti';
import "./index.css";

class MessagePage extends Component {
    state = { rendered:false }

    componentDidMount() {
        this.getData();
    }
    getData=() => {
        setTimeout(() => {
            this.setState({ rendered: true });
          }, 15000); // Redirect after 10 seconds
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
        const {rendered} = this.state;
        if(rendered){
            return <Navigate to="/" />
        }
        return (
            <div className="message-container">
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={300}
                    gravity={0.2}
                />
            
                
                <div className="messages">
                    
                <h1 className="message-1">
    Today is incredibly special to both of us, but honestly, every day with you is a gift. Your radiant smile and vibrant energy make you shine brighter than anyone else. I hope you stay cool, healthy, and full of joy. Celebrate this day with all your heart because not only is it your birthday, but it is also a perfect occasion to cherish and appreciate you. Here’s to a day as extraordinary and amazing as you are!
</h1>

                
                    
                        <h1 className="message-1">
    On this special day, I want you to know how profoundly you impact everyone around you. Your strength, kindness, and unwavering spirit inspire me every day. As we celebrate not just your birthday but also this beautiful day, remember how truly extraordinary you are. May your day be filled with moments of joy, love, and celebration, reflecting the incredible person you are. Here’s to you, to your achievements, and to all the amazing things yet to come.
</h1>

                   
                </div>
                <img src="https://www.mymentorbiz.com/wp-content/uploads/2014/01/impact.jpg" alt="lot-of-impact" className="impact-image" />
            </div>
        );
    }
}

export default MessagePage;
