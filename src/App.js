import React from "react";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";
import { ToastContainer } from "react-toastify";
import "./components/ClockStyles.css";
function App() {
  return (
    <>
      <h1>Timmer and Stopwatch</h1>
      <div className="clock-container">
        <Timer />
        <Stopwatch />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
// import React from "react";
// import Timer from "./components/Timer"; // Make sure to provide the correct path
// import Stopwatch from "./components/Stopwatch"; // Make sure to provide the correct path
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Timer />
//       <Stopwatch />
//     </div>
//   );
// }

// export default App;
