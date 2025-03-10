# Update the CSS file to include more vibrant colors and remove plain white/black styles

vibrant_css = """
/* Global Styles with Vibrant Colors */
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #ff4d4d, #ff7300, #ffdb58);
  color: #ffffff;
}

/* Navbar with Neon Effect */
nav {
  background: rgba(255, 165, 0, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 15px;
  transition: 0.3s ease-in-out;
}

nav ul a {
  color: #ffffff;
  font-size: 1.3rem;
  transition: color 0.3s ease-in-out;
}

nav ul a:hover {
  color: #ffec40;
  text-shadow: 0px 0px 10px #ffec40;
}

/* Buttons with Gradient & Glow */
button, .hero-btn, .danger-btn {
  width: 12rem;
  height: 3rem;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  font-size: large;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s, box-shadow 0.3s;
}

button {
  background: linear-gradient(90deg, #ff4d4d, #ff7300);
  color: white;
}

button:hover {
  background: linear-gradient(90deg, #ff7300, #ffdb58);
  transform: scale(1.05);
  box-shadow: 0px 0px 15px rgba(255, 165, 0, 0.8);
}

.danger-btn {
  background: linear-gradient(90deg, #ff0000, #ff4500);
  color: white;
}

.danger-btn:hover {
  background: linear-gradient(90deg, #ff4500, #ff7300);
  transform: scale(1.05);
  box-shadow: 0px 0px 15px rgba(255, 0, 0, 0.8);
}

/* Vibrant Card Styling */
.card-container {
  background: linear-gradient(135deg, #ff7300, #ffdb58);
  border-radius: 12px;
  padding: 20px;
  color: black;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-container:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(255, 215, 0, 0.8);
}

/* Login Form with Glow Effect */
.login-container {
  background: linear-gradient(135deg, #ff007f, #ff00ff);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 5px 15px rgba(255, 0, 255, 0.6);
}

.login-btn {
  background: linear-gradient(90deg, #06d6a0, #00c9ff);
  color: white;
}

.login-btn:hover {
  background: linear-gradient(90deg, #00c9ff, #ff007f);
  box-shadow: 0px 0px 15px rgba(0, 201, 255, 0.8);
}

/* Footer with Neon Colors */
.footer {
  background: linear-gradient(90deg, #ff4d4d, #ff7300, #ffdb58);
  color: black;
  text-align: center;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Links with Neon Glow */
a {
  transition: color 0.3s ease-in-out, text-shadow 0.3s;
}

a:hover {
  color: #ffec40;
  text-shadow: 0px 0px 10px #ffec40;
}
"""

# Append the vibrant styles to the existing CSS file
updated_vibrant_css = original_css + vibrant_css

# Save the new updated CSS file
vibrant_css_file_path = "/mnt/data/Vibrant_App.css"
with open(vibrant_css_file_path, "w", encoding="utf-8") as file:
    file.write(updated_vibrant_css)

# Provide the new modified file
vibrant_css_file_path
