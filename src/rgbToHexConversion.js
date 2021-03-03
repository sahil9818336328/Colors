function componentToHex(c) {
  var hex = c.toString(16); //returns number as a hexadecimal value eg: if c = 255 then, hex = ff.
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
