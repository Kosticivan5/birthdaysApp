import { useEffect, useRef, useState } from "react";
import data from "./data";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  const [title, setTitle] = useState(true);

  const emptyList = () => {
    setPeople([]);
    setTitle(false);
  };

  return (
    <div className="birthday-card">
      <section className="person">
        {title ? (
          <h2>{`${people.length} Birthdays today `}</h2>
        ) : (
          <h2>Empty List</h2>
        )}
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div key={id}>
              <img className="person-img" src={image} alt={name} />
              <div className="person-info">
                <h3>{name}</h3>
                <p>{age} years old</p>
              </div>
            </div>
          );
        })}
      </section>
      {title ? (
        <button className="btn" onClick={emptyList}>
          Clear List
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
