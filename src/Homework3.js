import "./App.css";
import Info from "./components/Homework3/Info";
import array from "./user.json";

function App3() {
  return (
    <div className="App">
      {array.map((item, index) => (
        <Info {...item} key={index} />
      ))}
    </div>
  );
}

export default App3;
