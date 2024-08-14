import React, { Component } from "react";
import "./index.css";

class MessagePage extends Component {
    render() {
        return (
            <div className="message-container">
                <img src="https://www.mymentorbiz.com/wp-content/uploads/2014/01/impact.jpg" alt="lot-of-impact" className="impact-image" />
                <div className="messages">
                <h1 className="message-1">Today is incredibly special to both of us, but honestly, every day with you is a gift. Your radiant smile and vibrant energy make you shine brighter than anyone else. I hope you stay cool, healthy, and full of joy. Celebrate this day with all your heart because not only is it your birthday, but it also marks a powerful day of independence. Here’s to a day as extraordinary and amazing as you are!</h1>
                
                <h1 className="message-1">On this special day, I want you to know how profoundly you impact everyone around you. Your strength, kindness, and unwavering spirit inspire me every day. As we celebrate not just your birthday but also a day of great freedom and significance, remember how truly extraordinary you are. May your day be filled with moments of joy, love, and celebration, reflecting the incredible person you are. Here’s to you, to your achievements, and to all the amazing things yet to come.</h1>
                </div>
            </div>
        );
    }
}

export default MessagePage;
