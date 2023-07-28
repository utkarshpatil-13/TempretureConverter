let msg = document.getElementById("message");

let f_convert = (value, temp) => {
  switch (temp) {
    case "celsius":
      return ((value - 32) * 5) / 9;
    case "rankine":
      return value + 459.67;
    case "reaumer":
      return (value - 32) / 2.25;
    case "kelvin":
      return (value + 459.67) / 1.8;
    case "fahrenheit":
      msg.innerHTML = "please select some other unit";
  }
};
let ra_convert = (value, temp) => {
  switch (temp) {
    case "celsius":
      return (value - 32 - 459.67) / 1.8;
    case "fahrenheit":
      return value - 459.67;
    case "reaumer":
      return (value - 32 - 459.67) / 2.25;
    case "kelvin":
      return value / 1.8;
    case "rankine":
      msg.innerHTML = "please select some other unit";
      return;
  }
};
let re_convert = (value, temp) => {
  switch (temp) {
    case "celsius":
      return value * 1.25;
    case "rankine":
      return value * 2.25 + 32 + 459.67;
    case "fahrenheit":
      return value * 2.25 + 32;
    case "kelvin":
      return value * 1.25 + 273.15;
    case "reaumer":
      msg.innerHTML = "please select some other unit";
  }
};
let k_convert = (value, temp) => {
  switch (temp) {
    case "celsius":
      return value - 273.15;
    case "rankine":
      return value * 1.8;
    case "reaumer":
      return (value - 273.15) * 0.8;
    case "fahrenheit":
      return value * 1.8 - 459.67;
    case "kelvin":
      msg.innerHTML = "please select some other unit";
  }
};
let c_convert = (value, temp) => {
  switch (temp) {
    case "fahrenheit":
      return value * 1.8 + 32;
    case "rankine":
      return value * 1.8 + 32 + 459.67;
    case "reaumer":
      return value * 0.8;
    case "kelvin":
      return value + 273.15;
    case "celsius":
      msg.innerHTML = "please select some other unit";
  }
};

let btn = document.getElementById("submit");
btn.addEventListener("click", function () {
  let temp_input = document.getElementById("temp-input").value;
  if (temp_input == "") {
    msg.innerHTML = "Please enter some value";
  } else {
    let from_input = document.getElementById("from-tempreture").value;
    let to_input = document.getElementById("to-tempreture").value;

    switch (from_input) {
      case "fahrenheit":
        if (f_convert(temp_input, to_input) != undefined) {
          msg.innerHTML =
            temp_input +
            " degree fahrenheit = " +
            f_convert(temp_input, to_input) +
            " degree " +
            to_input;
        }
        break;
      case "celsius":
        if (c_convert(temp_input, to_input) != undefined) {
          msg.innerHTML =
            temp_input +
            " degree celsius = " +
            c_convert(temp_input, to_input) +
            " degree " +
            to_input;
        }
        break;
      case "rankine":
        if (ra_convert(temp_input, to_input) != undefined) {
          msg.innerHTML =
            temp_input +
            " degree rankine = " +
            ra_convert(temp_input, to_input) +
            " degree " +
            to_input;
        }
        break;
      case "reaumer":
        if (re_convert(temp_input, to_input) != undefined) {
          msg.innerHTML =
            temp_input +
            " degree reaumer = " +
            re_convert(temp_input, to_input) +
            " degree " +
            to_input;
        }
        break;
      case "kelvin":
        if (k_convert(temp_input, to_input) != undefined) {
          msg.innerHTML =
            temp_input +
            " degree kelvin = " +
            k_convert(temp_input, to_input) +
            " degree " +
            to_input;
        }
        break;
    }
  }
});
