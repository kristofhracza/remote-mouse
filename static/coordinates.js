// Collective of listeners for touch body
window.onload = () => {;
  const Coordinates = () => {
    var controlBox = document.getElementById("control");
     // Start of touch
     controlBox.ontouchstart = (e) => {
      window.x1 = e.touches[0].clientX;
      window.y1 = e.touches[0].clientY;
      document.getElementById("x").textContent = `X :  ${Math.round(window.x1)}`;
      document.getElementById("y").textContent = `Y :  ${Math.round(window.y1)}`;  
    };

    // End of touch
    controlBox.ontouchend = (e) => {
      var x = e.changedTouches[0].clientX;
      var y = e.changedTouches[0].clientY;
      x = (x - window.x1) * 2;
      y = (y - window.y1) * 2;
      sendPost("/coords", JSON.stringify({ "x": x, "y": y }));     
      document.getElementById("x").textContent = `X :  ${Math.round(x)}`;
      document.getElementById("y").textContent = `Y :  ${Math.round(y)}`;
    };

    // Clicking
    controlBox.onclick = () => {
      sendGet("/click", null);
    };

    // Right clicking
    var rc_box = document.querySelector("[cmd='/right-click']")
    rc_box.onclick = () => {
      sendGet("/right-click", null);
    };

    // Scrolling up
    var scroll_box = document.querySelector("[cmd='/scroll-up']")
    scroll_box.onclick = () => {
      sendGet("/scroll-up", null);
    };

    // Scrolling down
    var scroll_box = document.querySelector("[cmd='/scroll-down']")
    scroll_box.onclick = () => {
      sendGet("/scroll-down", null);
    };

    // Typing
    var key_box = document.querySelector("[cmd='/type']")
    key_box.onclick = () => {
      var text = prompt("Type something...");
      sendPost("/type", text);
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

// Re-usable get requests
const sendGet = (path, data) => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", path, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(data);
};

