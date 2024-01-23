import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    data();
  }, []);
  function data() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data1) => {
        setCountry(data1);
      })
      .catch((error) => console.error("Error fetchind data:", error));
  }
  return (
    <div className="fullCon">
      {country.map((country) => (
        <div className="container" key={country.car.ccn3}>
          <img
            className="imageConatiner"
            src={country.flags.png}
            alt={country.flags.alt}
          />
          <div className="text">{country.name.common}</div>
        </div>
      ))}
    </div>
  );
}
