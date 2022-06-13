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
  return render_template("index.html",data=request.host)

# Click
@app.route("/click",methods=["POST"])
def win_click():
  mouse.click("left")
  return render_template("index.html",data=request.host)

# Start the server
if __name__ == "__main__":
  app.run(host="0.0.0.0")