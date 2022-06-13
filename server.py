import mouse
from flask import Flask, render_template, request

# Flask app
app = Flask(__name__)
app.debug = True

# Main page
@app.route("/")
def main():
  return render_template("index.html",data=request.host)

# Receive coordinates from webpage
@app.route("/coords",methods=['POST'])
def coords():
  x = request.get_json()["x"]
  y = request.get_json()["y"]
  mouse.move(x,y)
  return render_template("index.html")

# Left Click
@app.route("/click",methods=["POST"])
def win_click():
  mouse.click("left")
  return render_template("index.html")

# Right Click
@app.route("/right-click",methods=["POST"])
def win_click_right():
  mouse.click("right")
  return render_template("index.html")

# Scroll up
@app.route("/scroll-up",methods=["POST"])
def scroll_up():
  mouse.wheel(delta=5)
  return render_template("index.html")

# Scroll down
@app.route("/scroll-down",methods=["POST"])
def scroll_down():
  mouse.wheel(delta=-5)
  return render_template("index.html")

# Start the server
if __name__ == "__main__":
  app.run(host="0.0.0.0")