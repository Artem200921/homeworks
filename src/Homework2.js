import Greeting from "./components/Homework2/Greeting";
import Message from "./components/Homework2/Message";
const name = "Іван";
const text = "Привіт";

function App2() {
  return (
    <div className="App">
      <Greeting name={name} />
      <Message text={text} />
      <button onClick={() => console.log("Бу!")}>Натисни на мене</button>
    </div>
  );
}

export default App2;
