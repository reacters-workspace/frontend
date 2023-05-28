import ButtonHero from '../Buttons/Button';
import './Hero.css'

export default function Hero() {
    return (
        <>
            <div class="hero-container">
                <div className="row">

                    <div className="col-lg-8 col-md-10 mx-auto col-12 mt-20">
                        <div class="hero-text mt-5 text-center">

                            <h6 class="text-light">new way to build a healthy lifestyle!</h6>

                            <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">IMPROVE YOUR BODY WITH REACTERS FITNESS</h1>

                            <ButtonHero/>

                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}