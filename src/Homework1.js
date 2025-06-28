import "./App.css";

// Second point's variables

const myName = "Fedorov Artem";

// Third point's variables

const greetingText = "Ласкаво просимо до нашого сайту!";

// Fourth point's variables

const url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGeGxT9NCvf3QtfEfs5I5GWmCyAfJxS_PTDw&s";
const alt = "Patrick Bateman";

// Fifth point's variables

const object = {
  name: "Patrick Bateman",
  url: "https://en.wikipedia.org/wiki/Patrick_Bateman",
};

// Sixth point's variables

const num1 = 5;
const num2 = 10;

// Seventh point's variables

const myArray = ["Червоний", "Синій", "Зелений"];

function App() {
  return (
    <div className="App">
      {/* Second point */}
      <h1>{myName}</h1>

      {/* Third point */}
      <p>{greetingText}</p>

      {/* Fourth point */}
      <img src={url} alt={alt} />

      {/* Fifth point */}
      <a href={object.url} target="_blank" rel="noopener noreferrer">
        {object.name}
      </a>

      {/* Sixth point */}
      <a href={object.url} target="_blank" rel="noopener noreferrer">
        {object.name}
      </a>

      {/* Seventh point */}
      <p>
        {num1} + {num2} = {num1 + num2}
      </p>
      {/* Eighth point */}
      <ul>
        {myArray.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
