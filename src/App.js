import { useEffect } from "react";
import Button from "./Components/Button.js";
import "./Css/App.css";
import { storageRef } from "./firebase.js";

function App() {
  // const img = new URL("murkets.appspot.com/image.png");
  useEffect(() => {
    // console.log(img);
  }, []);

  return (
    <div className="App">
      {/* <Button /> */}
      <div
        style={{
          backgroundImage: "https://murkets.appspot.com/image.png",
        }}></div>
      <h1>Google</h1>
    </div>
  );
}

export default App;
