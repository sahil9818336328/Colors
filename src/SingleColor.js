import React, { useState, useEffect } from "react";
import rgbToHex from "./rgbToHexConversion";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [alert]); //only when the state changes run the effect.

  //   console.log(index);
  //   console.log(rgb);
  const bgColor = rgb.join(","); //converting rgb array to string values
  //   console.log(bgColor);
  const hex = rgbToHex(...rgb); // running this function to convert rgb values to hex values
  //   console.log(hex);

  // NOTE - EITHER USE HEX OR HEXVALUE , HEX USES A FUNCTION FOR CONVERSION,  WHEREAS HEXVALUE USES DIRECT PROPERTY OF AN OBJECT(COLOR) RETURNED FROM LIST ARRAY FOR DISPLAYING THE HEX VALUE.

  const hexValue = `#${hexColor}`;
  //   console.log(hexValue);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue); // for copying the hexValues on click.
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
