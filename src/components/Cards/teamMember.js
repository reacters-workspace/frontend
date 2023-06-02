import React from 'react';
import './teamMember.css';
import anas from '../../assets/Anas.jpg'
import tasneem from '../../assets/Tasneem.jpg'
import rama from '../../assets/Rama.jpg'
import hasan from '../../assets/Hasan.jpg'
import murad from '../../assets/Murad.jpg'
import Contact from '../Contact/Contact';
export default function TeamMember() {
    return (
        <div>
            <div className='AboutUs-img-div'>

                <div className='AbouUsHeader'>

                </div>
                <div class="about-text">
                    <h1 class="about-header" >REACTERS TEAM  </h1>

                </div>
                {/* <img className='Aboutimg' src={aboutBg} alt='about img'/> */}
            </div>

            {/*-------------------------------------------------------------------------------------------------------------------------*/}
            <div className="long-text-container">

                <h1 >
                    Hello, we are REACTERS
                </h1>
                <p>
                    Welcome to our dedicated team of fitness enthusiasts! We are a passionate group of individuals committed to helping you achieve your health and wellness goals. With a deep understanding of the transformative power of fitness, our team is here to guide and support you on your fitness journey.
                </p>

            </div>

            <div className="team-member-container">
                <dev className="TeamHeader">
                    <h1>
                        Meet Our Team
                    </h1>
                </dev>

                <div className="card-group-container ">
                    <div className="card myCard">
                        <img className="card-img-top" src={anas} alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-text">Anas</h3>
                            <p>Software Developer</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="card myCard">
                        <img className="card-img-top" src={hasan} alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-text">Hasan</h3>
                            <p>Software Developer</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="card myCard">
                        <img className="card-img-top" src={murad} alt="Card image cap" />
                        <div className="card-body team-body-info">
                            <h3 className="card-text">Murad</h3>
                            <p>Software Developer</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>

                    </div>
                    <div className="card myCard">
                        <img className="card-img-top" src={rama} alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-text">Rama</h3>
                            <p>Software Developer</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="card myCard">
                        <img className="card-img-top" src={tasneem} alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-text">Tasneem</h3>
                            <p>Software Developer</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}
