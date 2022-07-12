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
      <h1>Google</h1>
      <h2>Facebook</h2>
      <Button />
    </div>
  );
}

export default App;
