# Remote mouse
Control your mouse from your phone screen.

# Start:
`py server.py`

# Monitor setup:
Depending on your setup go and edit the following line @ [coordinates.js](./static/coordinates.js)  
`var monitorRes = { "x": 1920*2, "y": 1080 };`  
**Note:** Development was on two monitors so `x` is *2 by default.   
If you have multiple monitors next to each other, multiply `x` by the number of monitors you have.  
If you have multiple monitors underneath each other, multiply `y` by the number of monitors you have.  
and so on, you get the gist of it.

# Libs:
`pip3 install -r requirements.txt`
- Flask
- Mouse
- Keyboard
- OS

# Feature list:
- [x] Moving the mouse
- [x] Left click
- [x] Right click
- [x] Scroll
- [x] Type  (after sending data to the server, it will copy and paste the content and press enter.)

# Help with buttons:
- Moving the mouse --> use the big box on the screen
- Left click --> click in the big box
- Right click --> `mouse icon`
- Scroll up --> `up arrow`
- Scroll down --> `down arrow` 
- Typing --> `keyboard`