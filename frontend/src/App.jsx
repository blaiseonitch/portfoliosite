import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/projects")
         .then(res => setProjects(res.data))
         .catch(console.error);
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>
      {projects.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
