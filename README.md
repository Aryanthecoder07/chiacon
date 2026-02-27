# Chiacon AI Webpage Prototype

A professional, interactive web prototype showcasing Chiacon’s AI capabilities. This project features a live AI-powered Outreach Email Generator built using the Google Gemini 1.5 Flash API.

## 🚀 Live Demo
https://chiacon.vercel.app/

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3 (Modern Flexbox & Grid)
- **Styling:** Custom CSS with interactive hover states and focus accessibility
- **Logic:** Vanilla JavaScript (ES6+)
- **AI Integration:** Google Gemini 2.5 Flash API

## ✨ Key Features
- **Brand Identity:** Incorporates Chiacon's "Nourishing Business" story, blending the health metaphor of Chia seeds with professional Consulting.
- **Interactive UI:**
  - **Dynamic Elevation:** Use case cards feature smooth shadow transitions and lift effects on hover.
  - **Focus States:** Custom glow-ring accessibility for all form inputs.
  - **Responsive Layout:** Fully optimized for mobile, tablet, and desktop viewing.
- **AI Demo:** A functional cold-outreach generator that creates industry-specific pitches based on target company, industry, and recipient role.

## 📁 Project Structure
- `index.html`: Main structure and brand content.
- `style.css`: Professional styling and interactive effects.
- `index.js`: Logic for handling user input and API communication.
- `config.js`: Configuration file containing the Gemini API Key.

## 🔒 Security Note
This prototype uses a separate `config.js` architecture. While the key is currently included for evaluation convenience, in a production environment, this key would be managed via server-side Environment Variables (Vercel/Netlify) or a backend proxy to prevent client-side exposure.

## 🏃 Local Setup
1. Clone this repository.
2. Ensure `config.js` is in the root directory and contains a valid Gemini API key.
3. Open `index.html` using a local server (e.g., VS Code Live Server extension at port 5500).

---
*Developed as a technical assignment for Chiacon.*
