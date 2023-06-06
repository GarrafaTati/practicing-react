import "./App.css";

const [firstCity, second] = ["Montreal", "Sao Paulo", "Lisbon"];

console.log(firstCity);
console.log(second);

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
