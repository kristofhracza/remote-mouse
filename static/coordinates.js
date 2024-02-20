// Request types
const POST = (path,data) => {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", path, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(data);
};

const GET = (path, data) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", path, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(data);
};

// On inital page laod
window.onload = () => {
  const Coordinates = () => {
    // Box listener
    let controlBox = document.getElementById("control");
    controlBox.ontouchstart = (e) => {
      window.x1 = e.touches[0].clientX;
      window.y1 = e.touches[0].clientY;
    };
    controlBox.ontouchend = (e) => {
      let x = (e.changedTouches[0].clientX - window.x1) * 2;
      let y = (e.changedTouches[0].clientY - window.y1) * 2;
      POST("/coords", JSON.stringify({ "x": x, "y": y }));     
    };
    controlBox.onclick = () => GET("/click", null);

    // Function listeners
    document.querySelector("[cmd='/right-click']").onclick = () => GET("/right-click", null);
    document.querySelector("[cmd='/scroll-up']").onclick = () =>  GET("/scroll-up", null);
    document.querySelector("[cmd='/scroll-down']").onclick = () => GET("/scroll-down", null);
    document.querySelector("[cmd='/type']").onclick = () => {
      let text = prompt("Type something...");
      POST("/type", text);
    };
  };
  Coordinates();
};