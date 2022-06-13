// Collective of listeners for touch body
window.onload = () => {;
  const Coordinates = () => {
    var controlBox = document.getElementById("control");
    var monitorRes = { "x": 1920*2, "y": 1080 }; // multiply x or y by the number of monitors you have (setup dependent)
    var phoneRes = { "x": controlBox.offsetWidth, "y": controlBox.offsetHeight};
    // Dragging mouse
    controlBox.ontouchmove = (e) => {
      var x = e.touches[0].clientX;
      var y = e.touches[0].clientY;
      x = x / phoneRes.x * monitorRes.x;
      y = y / phoneRes.y * monitorRes.y;
      document.getElementById("x").textContent = `X :  ${Math.round(x)}`;
      document.getElementById("y").textContent = `Y :  ${Math.round(y)}`;
      sendPost("/coords", JSON.stringify({ "x": x, "y": y }));      
    };

    // Clicking
    controlBox.onclick = () => {
      sendPost("/click", null);
    };

    // Right clicking
    var rc_box = document.querySelector("[cmd='/right-click']")
    rc_box.onclick = () => {
      sendPost("/right-click", null);
    };
  };
  // Set up listeners
  Coordinates();
};

// Re-usable post requests
const sendPost = (path,data) => {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", path, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(data);
};
