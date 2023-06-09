import "./App.css";
import { useState, useEffect } from "react";

function GitHubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} alt={name} height={150} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/GarrafaTati`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) return <GitHubUser name={data.name} location={data.location} avatar={data.avatar_url} />;
  return <h1>Data</h1>;
}

export default App;
