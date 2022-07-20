import { useEffect, useState } from "react";
import Button from "./Components/Button.js";
import "./Css/App.css";
// import { storageRef } from "./firebase.js";

//Asset Imports
import image from "./assets/Murket.png";
import Search from "./assets/search.svg";
import Cart from "./assets/cart.svg";
import Toggler from "./assets/navbar-toggler-icon.svg";
import Line from "./assets/Line.svg";
import Feature from "./Components/Feature.js";
import Briefcase from "./assets/briefcase.svg";
import Shop from "./assets/shop.svg";
import Growing from "./assets/growing.svg";
import People from "./assets/people.svg";
import Link from "./assets/link.svg";
import Web from "./assets/achievement.svg";
import Testimonial from "./Components/Testimonial.js";
import ola from "./assets/ola.png";
import reggie from "./assets/reggie.png";
import regina from "./assets/regina.png";
import Team from "./Components/Team.js";
import avie from "./assets/avie.png";
import rodney from "./assets/rodney.png";
import ashley from "./assets/ashley.png";
import FormInput from "./Components/FormInput.js";

function App() {
  // const img = new URL("murkets.appspot.com/image.png");
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");

  // const handleForm = (e) => {
  // e.preventDefault()
  // setFullName(e.target.)
  // }

  useEffect(() => {
    // console.log(img);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="header__logo">
          <img src={image} alt="" className="image" />
        </div>

        <div className="header__nav-buttons">
          <div className="header__nav-buttons__links">
            <h6>Home</h6>
            <h6>Product</h6>
            <h6>Pricing</h6>
            <h6>Contact</h6>
          </div>
          <div className="header__nav-buttons__icons">
            <img src={Search} alt="" />
            <img src={Cart} alt="" />
          </div>
        </div>
        <img src={Toggler} alt="" className="toggler" />
      </header>

      <article className="hero-content">
        <div className="hero-content__text">
          <h1>
            Scale your business to reach{" "}
            <span>
              Millions <img src={Line} alt="" />
            </span>
          </h1>
          <h4>
            Murket provides a place for your brand on the web and puts your
            business where it's meant to be, The Top.
          </h4>
          <div className="hero-content__buttons">
            <Button variant="primary" text="Get Quota Now" />
            <Button variant="secondary" text="Learn More" />
          </div>
        </div>
      </article>

      <section className="why">
        <div className="why__header">
          <h2 className="why__title">WHY CHOOSE US</h2>
          <h6 className="why__description">
            We have pushed over{" "}
            <span className="why__description__link">100 businesses</span> from
            the ground up, and they are still up there.
          </h6>
        </div>

        <div className="why__feature-grid">
          <Feature
            icon={Briefcase}
            title="Digital Marketing"
            text="We put your business in front of the right people, focusing on SEO, Social media attention, and other relevant Marketing schemes"
          />
          <Feature
            icon={Shop}
            title="Brand Identity"
            text="Is your brand missing it’s voice? we will give you one, on the house! Here at musket we beleive in having an identity over everything"
          />
          <Feature
            icon={Growing}
            title="Business Growing"
            text="Watch your Stocks fly through the roof, all without being a bubble"
          />
          <Feature
            icon={People}
            title="Forbes top 50 firms"
            text="We hit forbes top 50 firms providing value to new business, you’re in well known hands."
          />
          <Feature
            icon={Link}
            title="National top 50 firms"
            text="We hit Natioal top 50 firms providing value to new business, you’re in safe hands."
          />
          <Feature
            icon={Web}
            title="Web Development"
            text="We have an in house agency with the brightest minds, making your web products functional and, of-course beautiful"
          />
        </div>
      </section>
      <section className="services">
        <div className="services__header">
          <h2 className="services__header__title">
            We are providing best business services
          </h2>
          <h6 className="services__header__description">
            And the proof is in the pudding, our safe work environment, work
            ethic, and values put us on the map, we simply provide the best to
            our customers
          </h6>
        </div>
        <div className="video">
          <iframe
            width="877"
            height="442"
            src="https://www.youtube.com/embed/9VAIFBs8qDY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div className="services__green-bar"></div>
      </section>

      <section className="testimonials">
        <div className="testimonials__header">
          <h2 className="testimonials__header__title">What Clients Say</h2>
          <h6 className="services__header__description">
            Positive reviews from now prominent businesses
          </h6>
        </div>

        <div className="testimonials__cards">
          <Testimonial
            img={ola}
            text={
              "Murket, put my market in shape. Clients came in from unexpected places, and the company just grew from there"
            }
            person_name={"Olalu Asake"}
            person_title={"CEO, Akara Inc."}
          />
          <Testimonial
            img={reggie}
            text={
              "Murket pushed us straight where we wanted to be, Far ahead of our cut-throat competition"
            }
            person_name={"Reggie Miller"}
            person_title={"CTO, Billings Co."}
          />
          <Testimonial
            img={regina}
            text={
              "Murket helped us see how many more days you need to work to reach your financial goal."
            }
            person_name={"Regina Miles"}
            person_title={"CEO, Angel Agency."}
          />
        </div>
      </section>

      <section className="team">
        <div className="team__header">
          <h2 className="team__header__title">Meet Our Team</h2>
          <h6 className="team__header__description">
            The mind behind the business
          </h6>
        </div>

        <div className="team__cards">
          <Team img={ashley} name={"Ashley Fetcher"} title={"CEO"} />
          <Team img={rodney} name={"Rodney Stratton"} title={"Consultant"} />
          <Team img={avie} name={"Avie Beaton"} title={"Co-founder"} />
        </div>
      </section>

      <section className="appointment">
        <div className="appointment__header">
          <h5>Contact Us</h5>
          <h2>Make an Appointment</h2>
        </div>

        <form className="appointment__form-container">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </form>
      </section>
    </div>
  );
}

export default App;
