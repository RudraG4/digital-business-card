import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img className="card-img" alt="Profile" src="profile.png"></img>
            <div className="card-info">
                <div className="card-header">
                    <h2 className="card-name">John Doe</h2>
                    <h3 className="card-role">Frontend Developer</h3>
                    <p className="card-website">johndoe.website</p>
                    <div className="card-btn-group">
                        <div className="card-btn btn-email"><i className="fa fa-envelope" aria-hidden="true"></i>Email</div>
                        <div className="card-btn btn-linkedin btn-primary"><i className="fa fa-linkedin" aria-hidden="true"></i>Linkedin</div>
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="card-info-title">About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h2 className="card-info-title">Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            <div className="card-social">
                <div className="card-social-twitter"><i className="fa fa-twitter-square" aria-hidden="true"></i></div>
                <div className="card-social-facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></div>
                <div className="card-social-instagram"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                <div className="card-social-linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                <div className="card-social-github"><i className="fa fa-github-square" aria-hidden="true"></i></div>
            </div>
        </div>
    );
}