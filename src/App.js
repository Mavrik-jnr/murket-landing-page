import { useEffect } from "react";
import Button from "./Components/Button.js";
import "./Css/App.css";
// import { storageRef } from "./firebase.js";
import image from "./assets/Murket.png";
import Search from "./assets/search.svg";
import Cart from "./assets/cart.svg";
import Toggler from "./assets/navbar-toggler-icon.svg";
import Line from "./assets/Line.svg";

function App() {
  // const img = new URL("murkets.appspot.com/image.png");
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
    </div>
  );
}

export default App;
