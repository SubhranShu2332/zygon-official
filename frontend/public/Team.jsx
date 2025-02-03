import React from "react";
import "./style.css";
import AnimatedName from "../AnimatedName/AnimatedName";

export default function Team() {
    return (
        <div className="container">
        {/* <!-- Add radio buttons for slider --> */}
        <input type="radio" name="slider" id="s1" checked/>
        <input type="radio" name="slider" id="s2"/>
        <input type="radio" name="slider" id="s3"/>
        <input type="radio" name="slider" id="s4"/>
        <input type="radio" name="slider" id="s5"/>
        <input type="radio" name="slider" id="s6"/>
        <input type="radio" name="slider" id="s7"/>
    
        {/* <!-- Arrow buttons for navigation --> */}
        <button id="prev-button" className="arrow-button">←</button>
        <button id="next-button" className="arrow-button">→</button>
    
        <div className="cards">
            {/* <!-- Your existing labels and cards go here -->
            <!-- Cards HTML (label elements) --> */}
            <label for="s1" id="slider1">
                <div className="card">
                    <div className="image">
                        <img src="./shoe1.jpg"/>
                    </div>
                    <div className="infos">
                        {/* <!-- <span className="name">Lorem, ipsum.</span>
                        <span className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, totam?</span> --> */}
                        <a href="#" className="btn-details">NAME1</a>
                        <div className="actions">
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </label>

            <label for="s2" id="slider2">
                <div className="card">
                    <div className="image">
                        <img src="./shoe2.jpg" alt=""/>
                    </div>
                    <div className="infos">
                        {/* <!-- <span className="name">Lorem, ipsum.</span>
                        <span className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, totam?</span> --> */}
                        <a href="#" className="btn-details">NAME2</a>
                        <div className="actions">
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </label>

            <label for="s3" id="slider3">
                <div className="card">
                    <div className="image">
                        <img src="./shoe3.jpg" alt=""/>
                    </div>
                    <div className="infos">
                        {/* <!-- <span className="name">Lorem, ipsum.</span>
                        <span className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, totam?</span> --> */}
                        <a href="#" className="btn-details">NAME3</a>
                        <div className="actions">
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </label>

            <label for="s4" id="slider4">
                <div className="card">
                    <div className="image">
                        <img src="./shoe4.jpg" alt=""/>
                    </div>
                    <div className="infos">
                        {/* <!-- <span className="name">Lorem, ipsum.</span>
                        <span className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, totam?</span> --> */}
                        <a href="#" className="btn-details">NAME4</a>
                        <div className="actions">
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </label>

            <label for="s5" id="slider5">
                <div className="card">
                    <div className="image">
                        <img src="./shoe5.jpg" alt=""/>
                        {/* <!-- <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> --> */}
                    </div>
                    <div className="infos">
                        {/* <!-- <span className="name">Lorem, ipsum.</span>
                        <span className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, totam?</span> --> */}
                        <a href="#" className="btn-details">NAME5</a>
                        <div className="actions">
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </label>

            <label for="s6" id="slider6">
                <div className="card">
                    <div className="image">
                        <img src="./shoe6.jpg" alt=""/>
                        {/* <!-- <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> --> */}
                    </div>
                    <div className="infos">
                        {/* <!-- <span className="name">Lorem, ipsum.</span>
                        <span className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, totam?</span> --> */}
                        <a href="#" className="btn-details">NAME6</a>
                        <div className="actions">
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </label>
            <label for="s7" id="slider7">
                <div className="card">
                    <div className="image">
                        <img src="./shoe7.jpg" alt=""/>
                        {/* <!-- <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> --> */}
                    </div>
                    <div className="infos">
                        {/* <!-- <span className="name">Lorem, ipsum.</span>
                        <span className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, totam?</span> --> */}
                        <a href="#" className="btn-details">NAME7</a>
                        <div className="actions">
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    </div>
    );
  }
  
