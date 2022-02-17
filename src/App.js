import CreateButton from "./Components/CreateButton";
import InputOutputScreen from "./Components/InputOutputScreen";
import "./App.css";
function App() {
  const buttonArray = [
    ["+","-","/","*","Del"],
    ["1", "2", "3", "4"],
    ["5", "6", "7", "8"],
    ["9", "0", "AC", "="],
  ];
  return (
    <div className="app">
      <div className="inner-class">
        
        <h1 className="header"> Calculator </h1>
        <InputOutputScreen buttonArray={buttonArray}></InputOutputScreen>
      </div>
    </div>
  );
}

export default App;
