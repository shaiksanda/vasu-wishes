import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import Fireworks from 'fireworks-js';
import Confetti from 'react-confetti';
 // Import the snowfall library
import "./index.css";

class FireworksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rendered: false,
        };
        this.containerRef = React.createRef(); // Create a ref for the fireworks container
    }

    componentDidMount() {
        this.initializeFireworks();
        this.renderedToBirthdayPage();
    }

    initializeFireworks = () => {
        if (this.containerRef.current) {
            const fireworks = new Fireworks(this.containerRef.current, {
                speed: 1,
                acceleration: 1.5,
                friction: 1,
                gravity: 1,
                particles: 500,
                explosion: 5,
            });

            fireworks.start();

            // Clean up fireworks on unmount
            this.cleanupFireworks = () => {
                fireworks.stop();
            };
        }
    };

    renderedToBirthdayPage = () => {
        setTimeout(() => {
            this.setState({ rendered: true });
        }, 22000); // Transition to the next page after 10 seconds
    };

    componentWillUnmount() {
        // Clean up fireworks when the component unmounts
        if (this.cleanupFireworks) {
            this.cleanupFireworks();
        }
    }

    render() {
        const { rendered } = this.state;
        if (rendered) {
            return <Navigate to="/birthday" />;
        }

        return (
            <div className="fireworks-page">
                <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200} // Adjust number of pieces as needed
          gravity={0.3} // Adjust gravity to control the fall speed
        />
                <div ref={this.containerRef} className="fireworks-container">
                    {/* Fireworks will be rendered in this div */}
                </div>
                
                
            </div>
        );
    }
}

export default FireworksPage;
