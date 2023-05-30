import { NavDropdown } from 'react-bootstrap';
import ButtonHero from '../Buttons/Button';
import './Hero.css'
import { Route, Routes } from "react-router-dom";

import NavBar from '../Navbar/Navbar';

export default function Hero() {
     return (
          <>
               <div class="hero-container d-flex flex-column justify-content-center align-items-center" id="home">
              

                    <div class="bg-overlay"></div>


                    <div class="text-container">
                         <div class="row">


                              <div class="col-lg-8 col-md-10 mx-auto col-12">
                                   <div class="hero-text mt-3  text-center">

                                        <h6 class="text-secondary ">new way to build a healthy lifestyle!</h6>

                                        <h1 class="text-white" >IMPROVE YOUR BODY  </h1>

                                        <h1 class="text-white">WITH REACTERS FITNESS</h1>

                                        <ButtonHero />
                                   </div>
                              </div>

                         </div>
                    </div>

               </div>
          </>

     );

}
