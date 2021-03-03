import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const App = () => {
  const returnValue = new Values("gray").all(10); // returns an array of objects with 10 tint(light values) and 10 shade(dark values) each having 5 properties.
  // console.log(returnValue);

  const [color, setColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(returnValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("working");

    try {
      let colors = new Values(color).all(10); // returns an array of objects with 10 tint(light values) and 10 shade(dark values) each having 5 properties.
      // console.log(colors);
      setList(colors);
      setIsError(false);
    } catch (error) {
      if (error.name == "Error") {
        alertify
          .alert("please enter a valid color name or color value")
          .set({ title: "Sorry" });
      }
      setIsError(true);
      console.log(error.name);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter color name"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${isError ? "error" : null}`}
          />
          <button className="btn" type="submit">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          const hex = color.hex; //accessing hex property//contains hex value of the currently passed color.
          // console.log(hex);

          return (
            <SingleColor key={index} {...color} index={index} hexColor={hex} />
          ); //spreading properties inside of color object
        })}
      </section>
    </>
  );
};

export default App;
